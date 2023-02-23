// 1. написать функцию которая принимает на вход 2 аргумента, переменную и тип даных к которому следует привести переменную
// например при вызове функции с параметрами (1, 'str') возвращается '1', если преобразование невозможно выводим ошибку с типом введеных даных
function convertVariableType(variable, type) {
    // проверяем тип аргументов
    if (typeof variable !== 'string' && typeof variable !== 'number') {
      throw new Error('Первый аргумент должен быть строкой или числом');
    }
    if (typeof type !== 'string') {
      throw new Error('Второй аргумент должен быть строкой');
    }
    // преобразуем переменную к нужному типу
    switch (type) {
      case 'str':
        return String(variable);
      case 'num':
        const num = Number(variable);
        if (isNaN(num)) {
          throw new Error('Невозможно преобразовать в число');
        }
        return num;
      case 'bool':
        if (typeof variable === 'string') {
          if (variable.toLowerCase() === 'true') {
            return true;
          } else if (variable.toLowerCase() === 'false') {
            return false;
          }
        }
        const bool = Boolean(variable);
        if (bool === false && variable !== 0 && variable !== '0' && variable !== '') {
          throw new Error('Невозможно преобразовать в логическое значение');
        }
        return bool;
      default:
        throw new Error(`Неверный тип данных: ${type}`);
    }
  }  
  console.log(convertVariableType('', 'bool'))

// 2. написать функцию которая принимает на вход строку и заменяет каждую букву на её порядковый номер в алфавите, 
// если строка не содержит букв, игнорировать её и вернуть текст что в строке нету букв
// например при вызове такой функии с параметром ("абаба") возвращается 12121

let abc = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
function convertLettersToNumber(str) {
  str = str.split()
  
  console.log(str[0][2])
}
convertLettersToNumber('klnaklnav')

// 3. написать функцию которая принимает на вход строку где каждое слово содержит цифру от 1 до 9, 
// а потом сортирует заданную строку по возрастанию чисел
// например при вызове функции с параметром ("4of Fo1r pe6ople g3ood th5e the2") 
// возвращается "Fo1r the2 g3ood 4of th5e pe6ople"
// 4. написать функцию которая принимает на вход имя человека которого нужно приветствовать, 
// если это имя "Анатолий" то выводить текст "Привет моя любовь", если любое другое то "Привет {имя}"
// например при вызове функции с параметрами ("Ваня") возвращается "Привет Ваня".
// 1. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)
// +усложнение выводить "число {min} находится в 1/2/3/4 четверти"
// 2. написать функцию для возведения числа в степень циклом. На вход подаётся число и степень
// 3. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. +усложнение принимать на входе дробные числа, на выходе всегда должно быть число с 2 цифрами после запятой
// 4. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом 9 и менее
// +усложнение решить рекурсией.
// 1. На вход функция получает одно число n – количество членов последовательности и возвращает перечень членов последовательности Фибоначчи, отделенные символом пробела.
// 2. на вход функция получает day и month в виде цифр. Задача возвращать валидная ли это дата (год считать всегда НЕ високосным)
// +Усложнение - если дата ок - вернуть ее буквенным форматом, при подаче 03.09, возвращается третье сентября
// 3. написать функцию которая получает строку и заменяет в ней 2 последовательных одинаковых буквы на следующую букву алфавита, если буква не подвоенная оставляем без изменений, функция возвращает новую строку, только англ алфавит
// 4. написать функцию которая принимает на вход 1 текстовый аргумент, значения аргумента могут быть только "Камень"/"Ножницы"/"Бумага", ход "второго игрока" рандомно сетается во время выполнения функции, функция возвращает какой аргумент(игрок) выиграл, если ничья выводим "Ничья"
// +усложнение модифицировать код что б игра длилась до 5 побед
// 1. На вход подается значение. Если оно типа Number (integer) - вернуть удвоенное значение
// "например при аргументе 5 функция выводит - 10
// при аргументе 5,0 - не выводит ничего, либо текст с ошибкой что неверный тип входных данных"
// 2. "Создайте программу, которая отвечает на вопрос: ""Ты играешь на банджо?""
// Если ваше имя начинается с R (или r), - значит выиграете на Банджо!
// На вход подается лишь параметр name: string"
// "при аргументе Ron выводим текст ""Ron plays banjo""
// при аргументе Harry выводим текст ""Harry does not play banjo"""
// 3. "На вход функции подаются стринга. Надо вернуть все слова из строки
// + Усложнение: все слова надо развернуть задом наперед
// ++ Усложнение: пробелов между словами может быть больше чем 1"
// 4. Программа принимает на вход дату рождения и считает на сегодня сколько тебе в виде 18 лет и n месяцев + усложнение, выводим не месяцы а дни, с учётом високосных годов
// при аргументе "24.08.1991" выводим 31 год и 4 месяца.
// 1. "Дано натуральное число n. Напишите программу, которая печатает численный треугольник в соответствии 
// с примером"
// "На входе 5
// На выходе:
// 1
// 22
// 333
// 4444
// 55555"
// 2. "Дано натуральное число n. Напишите программу, которая печатает численный треугольник с высотой равной n, 
// в соответствии с примером"
// "На входе 3
// На выходе:
// 1
// 2 3
// 4 5 6"
// 3. "Дано натуральное число. Напишите программу, которая определяет, является ли последовательность его цифр 
// при просмотре справа налево упорядоченной по неубыванию.
// + Усложнение: упорядоченность также передается в функцию (e.g. up: true/false)
// + Усложнение: если число не упорядочено по заданному формату, привести его к формату и вернуть"
// Пример:
// 54321 => true,
// 4. Задача с написанием тест-кейсов:
// "Написать функцию валидации пароля. Требования:
// Минимум 8 символов
// Максимум 120 символов
// Буквы - только латиница
// Пароль должен содержать минимум 1 букву в верхнем регистре
// Пароль должен содержать минимум 1 букву в нижнем регистре
// Пароль должен содержать минимум 1 цифру
// Пароль должен содержать минимум 1 специсомвол из !@#$%^&*()_+
// Пароль не может состоять только из пробелов
// Внутри пароля пробелы разрешены
// Валидационные ошибки должны соответстовать тексту нужного требования
// Если пароль не подан в функцию - вернуть ТОЛЬКО ошибку "Введите пароль".
// 1. Напишите программу, которая на вход принимает массив имен, и возвращает массив твоих друзей из них. Условие для друга - ровно 4 буквы в имени. Иначе - точно не друг
// 2. Нужно проверить, что строка содержит одинаковое количество букв "x" и "o". Возвращать надо тру либо фолс, регистр букв не должен иметь значение. Буквы в строке могут быть какие угодно, нас интересуют лишь две выше описанные

// 3. "Написать функцию валидации юзернейма. Требования:
// длина 2-40 символов;
// юзернейм может содержать только латиницу и пробелы;
// префиксные и постфиксные пробелы не учитываются в юзернейме;
// между словами юзернейма максимум 1 пробел;
// Каждое слово в юзернейме должно начинаться с заглавной буквы;"

function nameValidation(name) {
    const abc = [...'qwertyuiopasdfghjklzxcvbnm']
    return !!name
        && [...name.toLowerCase()].every(el => abc.includes(el) || el === ' ')
        && name.trim().length >= 2
        && name.trim().length <= 40
        && name.trim().split(' ').every(Boolean)
        && name.trim().split(' ').every(el => el.charAt(0).toUpperCase() === el.charAt(0))
}
console.log(nameValidation('Ab'))
console.log(nameValidation('Poligraf Poligrafovich'))
console.log(nameValidation('  Username Name Username Name Usernameasdf  '))
console.log(nameValidation('AA'))
console.log(nameValidation('AaaaAaa AaAaaA'))
console.log(nameValidation('RAW RAW'))
console.log(nameValidation('A  A'))

// 4. "Дан массив из n чисел a1, a2, a3, ..., aN.
// Среднее арифметическое (или среднее) — это сумма этих чисел, деленная на n.
// Среднее геометрическое (или среднее) — это корень N-ой степени взятый из произведения этих чисел
// Пример
// Список чисел: 1, 3, 9, 27, 81
// n = 5
// Среднее арифметическое = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24,2
// Среднее геометрическое = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9
// Задача
// Функция принимает на вход массив чисел и их среднее арифметическое. Однако в списке отсутствует одна 
// цифра. Используя эту информацию, вы должны вычислить и вернуть среднее геометрическое для входного 
// массива чисел, включая пропущенное число."
// 5. отформатировать номер телефона по заданной маске. На вход подается номер (число) и стринга (темплейт).
//Если чисел в номере больше чем надо в маске - игнорируем оставшиеся ненужные, если чисел меньше чем надо в маске - кидаем ошибку
// 1. Напишите программу,которая будет возвращать true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).

function includArg2 (a, b) {
    return a.substr(a.length - b.length) === b 
}

// 2. Напишите программу, которая возвращает время после полуночи в миллисекундах, при условии чтона часах время показано в виде h hours, m minutes and s seconds после полуночи.
// 3. Напишите программу которая на вход принимает массив из 3 цифр в диапазоне от 0 до 10 и выводит их словами, каждое на отдельной строке
// 4. "Есть два списка, возможно разной длины. Первый состоит из ключей, второй состоит из значений. 
// Напишите функцию createDict(keys, values), которая возвращает словарь, созданный из ключей и значений. 
// Если значений недостаточно, остальные ключи должны иметь значение None (JS null). 
// Если ключей недостаточно, просто игнорируйте остальные значения"
//1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
//2) Сделать функцию которая вернёт в консоль квадрат переданного числа
//3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
//{"name":И,
// "surname":Ф,
// "middlename":О}
//4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел.
//Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"
//5) *Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
//Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".
//6) **Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
//Элементы: Phone number field, CheckBox, SignIn Button.
//7) ***Написать функцию которая на вход получает JSON а возвращяет XML
//1.  Дана строка. Вывести третий, шестой, девятый и так далее символы.
//2. Надо заменить каждый символ на "(" если эта буква встречается единожды, иначе заменить на ")" если более 1 раза
//Примеры:
//""din"" => ""((("" 
//""recede"" => ""()()()""
 //""Success"" => "")())())"" ""(( @"" => ""))(("""
//3. """Нужно написать функцию, которая переделывает строку в camelCase, где все слова начиная со 2го идут без пробелов и других разделителей с большой буквы. Первое же слово будет с большой только если в изначальной строке оно было с большой.
//Строка на входе будет разделена дефисами и нижними подчеркиваниями.
//Примеры: 
//"""the-stealth-warrior"" gets converted to ""theStealthWarrior""
//""The_Stealth_Warrior"" gets converted to ""TheStealthWarrior"""
//4. "Тут кароч программа должна искать числа, у которых сумма всех цифр числа возведенных в определенную степень равна самому числу
//Например: 1^3+5^3+3^3 = 153
//Надо написать программу которая принимает на вход границу поиска (например ищем искомые числа в промежутке до 1000), и степень в которую будут возводиться. 
//Единицу не учитывать в границах, ибо она в любой степени единица"
//Примеры: 
//"eq_sum_powdig(100, 2) ----> []
//eq_sum_powdig(1000, 2) ----> []
//eq_sum_powdig(200, 3) ----> [153]
//eq_sum_powdig(370, 3) ----> [153, 370]"
//5. """Кароч написать надо небольшой парсер:
//В парсер будет 4 команды всего:
//- i - Инкремент (увеличение на +1), стартовое - 0
//- d - Декремент (уменьшение на -1)
//- s - Возведение в квадрат
//- o - Выводит текущее значение в массив
//Значения, которые не подходят для задачи - игнорируем, работаем лишь с цифрами."
//Пример: parse ('iiisdoso') => [8, 64]"
//1.
//"на вход подается 5 чисел, программа должна вернуть минимальное и максимальное число
//+ усложнение числа должны быть только целочисленными
//+ усложнение: количество подаваемых цифр может быть любым"
//2.
//На вход подается массив из положительных и отрицательных чисел. Вернуть нужно массив, где все числа поменяли свой знак ( с + на - и наоборот)
//Пример:
// при аргументе [1,-2,3,-4,5] выводим [-1,2,-3,4,-5]
// 3."Ваша задача состоит в том, чтобы вернуть выходную строку, созданную из входной строки s , 
// заменив каждый символ в s числом, представляющим количество раз, 
// которое этот символ встречается в s, и разделив каждое число символом (символами) sep."
// Пример:
// "freqSeq('hello world', '-')
// //result '1-1-3-3-2-1-1-2-1-3-1'
// freqSeq('19999999',    ':')
// //result '1:7:7:7:7:7:7:7'
// freqSeq('^^^**$',      'x')
// //result '3x3x3x2x2x1'"
// 4. "Нужно написать валидацию для канала для взрослых. На вход подаётся возраст:
// Если тебе строго меньше 18 - программа должна вернуть строку ""Доступ закрыт для несовершеннолетних""
// Если тебе от 18 до 65 включительно - ""Добро пожаловать!""
// Если тебе выше 65 - ""Ну какое вам уже порно?)""
// Если пришло число меньше 5 или больше 100 - Неверный возраст
// На вход может падать что угодно, проверить надо что это число, и если нет - кинуть валидационную ошибку про тип данных
// Усложнение номер два - программа на вход принимает массив чисел, нужно вернуть по очереди ответы для каждого
// Усложнение номер 3 -
// Программа на вход принимает массив объектов типа [{ name: ""Jake"", age: 18}...]
// Вернуть массив имен тех, кому доступ разрешен, на остальных кинуть в консоль сообщение из первоначальных условий"
// Усложнение номер 4: программа работает со всеми вышеописанными типами запросов (одно число, массив чисел и массив объектов)
// 1. "Напишите программу, которая считывает целое положительное число n, 1 <= n <= 9, и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются
// + усложнение - паттерн для суммирования также задается пользователем, между цифрами лишь простые 
// алгебраические знаки (- + . * ) 
// например  pattern = '# + ### - ##',  function sum(n, pattern)."
// "Пример: n = 1
// На выходе: 1 + 11 + 111 = 123"
// 2. "Написать программу, решающую квадратное уравнение методом дискриминанта:
// Формула дискриминанта  - D = b2 -4ac
// D < 0 - решений неи
// D = 0 - решение одно −b/2a. 
// D > 0 - решений два "
// "Пример 1. Решить уравнение: 3x2 - 4x + 2 = 0.
// Ответ: D < 0, корней нет.
// Пример 2. Решить уравнение: x2 - 6x + 9 = 0.
// Ответ: корень уравнения 3.
// Пример 3. Решить уравнение: x2 - 4x - 5 = 0.
// x1 = (4 + 6) : 2 = 5,
// x2 = (4 - 6) : 2 = -1."
// 3. "Напишите программу которая принимает на вход несортированный массив целых чисел и возвращает новый массив который содержит [наименьшее число в массиве, наименьшее число между двумя границами массива, которое не находится в массиве, наибольшее число в массиве] 
// Наименьшим целым числом должно быть целое число из массива с наименьшим значением.
// Наибольшее целое число должно быть целым числом из массива с наибольшим значением.
// MinimumAbsent — это наименьшее число между наибольшим и наименьшим числом, которого нет в массиве."
// 4.  "Можете ли вы получить исходную строку?
// Мы можем перевести текст в коды таблиц ASCII, например, «hello world»:
// 104 101 108 108 111 32 119 111 114 108 100
// Это было бы слишком просто. Нет. Вы получаете массив кодов ASCII. НО.
// Числа сдвинуты на некоторое число N.
// Для простоты будет только одна буква, которая встречается чаще других.
// Ввод представляет собой массив кодов ASCII и наиболее распространенный символ. Для «привет, мир» может выглядеть так (сдвиг - 30):
// function translator([134, 131, 138, 138, 141, 32, 149, 141, 144, 138, 130], 'l') {...}
// Задача:
// Вам нужно вернуть исходную строку:
// return ""hello world""
// Для упрощения работы в тексте не будет никаких символов, кроме: a-z и пробела (код пробела не сдвигается!)
// Это все, что вам нужно знать, чтобы решить эту ката.
// PS ""пробел"" ASCII-символ имеет код - 32. "
// "Примеры тестов
//   it(""Input [134, 131, 138, 138, 141, 32, 149, 141, 144, 138, 130] and 'l' should return 'hello world'"", function() {
// 7
//     assert.deepEqual(translator([134, 131, 138, 138, 141, 32, 149, 141, 144, 138, 130], 'l'), ""hello world"");
// 8
//   });
// 9
//   it(""Input [121, 111, 117, 72, 32, 115, 111, 32, 98, 111, 114, 105, 110, 103] and 'o' should return 'you so boring'"", function() {
// 10
//     assert.deepEqual(translator([146, 136, 142, 32, 140, 136, 32, 123, 136, 139, 130, 135, 128], 'o'), ""you so boring"");
// 11
//   });
// 12
// });"
// 1. Напишите программу которая принимает на вход целое число n и строку s и возвращает строку s повторённую n раз
// 2. "На вход подаётся слово, нужно вернуть среднюю букву (ы) по следующему принципу:
// Если количество букв в слове нечётное - вернуть среднюю букву
// Если четное - вернуть две средние"
// 3. "Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными «гусями».
// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении
// Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном вашей функции, хотя и с удаленными «гусями». Обратите внимание, что все строки будут в том же регистре, что и предоставленные, а некоторые элементы могут повторяться."
// примеры:
// "input:
// [""Кряква"", ""Крюк Билл"", ""Африканка"", ""Хохлатая"", ""Пилигрим"", ""Тулуза"", ""Синий шведский""]
// Гуси = [""Африканка"", ""Римская хохлатая"", ""Тулуза"", ""Пилигрим"", ""Штайнбахер""]
// Output:
// [""Кряква"", ""Крюк Билл"", ""Хохлатая"", ""Синий шведский""]"
// 4. Реализовать следующие автоматизированные сценарии для формы логина:
// а) Позитивный тест на вход с валидными данными и проверка отсутствия ошибок
// б) Проверка входа с несуществующими кредами и проверка ошибки

