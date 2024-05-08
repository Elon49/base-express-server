import express , {Express} from "express";
import { UserNameExist, query, addUser } from '../DB/db-connection';

export function configureUsersApi(app: Express): void {

    app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        
        try {
          const results = await query(username, password);
          if (results.length > 0) {
            // משתמש נמצא
            res.status(200).json({ message: 'Login successful' });
          } else {
            // משתמש לא נמצא
            res.status(401).json({ message: 'Invalid credentials' });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        }
    });

    app.post('/signup', async (req, res) => {
      const {username, phone, email, password}= req.body;
      try {
        const results = await UserNameExist(username);
        if (results.length > 0) {
          // קיים שם משתמש כזה
          res.status(200).json({ message: 'This user already exist' });
        } else {
          await addUser(username, phone, email, password);
          res.status(200).json({ message: 'NOOOO' });
          // קריאה לפונקציה להוספת משתמש חדש
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.get('/test', async (req, res) => {
        const result = await query('noam', 'noam123');
        res.status(200).send(result);
    });
      
}



// oop
export class UsersApi {
    /**
     *
     */
    constructor() {
        
    }
    
}