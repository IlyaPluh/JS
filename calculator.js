function Calculator() {
    // объект с методами-операциями
    let methods = {
      '+': function(a, b) {
        return a + b;
      },
      '-': function(a, b) {
        return a - b;
      }
    };
  
    // добавляем новую операцию в объект methods
    this.addMethod = function(name, func) {
      methods[name] = func;
    };
  
    // парсим и вычисляем строку с операцией
    this.calculate = function(str) {
      let splitStr = str.split(' '); // разбиваем строку на массив из двух чисел и оператора
      let a = +splitStr[0]; // преобразуем первое число в число
      let operator = splitStr[1]; // оператор
      let b = +splitStr[2]; // преобразуем второе число в число
  
      // проверяем, что оператор существует в объекте methods
      if (methods[operator]) {
        return methods[operator](a, b); // вызываем функцию-операцию для вычисления результата
      } else {
        return NaN; // если оператор не найден, возвращаем NaN
      }
    };
  }
  let calc = new Calculator();
  console.log(calc.calculate('3 + 7')); // 10
  console.log(calc.calculate('5 - 2')); // 3
  
  // добавляем новую операцию - умножение
  calc.addMethod('*', function(a, b) {
    return a * b;
  });
  
  console.log(calc.calculate('2 * 8')); // 16
  
  // добавляем новую операцию - деление
  calc.addMethod('/', function(a, b) {
    return a / b;
  });
  
  console.log(calc.calculate('10 / 2')); // 5
  
  // добавляем новую операцию - возведение в степень
  calc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
  });
  
  console.log(calc.calculate('2 ** 3')); // 8
    