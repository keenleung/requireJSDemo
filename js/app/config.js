require.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery' : 'jquery-1.11.1.min',
        'util' : 'util',
        'bootstrap' : 'bootstrap.min',
        'demo' : '../app/demo'
    },
    shim: {
        'util' : {
            exports : 'util',
            deps : ['bootstrap']
        },
    }
});