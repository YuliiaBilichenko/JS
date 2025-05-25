/* Task - 1 */
let userInput = "42";
let sum = userInput == 42;
let sum1 = userInput === 42;
console.log(sum); // Виведе true бо це не строга рівність тому тип значення userInput змінить з string на number.
console.log(sum1); // Виведе false бо маємо строге порівняння, порівнюється як знаення так і тип.

let emptyString = "";
let zero = emptyString == 0;
let zero1 = emptyString === 0;

console.log(zero); // Виведе true бо це не строга рівність тому тип значення emptyString змінить з string на number - це буде 0.
console.log(zero1); // Виведе false бо маємо строге порівняння, порівнюється як знаення так і тип emptyString - string, 0 це number

let fruit = "Apple";
let fruit1 = "apple";
let coshick = fruit > fruit1;
console.log(coshick); // Виведе false бо по табліці Unicode спочатку йдуть великі літери, а потім малі. Тобто у літери "А" порядковий номер по таблиці менший за порядковий номер  літери "а".

/* Task - 2 */

let isAdult = true;
let hasTicket = false;
let isVIP = true;
let canEnter = isAdult && (hasTicket || isVIP);
console.log(canEnter);
let cannotEnter = !canEnter;
console.log(cannotEnter);
let hasFalse = !isAdult || !hasTicket || !isVIP;
console.log(hasFalse);

/* Task - 3 */
let weight = 6;
if (weight < 5) {
  console.log("Він маленький і його ще треба годувати");
} else {
  console.log("Кіт дуже пухнастий і його потрібно розчесати :)");
}

let weight1 = 6;
let message =
  weight <= 5
    ? "Він маленький і його ще треба годувати"
    : "Кіт дуже пухнастий і його потрібно розчесати :)";
console.log(message);

/* Task - 4 */
let age1 = 43;
if (!(age1 >= 18 && age1 <= 50)) {
  console.log("НЕ наймайте людину на роботу");
} else {
  console.log("Наймайте людину на роботу");
}

let age2 = 9;
let sms = !(age2 >= 18 && age2 <= 50)
  ? "НЕ наймайте людину на роботу"
  : "Наймайте людину на роботу";
console.log(sms);

/* Task - 5 */
if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
  console.log("Проходьте, будь ласка!");
}
let height = 170;
let exit = height < 140 ? "Заборонено на атракціон" : "Проходьте, будь ласка!";
console.log(exit);

/* Task - 6 */

let temperature = 55;
if (temperature < 0) {
  console.log("Too cold!");
}
if (temperature >= 0 && temperature <= 25) {
  console.log("Comfortable");
}
if (temperature > 25) {
  console.log("Too hot!");
}

/* Task - 7 */

let age3 = 19;
let access = age3 >= 18 ? "Allowed" : "Denied";
console.log(access);

let age4 = 20;
if (age4 >= 18) {
  console.log("Allowed");
} else {
  console.log("Denied");
}

let age5 = 13;
let sale = age5 === 18 ? "20%" : "10%";
console.log(sale);

/* Task - 8 */

let day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Work day");
    break;
  case "Tuesday":
    console.log("Work day");
    break;
  case "Wednesday":
    console.log("Work day");
    break;
  case "Thursday":
    console.log("Work day");
    break;
  case "Friday":
    console.log("Work day");
    break;
  case "Saturday":
    console.log("Weekend");
    break;
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day"); //Якщо day = 1 результат буде Invalid day, так як switch викорстовує строге порівняння ===, тобто порівнює значення та типи.day = 1 тип Number, case тип string/
}

/* Task - 9 */

let age = 16;
switch (age) {
  case 15:
    console.log("We cant hire u!");
    break;
  case 16:
    console.log("U can take part time job");
    break;
  case 17:
    console.log("U can take part time job");
    break;
  case 18:
    console.log("U can take full time job");
    break;
  case 19:
    console.log("U can take full time job");
    break;
  default:
    console.log("U can go to childrengarden");
}
