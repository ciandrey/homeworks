const fs = require('fs-extra');

//fs.ensureDirSync('NewFold')
fs.ensureFileSync('NewFold/text.txt');

//fs.ensureDirSync('NewFold2')
fs.moveSync('NewFold/text.txt', 'NewFold2/text.txt');

//fs.ensureDirSync('NewFold3')
fs.copySync('NewFold2/text.txt', 'NewFold3/text.txt');

//fs.removeSync('NewFold2/text.txt')
//fs.removeSync('NewFold3/text.txt')
fs.removeSync('NewFold');
fs.removeSync('NewFold2');
fs.removeSync(`NewFold3`);