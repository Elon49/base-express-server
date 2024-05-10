import mysql from 'mysql2/promise';
import {User} from '../models/user-model';
import { dbConnectionOptions } from '../Config';

let connection: mysql.Connection;

export async function initDBConnection(): Promise<void> {
  // Create the connection to database
  connection = await mysql.createConnection(dbConnectionOptions);
}

export async function queryExample(name: string, password: string): Promise<User[]> {
  try {
    const [results] = await connection.query(
      `SELECT * FROM users WHERE name = "${name}" AND password = "${password}"`
    )
    return results as User[];
    console.log(results);
  } catch (err) {
    console.log(err);
  }
  return [];
}


// implement - Upsert, delete
