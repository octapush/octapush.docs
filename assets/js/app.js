/*
 * octapush.docs / configs.js
 * =================================================================================
 * 
 * Get the latest version of octapush.docs from:
 * https://github.com/octapush/octapush.docs
 * 
 * =================================================================================
 * 
 * Author   : Fadhly Permata
 * eMail    : fadhly.permata@gmail.com
 * URLs     : - Web Profile     => http://fadhly.hol.es
 *            - LinkedIn        => https://www.linkedin.com/in/fadhlypermata
 *            - StackOverflow   => http://stackoverflow.com/users/story/4147978
 *            - GitHub          => https://github.com/fadhly-permata
 * 
 * =================================================================================
 * 
 * It's recommended to pack file to make sure octapush.docs is loaded faster. Remove
 * any commented line on this files, except comment lines on the header. You are not
 * ALLOWED to remove this metadata lines.
 * 
 */

(function(w, d, s) {
    'use strict';

    s = Object.assign(s, {
        octapushJS: {
            pluginUrl: 'http://localhost/octapushJS/plugins/',
            loadPlugin: ['string', 'array']
        },
        specialMime: {
            images: ['jpg', 'jpeg', 'gif', 'png'],
            markup: ['htm', 'html', 'xhtml']
        }
    });

    var oDoc = {
        register: function() {
            if (s.execScript)
                oDoc.events.register.apply();
        },
        ui: {
            register: function(eType) {
                if (eType === 'load')
                    oDoc.ui.document.register.apply();

                else if (eType === 'ready') {
                    oDoc.ui.sidebar.register.apply();
                    oDoc.ui.footer.register.apply();
                }
            },
            document: {
                register: function() {
                    oDoc.ui.document.title.apply();
                },
                title: function() {
                    $('head > title').text(s.application.title);
                },
                build: function(data) {
                    $('a#document-title').text(data.title);

                    if (s.specialMime.images.indexOf(data.extension) !== -1) {
                        var img = _o_.string.format('<img class="center-block" src="data:image/{1};base64,{2}" />', data.extension, data.content);
                        $('div#document-wrapper').html(img);

                    } else {
                        data.content = oDoc.helper.common.encoding.base64ToString(data.content);

                        // handle as MD file
                        if (_o_.string.isEqual(_o_.string.toLower(data.extension), 'md')) {
                            var mdConverter = new showdown.Converter();
                            $('div#document-wrapper').html(mdConverter.makeHtml(data.content));
                        }

                        // handle as markup file
                        else if (s.specialMime.markup.indexOf(data.extension) !== -1) {
                            $('div#document-wrapper').html('<div class="row"><iframe id="page-iframe" class="ps-add col-md-12" style="height: 80vh; position: relative; border:none;"></iframe></div>');
                            $('#page-iframe').on('load', function() {
                                $(this).contents().find('body').html(data.content);
                            });
                        }

                        // for other file handle as text file
                        else {
                            $('div#document-wrapper').html(_o_.string.format(
                                '<pre><code class="ps-add always-visible" style="height: 80vh; position: relative; overflow: hidden !important;">{1}</code></pre>',
                                data.content
                            ));
                        }

                        oDoc.ui.document.hljsReinit.apply();
                    }
                },
                hljsReinit: function() {
                    hljs.initHighlighting.called = false;
                    hljs.initHighlighting();

                    var psAdd = $('pre > code.ps-add, iframe.ps-add');
                    if (psAdd.length > 0)
                        psAdd.perfectScrollbar('destroy');

                    psAdd.perfectScrollbar();
                }
            },
            sidebar: {
                register: function() {
                    oDoc.ui.sidebar.theme.apply();
                    oDoc.ui.sidebar.title.apply();
                    oDoc.ui.sidebar.listMenus.apply();
                },
                title: function() {
                    $('.sidebar .logo a').text(s.application.title);
                },
                style: function() {
                    $('.sidebar ul.nav p')
                        .removeClass('capitalize uppercase lowercase')
                        .addClass(s.application.appearances.sideMenu.textCase);

                    $('#sidebar-wrap').perfectScrollbar('destroy');
                    $('#sidebar-wrap').perfectScrollbar();
                },
                theme: function() {
                    $('.sidebar').attr({
                        'data-background-color': s.application.appearances.sideMenu.background,
                        'data-active-color': s.application.appearances.sideMenu.color
                    });

                    $('.off-canvas-sidebar').attr({
                        'data-background-color': s.application.appearances.sideMenu.background,
                        'data-active-color': s.application.appearances.sideMenu.color
                    });
                },
                highlightActive: function(current) {
                    $('.sidebar ul.nav li').removeClass('active');

                    var cLi = current.parent();
                    cLi.addClass('active');

                    var theParent = cLi.parents('li');
                    while (theParent.length > 0) {
                        theParent.addClass('active hide-before-after');
                        var theParent = theParent.parents('li');
                    }
                },
                listMenus: function() {
                    function constructMenu(xhr) {
                        function buildStruct(dMenu) {
                            var sMenu = '';

                            _o_.utility.each(dMenu, function(key, val) {
                                if (_o_.compare.isString(val)) {
                                    var arrName = key.split('.');
                                    var title = _o_.array.removeLast(arrName, 0).join('');
                                    var extension = _o_.array.takeLast(arrName).join('');

                                    sMenu += _o_.string.format('<li><a href="{1}" data-extension="{3}"><p>{2}</p></a></li>', val, title, extension);

                                } else {
                                    var sTemp = '<li><a data-toggle="collapse" href="#{2}" aria-expanded="false"><p>{1}<b class="caret"></b></p></a>'
                                    sTemp += '<div class="collapse" id="{2}" aria-expanded="false"><ul class="nav">';
                                    sTemp += buildStruct(val);
                                    sTemp += '</ul></div>';
                                    sTemp += '</li>';

                                    sMenu += _o_.string.format(sTemp, key, _o_.string.dasherize(key));
                                }
                            });
                            return sMenu;
                        }

                        xhr = oDoc.helper.sideMenu.dataBuilder(xhr.tree);
                        $('.sidebar ul.nav').html(buildStruct(xhr));

                        oDoc.events.sideMenu.items.apply();
                        oDoc.ui.sidebar.style.apply();
                    }

                    // _o_.ajax.get({
                    //     url: _o_.string.concat(s.application.githubApiTree, '?recursive=1'),
                    //     success: function(xhr) {
                    //         if (!xhr.responseText)
                    //             return;

                    //         xhr = JSON.parse(xhr.responseText);
                    //         constructMenu(xhr)
                    //     }
                    // });
                    constructMenu(s.sampleData);
                }
            },
            footer: {
                register: function() {
                    oDoc.ui.footer.links.apply();
                },
                links: function() {
                    var sFooter = '';

                    _o_.utility.each(s.application.additionalData.footerLinks, function(key, val) {
                        val.target = _o_.string.isEqual(_o_.string.toLower(val.target), 'newtab') ? 'target="blank"' : ' ';
                        sFooter += _o_.string.template('<li><a href="{{url}}"{{target}}>{{title}}</a></li>', val);
                    });

                    $('.footer > .container-fluid > nav').html(_o_.string.format('<ul>{1}</ul>', sFooter));
                }
            }
        },
        events: {
            register: function() {
                oDoc.events.windoc.register.apply();
            },
            windoc: {
                register: function() {
                    w.onLoad = oDoc.events.windoc.onLoad(function() {
                        oDoc.events.windoc.onReady.apply();
                    });
                },
                onLoad: function(cb) {
                    oDoc.ui.register('load');

                    _o_.settings.pluginsPath = s.octapushJS.pluginUrl;
                    _o_.utility.importPlugin(s.octapushJS.loadPlugin, function() {
                        if (cb)
                            cb();
                    });
                },
                onReady: function() {
                    $(function() {
                        oDoc.ui.register('ready');

                        oDoc.events.sideMenu.items.apply();
                        oDoc.events.sideMenu.toggler.apply();
                    });
                }
            },
            sideMenu: {
                items: function() {
                    $('.sidebar ul.nav a').on('click', function() {
                        var that = $(this);

                        var isParent = that.data('toggle') !== undefined;
                        if (!isParent) {
                            _o_.ajax.get({
                                url: that.attr('href'),
                                success: function(xhr) {
                                    if (!xhr.responseText)
                                        return;

                                    xhr = JSON.parse(xhr.responseText);

                                    oDoc.ui.document.build({
                                        title: that.text(),
                                        extension: that.data('extension'),
                                        content: xhr.content
                                    });
                                }
                            });

                            oDoc.ui.sidebar.highlightActive(that);

                            return false;

                        } else {
                            $('#sidebar-wrap').perfectScrollbar('update');
                        }
                    });
                },
                toggler: function() {
                    $('button.navbar-toggle').on('click', function() {
                        $('#sidebar-wrap').toggle(0, function() {
                            if ($('#sidebar-wrap').css('display') === 'none')
                                $('div.main-panel').css('width', '100%');

                            else
                                $('div.main-panel').css('width', 'calc(100% - 260px)');
                            $('#sidebar-wrap').perfectScrollbar('update');
                        });
                    });
                }
            }
        },
        helper: {
            common: {
                encoding: {
                    stringToBase64: function(str) {
                        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                            return String.fromCharCode('0x' + p1);
                        }));
                    },
                    base64ToString: function(str) {
                        return decodeURIComponent(atob(str).split('').map(function(c) {
                            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                        }).join(''));
                    }
                },
                arrayContainString: function(arr, check) {
                    check = _o_.string.toLower(check);
                    arr = arr.map(function(i) {
                        return _o_.string.toLower(i);
                    });

                    for (let i = 0; i < arr.length; i++)
                        if (_o_.string.isContain(check, arr[i]) === true)
                            return true;

                    return false;
                }
            },
            sideMenu: {
                dataFilter: function(data) {
                    data = data.filter(function(i) {
                        if (
                            (s.application.additionalData.sideMenu.hideFilesOrDirectory).length > 0 &&
                            !oDoc.helper.common.arrayContainString(s.application.additionalData.sideMenu.hideFilesOrDirectory, i.path)
                        ) {
                            if (_o_.string.isEqual(i.type, 'tree')) {
                                if (!s.application.additionalData.sideMenu.hideEmptyDirectory)
                                    return i;

                            } else {
                                if (!s.application.additionalData.sideMenu.showMdFilesOnly) {
                                    return i;

                                } else {
                                    if (_o_.string.isEndsWith(_o_.string.toLower(i.path), '.md'))
                                        return i;
                                }
                            }
                        }
                    });

                    return oDoc.helper.sideMenu.insertAdditionals(data);
                },
                insertAdditionals: function(data) {
                    let before = s.application.additionalData.sideMenu.before;
                    if (before.length > 0)
                        _o_.utility.each(before, function(key, val) {
                            data.unshift({
                                path: val.title,
                                url: val.url,
                                type: 'blob'
                            });
                        });

                    let after = s.application.additionalData.sideMenu.after;
                    if (after.length > 0)
                        _o_.utility.each(after, function(key, val) {
                            data.push({
                                path: val.title,
                                url: val.url,
                                type: 'blob'
                            });
                        });

                    return data;
                },
                dataBuilder: function(data) {
                    function mapData(obj, paths, val) {
                        var path, arrayInfo;

                        if (paths.length === 0)
                            return val;

                        obj = obj || {};
                        path = paths.shift();
                        arrayInfo = path.match(/^(\w+)\((\d+)\)$/);

                        if (arrayInfo) {
                            path = arrayInfo[1];

                            if (!_o_.compare.isArray(obj[path]))
                                obj[path] = [];

                            obj[path][arrayInfo[2]] = mapData(obj[path][arrayInfo[2]], paths, val);

                        } else {
                            obj[path] = mapData(obj[path], paths, val);
                        }

                        return obj;
                    }

                    var result = {};
                    data = oDoc.helper.sideMenu.dataFilter(data);

                    _o_.utility.each(data, function(key, val) {
                        result = mapData(result, val.path.split('/'), val.type === 'tree' ? {} : val.url);
                    });

                    return result;
                }
            }
        }
    };

    w.octapushDoc = Object.assign(w.octapushDoc, oDoc);
    w.octapushDoc.register.apply();
})(window, document, window.octapushDoc.configurations);