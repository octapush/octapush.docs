// make sure we use octapushJS from 'MASTER' branch

(function(win, doc) {
    'use strict';

    var sampleData = {
        "sha": "c1f15f9996fcf7c3d6729f336469439db00597fa",
        "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/c1f15f9996fcf7c3d6729f336469439db00597fa",
        "tree": [{
                "path": "assets",
                "mode": "040000",
                "type": "tree",
                "sha": "608859d4245a529078de0c4ffa793a63964ceaa8",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/608859d4245a529078de0c4ffa793a63964ceaa8"
            },
            {
                "path": "assets/app",
                "mode": "040000",
                "type": "tree",
                "sha": "dca744165237f811b01f9fbc5a9c5c9e62782d59",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/dca744165237f811b01f9fbc5a9c5c9e62782d59"
            },
            {
                "path": "assets/app/script.js",
                "mode": "100644",
                "type": "blob",
                "sha": "3c651fb60d9c7b44b5c2200597be780848db162c",
                "size": 17074,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3c651fb60d9c7b44b5c2200597be780848db162c"
            },
            {
                "path": "assets/app/styles.css",
                "mode": "100644",
                "type": "blob",
                "sha": "04d7b1786fd411e50fd14039bc9f70612ccad594",
                "size": 1186,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/04d7b1786fd411e50fd14039bc9f70612ccad594"
            },
            {
                "path": "assets/bootstrap",
                "mode": "040000",
                "type": "tree",
                "sha": "f320723d8f41e47df4570f96b16ffffa2b3cbe9f",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/f320723d8f41e47df4570f96b16ffffa2b3cbe9f"
            },
            {
                "path": "assets/bootstrap/css",
                "mode": "040000",
                "type": "tree",
                "sha": "950d9fc0a76396f13fa3e97c429027e41a958367",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/950d9fc0a76396f13fa3e97c429027e41a958367"
            },
            {
                "path": "assets/bootstrap/css/bootstrap.css",
                "mode": "100644",
                "type": "blob",
                "sha": "42c79d6e459ece1c606314879146768dad3d2656",
                "size": 146082,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/42c79d6e459ece1c606314879146768dad3d2656"
            },
            {
                "path": "assets/bootstrap/css/bootstrap.css.map",
                "mode": "100644",
                "type": "blob",
                "sha": "09f8cda78a2082983b574be3abab705f8f169ab8",
                "size": 389227,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/09f8cda78a2082983b574be3abab705f8f169ab8"
            },
            {
                "path": "assets/bootstrap/css/bootstrap.min.css",
                "mode": "100644",
                "type": "blob",
                "sha": "4cf729e4342a51d8b300e8d43f2f78b0a6faf403",
                "size": 121260,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/4cf729e4342a51d8b300e8d43f2f78b0a6faf403"
            },
            {
                "path": "assets/bootstrap/css/bootstrap.min.css.map",
                "mode": "100644",
                "type": "blob",
                "sha": "5f49bb37443c13fec81f2089d0d5559bc5a407e4",
                "size": 54416,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/5f49bb37443c13fec81f2089d0d5559bc5a407e4"
            },
            {
                "path": "assets/bootstrap/fonts",
                "mode": "040000",
                "type": "tree",
                "sha": "14032aabd85b43a058cfc7025dd4fa9dd325ea97",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/14032aabd85b43a058cfc7025dd4fa9dd325ea97"
            },
            {
                "path": "assets/bootstrap/fonts/glyphicons-halflings-regular.eot",
                "mode": "100644",
                "type": "blob",
                "sha": "b93a4953fff68df523aa7656497ee339d6026d64",
                "size": 20127,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/b93a4953fff68df523aa7656497ee339d6026d64"
            },
            {
                "path": "assets/bootstrap/fonts/glyphicons-halflings-regular.svg",
                "mode": "100644",
                "type": "blob",
                "sha": "94fb5490a2ed10b2c69a4a567a4fd2e4f706d841",
                "size": 108738,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/94fb5490a2ed10b2c69a4a567a4fd2e4f706d841"
            },
            {
                "path": "assets/bootstrap/fonts/glyphicons-halflings-regular.ttf",
                "mode": "100644",
                "type": "blob",
                "sha": "1413fc609ab6f21774de0cb7e01360095584f65b",
                "size": 45404,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/1413fc609ab6f21774de0cb7e01360095584f65b"
            },
            {
                "path": "assets/bootstrap/fonts/glyphicons-halflings-regular.woff",
                "mode": "100644",
                "type": "blob",
                "sha": "9e612858f802245ddcbf59788a0db942224bab35",
                "size": 23424,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/9e612858f802245ddcbf59788a0db942224bab35"
            },
            {
                "path": "assets/bootstrap/fonts/glyphicons-halflings-regular.woff2",
                "mode": "100644",
                "type": "blob",
                "sha": "64539b54c3751a6d9adb44c8e3a45ba5a73b77f0",
                "size": 18028,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/64539b54c3751a6d9adb44c8e3a45ba5a73b77f0"
            },
            {
                "path": "assets/bootstrap/js",
                "mode": "040000",
                "type": "tree",
                "sha": "6a9983abc23326c11e5d746db1514fe2bb63f9fa",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/6a9983abc23326c11e5d746db1514fe2bb63f9fa"
            },
            {
                "path": "assets/bootstrap/js/bootstrap.js",
                "mode": "100644",
                "type": "blob",
                "sha": "d59150fc972b790a4af9e8bce1663de83a3a02db",
                "size": 75339,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/d59150fc972b790a4af9e8bce1663de83a3a02db"
            },
            {
                "path": "assets/bootstrap/js/bootstrap.min.js",
                "mode": "100644",
                "type": "blob",
                "sha": "e79c065134f2cfcf3e44a59cffcb5f090232f98f",
                "size": 36868,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/e79c065134f2cfcf3e44a59cffcb5f090232f98f"
            },
            {
                "path": "assets/bootstrap/js/npm.js",
                "mode": "100644",
                "type": "blob",
                "sha": "bf6aa80602d9303b61e8d5e63c10568e55b6a4d8",
                "size": 484,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/bf6aa80602d9303b61e8d5e63c10568e55b6a4d8"
            },
            {
                "path": "assets/highlight",
                "mode": "040000",
                "type": "tree",
                "sha": "41105686b02a6fc03894005f0c3b673e9cc81fea",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/41105686b02a6fc03894005f0c3b673e9cc81fea"
            },
            {
                "path": "assets/highlight/default.min.css",
                "mode": "100644",
                "type": "blob",
                "sha": "7d8be18d058e99055a338b9317befa920f4447c5",
                "size": 776,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/7d8be18d058e99055a338b9317befa920f4447c5"
            },
            {
                "path": "assets/highlight/highlight.min.js",
                "mode": "100644",
                "type": "blob",
                "sha": "7178d339b35bccdec60e7616c2d977af0709a217",
                "size": 45164,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/7178d339b35bccdec60e7616c2d977af0709a217"
            },
            {
                "path": "assets/highlight/highlight.pack.js",
                "mode": "100644",
                "type": "blob",
                "sha": "3c89ddbe76cd37505798003d9ecdbae96a3c4e08",
                "size": 11508,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3c89ddbe76cd37505798003d9ecdbae96a3c4e08"
            },
            {
                "path": "assets/highlight/monokai.css",
                "mode": "100644",
                "type": "blob",
                "sha": "775d53f91aa86bacb11a63e551c40702fb809d06",
                "size": 938,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/775d53f91aa86bacb11a63e551c40702fb809d06"
            },
            {
                "path": "assets/jQuery",
                "mode": "040000",
                "type": "tree",
                "sha": "74107912e07d5f05c7e1e95a1a4bfa62fc4c4842",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/74107912e07d5f05c7e1e95a1a4bfa62fc4c4842"
            },
            {
                "path": "assets/jQuery/jquery-2.2.3.min.js",
                "mode": "100644",
                "type": "blob",
                "sha": "b8c4187de18dd413ad3029839ce0773549e92a14",
                "size": 85659,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/b8c4187de18dd413ad3029839ce0773549e92a14"
            },
            {
                "path": "assets/style",
                "mode": "040000",
                "type": "tree",
                "sha": "d627f46b80b4cf0f2f080e35cec585b5972e5cca",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/d627f46b80b4cf0f2f080e35cec585b5972e5cca"
            },
            {
                "path": "assets/style/docs.css",
                "mode": "100644",
                "type": "blob",
                "sha": "f359208598902ab01453324921ec8a90f51bee1e",
                "size": 16890,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/f359208598902ab01453324921ec8a90f51bee1e"
            },
            {
                "path": "data",
                "mode": "040000",
                "type": "tree",
                "sha": "a5493999ca4ff4e6f1b30ed7718ba9616a3fa711",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/a5493999ca4ff4e6f1b30ed7718ba9616a3fa711"
            },
            {
                "path": "data/_o_.compare.isArray.xml",
                "mode": "100644",
                "type": "blob",
                "sha": "1abac4a0436947e98abdf9241329779cd457f211",
                "size": 1995,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/1abac4a0436947e98abdf9241329779cd457f211"
            },
            {
                "path": "data/_o_.compare.isNullOrEmpty.json",
                "mode": "100644",
                "type": "blob",
                "sha": "efe2d6236d3fba0c93499f4b8950e8652f61e821",
                "size": 1561,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/efe2d6236d3fba0c93499f4b8950e8652f61e821"
            },
            {
                "path": "data/_o_.compare.isNullOrEmpty2.json",
                "mode": "100644",
                "type": "blob",
                "sha": "fbfdd29b38264af1cee0969d995cc0de120dbf51",
                "size": 808,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/fbfdd29b38264af1cee0969d995cc0de120dbf51"
            },
            {
                "path": "data/_o_.compare.xml",
                "mode": "100644",
                "type": "blob",
                "sha": "08924d6b87ee3b58bdedd69fa464084fd315dfc5",
                "size": 2102,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/08924d6b87ee3b58bdedd69fa464084fd315dfc5"
            },
            {
                "path": "data/_o_.copyleft.xml",
                "mode": "100644",
                "type": "blob",
                "sha": "3735a1df014f66868eb8ff21300b2e194ccd73af",
                "size": 2467,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3735a1df014f66868eb8ff21300b2e194ccd73af"
            },
            {
                "path": "data/_o_.showCopyleft.xml",
                "mode": "100644",
                "type": "blob",
                "sha": "05040d91776a5708b4b1c0deb6ec952fa96d32eb",
                "size": 1071,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/05040d91776a5708b4b1c0deb6ec952fa96d32eb"
            },
            {
                "path": "data/_o_.version.xml",
                "mode": "100644",
                "type": "blob",
                "sha": "d6bbe79335269e9b0da1fae5d5d0e4c0804b8b8a",
                "size": 1467,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/d6bbe79335269e9b0da1fae5d5d0e4c0804b8b8a"
            },
            {
                "path": "data/sample.json",
                "mode": "100644",
                "type": "blob",
                "sha": "3208afb5f46f2479814d51e547cc26934691d57f",
                "size": 1095,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3208afb5f46f2479814d51e547cc26934691d57f"
            },
            {
                "path": "index.html",
                "mode": "100644",
                "type": "blob",
                "sha": "01e9c58281a5552119da499a6c1e7188b03a3dec",
                "size": 5569,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/01e9c58281a5552119da499a6c1e7188b03a3dec"
            },
            {
                "path": "index_ori.html",
                "mode": "100644",
                "type": "blob",
                "sha": "455b1b8c93e35854de6da82a96b8df39b4842b8e",
                "size": 6952,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/455b1b8c93e35854de6da82a96b8df39b4842b8e"
            },
            {
                "path": "template",
                "mode": "040000",
                "type": "tree",
                "sha": "68153a73994a4d5c2614dbe4bc5385ce48c27699",
                "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/68153a73994a4d5c2614dbe4bc5385ce48c27699"
            },
            {
                "path": "template/_o_.template.json",
                "mode": "100644",
                "type": "blob",
                "sha": "3208afb5f46f2479814d51e547cc26934691d57f",
                "size": 1095,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3208afb5f46f2479814d51e547cc26934691d57f"
            },
            {
                "path": "template/_o_.template.xml",
                "mode": "100644",
                "type": "blob",
                "sha": "2e6b56c80b269225aa06f354c722feac0607485c",
                "size": 1299,
                "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/2e6b56c80b269225aa06f354c722feac0607485c"
            }
        ],
        "truncated": false
    };

    var settings = {
        application: {
            title: 'octapush.docs',
            url: 'https://github.com/octapush/octapush.docs',
            githubFetchUrl: 'https://api.github.com/repos/octapush/octapushJS/git/trees/c1f15f9996fcf7c3d6729f336469439db00597fa',
            githubDirStructure: null
        },
        sidebar: {
            backgroundColor: 'white', // white | brown,
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
                var name = (data.path).split('/');

                if (name.length === 1) {
                    parent[name[0]] = data.url;

                } else {
                    data.path = name.splice(1).join('/');

                    //if (!parent.hasOwnProperty(name[0]))
                    parent[name[0]] = {};

                    parent[name[0]] = octapushDocs.helper.stringPathToObject(data, parent[name[0]]);
                }

                return parent;
            },
            github: {
                fetchDirStructure: function(param) {
                    var result = {};

                    _o_.utility.each(sampleData.tree, function(key, val) {
                        result = octapushDocs.helper.stringPathToObject(val, result);
                    });

                    console.log(result);

                    // param = {
                    //     url: _o_.string.format('{1}?recursive=1', param.url),
                    //     recursive: _o_.utility.ifNull(param.recursive, true),
                    //     callback: param.callback
                    // };

                    // _o_.ajax.request({
                    //     url: param.url,
                    //     success: function(xhr) {
                    //         xhr = JSON.parse(xhr.responseText);
                    //         var result = {};

                    //         _o_.utility.each(xhr.tree, function(key, val) {
                    //             result = octapushDocs.helper.stringPathToObject(val, result);
                    //         });

                    //         settings.application.githubDirStructure = result;

                    //         if (param.callback)
                    //             param.callback(settings.application.githubDirStructure);
                    //     }
                    // });
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