const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function(data) {
    console.log('you ded cuz u idled');
    })
  conn.on("connect", function(){
    console.log("Client is connected, it really is!")
  })
  conn.on("connect", () => {
    conn.write('Name: LJB');
  });

  return conn;
}

module.exports = { connect };