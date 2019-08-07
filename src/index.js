"use strict";
const config = require("./config");
const server = require("./server");
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const options = {
    info: {
        'title': 'Test API Documentation',
        'version': '0.0.1'
    }
};
const startServer = async () => {
    try {
        
        // create an instance of the server application
        const app = await server(config);
        await app.register([
            Inert,
            Vision,
            {
                plugin: HapiSwagger,
                options: options
            }
        ]);
        // start the web server
        await app.start();
        console.log(`Server running at http://${config.host}:${config.port}...`);
    } catch (err) {
        console.log("startup error:", err);
    }
};

startServer();
