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
 * =================================================================================
 * INFO:
 * 
 * It's recommended to pack this configuration (this is javascript file) file to 
 * make sure octapush.docs is loaded faster. Remove any commented line on this files,
 * except comment lines on the header.
 * 
 * You are not ALLOWED to remove this metadata lines.
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


            // Your initial page
            // Will be loaded first while showing app.
            initialPage: {
                title: 'Home',
                url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/9087473574e115a76a1d313cf59126ba0891da10'
            },


            // Your github data property that will be fetched.
            githubData: {
                // The owner name of project
                owner: 'octapush',


                // The project name
                project: 'octapush.docs',


                // The branch name
                branch: 'master',


                // The directory name inside your project, that will be used as documentation folder.
                // DO NOT USE NESTED DIRECTORY!!!
                documentDirectory: 'docs-data'
            },


            appearances: {
                markdown: {
                    // Change all url on your MD files into hyperlink (anchor)
                    convertUrlIntoAnchor: true
                },
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

                        'editing documents/hidden file.MD', // <== This file will be hidden
                        'license.md', // <== hide only from documentation directory (but not removing from "before" or "after" section)
                    ],


                    // Additional menus to put first on side menu.
                    // The menus will be sorted by position of Array.
                    //
                    // NOTE FOR THIS STATIC LINK:
                    // - Becareful, URL from api.github.com will be changed whenever you updating (create/update/delete) it.
                    before: [
                        {
                            title: 'introduction.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/9087473574e115a76a1d313cf59126ba0891da10'
                        },
                        {
                            title: 'download.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391'
                        }
                    ],

                    // Additional menus to put below on side menu.
                    // The menus will be sorted by position of Array.
                    after: [
                        {
                            title: 'authors.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391'
                        },
                        {
                            title: 'license.md', // <== please assign extension of your file so we know how to handle it
                            url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391'
                        }
                    ]
                },


                // Additional links for footer.
                //
                // NOTE:
                // Below links always opened in a new tab 
                footerLinks: [
                    {
                        title: 'Author',
                        url: 'http://fadhly.hol.es'
                    },
                    {
                        title: 'License',
                        url: 'links2.md'
                    }, ,
                    {
                        title: 'Download',
                        url: 'links3.md'
                    }
                ]
            }
        }
    };

    // DON'T CHANGE BELOW LINES !!!
    w.octapushDoc = { configurations: configurations };
})(window);