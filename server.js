const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./server/routes');
const database = require('./server/mongo')
const seeder = require('./server/seeder');
const port = process.env.port || 3000;
const app = express();

class Server {
    constructor() {
        this.initExpressMiddleWare();
        this.initDbSeeder();
        this.start();
    }

    initExpressMiddleWare() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: false
        }));
        app.use(express.static(path.join(__dirname, 'dist')));

        // serving routes
        app.use('/api', routes);

        //Serve app
        app.get('*', (rec, res) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'));
        });

    }

    initDbSeeder() {
        console.log('opening db');
        database.open(() => {
            seeder.init();
        });
    }

    start() {
        app.listen(port, () => console.log(`API running on localhost:${port}`));
    }
}

let server = new Server();