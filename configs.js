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
        title: 'octaDoc',
        githubData: {
            owner: 'octapush',
            project: 'octapush.docs',
            branch: 'master',
            docDirectory: 'docs-data'
        },
        embedDocTitle: true,
        openExternalLinkOnNewTab: true,
        behaviour: {
            page: {
                convertUrlIntoAnchor: true,
                initialPage: {
                    useFirstMenuItem: true,
                    customInitialPage: {
                        title: 'home',
                        directoryPath: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/9087473574e115a76a1d313cf59126ba0891da10'
                    }
                }
            },
            sideMenu: {
                textCase: 'capitalize',
                background: 'brown',
                color: 'danger',

                showMdFilesOnly: true,
                hideEmptyDirectory: true,

                hideFilesOrDirectory: [
                    'Hidden Directory',

                    'editing documents/hidden file.MD',
                    'license.md',
                ],
                before: [],
                after: []
            },
            footerLinks: [{
                    title: 'Author',
                    url: 'http://fadhly.hol.es'
                },
                {
                    title: 'License',
                    url: 'https://github.com/octapush/octapush.docs/blob/master/LICENSE'
                },
                {
                    title: 'Download',
                    url: 'links3.md'
                }
            ]
        },
    };

    // DON'T CHANGE BELOW LINES !!!
    w.octapushDoc = {
        configurations: configurations
    };
})(window);