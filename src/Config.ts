import {ConnectionOptions} from 'mysql2';


// קונפיגורציות - הגדרות שניתנות לשינוי

export const port = 3000;

// insert your db username databasename & password
export const dbConnectionOptions: ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    database: '',
    password: '',
    port: 3306
  };