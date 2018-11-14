const five = require('johnny-five');
const board = new five.Board({ repl: false });

board.on('ready', () =>{
  const toChar = require('./chars');
  const solenoids = require('./solenoid');
  const unit = solenoids(five, [13,12,11,10,9,8]);

  const txt = toChar('This is super cool');
  // Fire in the hole.
  unit(t[0].open);  // T
  unit(t[1].open);  // h
  unit(t[2].open);  // i
  // ...
});