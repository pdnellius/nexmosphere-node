const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
// Replace the value below with the port name coming from your computer. You can use `npx @serialport/list` to find the value for this
const portLocation = '/dev/tty.usbserial-FT1YVCEB'
const port = new SerialPort(portLocation, {
  baudRate: 115200
});
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', console.log);
