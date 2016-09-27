export default function(f) {
  return function(e) {
    if (e.keyCode === 13) f(...arguments);
  };
}