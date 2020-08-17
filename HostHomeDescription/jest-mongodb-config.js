module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: 'latest',
      skipMD5: true
    },
    autoStart: false
  }
};

/*
,
  "config": {
    "mongodbMemoryServer": {
      "version": "latest",
      "debug": "1"
    }
  }
*/