const net = require('net');
const { ip, port } = require('../constants');

const connect = function () {
  const conn = net.createConnection({
    host: ip,
    port: port
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', function (data) {
    console.log(data);
  })
  conn.on("connect", function () {
    console.log("Client is connected, it really is!")
  })
  conn.on("connect", () => {
    conn.write('Name: LJB');
  })
  conn.on("connect", () => {
    conn.write("Move: left")
  });

  return conn;
}

module.exports = { connect };