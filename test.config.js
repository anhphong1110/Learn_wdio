exports.config = {
    runner: 'local',

    //Derlace sever info
    hostname: 'localhost',
    port: 9515,
    path: '/',

    // Mocha
    framework: 'mocha',
    mochoOpts: {
        ui: 'bdd'
    }
}