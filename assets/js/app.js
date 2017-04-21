/*
 * TODO:
 * - ADD SIDE MENU SORTING
 * - SIDE MENU DATA BY AJAX
 * - SIDE MENU perfectScrollbar NOT RUNNING
 */

'use strict';
var settings = {
    execScript: true,
    application: {
        title: 'OCTAPUSH.DOCZ',
        homepage: 'https://github.com/octapush/octapush.docs',
        githubApiTree: 'https://api.github.com/repos/octapush/octapushJS/git/trees/c1f15f9996fcf7c3d6729f336469439db00597fa',
        appearances: {
            sideMenu: {
                background: 'white', // white | brown,
                color: 'danger' // primary | info | success | warning | danger 
            }
        },
        additionalData: {
            sideMenu: {
                showMdFilesOnly: false,
                hideEmptyDirectory: true,
                hideFiles: [],
                before: [{
                    title: 'Introduction.md', // <== please assign extension of your file so we know how to handle it
                    url: 'introduction.md'
                }, {
                    title: 'photo.jpg', // <== please assign extension of your file so we know how to handle it
                    url: 'https://api.github.com/repos/fadhly-permata/Resume/git/blobs/726ede6314c6433344c29dd796dc6502b558cf70'
                }, {
                    title: 'site map.html', // <== please assign extension of your file so we know how to handle it
                    url: 'https://api.github.com/repos/fadhly-permata/Resume/git/blobs/fa302ac628df630b284c2dae73c05cb9776d49bf'
                }],
                after: [{
                    title: 'Sample.js', // <== please assign extension of your file so we know how to handle it
                    url: 'https://api.github.com/repos/octapush/octapushJS/git/blobs/8aeaecddaa63d29a1facedcc193e3518ad163918'
                }]
            },
            footerLinks: [{
                    title: 'Author',
                    url: 'http://fadhly.hol.es',
                    target: 'newTab' // self || newTab
                },
                {
                    title: 'Links 2',
                    url: 'links2.md',
                    target: 'self' // self || newTab
                }, ,
                {
                    title: 'Links 3',
                    url: 'links3.md',
                    target: 'self' // self || newTab
                }
            ]
        }
    }
};

var sampleData = {
    "sha": "c1f15f9996fcf7c3d6729f336469439db00597fa",
    "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/c1f15f9996fcf7c3d6729f336469439db00597fa",
    "tree": [{
            "path": "LICENSE",
            "mode": "100644",
            "type": "blob",
            "sha": "ff803f5dbf81f235b667c1ba75d11951ecd97f6e",
            "size": 1065,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/ff803f5dbf81f235b667c1ba75d11951ecd97f6e"
        },
        {
            "path": "README.md",
            "mode": "100644",
            "type": "blob",
            "sha": "e07392f11d15b1985de81ec4a3e4ace0e5bf9d96",
            "size": 2564,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/e07392f11d15b1985de81ec4a3e4ace0e5bf9d96"
        },
        {
            "path": "docs",
            "mode": "040000",
            "type": "tree",
            "sha": "c1f15f9996fcf7c3d6729f336469439db00597fa",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/c1f15f9996fcf7c3d6729f336469439db00597fa"
        },
        {
            "path": "docs/assets",
            "mode": "040000",
            "type": "tree",
            "sha": "608859d4245a529078de0c4ffa793a63964ceaa8",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/608859d4245a529078de0c4ffa793a63964ceaa8"
        },
        {
            "path": "docs/assets/app",
            "mode": "040000",
            "type": "tree",
            "sha": "dca744165237f811b01f9fbc5a9c5c9e62782d59",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/dca744165237f811b01f9fbc5a9c5c9e62782d59"
        },
        {
            "path": "docs/assets/app/script.js",
            "mode": "100644",
            "type": "blob",
            "sha": "3c651fb60d9c7b44b5c2200597be780848db162c",
            "size": 17074,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3c651fb60d9c7b44b5c2200597be780848db162c"
        },
        {
            "path": "docs/assets/app/styles.css",
            "mode": "100644",
            "type": "blob",
            "sha": "04d7b1786fd411e50fd14039bc9f70612ccad594",
            "size": 1186,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/04d7b1786fd411e50fd14039bc9f70612ccad594"
        },
        {
            "path": "docs/assets/bootstrap",
            "mode": "040000",
            "type": "tree",
            "sha": "f320723d8f41e47df4570f96b16ffffa2b3cbe9f",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/f320723d8f41e47df4570f96b16ffffa2b3cbe9f"
        },
        {
            "path": "docs/assets/bootstrap/css",
            "mode": "040000",
            "type": "tree",
            "sha": "950d9fc0a76396f13fa3e97c429027e41a958367",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/950d9fc0a76396f13fa3e97c429027e41a958367"
        },
        {
            "path": "docs/assets/bootstrap/css/bootstrap.css",
            "mode": "100644",
            "type": "blob",
            "sha": "42c79d6e459ece1c606314879146768dad3d2656",
            "size": 146082,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/42c79d6e459ece1c606314879146768dad3d2656"
        },
        {
            "path": "docs/assets/bootstrap/css/bootstrap.css.map",
            "mode": "100644",
            "type": "blob",
            "sha": "09f8cda78a2082983b574be3abab705f8f169ab8",
            "size": 389227,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/09f8cda78a2082983b574be3abab705f8f169ab8"
        },
        {
            "path": "docs/assets/bootstrap/css/bootstrap.min.css",
            "mode": "100644",
            "type": "blob",
            "sha": "4cf729e4342a51d8b300e8d43f2f78b0a6faf403",
            "size": 121260,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/4cf729e4342a51d8b300e8d43f2f78b0a6faf403"
        },
        {
            "path": "docs/assets/bootstrap/css/bootstrap.min.css.map",
            "mode": "100644",
            "type": "blob",
            "sha": "5f49bb37443c13fec81f2089d0d5559bc5a407e4",
            "size": 54416,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/5f49bb37443c13fec81f2089d0d5559bc5a407e4"
        },
        {
            "path": "docs/assets/bootstrap/fonts",
            "mode": "040000",
            "type": "tree",
            "sha": "14032aabd85b43a058cfc7025dd4fa9dd325ea97",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/14032aabd85b43a058cfc7025dd4fa9dd325ea97"
        },
        {
            "path": "docs/assets/bootstrap/fonts/glyphicons-halflings-regular.eot",
            "mode": "100644",
            "type": "blob",
            "sha": "b93a4953fff68df523aa7656497ee339d6026d64",
            "size": 20127,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/b93a4953fff68df523aa7656497ee339d6026d64"
        },
        {
            "path": "docs/assets/bootstrap/fonts/glyphicons-halflings-regular.svg",
            "mode": "100644",
            "type": "blob",
            "sha": "94fb5490a2ed10b2c69a4a567a4fd2e4f706d841",
            "size": 108738,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/94fb5490a2ed10b2c69a4a567a4fd2e4f706d841"
        },
        {
            "path": "docs/assets/bootstrap/fonts/glyphicons-halflings-regular.ttf",
            "mode": "100644",
            "type": "blob",
            "sha": "1413fc609ab6f21774de0cb7e01360095584f65b",
            "size": 45404,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/1413fc609ab6f21774de0cb7e01360095584f65b"
        },
        {
            "path": "docs/assets/bootstrap/fonts/glyphicons-halflings-regular.woff",
            "mode": "100644",
            "type": "blob",
            "sha": "9e612858f802245ddcbf59788a0db942224bab35",
            "size": 23424,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/9e612858f802245ddcbf59788a0db942224bab35"
        },
        {
            "path": "docs/assets/bootstrap/fonts/glyphicons-halflings-regular.woff2",
            "mode": "100644",
            "type": "blob",
            "sha": "64539b54c3751a6d9adb44c8e3a45ba5a73b77f0",
            "size": 18028,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/64539b54c3751a6d9adb44c8e3a45ba5a73b77f0"
        },
        {
            "path": "docs/assets/bootstrap/js",
            "mode": "040000",
            "type": "tree",
            "sha": "6a9983abc23326c11e5d746db1514fe2bb63f9fa",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/6a9983abc23326c11e5d746db1514fe2bb63f9fa"
        },
        {
            "path": "docs/assets/bootstrap/js/bootstrap.js",
            "mode": "100644",
            "type": "blob",
            "sha": "d59150fc972b790a4af9e8bce1663de83a3a02db",
            "size": 75339,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/d59150fc972b790a4af9e8bce1663de83a3a02db"
        },
        {
            "path": "docs/assets/bootstrap/js/bootstrap.min.js",
            "mode": "100644",
            "type": "blob",
            "sha": "e79c065134f2cfcf3e44a59cffcb5f090232f98f",
            "size": 36868,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/e79c065134f2cfcf3e44a59cffcb5f090232f98f"
        },
        {
            "path": "docs/assets/bootstrap/js/npm.js",
            "mode": "100644",
            "type": "blob",
            "sha": "bf6aa80602d9303b61e8d5e63c10568e55b6a4d8",
            "size": 484,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/bf6aa80602d9303b61e8d5e63c10568e55b6a4d8"
        },
        {
            "path": "docs/assets/highlight",
            "mode": "040000",
            "type": "tree",
            "sha": "41105686b02a6fc03894005f0c3b673e9cc81fea",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/41105686b02a6fc03894005f0c3b673e9cc81fea"
        },
        {
            "path": "docs/assets/highlight/default.min.css",
            "mode": "100644",
            "type": "blob",
            "sha": "7d8be18d058e99055a338b9317befa920f4447c5",
            "size": 776,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/7d8be18d058e99055a338b9317befa920f4447c5"
        },
        {
            "path": "docs/assets/highlight/highlight.min.js",
            "mode": "100644",
            "type": "blob",
            "sha": "7178d339b35bccdec60e7616c2d977af0709a217",
            "size": 45164,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/7178d339b35bccdec60e7616c2d977af0709a217"
        },
        {
            "path": "docs/assets/highlight/highlight.pack.js",
            "mode": "100644",
            "type": "blob",
            "sha": "3c89ddbe76cd37505798003d9ecdbae96a3c4e08",
            "size": 11508,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3c89ddbe76cd37505798003d9ecdbae96a3c4e08"
        },
        {
            "path": "docs/assets/highlight/monokai.css",
            "mode": "100644",
            "type": "blob",
            "sha": "775d53f91aa86bacb11a63e551c40702fb809d06",
            "size": 938,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/775d53f91aa86bacb11a63e551c40702fb809d06"
        },
        {
            "path": "docs/assets/jQuery",
            "mode": "040000",
            "type": "tree",
            "sha": "74107912e07d5f05c7e1e95a1a4bfa62fc4c4842",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/74107912e07d5f05c7e1e95a1a4bfa62fc4c4842"
        },
        {
            "path": "docs/assets/jQuery/jquery-2.2.3.min.js",
            "mode": "100644",
            "type": "blob",
            "sha": "b8c4187de18dd413ad3029839ce0773549e92a14",
            "size": 85659,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/b8c4187de18dd413ad3029839ce0773549e92a14"
        },
        {
            "path": "docs/assets/style",
            "mode": "040000",
            "type": "tree",
            "sha": "d627f46b80b4cf0f2f080e35cec585b5972e5cca",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/d627f46b80b4cf0f2f080e35cec585b5972e5cca"
        },
        {
            "path": "docs/assets/style/docs.css",
            "mode": "100644",
            "type": "blob",
            "sha": "f359208598902ab01453324921ec8a90f51bee1e",
            "size": 16890,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/f359208598902ab01453324921ec8a90f51bee1e"
        },
        {
            "path": "docs/data",
            "mode": "040000",
            "type": "tree",
            "sha": "a5493999ca4ff4e6f1b30ed7718ba9616a3fa711",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/a5493999ca4ff4e6f1b30ed7718ba9616a3fa711"
        },
        {
            "path": "docs/data/_o_.compare.isArray.xml",
            "mode": "100644",
            "type": "blob",
            "sha": "1abac4a0436947e98abdf9241329779cd457f211",
            "size": 1995,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/1abac4a0436947e98abdf9241329779cd457f211"
        },
        {
            "path": "docs/data/_o_.compare.isNullOrEmpty.json",
            "mode": "100644",
            "type": "blob",
            "sha": "efe2d6236d3fba0c93499f4b8950e8652f61e821",
            "size": 1561,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/efe2d6236d3fba0c93499f4b8950e8652f61e821"
        },
        {
            "path": "docs/data/_o_.compare.isNullOrEmpty2.json",
            "mode": "100644",
            "type": "blob",
            "sha": "fbfdd29b38264af1cee0969d995cc0de120dbf51",
            "size": 808,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/fbfdd29b38264af1cee0969d995cc0de120dbf51"
        },
        {
            "path": "docs/data/_o_.compare.xml",
            "mode": "100644",
            "type": "blob",
            "sha": "08924d6b87ee3b58bdedd69fa464084fd315dfc5",
            "size": 2102,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/08924d6b87ee3b58bdedd69fa464084fd315dfc5"
        },
        {
            "path": "docs/data/_o_.copyleft.xml",
            "mode": "100644",
            "type": "blob",
            "sha": "3735a1df014f66868eb8ff21300b2e194ccd73af",
            "size": 2467,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3735a1df014f66868eb8ff21300b2e194ccd73af"
        },
        {
            "path": "docs/data/_o_.showCopyleft.xml",
            "mode": "100644",
            "type": "blob",
            "sha": "05040d91776a5708b4b1c0deb6ec952fa96d32eb",
            "size": 1071,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/05040d91776a5708b4b1c0deb6ec952fa96d32eb"
        },
        {
            "path": "docs/data/_o_.version.xml",
            "mode": "100644",
            "type": "blob",
            "sha": "d6bbe79335269e9b0da1fae5d5d0e4c0804b8b8a",
            "size": 1467,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/d6bbe79335269e9b0da1fae5d5d0e4c0804b8b8a"
        },
        {
            "path": "docs/data/sample.json",
            "mode": "100644",
            "type": "blob",
            "sha": "3208afb5f46f2479814d51e547cc26934691d57f",
            "size": 1095,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3208afb5f46f2479814d51e547cc26934691d57f"
        },
        {
            "path": "docs/index.html",
            "mode": "100644",
            "type": "blob",
            "sha": "01e9c58281a5552119da499a6c1e7188b03a3dec",
            "size": 5569,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/01e9c58281a5552119da499a6c1e7188b03a3dec"
        },
        {
            "path": "docs/index_ori.html",
            "mode": "100644",
            "type": "blob",
            "sha": "455b1b8c93e35854de6da82a96b8df39b4842b8e",
            "size": 6952,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/455b1b8c93e35854de6da82a96b8df39b4842b8e"
        },
        {
            "path": "docs/template",
            "mode": "040000",
            "type": "tree",
            "sha": "68153a73994a4d5c2614dbe4bc5385ce48c27699",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/68153a73994a4d5c2614dbe4bc5385ce48c27699"
        },
        {
            "path": "docs/template/_o_.template.json",
            "mode": "100644",
            "type": "blob",
            "sha": "3208afb5f46f2479814d51e547cc26934691d57f",
            "size": 1095,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/3208afb5f46f2479814d51e547cc26934691d57f"
        },
        {
            "path": "docs/template/_o_.template.xml",
            "mode": "100644",
            "type": "blob",
            "sha": "2e6b56c80b269225aa06f354c722feac0607485c",
            "size": 1299,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/2e6b56c80b269225aa06f354c722feac0607485c"
        },
        {
            "path": "localization",
            "mode": "040000",
            "type": "tree",
            "sha": "a71c824acc8dd1bc76012620ddb23de7910e4ac6",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/a71c824acc8dd1bc76012620ddb23de7910e4ac6"
        },
        {
            "path": "localization/datetime",
            "mode": "040000",
            "type": "tree",
            "sha": "88832f89c457f0ccd56cc77da8050b27648baf13",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/88832f89c457f0ccd56cc77da8050b27648baf13"
        },
        {
            "path": "localization/datetime/af.js",
            "mode": "100644",
            "type": "blob",
            "sha": "a58d65c6b4e147cbcae02118c7e513190be91082",
            "size": 1347,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/a58d65c6b4e147cbcae02118c7e513190be91082"
        },
        {
            "path": "localization/datetime/af.min.js",
            "mode": "100644",
            "type": "blob",
            "sha": "b22f23961bff93b8d45d8375893eaf9c1857e18d",
            "size": 1009,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/b22f23961bff93b8d45d8375893eaf9c1857e18d"
        },
        {
            "path": "localization/datetime/az.js",
            "mode": "100644",
            "type": "blob",
            "sha": "8b0aaba6a8e787970937043077d98281cb563baa",
            "size": 1377,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/8b0aaba6a8e787970937043077d98281cb563baa"
        },
        {
            "path": "localization/datetime/az.min.js",
            "mode": "100644",
            "type": "blob",
            "sha": "06c79b0eb07945baabfefc9976ae55f4ff82b92f",
            "size": 1039,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/06c79b0eb07945baabfefc9976ae55f4ff82b92f"
        },
        {
            "path": "localization/datetime/idn.js",
            "mode": "100644",
            "type": "blob",
            "sha": "397c9f06d0a61721f021c1f3b3712c2bc0d57739",
            "size": 1258,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/397c9f06d0a61721f021c1f3b3712c2bc0d57739"
        },
        {
            "path": "localization/datetime/idn.min.js",
            "mode": "100644",
            "type": "blob",
            "sha": "aee3c509722c6bb72603747163e0d107cc64c54c",
            "size": 948,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/aee3c509722c6bb72603747163e0d107cc64c54c"
        },
        {
            "path": "octapush.js",
            "mode": "100644",
            "type": "blob",
            "sha": "d17103d5606e661120a0750db01c5d940af3d569",
            "size": 20468,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/d17103d5606e661120a0750db01c5d940af3d569"
        },
        {
            "path": "plugins",
            "mode": "040000",
            "type": "tree",
            "sha": "465eca6f6eb4bc0f07dcd2854f3af2699fb0ed84",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/465eca6f6eb4bc0f07dcd2854f3af2699fb0ed84"
        },
        {
            "path": "plugins/octapush.array.js",
            "mode": "100644",
            "type": "blob",
            "sha": "4b97c4e485c03f4ad45cd57ee4736464b64b166c",
            "size": 5158,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/4b97c4e485c03f4ad45cd57ee4736464b64b166c"
        },
        {
            "path": "plugins/octapush.datetime.js",
            "mode": "100644",
            "type": "blob",
            "sha": "0572e1ad698c088b53bd07268443e04c6d3775b8",
            "size": 8949,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/0572e1ad698c088b53bd07268443e04c6d3775b8"
        },
        {
            "path": "plugins/octapush.number.js",
            "mode": "100644",
            "type": "blob",
            "sha": "eac9f8ccffa893ba2cf31df09bec6d403c1b96be",
            "size": 3250,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/eac9f8ccffa893ba2cf31df09bec6d403c1b96be"
        },
        {
            "path": "plugins/octapush.string.js",
            "mode": "100644",
            "type": "blob",
            "sha": "db052a87bd93485ca4b840bb523bb7f4362efae9",
            "size": 22643,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/db052a87bd93485ca4b840bb523bb7f4362efae9"
        },
        {
            "path": "plugins/octapush.webresource.js",
            "mode": "100644",
            "type": "blob",
            "sha": "eb653eb4030abae447ddf7dab29ef8f6fefe3243",
            "size": 10769,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/eb653eb4030abae447ddf7dab29ef8f6fefe3243"
        },
        {
            "path": "template",
            "mode": "040000",
            "type": "tree",
            "sha": "2508e270e9c85382b9ae9304772d25fc50298ad4",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/2508e270e9c85382b9ae9304772d25fc50298ad4"
        },
        {
            "path": "template/octapush.plugin.template.js",
            "mode": "100644",
            "type": "blob",
            "sha": "291188a27ae1c82a2d05e599fb401386094c127a",
            "size": 747,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/291188a27ae1c82a2d05e599fb401386094c127a"
        },
        {
            "path": "tester",
            "mode": "040000",
            "type": "tree",
            "sha": "e830fcbcd5b4341dc4a6f49a8b4293b06c1f6200",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/e830fcbcd5b4341dc4a6f49a8b4293b06c1f6200"
        },
        {
            "path": "tester/core",
            "mode": "040000",
            "type": "tree",
            "sha": "cb82ad81bdf59839d027c25f3d2da4bab101d90b",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/cb82ad81bdf59839d027c25f3d2da4bab101d90b"
        },
        {
            "path": "tester/core/copyleft.html",
            "mode": "100644",
            "type": "blob",
            "sha": "debf3327f56d440d1731db9b12bb3dcdb29d5ca4",
            "size": 422,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/debf3327f56d440d1731db9b12bb3dcdb29d5ca4"
        },
        {
            "path": "tester/core/isNullOrEmpty.html",
            "mode": "100644",
            "type": "blob",
            "sha": "4cc68419be6117fb280b21e2e817f4a66ee632b2",
            "size": 1114,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/4cc68419be6117fb280b21e2e817f4a66ee632b2"
        },
        {
            "path": "tester/core/plugin.loader.html",
            "mode": "100644",
            "type": "blob",
            "sha": "2e1830575aba45381ed2764e52c623cf5c5b4bdd",
            "size": 431,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/2e1830575aba45381ed2764e52c623cf5c5b4bdd"
        },
        {
            "path": "tester/core/plugin.webresource.html",
            "mode": "100644",
            "type": "blob",
            "sha": "9779f9826ac4fa648eed21b5e1f187c98e097107",
            "size": 699,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/9779f9826ac4fa648eed21b5e1f187c98e097107"
        },
        {
            "path": "tester/core/temp.ajax.2.html",
            "mode": "100644",
            "type": "blob",
            "sha": "ee6844ac6bf3ff8adafbe753f6e5aed77748dae0",
            "size": 1934,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/ee6844ac6bf3ff8adafbe753f6e5aed77748dae0"
        },
        {
            "path": "tester/core/temp.ajax.html",
            "mode": "100644",
            "type": "blob",
            "sha": "87c6182d253a6667e143eeaa724fefe41a7d60e3",
            "size": 1841,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/87c6182d253a6667e143eeaa724fefe41a7d60e3"
        },
        {
            "path": "tester/core/temp.datetime.html",
            "mode": "100644",
            "type": "blob",
            "sha": "d41cf1efe4b9b0684833a09c5b7100067851d3a1",
            "size": 429,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/d41cf1efe4b9b0684833a09c5b7100067851d3a1"
        },
        {
            "path": "tester/core/temp.string.html",
            "mode": "100644",
            "type": "blob",
            "sha": "e666a4915e37349e4452225c01f8e0a3b9bb20be",
            "size": 1543,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/e666a4915e37349e4452225c01f8e0a3b9bb20be"
        },
        {
            "path": "tester/core/version.html",
            "mode": "100644",
            "type": "blob",
            "sha": "05466c4c19a0548431657fe7a58390623f7d10dd",
            "size": 255,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/05466c4c19a0548431657fe7a58390623f7d10dd"
        },
        {
            "path": "tester/string",
            "mode": "040000",
            "type": "tree",
            "sha": "3ddf3e5a1c8d99d2851312f0c8634a7b03d03883",
            "url": "https://api.github.com/repos/octapush/octapushJS/git/trees/3ddf3e5a1c8d99d2851312f0c8634a7b03d03883"
        },
        {
            "path": "tester/string/capitalize.html",
            "mode": "100644",
            "type": "blob",
            "sha": "586416aa1d69133ee1e3e1392aae7204c3c87bc8",
            "size": 448,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/586416aa1d69133ee1e3e1392aae7204c3c87bc8"
        },
        {
            "path": "web.config",
            "mode": "100644",
            "type": "blob",
            "sha": "9a14f2f10b4e00784a49cf9c0e1f80f5be11e9b7",
            "size": 155,
            "url": "https://api.github.com/repos/octapush/octapushJS/git/blobs/9a14f2f10b4e00784a49cf9c0e1f80f5be11e9b7"
        }
    ],
    "truncated": false
};

(function(w, d, s) {
    'use strict';

    s = _o_.utility.extend(s, {
        octapushJS: {
            pluginUrl: 'http://localhost/octapushJS/plugins/',
            loadPlugin: ['string', 'array']
        },
        specialMime: {
            images: ['jpg', 'jpeg', 'gif', 'png'],
            markup: ['htm', 'html', 'xhtml']
        }
    });

    var octapushDoc = {
        register: function() {
            if (s.execScript)
                octapushDoc.events.register.apply();
        },
        ui: {
            register: function(eType) {
                if (eType === 'load')
                    octapushDoc.ui.document.register.apply();

                else if (eType === 'ready') {
                    octapushDoc.ui.sidebar.register.apply();
                    octapushDoc.ui.footer.register.apply();
                }
            },
            document: {
                register: function() {
                    octapushDoc.ui.document.title.apply();
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
                        data.content = octapushDoc.helper.common.encoding.base64ToString(data.content);

                        // handle as MD file
                        if (_o_.string.isEqual(data.extension, 'md')) {
                            var mdConverter = new showdown.Converter();
                            $('div#document-wrapper').html(mdConverter.makeHtml(data.content));
                        }

                        // handle as markup file
                        else if (s.specialMime.markup.indexOf(data.extension) !== -1) {
                            $('div#document-wrapper').html('<div class="row"><iframe id="page-iframe" class="col-md-12" style="height: 80vh; position: relative; border:none;"></iframe></div>');
                            $('#page-iframe').on('load', function() {
                                $(this).contents().find('body').html(data.content);
                            });
                        }

                        // for other file handle as text file
                        else {
                            $('div#document-wrapper').html(_o_.string.format('<pre><code style="height: 80vh; position: relative;">{1}</code></pre>', data.content));
                        }

                        hljs.initHighlighting.called = false;
                        hljs.initHighlighting();
                    }
                }
            },
            sidebar: {
                register: function() {
                    octapushDoc.ui.sidebar.title.apply();
                    octapushDoc.ui.sidebar.listMenu.apply();
                },
                title: function() {
                    $('.sidebar .logo a').text(s.application.title);
                },
                listMenu: function() {
                    var data = octapushDoc.helper.sideMenu.dataBuilder(sampleData.tree);

                    function buildStruct(dMenu) {
                        var sMenu = '';

                        _o_.utility.each(dMenu, function(key, val) {
                            if (_o_.compare.isString(val)) {
                                var arrName = key.split('.');
                                var title = _o_.array.removeLast(arrName, 0).join('');
                                var extension = _o_.array.takeLast(arrName).join('');

                                sMenu += _o_.string.format('<li><a href="{1}" data-extension="{3}"><p>{2}</p></a></li>', val, title, extension);

                            } else {
                                var sTemp = '<li><a data-toggle="collapse" href="#{1}" aria-expanded="false"><p>{1}<b class="caret"></b></p></a>'
                                sTemp += '<div class="collapse" id="{1}" aria-expanded="false"><ul class="nav">';
                                sTemp += buildStruct(val);
                                sTemp += '</ul></div>';
                                sTemp += '</li>';

                                sMenu += _o_.string.format(sTemp, key);
                            }
                        });
                        return sMenu;
                    }

                    $('.sidebar ul.nav').html(buildStruct(data));
                }
            },
            footer: {
                register: function() {
                    octapushDoc.ui.footer.links.apply();
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
                octapushDoc.events.windoc.register.apply();
            },
            windoc: {
                register: function() {
                    w.onLoad = octapushDoc.events.windoc.onLoad(function() {
                        octapushDoc.events.windoc.onReady.apply();
                        octapushDoc.events.sideMenu.items.apply();
                    });
                },
                onLoad: function(cb) {
                    octapushDoc.ui.register('load');

                    _o_.settings.pluginsPath = s.octapushJS.pluginUrl;
                    _o_.utility.importPlugin(s.octapushJS.loadPlugin, function() {
                        if (cb)
                            cb();
                    });
                },
                onReady: function() {
                    $(function() {
                        octapushDoc.ui.register('ready');
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

                                    octapushDoc.ui.document.build({
                                        title: that.text(),
                                        extension: that.data('extension'),
                                        content: xhr.content
                                    });
                                }
                            });

                            return false;
                        }
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
                }
            },
            sideMenu: {
                dataFilter: function(data) {
                    data = data.filter(function(i) {
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
                    });

                    return octapushDoc.helper.sideMenu.insertAdditionals(data);
                },
                insertAdditionals: function(data) {
                    var before = s.application.additionalData.sideMenu.before;
                    if (before.length > 0)
                        _o_.utility.each(before, function(key, val) {
                            data.unshift({
                                path: val.title,
                                url: val.url,
                                type: 'blob'
                            });
                        });

                    var after = s.application.additionalData.sideMenu.after;
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

                            obj[path][arrayInfo[2]] = mapData(obj[path][arrayInfo[2]], paths, val)
                        } else {
                            obj[path] = mapData(obj[path], paths, val)
                        }

                        return obj;
                    }

                    var result = {};
                    data = octapushDoc.helper.sideMenu.dataFilter(data);

                    _o_.utility.each(data, function(key, val) {
                        result = mapData(result, val.path.split('/'), val.type === 'tree' ? {} : val.url);
                    });

                    return result;
                }
            }
        }
    };

    w.octapushDoc = octapushDoc;
    octapushDoc.register.apply();
})(window, document, settings);