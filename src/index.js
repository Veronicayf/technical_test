const server = require('./server.js');
const { conn } = require('./db.js');
const PORT = require('./config.js');


conn.sync({ force: false })
    .then(() => {
        server.listen(PORT, () => console.log(`Listening on the port: ${PORT}`));
    });

