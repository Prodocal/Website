import express from 'express'; //type 'npm install express' if something is off
//import * as fs from 'fs'; //for later
import { handler } from './build/handler.js';

const app = express();

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
  res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});