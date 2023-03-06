// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apple = 47;
// const grapes = 135;
// const total = apple + grapes
// console.log(total);
// const diff = grapes - apple
// console.log(diff);

// ======== ++++++ ========

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students += 50;
// console.log(students);
// students -= 100;
// console.log(students);


// ======== ++++++ ========

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ======== ++++++ ========
// Example 4 - Клас Math
// `round` - математичні правила округлення (27.9 -> 28; 23.3 -> 23)

// const value = 27.4
// console.log("round: ", Math.round(value));
// console.log("ceil: ", Math.ceil(value));
// console.log("floor: ", Math.floor(value));

// ======== ++++++ ========

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems Inc.';
// const count = 2100;
// const mes = `${companyName} has ${count} bullets`
// console.log(mes);

// ======== ++++++ ========
// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
//
// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.
//
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const weight = '88,3';
// const height = '1.75'
// console.log(Number.parseFloat(weight))
// *** HW  weight to decimal number with ***

//
// const bmi = Number.parseFloat(weight) / (Number.parseFloat(height) ** 2)
// console.log(+bmi.toFixed(1));

// ======== ++++++ ========

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); // true
// console.log(10 >= '7'); // true
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);

// ======== ++++++ ========

// Логічні оператори
// console.log(true && -3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');

// console.log(true || 3);
// console.log(false || 0 || 4);
// console.log(null || 2 || undefined);
// console.log(null || (2 && 3) || 4); // 3

// ======== ++++++ ========

// Example 9 - Значення за замовчуванням та оператор нульового злиття;
// const a = undefined;
// const b = 10;
// const res = a || 0
// console.log(res);



// ======== ++++++ ========

// 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// const totalMinutes = 726;
// const hours = Math.floor(totalMinutes / 60)
// const minutes = totalMinutes % 60
// const doubleDigitsHours = String(hours).padStart(2, "0")
// const doubleDigitsMinutes = String(minutes).padStart(2, "0")
//
// const clock = `${doubleDigitsHours}:${doubleDigitsMinutes}`
// console.log(clock);

