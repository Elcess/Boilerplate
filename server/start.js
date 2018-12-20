const db = require('../db/db');
const app = require('./server');

const PORT = process.env.PORT || 3000;

db.sync() // sync our database
  .then(function() {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  });
