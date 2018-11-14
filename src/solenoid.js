const close = s => s.forEach(p => p.low());

module.exports = (five, pins) => {
  if (pins.length < 6) {
    throw new Error(' Solenoid module requires at least 6 pins')
  }
  const solenoids = pins.map(p => new five.Pin(p))
  close(solenoids);
  return status => {
    if (status === null || status === []) {
      // reset
      close(solenoids);
    } else {
      solenoids.forEach((s,i) => {
        if (status.indexOf(i) > -1) {
          s.high();
        } else {
          s.low();
        }
      });
    }
  };
}