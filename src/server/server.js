const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');
const database = require('./mongo')
const seeder = require('./seeder');
const root = './';
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
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static(path.join(root, 'dist')));

        // serving routes
        app.use('/api', routes);

        //Serve app
        app.get('*', (rec, res) => {
            res.sendFile('dist/index.html', { root });
        });

    }

    initDbSeeder() {
        database.open(() => {
            seeder.init();
        });
    }

    start() {
        app.listen(port, () => console.log(`API running on localhost:${port}`));
    }
}

let server = new Server();