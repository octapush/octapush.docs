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
        execScript: true,
        useDummyData: true,
        animationSpeed: 250,
        octapushJS: {
            pluginUrl: 'https://cdn.rawgit.com/octapush/octapushJS/418319e3/plugins/',
            loadPlugin: ['array']
        },
        specialMime: {
            images: ['jpg', 'jpeg', 'gif', 'png', 'bmp'],
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
                if (regType === 'load') {
                    // change appearances and/or DOM ASAP
                    octaDoc.ui.document.register.apply();
                    octaDoc.ui.sideMenu.appearances.color.apply();

                } else if (regType === 'ready') {
                    octaDoc.ui.sideMenu.register.apply();
                }
            },
            document: {
                register: function() {
                    octaDoc.ui.document.title.apply();
                    octaDoc.ui.document.initScrollbar.apply();
                },
                title: function() {
                    $('head > title').text(s.title);
                },
                initScrollbar: function() {
                    $('div.main-panel')
                        .css('overflow', 'hidden !important')
                        .perfectScrollbar();
                }
            },
            sideMenu: {
                register: function() {
                    octaDoc.ui.sideMenu.title.apply();

                    octaDoc.ui.sideMenu.build.init(function() {
                        octaDoc.ui.sideMenu.appearances.case.apply();
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

                    var tLi = target.parent();
                    tLi.addClass('active');

                    var tParent = tLi.parents('li');
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
                            // TODO: LANJUT DISINI

                            if (cb) cb(data);
                        });
                    },
                    fetchItems: function(cb) {
                        if (!s.useDummyData)
                            octaDoc.helper.github.getDocDirectoryUrl(function(docUrl) {
                                octaDoc.helper.github.getFilesAndDirFromDocDir(function(data) {
                                    // save XHR.tree for next purposes
                                    s.githubDataBuffer = data;

                                    data = octaDoc.helper.dataParser.sideMenu.menuDataBuilder(data.tree);
                                    data = octaDoc.ui.sideMenu.build.constructDom(data);

                                    if (cb) cb(data);
                                });
                            });

                        else {
                            _o_.ajax.get({
                                url: _o_.string.concat('dummy-menu.json?random=', Math.floor(Math.random() * 10000)),
                                success: function(xhr) {
                                    if (!xhr.responseText) return;

                                    xhr = JSON.parse(xhr.responseText);
                                    s.githubDataBuffer = xhr;

                                    xhr = octaDoc.helper.dataParser.sideMenu.menuDataBuilder(xhr.tree);
                                    xhr = octaDoc.ui.sideMenu.build.constructDom(xhr);

                                    if (cb) cb(xhr);
                                }
                            });
                        }
                    },
                    constructDom: function(data) {
                        var sMenu = '';

                        _o_.utility.each(data, function(key, val) {
                            if (_o_.compare.isString(val)) {
                                var arrName = key.split('.');
                                var title = _o_.array.removeLast(arrName, 0).join('');

                                sMenu += _o_.string.format(
                                    '<li><a href="#{1}"><p>{2}</p></a></li>',
                                    _o_.string.toLower(val),
                                    title
                                );

                            } else {
                                var sTemp = '<li><a data-toggle="collapse" href="#{2}" aria-expanded="false"><p>{1}<b class="caret"></b></p></a>'
                                sTemp += '<div class="collapse" id="{2}" aria-expanded="false"><ul class="nav">';
                                sTemp += octaDoc.ui.sideMenu.build.constructDom(val);
                                sTemp += '</ul></div>';
                                sTemp += '</li>';

                                sMenu += _o_.string.format(
                                    sTemp,
                                    key,
                                    _o_.string.dasherize(key)
                                );
                            }
                        });

                        return sMenu;
                    }
                }
            },
            page: {
                update: function(data) {
                    octaDoc.ui.page.title(data.title);
                    octaDoc.ui.page.content(data);
                },
                title: function(data) {
                    $('a#document-title').text(_o_.string.capitalize(data, true));
                },
                content: function(data) {
                    if (s.specialMime.images.indexOf(data.extension) !== -1) {
                        $('div#document-wrapper').html(
                            _o_.string.format('<img class="center-block" src="data:image/{1};base64,{2}" />', data.extension, data.content)
                        );

                    } else {
                        data.content = octaDoc.helper.utility.base64.decode(data.content);

                        // handle as MD file
                        if (_o_.string.isEqual(_o_.string.toLower(data.extension), 'md')) {
                            $('div#document-wrapper').html(
                                new showdown.Converter({
                                    simplifiedAutoLink: s.behaviour.page.convertUrlIntoAnchor,
                                    ghCompatibleHeaderId: true,
                                    tables: true
                                })
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

                        octaDoc.ui.plugins.hljs.reInit.apply();
                        octaDoc.events.page.anchors.click.apply();
                    }

                    $('div.main-panel').scrollTop(0);
                    octaDoc.ui.plugins.perfectScrollbar.update('div.main-panel');
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
                                                title: that.text(),
                                                extension: octaDoc.helper.dataParser.sideMenu.getExtensionFromPath(url),
                                                content: xhr.content
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
                                        alert('DO LOAD PAGE PROGRESS HERE.');

                                    } else {
                                        octaDoc.helper.utility.hash.scroll(href, function() {
                                            octaDoc.ui.plugins.perfectScrollbar.update('div.main-panel');
                                        });
                                    }

                                    return false;
                                }

                                // handle outside domain url
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
                        return !_o_.utility.ifNull(withHash, false) ?
                            w.location.hash.substr(1).split('#') :
                            w.location.hash;
                    },
                    set: function(newHash, removeOld) {
                        if (!_o_.string.isStartsWith(newHash, '#'))
                            newHash = _o_.string.concat('#', newHash);

                        if (_o_.utility.ifNull(removeOld, true)) {
                            w.location.hash = newHash

                        } else {
                            if (_o_.string.isContain(w.location.hash, newHash))
                                w.location.hash = _o_.string.format('{1}{2}', octaDoc.helper.utility.hash.get(), newHash);
                        }
                    },
                    scroll: function(hash, cb) {
                        // if the DOM is available
                        if ($(hash).length > 0) {
                            location.hash = hash;
                            octaDoc.helper.utility.hash.set(_o_.string.concat(octaDoc.helper.utility.hash.get(false), hash));

                            if (cb) cb();
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
                            result = mapData(result, val.path.split('/'), val.type === 'tree' ? {} : val.path);
                        });

                        return result;
                    },
                    getUrlByPath: function(path) {
                        var ghData = s.githubDataBuffer.tree.filter(function(i) {
                            if (_o_.string.isEqual(i.path, path, false))
                                return i;
                        });

                        return ghData[0]['url'];
                    },
                    getExtensionFromPath: function(path) {
                        var arrPath = path.split('.');
                        return _o_.array.takeLast(arrPath).join('');
                    }
                }
            },
            dom: {}
        }
    };

    w.octapushDoc = Object.assign(w.octapushDoc, octaDoc);
    w.octapushDoc.register.apply();
})(window, document, window.octapushDoc.configurations);