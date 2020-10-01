
exports.min = function min(array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  return array.reduce((acc, curr) => {
    return Math.min(acc, curr)
  }, []);;
}

exports.max = function max(array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  return array.reduce((acc, curr) => {
    return Math.max(acc, curr)
  }, []);
}

exports.avg = function avg(array) {
  if (arguments.length === 0 || array.length === 0) return 0;
  const avr = array.reduce((acc, curr) => {
    return +acc + +curr
  }, []);
  return avr / array.length
}
