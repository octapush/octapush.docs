// make sure we use octapushJS from 'MASTER' branch

(function(win, doc) {
    'use strict';

    var settings = {
        application: {
            title: 'octapush.docs',
            url: 'https://github.com/octapush/octapush.docs',
            githubFetchUrl: 'https://api.github.com/repos/octapush/octapushJS/git/trees/c1f15f9996fcf7c3d6729f336469439db00597fa',
            githubDirStructure: null
        },
        sidebar: {
            backgroundColor: 'brown', // white | brown,
            fontColor: 'danger' // primary | info | success | warning | danger 
        },
        execScript: true,
        octapushJS: {
            pluginsPath: 'https://cdn.rawgit.com/octapush/octapushJS/dev/plugins/',
            pluginToLoad: ['string']
        }
    };

    var octapushDocs = {
        register: function() {
            if (settings.execScript)
                octapushDocs.helper.initOctapushJsPlugins(function() {
                    octapushDocs.events.document.onReady.apply();
                });
        },
        ui: {
            register: function() {
                octapushDocs.ui.sidebar.theme(settings.sidebar);
            },
            sidebar: {
                builder: function(data) {},
                theme: function(data) {
                    $('.sidebar').attr({
                        'data-background-color': settings.sidebar.backgroundColor,
                        'data-active-color': settings.sidebar.fontColor
                    });

                    $('.off-canvas-sidebar').attr({
                        'data-background-color': settings.sidebar.backgroundColor,
                        'data-active-color': settings.sidebar.fontColor
                    });
                }
            }
        },
        events: {
            document: {
                onLoad: function() {},
                onReady: function() {
                    octapushDocs.ui.register.apply();

                    octapushDocs.helper.github.fetchDirStructure({
                        url: settings.application.githubFetchUrl,
                        callback: function() {
                            console.log(settings.application.githubDirStructure);
                        }
                    });
                }
            }
        },
        helper: {
            initOctapushJsPlugins: function(cb) {
                _o_.settings.pluginsPath = settings.octapushJS.pluginsPath;
                _o_.utility.importPlugin(settings.octapushJS.pluginToLoad, cb);
            },
            stringPathToObject: function(data, parent) {
                var path = (data.path).split('/');
                var url = data.url;

                if (path.length == 1) {
                    parent[path[0]] = url;

                } else {
                    data.path = path.splice(1).join('/');
                    parent[path[0]] = {};
                    parent[path[0]] = octapushDocs.helper.stringPathToObject(data, parent[path[0]]);
                }

                return parent;
            },
            github: {
                fetchDirStructure: function(param) {
                    param = {
                        url: _o_.string.format('{1}?recursive=1', param.url),
                        recursive: _o_.utility.ifNull(param.recursive, true),
                        callback: param.callback
                    };

                    _o_.ajax.request({
                        url: param.url,
                        success: function(xhr) {
                            xhr = JSON.parse(xhr.responseText);
                            var result = {};

                            _o_.utility.each(data.tree, function(key, val) {
                                result = octapushDocs.helper.stringPathToObject(val, result);
                            });

                            // _o_.utility.each(xhr.tree, function(idx, elem) {
                            //     result = Object.assign(result, octapushDocs.helper.stringPathToObject(elem.path));
                            // });

                            settings.application.githubDirStructure = result;

                            if (param.callback)
                                param.callback(settings.application.githubDirStructure);
                        }
                    });
                },
                getFiles: function(param) {
                    param = {
                        url: param.url,
                        recursive: _o_.utility.ifNull(param.recursive, true),
                        callback: param.callback
                    };

                    _o_.ajax.request({
                        url: param.url,
                        success: param.callback
                    });
                }
            }
        }
    };

    octapushDocs.register.apply();
})(window, document);