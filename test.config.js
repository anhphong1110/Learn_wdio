exports.config = {
    runner: 'local',
    specs:[

    ],
    capabilities:[
        {
            browserName: 'chrome'
        }
    ],
    //Derlace sever info
    hostname: 'localhost',
    port: 9515,
    path: '/',

    // Mocha
    framework: 'mocha',
    mochoOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}