const { connect } = require('./client.js/client');
const { setupInput } = require('./input');
console.log('Connecting ...');


let conn = connect();

setupInput(conn);








