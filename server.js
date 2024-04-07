const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/api/chatSystem/chat/add', (req, res) => {
  const newData = req.body;
  const filePath = 'chathistory.json';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }

    // Parse the JSON data into a JavaScript object
    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).send('Error parsing JSON');
      return;
    }

    jsonData[0].chatlist.push(newData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        res.status(500).send('Error writing file');
        return;
      }
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});