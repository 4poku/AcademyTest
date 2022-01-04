function consoleLogDecorator(message, value) {
    console.log('debug::', message, value)
  };
  const _dbg = consoleLogDecorator

  function forDecorator(x) {
    for (let i = 0; i < x + 1; i++) {
     _dbg('for:', i) 
    }
  }

  const _for = forDecorator
// Функция сложения/addition
function addition(a, b) {
    return a + b // Вернул значение 
  };
  // Функия вычитания/subtract
  function sutract(a, b) {
    return a - b 
  };
  // Функия деления/divide
  function divide(a, b) {
    return a / b 
  };
  // Функия умножения/multiplication
  function multiplication(a, b) {
    return a * b 
  };
  // Функция вычисления корня
  function sqrt(x) {
    return Math.sqrt(x) 
  };
  // Функция вычисления степени/pow
  function pow(x) {
    return Math.pow(x, 2)
   }; 

  function sin(a) {
    return Math.sin(a)
  };

  function cos(a) {
    return Math.cos(a)
  };
  
  let calc = {
      addition, 
      sutract,
      divide,
      multiplication,
      sqrt,
      pow,
      sin,
      cos,
  }

/**
 * calc Дано: sin a = корень 3, cos a = 1/2
 * tgA = (sinA / cosA) * (sinA * CosA)
 */
// 1. Вычислить sin(a) и cos(a)
// 2. left Разделить sin(a) na cos(a)
// 3. right sin(A) * cos(b)
  // function formula2(sinA, cosA) {
  //   const leftBrace = calc.divide(sinA, cosA) //Деление
  //   const rightBrace = calc.multiplication(sinA, cosA)
  //   const FinalBrace = leftBrace * rightBrace
  //   return FinalBrace;
  // }
  // _dbg('', formula2(0.06, 0.5))
 
/**
 * Higher-Order Functions (функции высокого порядка)
 * 
 * Функция, которая принимает функцию в качестве аргумента и/или возвращает функцию
 *  
 */  
//  const filter = (predicate, xs) => {
//     const result = []
//     for (let idx = 0; idx < xs.length; idx++) {
//       if (predicate(xs[idx])) {
//         result.push(xs[idx])
//       }
//     }
//     return result
//   }

/** 
 * Partial Application (частичное применение)
 * 
 * Частичное применение функции означает создание новой функции 
 * с пред-заполнением некоторых аргументов оригинальной функции.
 * 
 */  


// Помощник для создания частично применяемых функций
// Принимает функцию и некоторые аргументы
// const partial = (f, ...args) =>
//   // возвращает функцию, которая принимает остальные аргументы
//   (...moreArgs) =>
//     // и вызывает исходную функцию со всеми из них
//     f(...args, ...moreArgs)

// // Что-то, что можно применить
// const add3 = (a, b, c) => a + b + c

// // Частичное применение `2` и `3` к `добавить 3` дает вам функцию с одним аргументом
// const fivePlus = partial(add3, 2, 3) // (c) => 2 + 3 + c

// fivePlus(4) // 9


// Currying (каррирование)
/**
 * Процесс конвертации функции, которая принимает несколько аргументов, в функцию, которая принимает один аргумент за раз.
 *
 *  При каждом вызове функции она принимает один аргумент и возвращает функцию, которая принимает один аргумент до тех пор, 
 *  пока все аргументы не будут обработаны.
 */

//  const sum = (a, b) => a + b

//  const curriedSum = (a) => (b) => a + b
 
//  curriedSum(40)(2) // 42.
 
//  const add2 = curriedSum(2) // (b) => 2 + b
 
//  add2(10) // 12

// Auto Currying (автоматическое каррирование)
/**
 * Трансформация функции, которая принимает несколько аргументов, в новую функцию. 
 * Если в новую функцию передать меньшее чем предусмотрено количество аргументов, то она вернет функцию, 
 * которая принимает оставшиеся аргументы. Когда функция получает правильное количество аргументов, то она исполняется.
 * 
 * В Underscore, lodash и ramda есть функция curry.
 */

//  const add = (x, y) => x + y

//  const curriedAdd = _.curry(add) // синтаксическая ошибка
//  curriedAdd(1, 2) // 3
//  curriedAdd(1) // (y) => 1 + y
//  curriedAdd(1)(2) // 3
// _dbg('', curriedAdd(1)(2))

/**
 * Function Composition (композиция функций)
 *
 * Соединение двух функций для формирования новой функции, 
 * в которой вывод первой функции является вводом второй.
 */

//  const compose = (f, g) => (a) => f(g(a)) // Definition
//  const floorAndToString = compose((val) => val.toString(), Math.floor) // Usage
//  floorAndToString(121.212121) // '121'

 // tgA = (sinA / cosA) * (a / b)
//  const CompoFormula = (sinA, cosA) => (a, b) 
//    const Brace = calc.multiplication(sinA / cosA)
//    const Brace2 = 
//    return
 
// Попытался решить уравнения с использованием Композиции
// sin^a + cos^a + 2b = 1
// const primer = (sinA, cosA) => (b) => calc.addition(sinA, cosA) => calc.addition()
// const ShowPrimer = calc.addition(sinA, cosA) => calc.addition()

// const incrementAll = (numbers) => map(add(1))(numbers)


/**
 * Многомерный массив
 * Массивы могут содержать элементы, 
 * которые тоже являются массивами. 
 * Это можно использовать для создания многомерных массивов, 
 * например, для хранения матриц.
 *  
 * 
 */ 

 const arr = new Array(10)
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(10)  
};

/**
 * 
       * @param scale - метод изменяет размер(масштаб) обьекта
       * @param item -  элемент массива
       */
 const create2dMatrix = (scale, item) => {
  // стрелочная функция, создающая 2d матрицу с аргументами
  // методов. Методы срабатывают сами при вызове функции?
  const result = new Array()
  // константа рузульт, в значение которой возвращается вычисления из тела функции
  for (let i = 0; i < scale; i++) {
    // написали цикл, где i меньше чем аргумент scale 
    result.push(new Array())
    // result? метод push добавляет новый, пустой массив в выходной массив функциии
    for (let j = 0; j < scale; j++) {
      // цикл в цикле?  результат цикла i. добавить элемент массива в конец.
      result[i].push(item)
    }
  }

  return result
}

