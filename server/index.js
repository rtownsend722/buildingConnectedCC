const express = require('express');
const app = express();

// Set port
app.set('port', process.env.PORT || 4568);

// Static Files
app.use(express.static(__dirname + '/../client/dist'));

// Init server
app.listen(app.get('port'));
console.log('Listening on', app.get('port'));