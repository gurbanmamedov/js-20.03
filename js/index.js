//Создайте объект user, который имеет свойства name, age и метод greet(), который выводит сообщение вида "Привет, меня зовут [name], мне [age] лет".\

// const user = {
//   name: "Sam",
//   age: 30,
//   greet() {
//     console.log(`Привет, меня зовут ${this.name}, мне ${this.age}лет`);
//   },
// };

// user.greet;

//Создайте объект rectangle, который имеет свойства width и height, а также метод getArea(), который выводит в консоль площадь прямоугольника по формуле "ширина * высота".

// const rectangle = {
//   width: 5,
//   height: 10,
//   getArea() {
//     const area = this.width * this.height;
//     console.log(`Площадь прямоугольника : ${area}`);
//   },
// };

// rectangle.area;

//Создайте объект game, который имеет свойства score и level, а также метод increaseScore(), который увеличивает score на единицу, и метод increaseLevel(), который увеличивает level на единицу.

// const game = {
//   score: 10,
//   level: 2,
//   increaseScore() {
//     this.score++;
//   },
//   increaseLevel() {
//     this.level++;
//   },
// };

// game.increaseLevel();
// console.log(`Текущий уровень ${game.level}`);

// game.increaseScore();
// console.log(`Текущий счет ${game.score}`);

//Создайте объект user, который имеет свойства name, age и метод sayName(), который выводит в консоль "Меня зовут [name]".

// const user = {
//   name: "Gerald",
//   age: "45",
//   sayName() {
//     console.log(`Меня зовут ${this.name}`);
//   },
// };

// user.sayName();

//Создайте объект counter, который имеет свойства value и методы increase(), decrease() для увеличения и уменьшения значения счётчика соответственно.

// const counter = {
//   value: 3,
//   increase() {
//     this.value++;
//   },
//   decrease() {
//     this.value--;
//   },
// };

// console.log(`Current value ${counter.value}`);

// counter.increase();
// console.log(`Increased value ${counter.value}`);

// counter.decrease();
// console.log(`Decreased value ${counter.value}`);

//Создайте объект product, который имеет свойства name, price и метод getDiscountedPrice(), который принимает параметр discount и возвращает цену товара с учётом скидки.

// const product = {
//   name: "PC",
//   price: "1000",
//   getDiscountedPrice() {
//     return this.price - (this.price * discount) / 100;
//   },
// };

// const discount = 10;
// const discountedPrice = product.getDiscountedPrice(discount);

// console.log(`Discount ${discount}%. Discounted price $${discountedPrice}`);

//Создайте объект team, который имеет свойства name и members (массив), а также метод listMembers(), который выводит в консоль список участников команды

// const team = {
//   name: "Team Witchers",
//   members: ["Gerald", "Cirilla", "Triss"],
//   listMembers() {
//     console.log(`Team members`, this.name + " : ");
//     this.members.forEach((member) => {
//       console.log(member);
//     });
//   },
// };

// team.listMembers();

//Создайте объект person с методом sayHello, который выводит в консоль сообщение "Привет, меня зовут [name]". Используйте метод call, чтобы вызвать этот метод с различными именами.

// const person = {
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
// };

// person.sayHello.call(person, "Gerald");
// person.sayHello.call(person, "Cirilla");
// person.sayHello.call(person, "Triss");

//Создайте функцию calculateTotal, которая принимает произвольное количество аргументов (цены товаров) и возвращает общую сумму. Используйте метод apply, чтобы передать массив цен товаров и получить общую сумму.

//Создайте функцию multiply, которая принимает два аргумента и возвращает их произведение. Используйте метод bind, чтобы создать новую функцию double, которая будет умножать переданный ей аргумент на 2.

// function multiply(x, y) {
//   return x * y;
// }

// const double = multiply.bind(null, 2);

// console.log(double(5));

//Создайте объект teacher с методом introduce, который выводит в консоль сообщение "Меня зовут [name], я преподаю [subject]". Создайте объект student с полями name и subject, а затем вызовите метод introduce объекта teacher, передавая в него контекст объекта student.

// const teacher = {
//   introduce: function () {
//     console.log(`Меня зовут ${this.name}, я преподаю ${this.subject}.`);
//   },
// };

// const student = {
//   name: "Gerald",
//   subject: "Computer Science",
// };

// teacher.introduce.call(student);

//Создайте функцию findMax, которая принимает массив чисел и возвращает максимальное значение из этого массива. Используйте метод apply, чтобы передать массив чисел и найти максимальное значение.

// function findMax(numbers) {
//   return Math.max.apply(null, numbers);
// }

// const numbers = [2, 3, 5, 6, 7];
// const maxNumber = findMax(numbers);

// console.log(maxNumber);

//Создайте объект dog с методом bark, который выводит в консоль сообщение "Гав-гав, меня зовут [name]". Создайте новую функцию barkTwice, которая будет вызывать метод bark объекта dog дважды. Используйте метод bind, чтобы привязать контекст объекта dog к функции barkTwice.

// const dog = {
//   name: "Рекс",
//   bark: function () {
//     console.log(`Гав-гав, меня зовут ${this.name}`);
//   },
// };

// function barkTwice() {
//   this.bark();
//   this.bark();
// }

// const dogBarkTwice = barkTwice.bind(dog);
// dogBarkTwice();

//Создайте функцию greet, которая принимает имя и время суток и выводит приветствие в зависимости от времени суток. Используйте метод call, чтобы вызвать функцию greet с различными аргументами и контекстом.

// function greet(name, timeOfDay) {
//   const greetings = {
//     утро: "Доброе утро",
//     день: "Добрый день",
//     вечер: "Добрый вечер",
//     ночь: "Доброй ночи",
//   };
//   const greeting = greetings[timeOfDay] || "Добрый день";
//   console.log(`${greeting}, ${name}!`);
// }

// greet.call(null, "Gerald", "утро");
// greet.call(null, "Triss", "день");
// greet.call(null, "Cirilla", "вечер");
// greet.call(null, "Vesemir", "ночь");

//Создайте функцию calculateAverage, которая принимает массив оценок и возвращает среднее значение. Используйте метод apply, чтобы передать массив оценок и найти среднее значение.
// function calculateAverage(grades) {
//   const sum = grades.reduce(function (acc, curr) {
//     return acc + curr;
//   }, 0);
//   const average = sum / grades.length;
//   return average;
// }
// const grades = [4, 5, 3, 5, 2];
// const averageGrade = calculateAverage.apply(null, [grades]);
// console.log(averageGrade);

//Создайте объект person с полем name. Создайте функцию sayName, которая выводит в консоль сообщение "Меня зовут [name]". Используйте метод bind, чтобы создать новую функцию sayPersonName, которая будет выводить имя объекта person.

// const person = {
//   name: "Gerald",
// };

// function sayName() {
//   console.log(`Меня зовут ${this.name}`);
// }

// const sayPersonName = sayName.bind(person);

// sayPersonName();

//Создайте функцию printDetails, которая принимает три аргумента: имя, возраст и профессию, и выводит в консоль подробные данные о человеке. Создайте объект details с полями name, age и profession, а затем вызовите функцию printDetails, передавая в нее контекст объекта details с помощью метода call.

function printDetails(name, age, profession) {
  console.log(`Имя: ${name}`);
  console.log(`Возраст: ${age}`);
  console.log(`Профессия: ${profession}`);
}

const details = {
  name: "Gerald",
  age: 30,
  profession: "Witcher",
};

printDetails.call(null, details.name, details.age, details.profession);
