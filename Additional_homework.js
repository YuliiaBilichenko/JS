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
/* Task - 8 */
let input = "42";
let convertedInput = Number(input);
console.log(convertedInput);
let unaryConverted = +42;
console.log(typeof input, typeof convertedInput, typeof unaryConverted);

let multInput = input * 2;
console.log(multInput, typeof multInput);
// Отримали 84 number бо відбулося неявне перетворення змінної input з типом string у тип number.

/* Task - 9; */
let counter = 10;
console.log(counter++);
console.log(++counter);
/* Постфікстний інкремент спочатку прирівнює до значення змінної, а подальші буде додавати 1. Префікстний інкремент до значення зсінної додає 1, а потім прирівнює; */
let result = counter++;
console.log(result);
console.log(counter++);
/* Останнє значення змінної counter = 12, після цього ми прирівняли до змінної result, тому result = 12. Після цього +1 і тому вже counter = 13. */

/* Task - 10 */
let x = 3;
let y = 4;
let z = 0;

let digits = x + y + "" + z;

console.log(digits);

/* Task - 11 */
let bigAmount = "500";
let greatAmount = "100000";

let hugeAmount = Number(bigAmount) + Number(greatAmount); //change this line

console.log(hugeAmount);

/* Task - 12; */

let emptyString = "";

console.log(emptyString.length);
console.log("Think Different".length);
console.log(emptyString + 2 + 2 + "22".length);

/* Task - 13 */

let title = "Senior Lead Principal Data Analyst";
let degree =
  "In college, I Majored in Economics Science and Minored in Musician Studies.";
let career =
  "Data Scientist With 3+ Years of Experience in Big Data Analytics.";

console.log("RESUME".toLowerCase());
console.log("TITLE: ".toLowerCase() + title);
console.log("DEGREE: ".toLowerCase() + degree);
console.log("CAREER: ".toLowerCase() + career);

/* Task - 14 */

let caps = "if I type in caps ";
let fbi = "фбр";

console.log(fbi.toUpperCase());
console.log("Гекльберрі Фінн".toUpperCase());
console.log(caps.toUpperCase() + "they know I mean business".toUpperCase());

/* Task - 15  */

let inputX = 2;
let inputY = 3;

let resultX = Number(inputX);
let resultY = Number(inputY);

let sum = inputX + inputY;
let multiply = inputX * inputY;
let division = inputY / inputX;
let subtraction = inputY - inputX;

console.log(`${resultX} + ${resultY} = ${sum}`);
console.log(`${resultX} * ${resultY} = ${multiply}`);
console.log(`${resultY} / ${resultX} = ${division}`);
console.log(`${resultY} - ${resultX} = ${subtraction}`);

/* Task - 16 */

let name1 = "Максим";
let age1 = 29;
let company = "Apple";
let position = "QA";

let message = `Привіт, мене звати ${name1} .  Мені ${age1} років. Я працюю на посаді ${position} в компанії ${company}`;
console.log(message);
