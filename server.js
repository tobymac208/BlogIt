// ask Express to serve the public folder.
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Send the html file, ensuring it is actually sent.
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html')); // Send the file at this location!
});

// Instruct Express to listen on port 3000 and print a message.
app.listen(port, () => {
    console.log(`The server is on port ${port}!`)
});
