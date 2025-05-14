/* Task - 1  */
// Змінна для зберігання дати створеного файла
let dataField;
// Змінна для зберігання ім'я файлу
let nameField;
// Змінна для зберігання кількості помилок
let quantityFalse;

/* Task - 2;
Оголошуємо зміну name та ініціалізуємо її як Yuliia. Оголошуємо зміну login та прирівнюємо її до змінної name. На консоль втводимо значення змінної login */
let name = "Yuliia";
let login = name;

console.log(login);

/* Task - 3 */
let a = 1;
b = 2;
c = 3;

/* Task - 4 */
let age = 20; // Обрала тип данних number бо необхідно вказати числове значення змінної
let isStudent = true; // Обрала тип данних boolean бо необхідно підтвердити правдивість змінної чи ні
let hobby = "reading"; // Обрала тип даних string бо позначаємо рядкове значення
let noData = null; // Обрала null бо змінну оголосили, ініціалізували але значення не присвоїли
let notInitialized; // Обрала undefined бо зміна оголошена але не ініціалізована

console.log(typeof 20);
console.log(typeof true);
console.log(typeof "reading");
console.log(typeof null);
console.log(typeof notInitialized);

/* Task - 5 */

let myUndefined;
console.log(myUndefined);

/* Task - 6 */

let line1 = "Lovin";
let line2 = "It!";
let line3 = "I'm";

let resultLine = line3 + " " + line1 + " " + line2; //change this line

console.log(resultLine);

/* Task - 7 */

let booksRead = 2;
let booksGoal = 5;
let booksLeft = booksGoal - booksRead;
console.log(
  "I need to read " + booksLeft + " more books to reach my goal of " + booksGoal
);
