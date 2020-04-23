const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Settings

app.set('port', process.env.PORT || 3000);



//Static Files

app.use(express.static(path.join(__dirname, '/public')))

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});