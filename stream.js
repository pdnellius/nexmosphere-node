const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/tty.usbserial-FT1YVCEB', {
  baudRate: 115200
});
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', console.log);
