import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.post('/task', async (req, res) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/task',
        req.body,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      console.log(response.data);
      res.render('home', { "example": response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', { "error": true });
    }
  });
}
