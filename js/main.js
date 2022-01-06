/**
 *
 * @param scale - метод изменяет размер(масштаб) обьекта
 * @param item -  элемент массива
 */
const create2dMatrix = (scale, item) => {
  // стрелочная функция, создающая 2d матрицу с аргументами
  // методов. Методы срабатывают сами при вызове функции?
  const result = new Array();

  // константа рузульт, в значение которой возвращается вычисления из тела функции
  for (let i = 0; i < scale; i++) {
    // написали цикл, где i меньше чем аргумент scale
    result.push(new Array());

    // result? метод push добавляет новый, пустой массив в выходной массив функциии
    for (let j = 0; j < scale; j++) {
      // цикл в цикле?  результат цикла i. добавить элемент массива в конец.
      result[i].push(item);
    }
  }

  return result;
};

class Create2dMatrix {
  constructor(scale, item) {
    this.scale = scale;
    this.item = item;
    this.matrix = new Array();
  }
  /**
   * _PRIVATE
   * выполняются в пределах класса
   */

  /**
   * Колонка
   */
  _col() {
    for (let i = 0; i < this.scale; i++) {
      this.matrix.push(new Array());
    }
  }

  /**
   * Поля
   */
  _row() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.scale; j++) {
        this.matrix[i].push(this.item(i, j));
      }
    }
  }

  /**
   * PUBLIC
   * выполняются за пределами класса
   */

  result() {
    // Инициировали колонку
    this._col();
    // Заполнили каждую ячейку колонки полями
    this._row();

    console.log(this.matrix);
  }
}

const item = (i, j) => {
  return `${i}${j}`
}

const matrix = new Create2dMatrix(10, item);

matrix.result();
