const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', function (data) {
    console.log('you ded cuz u idled');
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
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 500);
  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 1000);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 1500);
  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 2000);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 2500);
  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 3000);
  //  setTimeout(() => {
  //   conn.write("Move: up");
  // }, 3500);
  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 4000);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 4500);
  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 5000);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 5500);
  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 6000);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 6500);
  //  setTimeout(() => {
  //   conn.write("Move: left");
  // }, 7000);


  

  return conn;
}

module.exports = { connect };