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
 * It's recommended to pack this file to make sure octapush.docs is loaded faster. 
 * Remove any commented line on this files, except comment lines on the header. 
 * 
 * You are not ALLOWED to remove this metadata lines.
 * 
 */

(function(w, d, s) {
    'use strict';

    s = Object.assign(s, {
        octapushJS: {
            pluginUrl: 'https://cdn.rawgit.com/octapush/octapushJS/418319e3/plugins/',
            loadPlugin: ['array']
        },
        specialMime: {
            images: ['jpg', 'jpeg', 'gif', 'png', 'svg', 'bmp'],
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
                    oDoc.ui.document.replaceWrapperScrollBar.apply();
                },
                title: function() {
                    $('head > title').text(s.application.title);
                },
                update: function(data) {
                    $('a#document-title').text(_o_.string.capitalize(data.title, true));

                    if (s.specialMime.images.indexOf(data.extension) !== -1) {
                        var img = _o_.string.format('<img class="center-block" src="data:image/{1};base64,{2}" />', data.extension, data.content);
                        $('div#document-wrapper').html(img);

                    } else {
                        data.content = oDoc.helper.common.encoding.base64ToString(data.content);

                        // handle as MD file
                        if (_o_.string.isEqual(_o_.string.toLower(data.extension), 'md')) {
                            var mdConverter = new showdown.Converter({
                                simplifiedAutoLink: s.application.appearances.markdown.convertUrlIntoAnchor,
                                ghCompatibleHeaderId: true,
                                tables: true
                            });
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
                        oDoc.events.document.register.apply();
                    }

                    $('div.main-panel').scrollTop(0);
                    $('div.main-panel').perfectScrollbar('update');
                },
                hljsReinit: function() {
                    hljs.initHighlighting.called = false;
                    hljs.initHighlighting();

                    var psAdd = $('pre > code.ps-add, iframe.ps-add');
                    if (psAdd.length > 0)
                        psAdd.perfectScrollbar('destroy');

                    psAdd.perfectScrollbar();
                },
                replaceWrapperScrollBar: function() {
                    if (!oDoc.helper.common.isMobileBrowser())
                        $('div.main-panel')
                        .css('overflow', 'hidden !important')
                        .perfectScrollbar();
                }
            },
            sidebar: {
                register: function() {
                    oDoc.ui.sidebar.theme.apply();
                    oDoc.ui.sidebar.title.apply();

                    oDoc.helper.common.github.fetchMenuFromRepo.apply();
                },
                title: function() {
                    $('.sidebar .logo a').text(s.application.title);
                },
                style: function() {
                    $('.sidebar ul.nav p')
                        .removeClass('capitalize uppercase lowercase')
                        .addClass(s.application.appearances.sideMenu.textCase);

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
                listMenus: function(url) {
                    function constructMenu(xhr) {
                        function buildStruct(dMenu) {
                            var sMenu = '';

                            _o_.utility.each(dMenu, function(key, val) {
                                if (_o_.compare.isString(val)) {
                                    var arrName = key.split('.');
                                    var title = _o_.array.removeLast(arrName, 0).join('');
                                    var extension = _o_.array.takeLast(arrName).join('');

                                    sMenu += _o_.string.format(
                                        '<li><a href="{1}" data-extension="{3}"><p>{2}</p></a></li>',
                                        _o_.string.concat('#', val),
                                        title,
                                        extension
                                    );

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

                    _o_.ajax.get({
                        url: _o_.string.format('{1}?recursive=1', url),
                        success: function(xhr) {
                            if (!xhr.responseText)
                                return;

                            xhr = JSON.parse(xhr.responseText);
                            constructMenu(xhr);
                        }
                    });
                }
            },
            footer: {
                register: function() {
                    oDoc.ui.footer.links.apply();
                },
                links: function() {
                    var sFooter = '';

                    _o_.utility.each(s.application.additionalData.footerLinks, function(key, val) {
                        sFooter += _o_.string.template('<li><a href="{{url}}" target="_blank">{{title}}</a></li>', val);
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
                        oDoc.events.document.register.apply();
                    });
                }
            },
            sideMenu: {
                items: function() {
                    $('.sidebar ul.nav a').on('click', function() {
                        var that = $(this);

                        var isParent = that.data('toggle') !== undefined;
                        if (!isParent) {
                            Pace.restart();

                            let url = _o_.string.removeLeft(that.attr('href'), 1);
                            oDoc.helper.common.setHash(url);

                            _o_.ajax.get({
                                url: url,
                                success: function(xhr) {
                                    if (!xhr.responseText)
                                        return;

                                    xhr = JSON.parse(xhr.responseText);

                                    oDoc.ui.document.update({
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

                            else {
                                $('div.main-panel').css('width', 'calc(100% - 260px)');
                                $('#sidebar-wrap').perfectScrollbar('update');
                            }
                        });
                    });
                }
            },
            document: {
                register: function() {
                    oDoc.events.document.links.register.apply();
                },
                links: {
                    register: function() {
                        oDoc.events.document.links.click.apply();
                    },
                    click: function() {
                        $('div.main-panel a[href]')
                            .off('click')
                            .on('click', function(e) {
                                e.preventDefault();

                                var that = $(this);
                                var href = that.attr('href');

                                // handle anchored link
                                if (_o_.string.isStartsWith(href, '#')) {
                                    oDoc.helper.common.setHash(href, false);
                                    return false;
                                }

                                // handle email link
                                else if (_o_.string.isStartsWith(href, 'mailto:')) {
                                    return true;
                                }

                                // handle outside link
                                else {
                                    let win = w.open(href);
                                    if (win)
                                        win.focus();
                                    else
                                        alert('Please allow popup for this site.');

                                    return false;
                                }
                            });
                    }
                }
            }
        },
        helper: {
            common: {
                appLocation: function(withHash) {
                    withHash = _o_.utility.ifNull(withHash, false);
                    return withHash ? (w.location + '').toString() : w.location.toString().replace(w.location.hash, '');
                },
                getHashes: function(outAsArray) {
                    outAsArray = _o_.utility.ifNull(outAsArray, false);
                    return !outAsArray ? w.location.hash.substr(1).split('#') : w.location.hash;
                },
                setHash: function(newHash, removeOld) {
                    removeOld = _o_.utility.ifNull(removeOld, true);

                    if (removeOld)
                        w.location.hash = newHash;

                    else
                        w.location.hash = _o_.string.format('{1}#{2}', oDoc.helper.common.getHashes(), newHash);
                },
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
                },
                isMobileBrowser: function() {
                    if (
                        navigator.userAgent.match(/Android/i) ||
                        navigator.userAgent.match(/webOS/i) ||
                        navigator.userAgent.match(/iPhone/i) ||
                        navigator.userAgent.match(/iPad/i) ||
                        navigator.userAgent.match(/iPod/i) ||
                        navigator.userAgent.match(/BlackBerry/i) ||
                        navigator.userAgent.match(/Windows Phone/i)
                    )
                        return true;
                    else
                        return false;
                },
                github: {
                    fetchMenuFromRepo: function() {
                        _o_.ajax.get({
                            url: _o_.string.template('https://api.github.com/repos/{{owner}}/{{project}}/git/trees/{{branch}}', s.application.githubData),
                            success: function(xhr) {
                                if (!xhr.responseText)
                                    return;

                                xhr = JSON.parse(xhr.responseText);

                                xhr.tree = xhr.tree.filter(function(i) {
                                    if (_o_.string.isEqual(i.path, s.application.githubData.documentDirectory))
                                        return i;
                                });

                                if ((xhr.tree).length > 0)
                                    oDoc.ui.sidebar.listMenus(xhr.tree[0].url);
                            }
                        });
                    }
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
                    let before = (s.application.additionalData.sideMenu.before).reverse();
                    if (before.length > 0)
                        for (let i = 0; i < before.length; i++)
                            data.unshift({
                                path: _o_.string.format('{1}.{2}', before[i].title, before[i].renderAs),
                                url: before[i].url,
                                type: 'blob'
                            });

                    let after = (s.application.additionalData.sideMenu.after).reverse();
                    if (after.length > 0)
                        for (let i = 0; i < after.length; i++)
                            data.push({
                                path: _o_.string.format('{1}.{2}', after[i].title, after[i].renderAs),
                                url: after[i].url,
                                type: 'blob'
                            });

                    return data;
                },
                dataBuilder: function(data) {
                    function mapData(obj, paths, val) {
                        let path, arrayInfo;

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
                        result = mapData(
                            result,
                            val.path.split('/'), val.type === 'tree' ? {} : val.url
                        );
                    });

                    return result;
                }
            }
        }
    };

    w.octapushDoc = Object.assign(w.octapushDoc, oDoc);
    w.octapushDoc.register.apply();
})(window, document, window.octapushDoc.configurations);