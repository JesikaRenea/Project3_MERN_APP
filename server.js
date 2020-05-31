const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
require('dotenv').config(); // external key info

const users = require('./routes/api/users');
const cat = require('./routes/api/cat');
const def = require('./routes/api/def');
const lib = require('./routes/api/lib');
const skill = require('./routes/api/skill');
const ext = require('./routes/api/ext');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Heroku fix for mlab addon
const db = process.env.MONGODB_URI || require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log('MongoDB connected')).catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/cat', cat);
app.use('/api/def', def);
app.use('/api/lib', lib);
app.use('/api/skill', skill);
app.use('/api/ext', ext);

// Heroku fix to serve the build react app
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
