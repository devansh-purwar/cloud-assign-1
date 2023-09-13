import express from 'express'
import { generateUploadURL } from './s3.js'
import path from 'path';

const app = express()
const __dirname = path.resolve();
// app.use(express.static('front'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

app.listen(8080, () => console.log("listening on port 8080"))