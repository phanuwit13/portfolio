
const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})