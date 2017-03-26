(function() {
    var data = [{
            name: 'test',
            url: 'testUrl'
        },
        {
            name: 'test/subDir',
            url: 'testUrl'
        },
        {
            name: 'test/subDir/file',
            url: 'file.js'
        },
        {
            name: 'test/subDir/file2',
            url: 'file2.js'
        },
        {
            name: 'test1',
            url: 'testUrl'
        },
        {
            name: 'test2',
            url: 'testUrl'
        }
    ];

    var result = {};

    function buildStructByData(data, parent) {
        var name = (data.name).split('/');
        var url = data.url;

        if (name.length == 1) {
            parent[name[0]] = url;

        } else {
            data.name = name.splice(1).join('/');

            if (!parent.hasOwnProperty(name[0]))
                parent[name[0]] = {};
            else
                parent[name[0]] = parent;

            parent[name[0]] = buildStructByData(data, parent[name[0]]);
        }

        return parent;
    }

    _o_.utility.each(data, function(key, val) {
        result = buildStructByData(val, result);
    });

    console.log(result);
})();