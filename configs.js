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
 * This file is a part of octapush.docs (https://github.com/octapush/octapush.docs).
 * And This file will be used as configuration data of octapush.docs.
 * 
 * It's recommended to pack this configuration (this is javascript file) file to 
 * make sure octapush.docs is loaded faster. Remove any commented line on this files,
 * except comment lines on the header. You are not ALLOWED to remove this metadata
 * lines.
 *
 */

(function(w) {
    'use strict';
    let configurations = {
        // Make the script will be executed or not.
        execScript: true, // NOT RECOMMENDED to change this setting!!!!


        // Main application settings
        application: {
            // The title of your documentation
            title: 'OCTAPUSH.DOCS',


            // The URL of your homepage.
            homepage: 'https://github.com/octapush/octapush.docs',


            // The github API tree. This URL will be fetched as octapush.docs side menu tree structure.
            // To get your github API tree, you can change these your URL:
            // https://api.github.com/repos/(owner)/(project)/git/trees/(branch)
            githubApiTree: 'https://api.github.com/repos/octapush/octapush.docs/git/trees/334b0ecf6707137ef82ca9f4e996856adeaab5e8',


            appearances: {
                sideMenu: {
                    // The text-case that will be used on side menu
                    textCase: 'capitalize', // uppercase, lowercase, capitalize


                    // Side menu background color
                    background: 'brown', // white | brown,


                    // Side menu font color
                    color: 'danger' // primary | info | success | warning | danger 
                }
            },

            additionalData: {
                sideMenu: {
                    // Display only MD files.
                    showMdFilesOnly: false,


                    // Hide empty directory.
                    hideEmptyDirectory: true,


                    // The files that will be hided on side menu.
                    // Write the github api PATH's only, and write inside quote, and comma separated.
                    hideFilesOrDirectory: [
                        'Hidden Directory', // <== This Directory will be hidden (include files inside it)
                        'Editing Documents/Hidden File.MD' // <== This file will be hidden
                    ],


                    // Additional menus to put first on side menu.
                    // The menus will be sorted by position of Array.
                    //
                    // NOTE FOR THIS STATIC LINK:
                    // - URL from api.github.com will be changed whenever you updating (create/update/delete) it.
                    before: [
                        {
                            title: 'introduction.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/37c7a413c318a27d9981f828f9554f66f00e8bb9'
                        },
                        {
                            title: 'download.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/37c7a413c318a27d9981f828f9554f66f00e8bb9'
                        }
                    ],


                    // Additional menus to put below on side menu.
                    // The menus will be sorted by position of Array.
                    after: [
                        {
                            title: 'authors.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapushJS/git/blobs/8aeaecddaa63d29a1facedcc193e3518ad163918'
                        },
                        {
                            title: 'license.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapushJS/git/blobs/8aeaecddaa63d29a1facedcc193e3518ad163918'
                        }
                    ]
                },


                // Additional links for footer.
                footerLinks: [
                    {
                        title: 'Author',
                        url: 'http://fadhly.hol.es',
                        target: 'newTab' // self || newTab
                    },
                    {
                        title: 'License',
                        url: 'links2.md',
                        target: 'self' // self || newTab
                    }, ,
                    {
                        title: 'Download',
                        url: 'links3.md',
                        target: 'self' // self || newTab
                    }
                ]
            }
        },
        sampleData: {
            "sha": "334b0ecf6707137ef82ca9f4e996856adeaab5e8",
            "url": "https://api.github.com/repos/octapush/octapush.docs/git/trees/334b0ecf6707137ef82ca9f4e996856adeaab5e8",
            "tree": [{
                    "path": "Configuration.MD",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "Editing Documents",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "309689d556fc8ada2c4c2eea7a2ed5c4bd1caa9d",
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/trees/309689d556fc8ada2c4c2eea7a2ed5c4bd1caa9d"
                },
                {
                    "path": "Editing Documents/Create Document.MD",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "Editing Documents/Delete Document.MD",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "Editing Documents/Edit Document.MD",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "Installation.MD",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc87c9ff0d8eb14fae5cb5bdc86ad8ac9d6d6836",
                    "size": 57,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/bc87c9ff0d8eb14fae5cb5bdc86ad8ac9d6d6836"
                },
                {
                    "path": "Samples",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "8903c53453bcb967eb7589cce4358e9d8e049a92",
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/trees/8903c53453bcb967eb7589cce4358e9d8e049a92"
                },
                {
                    "path": "Samples/HTML File.html",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "Samples/MD File.MD",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "Samples/Script File.JS",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                }
            ],
            "truncated": false
        }
    };

    // DON'T CHANGE BELOW LINES !!!
    w.octapushDoc = { configurations: configurations };
})(window);