/*
 * octapush.docs / app.js
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
        execScript: true,
        useDummyData: false,
        octapushJS: {
            pluginUrl: 'https://cdn.rawgit.com/octapush/octapushJS/418319e3/plugins/',
            loadPlugin: ['array']
        },
        specialMime: {
            markdown: ['markdown', 'mdown', 'mkdn', 'md', 'mkd', 'mdwn', 'mdtxt', 'mdtext', 'text'],
            image: ['jpg', 'jpeg', 'gif', 'png', 'bmp'],
            markup: ['htm', 'html', 'xhtml']
        },
        githubDataBuffer: null
    });

    var octaDoc = {
        register: function() {
            if (s.execScript)
                octaDoc.events.register.apply();
        },
        ui: {
            register: function(regType) {
                if (_o_.string.isEqual(regType, 'load', false)) {
                    // change appearances and/or DOM ASAP
                    octaDoc.ui.document.register.apply();
                    octaDoc.ui.sideMenu.appearances.color.apply();

                } else if (_o_.string.isEqual(regType, 'ready', false)) {
                    octaDoc.ui.sideMenu.register(function() {
                        octaDoc.ui.page.init.apply();
                    });
                }
            },
            document: {
                register: function() {
                    octaDoc.helper.dataParser.appTitleCase.apply();
                    octaDoc.ui.document.title.apply();
                    octaDoc.ui.document.initScrollbar.apply();
                    octaDoc.ui.page.footer.apply();
                },
                title: function(docTitle) {
                    let title = s.title;

                    if (_o_.string.isEqual(s.behaviour.common.docTitleType, 'page', false) && !_o_.compare.isNullOrEmpty(docTitle))
                        title = _o_.utility.ifNull(docTitle, s.title);

                    else if (_o_.string.isEqual(s.behaviour.common.docTitleType, 'combine', false) && !_o_.compare.isNullOrEmpty(docTitle))
                        title = _o_.string.format('{1} {2} {3}', s.title, s.behaviour.common.docTitleCombineSeparator, docTitle);


                    $('head > title').text(title);
                },
                initScrollbar: function() {
                    $('div.main-panel')
                        .css('overflow', 'hidden !important')
                        .perfectScrollbar();
                }
            },
            sideMenu: {
                register: function(cb) {
                    octaDoc.ui.sideMenu.title.apply();

                    octaDoc.ui.sideMenu.build.init(function() {
                        octaDoc.ui.sideMenu.appearances.case.apply();
                        octaDoc.events.sideMenu.hamburger.click.apply();

                        if (cb) cb();
                    });
                },
                title: function() {
                    $('.sidebar .logo a').text(s.title);
                },
                appearances: {
                    color: function() {
                        $('.sidebar').attr({
                            'data-background-color': s.behaviour.sideMenu.background,
                            'data-active-color': s.behaviour.sideMenu.color
                        });

                        $('.off-canvas-sidebar').attr({
                            'data-background-color': s.behaviour.sideMenu.background,
                            'data-active-color': s.behaviour.sideMenu.color
                        });
                    },
                    case: function() {
                        // set text case for menu items
                        $('.sidebar ul.nav p')
                            .removeClass('capitalize uppercase lowercase')
                            .addClass(_o_.string.toLower(s.behaviour.sideMenu.textCase));

                        // activate perfect scrollbar
                        octaDoc.ui.plugins.perfectScrollbar.init('#sidebar-wrap');
                    }
                },
                setHighlight: function(target) {
                    $('.sidebar ul.nav li').removeClass('active');

                    let tLi = target.parent();
                    tLi.addClass('active');

                    let tParent = tLi.parents('li');
                    while (tParent.length > 0) {
                        tParent.addClass('active hide-before-after');
                        tParent = tParent.parents('li');
                    }
                },
                build: {
                    init: function(cb) {
                        octaDoc.ui.sideMenu.build.fetchItems(function(data) {
                            $('.sidebar ul.nav').html(data);
                            octaDoc.events.sideMenu.menuItem.register.apply();

                            if (cb) cb(data);
                        });
                    },
                    fetchItems: function(cb) {
                        function dataProcessor(data) {
                            s.githubDataBuffer = data;

                            data = octaDoc.helper.dataParser.sideMenu.menuDataBuilder(data.tree);
                            data = octaDoc.ui.sideMenu.build.constructDom(data);

                            if (cb) cb(data);
                        }

                        if (!s.useDummyData)
                            octaDoc.helper.github.getFilesAndDirFromDocDir(function(data) {
                                dataProcessor(data);
                            });

                        else {
                            _o_.ajax.get({
                                url: _o_.string.concat('dummy-menu.json?random=', Math.floor(Math.random() * 10000)),
                                success: function(xhr) {
                                    if (!xhr.responseText) return;
                                    xhr = JSON.parse(xhr.responseText);
                                    dataProcessor(xhr);
                                }
                            });
                        }
                    },
                    constructDom: function(data) {
                        var sMenu = '';

                        _o_.utility.each(data, function(key, val) {
                            if (_o_.compare.isString(val)) {
                                var arrName = key.split('.');

                                if (s.behaviour.sideMenu.useNumberOnFileNameToSort === true)
                                    arrName = _o_.array.removeFirst(arrName, 1);

                                var title = _o_.array.removeLast(arrName, 0).join('');
                                sMenu += _o_.string.format('<li><a href="#{1}"><p>{2}</p></a></li>', val, title);

                            } else {
                                var sTemp = _o_.string.concat(
                                    '<li><a data-toggle="collapse" href="#{2}" aria-expanded="false"><p>{1}<b class="caret"></b></p></a>',
                                    '<div class="collapse" id="{2}" aria-expanded="false"><ul class="nav">',
                                    octaDoc.ui.sideMenu.build.constructDom(val),
                                    '</ul></div>',
                                    '</li>'
                                );

                                if (s.behaviour.sideMenu.useNumberOnFileNameToSort === true)
                                    key = _o_.array.removeFirst(key.split('.'), 1).join('');

                                sMenu += _o_.string.format(sTemp, key, _o_.string.dasherize(key));
                            }
                        });

                        return sMenu;
                    }
                }
            },
            page: {
                init: function() {
                    var hashes = octaDoc.helper.utility.hash.get(true);
                    var path = '';

                    // init from hardlink
                    if (_o_.compare.isArray(hashes) && !_o_.string.isEqual(hashes[0], '')) {
                        path = _o_.array.takeFirst(hashes, 1)[0];
                        var extension = octaDoc.helper.dataParser.sideMenu.getExtensionFromPath(path);
                        var title = octaDoc.helper.dataParser.sideMenu.getFileTitle(path);

                        octaDoc.helper.github.readFile(
                            octaDoc.helper.dataParser.sideMenu.getUrlByPath(path),
                            function(xhr) {
                                octaDoc.ui.page.update({
                                    title: title,
                                    extension: extension,
                                    content: xhr
                                });
                            }
                        );

                    } else {
                        path = s.behaviour.page.pathOfInitialPage;

                        if (_o_.string.isEqual(path, 'first-menu-item', false)) {
                            path = $('ul.nav li:first a:first').attr('href').substr(1);
                            $('ul.nav li:first a:first').trigger('click');

                        } else {
                            octaDoc.helper.github.readFile(
                                octaDoc.helper.dataParser.sideMenu.getUrlByPath(path),
                                function(xhr) {
                                    octaDoc.ui.page.update({
                                        title: s.title,
                                        extension: octaDoc.helper.dataParser.sideMenu.getExtensionFromPath(path),
                                        content: xhr
                                    });
                                }
                            );
                        }
                    }

                    octaDoc.ui.sideMenu.setHighlight($(_o_.string.format('ul.nav a[href="#{1}"]', decodeURI(path))));
                },
                update: function(data) {
                    if (s.behaviour.common.docTitleType)
                        octaDoc.ui.document.title(decodeURI(data.title));

                    octaDoc.ui.page.header(data.title);
                    octaDoc.ui.page.content(data);
                },
                header: function(data) {
                    data = decodeURI(data);

                    switch (_o_.string.toLower(s.behaviour.page.titleCase)) {
                        case 'capitalize':
                            data = _o_.string.capitalize(data, true);
                            break;

                        case 'uppercase':
                            data = _o_.string.toUpper(data);
                            break;

                        case 'lowercase':
                            data = _o_.string.toLower(data);
                            break;

                        default:
                            break;
                    }

                    $('a#document-title').text(data);
                },
                content: function(data) {
                    if (s.specialMime.image.indexOf(data.extension) !== -1) {
                        $('div#document-wrapper').html(
                            _o_.string.format('<img class="center-block" src="data:image/{1};base64,{2}" />', data.extension, data.content)
                        );

                    } else {
                        data.content = octaDoc.helper.utility.base64.decode(data.content);

                        // handle as MD file
                        if (s.specialMime.markdown.indexOf(data.extension) !== -1) {
                            $('div#document-wrapper').html(
                                (new showdown.Converter({
                                    openLinksInNewWindow: s.behaviour.common.openExternalLinkOnNewTab,

                                    simplifiedAutoLink: s.behaviour.page.markdown.encodeUrls,
                                    encodeEmails: s.behaviour.page.markdown.encodeEmails,

                                    ghCompatibleHeaderId: true,
                                    tables: true
                                })).makeHtml(data.content)
                            );
                        }

                        // handle as markup file
                        else if (s.specialMime.markup.indexOf(data.extension) !== -1) {
                            $('div#document-wrapper').html('<div class="row"><iframe id="page-iframe" class="ps-add col-md-12" style="height: 80vh; position: relative; border:none;"></iframe></div>');
                            octaDoc.events.page.iframe.load(data.content);
                        }

                        // for other file handle as text file and show it using code preview
                        else {
                            $('div#document-wrapper').html(_o_.string.format(
                                '<pre><code class="ps-add always-visible" style="height: 80vh; position: relative; overflow: hidden !important;">{1}</code></pre>',
                                data.content
                            ));
                        }

                        octaDoc.ui.page.wrapComponents.apply();
                        octaDoc.ui.plugins.hljs.reInit.apply();
                        octaDoc.events.page.anchors.click.apply();
                    }

                    var hashes = octaDoc.helper.utility.hash.get(true);

                    if (hashes.length < 2) {
                        $('div.main-panel').scrollTop(0);

                    } else {
                        hashes = _o_.array.takeLast(hashes, 1)[0];
                        octaDoc.helper.utility.hash.scroll(_o_.string.concat('#', hashes));
                    }

                    octaDoc.ui.plugins.perfectScrollbar.update('div.main-panel');
                },
                wrapComponents: function() {
                    // table
                    $('div#document-wrapper.content table')
                        .addClass(
                            _o_.string.format(
                                'table {1}',
                                s.behaviour.page.markdown.stripTable === true ? 'table-striped' : ''
                            )
                        )
                        .wrap('<div class="content table-responsive table-full-width"></div>');

                    // img
                    $('div#document-wrapper.content img')
                        .addClass('center-block')
                        .css('max-width', '100%')
                        .wrap('<div class="content block"></div>');
                },
                footer: function(data) {
                    var sFoot = '';

                    _o_.utility.each(s.behaviour.footerLinks, function(key, val) {
                        // TODO: remove target, the "a" event already handled by page.
                        val.target = s.behaviour.common.openExternalLinkOnNewTab ? 'target="_blank"' : ' ';
                        sFoot += _o_.string.template('<li><a href="{{url}}"{{target}}>{{title}}</a></li>', val);
                    });

                    $('.footer > .container-fluid > nav').html(_o_.string.format('<ul>{1}</ul>', sFoot));
                }
            },
            plugins: {
                hljs: {
                    reInit: function() {
                        hljs.initHighlighting.called = false;
                        hljs.initHighlighting();

                        octaDoc.ui.plugins.perfectScrollbar.reInit('pre > code.ps-add, iframe-ps.add');
                    }
                },
                perfectScrollbar: {
                    init: function(dom) {
                        dom = $(dom);
                        if (dom.length > 0)
                            dom.perfectScrollbar();
                    },
                    reInit: function(dom) {
                        dom = $(dom);
                        if (dom.length > 0) {
                            dom.perfectScrollbar('destroy');
                            dom.perfectScrollbar();
                        }
                    },
                    update: function(dom) {
                        dom = $(dom);
                        if (dom.length > 0)
                            dom.perfectScrollbar('update');
                    }
                }
            }
        },
        events: {
            register: function() {
                octaDoc.events.document.register.apply();
            },
            document: {
                register: function() {
                    w.onLoad = octaDoc.events.document.load(function() {
                        octaDoc.events.document.ready.apply();
                    });
                },
                load: function(cb) {
                    octaDoc.ui.register('load');

                    _o_.settings.pluginsPath = s.octapushJS.pluginUrl;
                    _o_.utility.importPlugin(s.octapushJS.loadPlugin, function() {
                        if (cb) cb();
                    });
                },
                ready: function() {
                    $(function() {
                        octaDoc.ui.register('ready');
                    });
                }
            },
            sideMenu: {
                hamburger: {
                    click: function() {
                        octaDoc.helper.events.rebind({
                            target: 'button.navbar-toggle',
                            eventName: 'click',
                            fn: function() {
                                $('#sidebar-wrap').fadeToggle(function() {
                                    if (_o_.string.isEqual($('#sidebar-wrap').css('display'), 'none', false)) {
                                        $('div.main-panel').css('width', '100%');

                                    } else {
                                        $('div.main-panel').css('width', 'calc(100% - 260px)');
                                        octaDoc.ui.plugins.perfectScrollbar.reInit('#sidebar-wrap');
                                    }
                                });
                            }
                        });
                    }
                },
                logo: {
                    click: function() {}
                },
                menuItem: {
                    register: function() {
                        octaDoc.events.sideMenu.menuItem.click.apply();
                        octaDoc.events.sideMenu.menuItem.parent.register.apply();
                    },
                    click: function() {
                        octaDoc.helper.events.rebind({
                            target: '.sidebar ul.nav a',
                            eventName: 'click',
                            fn: function(e) {
                                var that = $(this);
                                var isParent = that.data('toggle') !== undefined;
                                var url = _o_.string.removeLeft(that.attr('href'), 1);

                                // the item is not a parent and
                                // can be processed to load page content.
                                if (!isParent) {
                                    Pace.restart();

                                    octaDoc.ui.sideMenu.setHighlight(that);
                                    octaDoc.helper.utility.hash.set(url);

                                    octaDoc.helper.github.readFile(
                                        octaDoc.helper.dataParser.sideMenu.getUrlByPath(url),
                                        function(xhr) {
                                            octaDoc.ui.page.update({
                                                title: octaDoc.helper.dataParser.sideMenu.getFileTitle(url),
                                                extension: octaDoc.helper.dataParser.sideMenu.getExtensionFromPath(url),
                                                content: xhr
                                            });
                                        }
                                    );

                                    return false;
                                }
                            }
                        });
                    },
                    parent: {
                        register: function() {
                            octaDoc.events.sideMenu.menuItem.parent.hidden.apply();
                            octaDoc.events.sideMenu.menuItem.parent.shown.apply();
                        },
                        hidden: function() {
                            octaDoc.helper.events.rebind({
                                target: $('.sidebar ul.nav a[data-toggle="collapse"]').parents('li').find('div.collapse'),
                                eventName: 'hidden.bs.collapse',
                                fn: function(e) {
                                    octaDoc.ui.plugins.perfectScrollbar.update('#sidebar-wrap');
                                }
                            });
                        },
                        shown: function() {
                            octaDoc.helper.events.rebind({
                                target: $('.sidebar ul.nav a[data-toggle="collapse"]').parents('li').find('div.collapse'),
                                eventName: 'shown.bs.collapse',
                                fn: function(e) {
                                    octaDoc.ui.plugins.perfectScrollbar.update('#sidebar-wrap');
                                }
                            });
                        }
                    }
                }
            },
            page: {
                iframe: {
                    load: function(newContent) {
                        octaDoc.helper.events.rebind({
                            target: '#page-iframe',
                            eventName: 'load',
                            fn: function() {
                                if (newContent)
                                    $(this).contents().find('body').html(newContent);
                            }
                        });
                    }
                },
                anchors: {
                    click: function() {
                        octaDoc.helper.events.rebind({
                            target: 'div.main-panel a[href]',
                            eventName: 'click',
                            fn: function(e) {
                                e.preventDefault();
                                let that = $(this);
                                let href = that.attr('href');

                                // handle email links
                                if (_o_.string.isStartsWith(href, 'mailto:')) {
                                    return true;
                                }

                                // handle hyperlink for anchored document 
                                // or documentation link page
                                else if (_o_.string.isStartsWith(href, '#')) {
                                    if (_o_.string.isContain(href, '/')) {
                                        let nHref = href.substr(2);
                                        var url = octaDoc.helper.dataParser.sideMenu.getUrlByPath(nHref);

                                        if (!url) {
                                            alert('Invalid Url.');
                                            return;
                                        }

                                        Pace.restart();
                                        octaDoc.ui.sideMenu.setHighlight($(_o_.string.format('ul.nav li a[href="#{1}"]', nHref)));
                                        octaDoc.helper.utility.hash.set(nHref);

                                        octaDoc.helper.github.readFile(
                                            url,
                                            function(xhr) {
                                                octaDoc.ui.page.update({
                                                    title: octaDoc.helper.dataParser.sideMenu.getFileTitle(url),
                                                    extension: octaDoc.helper.dataParser.sideMenu.getExtensionFromPath(nHref),
                                                    content: xhr
                                                });
                                            }
                                        )

                                    } else {
                                        octaDoc.helper.utility.hash.scroll(href, function() {
                                            octaDoc.ui.plugins.perfectScrollbar.update('div.main-panel');
                                        });
                                    }

                                    return false;
                                }

                                // handle unknown url
                                else {
                                    let win = w.open(href);
                                    if (win)
                                        win.focus();
                                    else
                                        alert('Please allow popup for this site.');

                                    return false;
                                }
                            }
                        });
                    }
                }
            }
        },
        helper: {
            utility: {
                base64: {
                    encode: function(theString) {
                        return _o_.compare.isNullOrEmpty(theString) ?
                            '' :
                            btoa(
                                encodeURIComponent(theString).replace(
                                    /%([0-9A-F]{2})/g,
                                    function(match, p1) {
                                        return String.fromCharCode(_o_.string.concat('0x', p1));
                                    }
                                )
                            );
                    },
                    decode: function(theString) {
                        return _o_.compare.isNullOrEmpty(theString) ?
                            '' :
                            decodeURIComponent(
                                atob(theString)
                                .split('')
                                .map(function(c) {
                                    return _o_.string.concat('%', (_o_.string.concat('00', c.charCodeAt(0).toString(16))).slice(-2));
                                })
                                .join('')
                            );
                    }
                },
                hash: {
                    location: function(withHash) {
                        return !_o_.utility.ifNull(withHash, false) ?
                            (w.location).toString() :
                            w.location.toString().replace(w.location.hash, '');
                    },
                    get: function(outAsArray) {
                        return _o_.utility.ifNull(outAsArray, true) ?
                            w.location.hash.substr(1).split('#') :
                            w.location.hash;
                    },
                    set: function(newHash, removeOld) {
                        removeOld = _o_.utility.ifNull(removeOld, true);

                        if (!_o_.string.isStartsWith(newHash, '#'))
                            newHash = _o_.string.concat('#', newHash);

                        if (removeOld) {
                            w.location.hash = newHash

                        } else {
                            if (w.location.hash.toString().indexOf(newHash) === -1)
                                w.location.hash = _o_.string.format('{1}{2}', octaDoc.helper.utility.hash.get(), newHash);
                        }
                    },
                    scroll: function(hash, cb) {
                        // if the DOM is available
                        if ($(hash).length > 0) {
                            $('div.main-panel')
                                .scrollTop(0)
                                .stop()
                                .animate({
                                        scrollTop: $(hash).offset().top
                                    },
                                    s.behaviour.common.scrollSpeed,
                                    function() {
                                        octaDoc.helper.utility.hash.set(hash, false);
                                        if (cb) cb();
                                    });
                        }
                    }
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
                }
            },
            github: {
                getDocDirectoryUrl: function(cb) {
                    _o_.ajax.get({
                        url: _o_.string.template('https://api.github.com/repos/{{owner}}/{{project}}/git/trees/{{branch}}', s.githubData),
                        success: function(xhr) {
                            if (!xhr.responseText) return;

                            xhr = JSON.parse(xhr.responseText);

                            xhr.tree = xhr.tree.filter(function(i) {
                                if (_o_.string.isEqual(i.path, s.githubData.docDirectory))
                                    return i;
                            });

                            if ((xhr.tree).length > 0 && cb)
                                cb(xhr.tree[0].url);
                        }
                    });
                },
                getFilesAndDirFromDocDir: function(cb) {
                    octaDoc.helper.github.getDocDirectoryUrl(function(url) {
                        if (!url)
                            alert('Please refine your "githubData" from "config.js" file.');

                        else
                            _o_.ajax.get({
                                url: _o_.string.format('{1}?recursive=1', url),
                                success: function(xhr) {
                                    if (!xhr.responseText)
                                        return;

                                    xhr = JSON.parse(xhr.responseText);
                                    if (cb) cb(xhr);
                                }
                            });
                    });
                },
                readFile: function(url, cb) {
                    _o_.ajax.get({
                        url: url,
                        success: function(xhr) {
                            if (!xhr.responseText)
                                return;

                            xhr = JSON.parse(xhr.responseText);
                            if (cb) cb(xhr.content);
                        }
                    });
                }
            },
            events: {
                // make sure the "target" does not creat bubbling event
                rebind: function(data) {
                    $(data.target)
                        .off(data.eventName)
                        .on(data.eventName, data.fn);
                }
            },
            dataParser: {
                arrayContainString: function(arr, str) {
                    str = _o_.string.toLower(str);
                    arr = arr.map(function(i) {
                        return _o_.string.toLower(i);
                    });

                    for (let i = 0; i < arr.length; i++)
                        if (_o_.string.isContain(str, arr[i]) === true)
                            return true;

                    return false;
                },
                appTitleCase: function() {
                    var caseType = s.behaviour.common.applicationTitleCase;

                    switch (_o_.string.toLower(caseType)) {
                        case 'uppercase':
                            s.title = _o_.string.toUpper(s.title);
                            break;

                        case 'lowercase':
                            s.title = _o_.string.toLower(s.title);
                            break;

                        case 'capitalize':
                            s.title = _o_.string.capitalize(s.title, true);
                            break;

                        default:
                            break;
                    }
                },
                sideMenu: {
                    filter: function(data) {
                        return data.filter(function(i) {
                            if (
                                (s.behaviour.sideMenu.hideFilesOrDirectory).length > 0 &&
                                !octaDoc.helper.dataParser.arrayContainString(s.behaviour.sideMenu.hideFilesOrDirectory, i.path)
                            ) {
                                if (_o_.string.isEqual(i.type, 'tree')) {
                                    if (!s.behaviour.sideMenu.hideEmptyDirectory)
                                        return i
                                } else {
                                    if (s.behaviour.sideMenu.showMdFilesOnly) {
                                        return i;

                                    } else {
                                        if (_o_.string.isEndsWith(_o_.string.toLower(i.path), '.md'))
                                            return i;
                                    }
                                }
                            }
                        });
                    },
                    insertAdditionals: function(data) {
                        let before = (s.behaviour.sideMenu.before).reverse();
                        if (before.length > 0)
                            for (let i = 0; i < before.length; i++)
                                data.unshift({
                                    path: _o_.string.format('{1}.{2}', before[i].title, before[i].renderAs),
                                    url: before[i].url,
                                    type: 'blob'
                                });

                        let after = (s.behaviour.sideMenu.after).reverse();
                        if (after.length > 0)
                            for (let i = 0; i < after.length; i++)
                                data.push({
                                    path: _o_.string.format('{1}.{2}', after[i].title, after[i].renderAs),
                                    url: after[i].url,
                                    type: 'blob'
                                });

                        return data;
                    },
                    menuDataBuilder: function(data) {
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

                        data = octaDoc.helper.dataParser.sideMenu.filter(data);
                        data = octaDoc.helper.dataParser.sideMenu.insertAdditionals(data);

                        var result = {};
                        _o_.utility.each(data, function(key, val) {
                            result = mapData(result, val.path.split('/'), _o_.string.isEqual(val.type, 'tree', false) ? {} : val.path);
                        });

                        return result;
                    },
                    getUrlByPath: function(path) {
                        path = decodeURI(path);

                        var ghData = s.githubDataBuffer.tree.filter(function(i) {
                            if (_o_.string.isEqual(i.path, path, false))
                                return i;
                        });

                        return ghData[0]['url'];
                    },
                    getExtensionFromPath: function(path) {
                        var arrPath = path.split('.');
                        return _o_.array.takeLast(arrPath).join('');
                    },
                    getFileTitle: function(path) {
                        path = _o_.array.takeLast(path.split('/'), 1).toString();

                        var arr = path.split('.');
                        arr = _o_.array.removeLast(arr);

                        if (s.behaviour.sideMenu.useNumberOnFileNameToSort === true)
                            arr = _o_.array.removeFirst(arr, 1);

                        path = arr.join('.');

                        var caseType = s.behaviour.common.applicationTitleCase;
                        if (_o_.string.isEqual(caseType, 'uppercase', false))
                            path = _o_.string.toUpper(path);

                        else if (_o_.string.isEqual(caseType, 'lowercase', false))
                            path = _o_.string.toLower(path);

                        else if (_o_.string.isEqual(caseType, 'capitalize', false))
                            path = _o_.string.capitalize(path, true);

                        return path;
                    }
                }
            }
        }
    };

    w.octapushDoc = Object.assign(w.octapushDoc, octaDoc);
    w.octapushDoc.register.apply();
})(window, document, window.octapushDoc.configurations);