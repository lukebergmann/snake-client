let connection; 

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
} else if (key === 'w') {
  connection.write("Move: up");
} else if (key === 'a') {
  connection.write("Move: left");
} else if (key === 's') {
  connection.write("Move: down");
} else if (key === 'd') {
  connection.write("Move: right")
} else if (key === ',') {
  connection.write("Say: im-a-snek")
} else if (key === '.') {
  connection.write("Say: hummus")
} else if (key === '/') {
  connection.write("Say: beyonce")
}
}


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}



module.exports = { setupInput }

