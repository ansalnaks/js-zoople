// export
module.exports = {
  add: (a, b) => a + b
};

// import
const math = require('./math');
console.log(math.add(2, 3));