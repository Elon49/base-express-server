import mysql from 'mysql2/promise';
import {User} from '../models/user-model';
import { dbConnectionOptions } from '../Config';

let connection: mysql.Connection;

export async function initDBConnection(): Promise<void> {
  // Create the connection to database
  connection = await mysql.createConnection(dbConnectionOptions);
}

export async function query(name: string, password: string): Promise<User[]> {
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

export async function UserNameExist(name: string): Promise<User[]> {
  const [results]= await connection.query(
    `SELECT * FROM users WHERE name = "${name}"`
  )
  return results as User[];
}

export async function addUser(username: string, phone: string, email: string, password: string): Promise<void> {
  try {
    const x = await connection.query(
      `INSERT INTO users (name, phone, email, password) VALUES ("${username}", ${phone}, "${email}", "${password}")`
    );
    console.log(`x: ${x}`);

  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}


// implement - Upsert, delete
