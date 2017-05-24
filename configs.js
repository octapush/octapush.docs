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
 * See configurations sections from octapush.docs documentation page for detail
 * informations about configuring this file.
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
        title: 'octapush.docs',
        githubData: {
            owner: 'octapush',
            project: 'documentations',
            branch: 'master',
            docDirectory: 'octapush.docs'
        },
        behaviour: {
            common: {
                applicationTitleCase: 'as-is', // "as-is" | "uppercase" | "lowercase" | "capitalize"

                docTitleType: 'combine', // "app" | "page" | "combine"
                docTitleCombineSeparator: '-',
                openExternalLinkOnNewTab: true,
                scrollSpeed: 1000 // in millisecond
            },
            page: {
                // "pathOfInitialPage" setting will be ignored when user open the documentation
                // using hardlink (this is for bookmark support purposes).
                pathOfInitialPage: 'first-menu-item', // "first-menu-item" || your file path,
                
                supportImageFile: true,
                supportMarkupFile: true,

                markdown: {
                    encodeUrls: true,
                    encodeEmails: true,
                    headerLevelStart: 1, // 1 = <h1> | 2 = <h2> | ... and so on.
                    stripTable: true
                }
            },
            sideMenu: {
                textCase: 'as-is', // "as-is" | "capitalize" | "uppercase" | "lowercase"
                background: 'brown', // "white" | "brown"
                color: 'danger', // "primary" | "info" | "success" | "warning" | "danger"

                useNumberOnFileNameToSort: true,

                showMdFilesOnly: true,
                hideEmptyDirectory: true,

                hideFilesOrDirectory: [
                    '00.ASSETS', // <<- SAMPLE FOR DIRECTORY

                    '05.documenting/05.hidden file.MD', // <-- SAMPLE FOR FILE
                ],
                before: [],
                after: []
            },
            footerLinks: [{
                    title: 'Author',
                    url: 'http://fadhly.hol.es'
                },
                {
                    title: 'octapush Projects',
                    url: 'https://github.com/octapush'
                },
                {
                    title: 'Download',
                    url: 'https://github.com/octapush/octapush.docs/'
                }
            ]
        },
    };

    // DON'T CHANGE BELOW LINES !!!
    w.octapushDoc = {
        configurations: configurations
    };
})(window);