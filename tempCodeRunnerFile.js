var a = {};
  (function b(a) {
  a.a = 10;
  a = null;
  }) (a);
  console.log(a);