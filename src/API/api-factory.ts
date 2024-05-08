// implement express server 

import express, { Express } from "express";
import { configureUsersApi } from './users-api';
import { configureStoreApi } from './first-feature-api';
import cors from 'cors';

export class ApiFactory {

    public app: Express = express();

    constructor(private port: number) {

        this.app.use(express.json()); // enable json reading

        const allowedOrigins = ['http://localhost:4200'];

        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };
        this.app.use(cors(options)); // cors policy 

        this.app.get('/', (req, res) => {
            res.send('hello from express ts server!');
        });

        configureUsersApi(this.app);
        configureStoreApi(this.app);

        this.app.listen(this.port, () => console.log(`App listening on port ${port}`));
    }

}



// functional

// export const app2: Express = express();

// export function init(port: number): void {
//     app2.use(express.json());

//         app2.get('/', (req, res) => {
//             res.send('hello from express ts server!');
//         });

//         configureUsersApi(app2);
//         configureStoreApi(app2);

//         app2.listen(port, () => console.log(`App listening on port ${port}`));
// }