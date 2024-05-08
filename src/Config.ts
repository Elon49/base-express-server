import {ConnectionOptions} from 'mysql2';


// קונפיגורציות - הגדרות שניתנות לשינוי

export const port = 3000;

export const dbConnectionOptions: ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    database: 'mystore',
    password: 'n02090209',
    port: 3306
  };