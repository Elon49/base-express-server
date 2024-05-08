import express , {Express} from "express";
import { UserNameExist, query, addUser } from '../DB/db-connection';

export function configureUsersApi(app: Express): void {

    app.post('/login', async (req, res) => {
    });

    app.post('/signup', async (req, res) => {

    });
      
}