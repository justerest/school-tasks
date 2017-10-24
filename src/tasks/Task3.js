/* eslint-disable no-unused-vars */
/* globals write, writeln, readln */
export default (self = { console: '' }) => { // eslint-disable-line no-unused-vars
  // Код ученика:

  var a = 3;
  var b = 2;
  var c = 1;

  // TODO: Сделать вывод на экран уравнения с коэффициентами (2x^2 + 5x + 1 = 0)

  var D = Math.pow(b, 2) - 4 * a * c;
  writeln('D = ', D + '\n');

  // TODO: Дописать условия, необходимые для корректного вывода результата
  // FIXME: Программа должна завершаться, если решений нет

  var x1 = (-b + Math.sqrt(D)) / (2 * a);
  writeln('x1 = ', x1);

  // FIXME: x2 не должно выводиться при одинаковых значениях x1 и x2

  var x2 = (-b - Math.sqrt(D)) / (2 * a);
  writeln('x2 = ', x2);

  // Конец
  return self;
};
