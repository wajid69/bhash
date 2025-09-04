
const { hashSync, compareSync } = require('../src/index');

const password = 'mySecret123';
const salt = require('../bhash').genSaltSync();
const hashed = require('../bhash').hashSync(password, salt);

console.log('Hashed:', hashed);
console.log('Match:', require('../bhash').compareSync(password, hashed)); // true
console.log('Mismatch:', require('../bhash').compareSync('wrongPass', hashed)); // false
