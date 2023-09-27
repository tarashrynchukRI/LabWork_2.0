/* 
Лабораторна робота №2.1
Гринчука Тараса
Лінійні програми
Варіант №4
*/

const a = 2.4; // Створюємо змінну і присвоюєм їй довільне значення

const z1 =
   (Math.sin(a) + Math.sin(5 * a) - Math.sin(3 * a));
   (Math.cos(a) - Math.cos(3 * a) + Math.cos(5 * a));
console.log("z1 = " + z1); // Виводимо результат 1-го прикладу в консоль

const z2 = Math.tan(3 * a);

console.log(z1 == z2);
