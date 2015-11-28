const PI = 3.141592;

export {PI as default};

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
export default function sqrt(s){
  return _sqrt(s, s/2.0, 0.0);
};
export default function square(x) {
  return x * x;
};
