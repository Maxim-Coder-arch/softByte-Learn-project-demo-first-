import { Course } from "../dataCourse"

export const javascriptCourse: Course = {
  id: 2,
  slug: "javascript",
  title: "Курс по JavaScript",
  subTitle: "Язык программирования для веба",
  description: "Полный курс JavaScript от основ до продвинутых концепций. Изучите самый популярный язык программирования в мире.",
  level: "Начинающий",
  lessons: [
    {
      id: "js-1",
      slug: "js-introduction",
      title: "Введение в JavaScript",
      description: "Основы JavaScript: переменные, типы данных, операторы",
      duration: "45 минут",
      videoId: "dQw4w9WgXcQ",
      order: 1,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Что такое JavaScript?",
          level: 1
        },
        {
          id: "p2",
          type: "text",
          content: "JavaScript - это высокоуровневый, интерпретируемый язык программирования, который используется для создания интерактивных веб-страниц. Это один из трех основных языков веб-разработки (HTML, CSS, JavaScript)."
        },
        {
          id: "p3",
          type: "list",
          content: "Где используется JavaScript:",
          listItems: [
            "Веб-разработка (фронтенд и бэкенд через Node.js)",
            "Мобильные приложения (React Native, Ionic)",
            "Десктопные приложения (Electron)",
            "Игры (WebGL, Phaser)",
            "Машинное обучение (TensorFlow.js)"
          ]
        },
        {
          id: "p4",
          type: "heading",
          content: "Переменные и константы",
          level: 2
        },
        {
          id: "p5",
          type: "code",
          content: `// Объявление переменных
var oldVariable = "Устаревший способ"; // ES5
let modernVariable = "Современный способ"; // ES6+
const constantVariable = "Неизменяемое значение"; // ES6+

// Попробуем изменить
modernVariable = "Новое значение"; // ОК
// constantVariable = "Другое значение"; // Ошибка!

// Области видимости
function scopeExample() {
    if (true) {
        var functionScoped = "Функциональная область";
        let blockScoped = "Блочная область";
        const alsoBlockScoped = "Тоже блочная";
    }
    console.log(functionScoped); // Работает
    // console.log(blockScoped); // Ошибка!
    // console.log(alsoBlockScoped); // Ошибка!
}

// Правила именования
const userName = "Иван"; // camelCase
const API_KEY = "secret123"; // UPPER_SNAKE_CASE
const $specialVariable = "jQuery style";
const _privateVariable = "приватная";`,
          language: "javascript"
        },
        {
          id: "p6",
          type: "note",
          content: "Всегда используйте const по умолчанию, и только let если значение действительно будет меняться. Старайтесь избегать var."
        },
        {
          id: "p7",
          type: "heading",
          content: "Типы данных",
          level: 2
        },
        {
          id: "p8",
          type: "code",
          content: `// Примитивные типы
const stringType = "Текст"; // Строка
const numberType = 42; // Число
const booleanType = true; // Логическое значение
const nullType = null; // "Ничего"
const undefinedType = undefined; // "Не определено"
const symbolType = Symbol('id'); // Символ
const bigIntType = 9007199254740991n; // Большое целое

// Объектные типы
const objectType = { name: "Иван", age: 30 }; // Объект
const arrayType = [1, 2, 3, 4, 5]; // Массив
const functionType = function() { return "Привет"; }; // Функция
const dateType = new Date(); // Дата

// Проверка типов
console.log(typeof stringType); // "string"
console.log(typeof numberType); // "number"
console.log(typeof booleanType); // "boolean"
console.log(typeof nullType); // "object" (историческая особенность)
console.log(typeof undefinedType); // "undefined"
console.log(typeof arrayType); // "object"
console.log(Array.isArray(arrayType)); // true

// Динамическая типизация
let dynamic = "текст"; // string
dynamic = 123; // теперь number
dynamic = true; // теперь boolean`,
          language: "javascript"
        },
        {
          id: "p9",
          type: "heading",
          content: "Операторы",
          level: 2
        },
        {
          id: "p10",
          type: "code",
          content: `// Арифметические операторы
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
let power = 2 ** 3; // 8

// Операторы сравнения
console.log(5 == "5"); // true (нестрогое)
console.log(5 === "5"); // false (строгое)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 >= 10); // true

// Логические операторы
const and = true && false; // false
const or = true || false; // true
const not = !true; // false

// Тернарный оператор
const age = 18;
const status = age >= 18 ? "Взрослый" : "Ребенок";

// Операторы присваивания
let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6

// Операторы нулевого слияния и опциональной цепочки
const user = { name: "Иван" };
const userName = user?.name ?? "Гость";
console.log(userName); // "Иван"`,
          language: "javascript"
        }
      ]
    },
    {
      id: "js-2",
      slug: "js-control-flow",
      title: "Управление потоком выполнения",
      description: "Условные операторы и циклы",
      duration: "40 минут",
      videoId: "controlflow123",
      order: 2,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Условные операторы",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// if...else
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Доброе утро!";
} else if (hour < 18) {
    greeting = "Добрый день!";
} else {
    greeting = "Добрый вечер!";
}

// Switch
const day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Воскресенье";
        break;
    case 1:
        dayName = "Понедельник";
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    default:
        dayName = "Неизвестный день";
}

// Тернарный оператор
const isAdult = age >= 18 ? "Взрослый" : "Ребенок";

// Логические операторы как условные
const user = null;
const username = user && user.name; // null
const defaultName = user || "Гость"; // "Гость"`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "Циклы",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// Цикл for
for (let i = 0; i < 5; i++) {
    console.log(\`Итерация: \${i}\`);
}

// Цикл while
let count = 0;
while (count < 5) {
    console.log(\`Счет: \${count}\`);
    count++;
}

// Цикл do...while
let num = 0;
do {
    console.log(\`Число: \${num}\`);
    num++;
} while (num < 3);

// Цикл for...in (для объектов)
const person = { name: "Иван", age: 30, city: "Москва" };
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Цикл for...of (для итерируемых объектов)
const colors = ["красный", "зеленый", "синий"];
for (let color of colors) {
    console.log(color);
}

// Методы break и continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Пропустить итерацию
    if (i === 7) break; // Прервать цикл
    console.log(i);
}

// Метки для циклов
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Прервать внешний цикл
        }
        console.log(\`i=\${i}, j=\${j}\`);
    }
}`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "note",
          content: "Для массивов предпочтительнее использовать методы map, filter, reduce вместо циклов for. Это улучшает читаемость кода."
        }
      ]
    },
    {
      id: "js-3",
      slug: "js-functions",
      title: "Функции в JavaScript",
      description: "Все о функциях: объявление, параметры, замыкания",
      duration: "50 минут",
      videoId: "functions456",
      order: 3,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Объявление функций",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// Function Declaration (поднимается)
function greet(name) {
    return \`Привет, \${name}!\`;
}

// Function Expression
const greetExpression = function(name) {
    return \`Привет, \${name}!\`;
};

// Arrow Function (ES6+)
const greetArrow = (name) => {
    return \`Привет, \${name}!\`;
};

// Сокращенная Arrow Function
const greetShort = name => \`Привет, \${name}!\`;

// Функции как значения
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
};

console.log(operations.add(5, 3)); // 8

// Параметры по умолчанию
function createUser(name, age = 18, city = "Москва") {
    return { name, age, city };
}

// Rest параметры
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Деструктуризация параметров
function printUser({ name, age, city = "Неизвестно" }) {
    console.log(\`\${name}, \${age} лет, город: \${city}\`);
}

const user = { name: "Иван", age: 30 };
printUser(user); // Иван, 30 лет, город: Неизвестно`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "Замыкания и области видимости",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// Замыкание (Closure)
function createCounter() {
    let count = 0; // приватная переменная
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
// console.log(count); // Ошибка: count не определена

// Каррирование
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
const triple = multiply(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Каррирование с arrow functions
const multiplyArrow = a => b => a * b;

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Эта функция выполняется сразу!");
})();

// Модульный паттерн
const calculator = (function() {
    let memory = 0;
    
    return {
        add: function(x) {
            memory += x;
            return this;
        },
        subtract: function(x) {
            memory -= x;
            return this;
        },
        getResult: function() {
            return memory;
        },
        clear: function() {
            memory = 0;
            return this;
        }
    };
})();

calculator.add(5).add(3).subtract(2);
console.log(calculator.getResult()); // 6`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "heading",
          content: "Рекурсия",
          level: 2
        },
        {
          id: "p6",
          type: "code",
          content: `// Факториал
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Числа Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8

// Глубокое копирование объекта с рекурсией
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }
    
    const copied = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copied[key] = deepCopy(obj[key]);
        }
    }
    return copied;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copy = deepCopy(original);`,
          language: "javascript"
        },
        {
          id: "p7",
          type: "note",
          content: "Будьте осторожны с рекурсией - всегда убедитесь, что есть условие выхода, иначе получите бесконечную рекурсию и переполнение стека."
        }
      ]
    },
    {
      id: "js-4",
      slug: "js-arrays",
      title: "Массивы и методы работы с ними",
      description: "Работа с массивами: создание, методы, итерация",
      duration: "45 минут",
      videoId: "arrays789",
      order: 4,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Создание и базовые операции",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// Создание массивов
const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "текст", true, { name: "Иван" }, [1, 2]];
const fromString = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
const withFill = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// Доступ к элементам
const fruits = ["яблоко", "банан", "апельсин"];
console.log(fruits[0]); // "яблоко"
console.log(fruits[fruits.length - 1]); // последний элемент

// Изменение массивов
fruits.push("манго"); // Добавить в конец
fruits.pop(); // Удалить с конца
fruits.unshift("киви"); // Добавить в начало
fruits.shift(); // Удалить с начала
fruits[1] = "груша"; // Изменить элемент

// Методы массивов
const numbers = [1, 2, 3, 4, 5];

// map - преобразовать каждый элемент
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - отфильтровать элементы
const even = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - свернуть массив в одно значение
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find - найти элемент
const found = numbers.find(n => n > 3); // 4

// findIndex - найти индекс элемента
const index = numbers.findIndex(n => n > 3); // 3

// some - хотя бы один элемент удовлетворяет условию
const hasEven = numbers.some(n => n % 2 === 0); // true

// every - все элементы удовлетворяют условию
const allPositive = numbers.every(n => n > 0); // true

// sort - сортировка
const unsorted = [3, 1, 4, 1, 5];
const sorted = unsorted.sort((a, b) => a - b); // [1, 1, 3, 4, 5]

// Деструктуризация массива
const [first, second, ...rest] = numbers; // first=1, second=2, rest=[3,4,5]`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "Продвинутые методы",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// flatMap - map + flat
const phrases = ["Привет мир", "Как дела"];
const words = phrases.flatMap(phrase => phrase.split(" "));
// ["Привет", "мир", "Как", "дела"]

// reduce для сложных операций
const people = [
    { name: "Иван", age: 30, city: "Москва" },
    { name: "Мария", age: 25, city: "Санкт-Петербург" },
    { name: "Алексей", age: 30, city: "Москва" }
];

// Группировка по городу
const byCity = people.reduce((acc, person) => {
    const city = person.city;
    if (!acc[city]) acc[city] = [];
    acc[city].push(person);
    return acc;
}, {});

// Сортировка объектов
const users = [
    { name: "Иван", age: 30 },
    { name: "Мария", age: 25 },
    { name: "Алексей", age: 35 }
];

const sortedByAge = users.sort((a, b) => a.age - b.age);
const sortedByName = users.sort((a, b) => 
    a.name.localeCompare(b.name, 'ru')
);

// Удаление дубликатов
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(duplicates)]; // [1, 2, 3, 4, 5]
const uniqueObjects = Array.from(
    new Map(people.map(p => [p.name, p])).values()
);

// Многомерные массивы
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Транспонирование матрицы
const transposed = matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
);`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "note",
          content: "Методы map, filter, reduce не изменяют исходный массив - они возвращают новый. Это важно для функционального программирования."
        }
      ]
    },
    {
      id: "js-5",
      slug: "js-objects",
      title: "Объекты в JavaScript",
      description: "Работа с объектами: создание, свойства, методы",
      duration: "50 минут",
      videoId: "objects012",
      order: 5,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Создание и работа с объектами",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// Создание объектов
const obj1 = {}; // Литерал объекта
const obj2 = new Object(); // Конструктор
const obj3 = Object.create(null); // С прототипом

// Объект с данными
const person = {
    name: "Иван",
    age: 30,
    city: "Москва",
    isEmployed: true,
    
    // Методы
    greet() {
        return \`Привет, меня зовут \${this.name}\`;
    },
    
    // Getter
    get birthYear() {
        return new Date().getFullYear() - this.age;
    },
    
    // Setter
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Доступ к свойствам
console.log(person.name); // Точечная нотация
console.log(person["age"]); // Скобочная нотация
const prop = "city";
console.log(person[prop]); // Динамический доступ

// Добавление и удаление свойств
person.email = "ivan@example.com";
delete person.isEmployed;

// Проверка свойств
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true

// Деструктуризация
const { name, age, ...rest } = person;
const { name: userName, city = "Неизвестно" } = person;

// Spread оператор для объектов
const updatedPerson = { ...person, age: 31 };
const merged = { ...person, ...{ hobby: "чтение" } };

// Методы Object
const keys = Object.keys(person); // ["name", "age", ...]
const values = Object.values(person); // ["Иван", 30, ...]
const entries = Object.entries(person); // [["name", "Иван"], ...]

// Копирование объектов
const shallowCopy = { ...person };
const deepCopy = JSON.parse(JSON.stringify(person));`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "Прототипы и наследование",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// Прототипное наследование
const animal = {
    eats: true,
    walk() {
        console.log("Животное гуляет");
    }
};

const rabbit = {
    jumps: true,
    __proto__: animal // Устаревший способ
};

// Современный способ
const rabbit2 = Object.create(animal, {
    jumps: { value: true }
});

console.log(rabbit.eats); // true (из прототипа)
rabbit.walk(); // "Животное гуляет"

// Конструкторы и классы (старый стиль)
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(\`Привет, меня зовут \${this.name}\`);
};

const user1 = new User("Иван", 30);

// Современные классы (ES6+)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.count++;
    }
    
    // Метод экземпляра
    greet() {
        return \`Привет, я \${this.name}\`;
    }
    
    // Статический метод
    static compare(a, b) {
        return a.age - b.age;
    }
    
    // Getter
    get birthYear() {
        return new Date().getFullYear() - this.age;
    }
    
    // Setter
    set fullName(value) {
        const [firstName, lastName] = value.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Наследование классов
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Вызов родительского конструктора
        this.position = position;
    }
    
    work() {
        return \`\${this.name} работает как \${this.position}\`;
    }
    
    // Переопределение метода
    greet() {
        return \`\${super.greet()}, я \${this.position}\`;
    }
}

const employee = new Employee("Мария", 25, "Разработчик");
console.log(employee.greet()); // "Привет, я Мария, я Разработчик"`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "note",
          content: "В JavaScript все объекты связаны цепочкой прототипов. Когда вы обращаетесь к свойству объекта, JavaScript сначала ищет его в самом объекте, затем в его прототипе, и так далее по цепочке."
        }
      ]
    },
    {
      id: "js-6",
      slug: "js-async",
      title: "Асинхронный JavaScript",
      description: "Работа с асинхронным кодом: колбэки, промисы, async/await",
      duration: "55 минут",
      videoId: "async345",
      order: 6,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Callback Hell и Промисы",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// Callback Hell (Ад колбэков)
function getUserData(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "Иван" };
        callback(user);
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        const orders = [{ id: 1, total: 100 }, { id: 2, total: 200 }];
        callback(orders);
    }, 1000);
}

// Проблема: вложенные колбэки
getUserData(1, function(user) {
    getOrders(user.id, function(orders) {
        console.log("Заказы пользователя:", orders);
        // И так далее...
    });
});

// Промисы (Promises) - решение
function getUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: "Иван" };
            resolve(user);
            // reject(new Error("Пользователь не найден")); // В случае ошибки
        }, 1000);
    });
}

function getOrdersPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = [{ id: 1, total: 100 }, { id: 2, total: 200 }];
            resolve(orders);
        }, 1000);
    });
}

// Использование промисов
getUserDataPromise(1)
    .then(user => {
        console.log("Пользователь:", user);
        return getOrdersPromise(user.id);
    })
    .then(orders => {
        console.log("Заказы:", orders);
    })
    .catch(error => {
        console.error("Ошибка:", error);
    })
    .finally(() => {
        console.log("Запрос завершен");
    });

// Параллельное выполнение
Promise.all([
    getUserDataPromise(1),
    getUserDataPromise(2)
])
.then(([user1, user2]) => {
    console.log("Оба пользователя:", user1, user2);
});

// Первый выполнившийся промис
Promise.race([
    getUserDataPromise(1),
    new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Таймаут")), 500)
    )
])
.then(user => console.log("Победитель:", user))
.catch(error => console.error("Ошибка:", error));`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "Async/Await",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// Async/await - современный подход
async function fetchUserData(userId) {
    try {
        // Ждем выполнение промиса
        const user = await getUserDataPromise(userId);
        console.log("Пользователь получен:", user);
        
        // Параллельное выполнение
        const [orders, profile] = await Promise.all([
            getOrdersPromise(userId),
            fetchUserProfile(userId)
        ]);
        
        console.log("Заказы:", orders);
        console.log("Профиль:", profile);
        
        return { user, orders, profile };
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error; // Пробрасываем ошибку дальше
    } finally {
        console.log("Запрос данных завершен");
    }
}

// Использование async функции
fetchUserData(1)
    .then(data => console.log("Все данные:", data))
    .catch(error => console.error("Финальная ошибка:", error));

// IIFE с async/await
(async () => {
    try {
        const data = await fetchUserData(1);
        console.log("Данные получены:", data);
    } catch (error) {
        console.error("Ошибка в IIFE:", error);
    }
})();

// Генераторы для асинхронного кода
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

// Использование async генератора
(async () => {
    const generator = asyncGenerator();
    for await (const value of generator) {
        console.log(value); // 1, затем 2, затем 3
    }
})();

// Top-level await (ES2022)
const user = await getUserDataPromise(1); // В модулях ES6`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "heading",
          content: "Fetch API для работы с HTTP",
          level: 2
        },
        {
          id: "p6",
          type: "code",
          content: `// Базовый fetch запрос
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(\`HTTP ошибка! Статус: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка fetch:", error);
        throw error;
    }
}

// POST запрос с данными
async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token123'
        },
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin'
    });
    
    return response.json();
}

// Загрузка файла
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });
    
    return response.json();
}

// Обработка прогресса загрузки
async function fetchWithProgress(url, onProgress) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const contentLength = +response.headers.get('Content-Length');
    
    let receivedLength = 0;
    let chunks = [];
    
    while(true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        chunks.push(value);
        receivedLength += value.length;
        
        if (onProgress && contentLength) {
            onProgress(receivedLength / contentLength);
        }
    }
    
    const chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for(let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }
    
    return new TextDecoder().decode(chunksAll);
}`,
          language: "javascript"
        },
        {
          id: "p7",
          type: "note",
          content: "Всегда обрабатывайте ошибки в асинхронном коде с помощью try/catch. Необработанные промисы могут привести к утечкам памяти и неожиданному поведению."
        }
      ]
    },
    {
      id: "js-7",
      slug: "js-dom",
      title: "Работа с DOM",
      description: "Манипуляции с Document Object Model",
      duration: "50 минут",
      videoId: "dom678",
      order: 7,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Основы DOM манипуляций",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// Получение элементов
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');
const byTag = document.getElementsByTagName('div');
const byName = document.getElementsByName('username');

// Современные методы
const querySingle = document.querySelector('.container');
const queryAll = document.querySelectorAll('.item');
const queryInElement = document.querySelector('.parent').querySelector('.child');

// Создание элементов
const newDiv = document.createElement('div');
const newText = document.createTextNode('Привет, мир!');
const fragment = document.createDocumentFragment();

// Добавление элементов
const container = document.querySelector('.container');
container.appendChild(newDiv);
container.insertBefore(newDiv, container.firstChild);
container.replaceChild(newDiv, oldDiv);

// Манипуляции с содержимым
element.innerHTML = '<strong>Новый HTML</strong>';
element.textContent = 'Простой текст';
element.innerText = 'Текст с учетом стилей';

// Атрибуты и свойства
element.setAttribute('data-id', '123');
const id = element.getAttribute('data-id');
element.removeAttribute('data-id');
element.hasAttribute('data-visible');

// dataset API
element.dataset.userId = '123';
element.dataset.userRole = 'admin';
console.log(element.dataset.userId); // "123"

// Классы
element.classList.add('active', 'highlight');
element.classList.remove('inactive');
element.classList.toggle('visible');
element.classList.contains('active');
element.className = 'new-class another-class';

// Стили
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '16px';

// Получение вычисленных стилей
const computed = window.getComputedStyle(element);
const color = computed.getPropertyValue('color');

// Размеры и положение
const rect = element.getBoundingClientRect();
console.log(rect.width, rect.height, rect.top, rect.left);

const offset = {
    top: element.offsetTop,
    left: element.offsetLeft,
    width: element.offsetWidth,
    height: element.offsetHeight
};

const scroll = {
    top: element.scrollTop,
    left: element.scrollLeft,
    width: element.scrollWidth,
    height: element.scrollHeight
};`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "События (Events)",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// Добавление обработчиков событий
const button = document.querySelector('button');

// Старый способ (не рекомендуется)
button.onclick = function() {
    console.log('Нажата кнопка');
};

// Современный способ
button.addEventListener('click', function(event) {
    console.log('Клик!', event);
    console.log('Цель:', event.target);
    console.log('Координаты:', event.clientX, event.clientY);
});

// Обработчик с опциями
button.addEventListener('click', handler, {
    capture: false, // Фаза перехвата
    once: true,     // Выполнить только один раз
    passive: true   // Не вызывать preventDefault()
});

// Удаление обработчика
button.removeEventListener('click', handler);

// Делегирование событий
document.querySelector('.list').addEventListener('click', function(event) {
    if (event.target.matches('.item')) {
        console.log('Нажат элемент:', event.target);
    }
});

// Создание и dispatch событий
const customEvent = new CustomEvent('myEvent', {
    detail: { message: 'Привет!' },
    bubbles: true,
    cancelable: true
});

button.dispatchEvent(customEvent);

// Обработка пользовательского события
button.addEventListener('myEvent', function(event) {
    console.log('Пользовательское событие:', event.detail.message);
});

// Клавиатурные события
document.addEventListener('keydown', function(event) {
    console.log('Клавиша:', event.key);
    console.log('Код:', event.code);
    console.log('Ctrl:', event.ctrlKey);
    
    if (event.key === 'Escape') {
        console.log('Нажат Escape');
    }
});

// События мыши
element.addEventListener('mousemove', function(event) {
    console.log('Мышь:', event.clientX, event.clientY);
});

element.addEventListener('wheel', function(event) {
    console.log('Прокрутка:', event.deltaY);
});

// События формы
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменить отправку формы
    console.log('Форма отправлена');
});

form.addEventListener('input', function(event) {
    console.log('Ввод:', event.target.value);
});

form.addEventListener('change', function(event) {
    console.log('Изменение:', event.target.value);
});`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "heading",
          content: "Анимации и Intersection Observer",
          level: 2
        },
        {
          id: "p6",
          type: "code",
          content: `// requestAnimationFrame для анимаций
function animate() {
    const element = document.querySelector('.animated');
    let position = 0;
    
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        position = (progress / 1000) * 100; // 100px за секунду
        
        element.style.transform = \`translateX(\${position}px)\`;
        
        if (progress < 1000) {
            requestAnimationFrame(step);
        }
    }
    
    let startTime = null;
    requestAnimationFrame(step);
}

// Web Animations API
const element = document.querySelector('.box');
element.animate([
    { transform: 'translateX(0px)', opacity: 1 },
    { transform: 'translateX(100px)', opacity: 0.5 }
], {
    duration: 1000,
    easing: 'ease-in-out',
    iterations: Infinity,
    direction: 'alternate'
});

// Intersection Observer для ленивой загрузки
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

// Наблюдаем за изображениями
document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
});

// Mutation Observer для отслеживания изменений DOM
const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('Добавлены/удалены элементы');
        }
        if (mutation.type === 'attributes') {
            console.log('Изменен атрибут:', mutation.attributeName);
        }
    });
});

mutationObserver.observe(document.body, {
    childList: true,
    attributes: true,
    subtree: true
});`,
          language: "javascript"
        }
      ]
    },
    {
      id: "js-8",
      slug: "js-modules",
      title: "Модули в JavaScript",
      description: "Импорт и экспорт, организация кода",
      duration: "35 минут",
      videoId: "modules901",
      order: 8,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "ES6 Модули",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// math.js - модуль с экспортом
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Именованный экспорт класса
export class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(x) {
        this.result += x;
        return this;
    }
    
    getResult() {
        return this.result;
    }
}

// Экспорт по умолчанию (только один на модуль)
export default function greet(name) {
    return \`Привет, \${name}!\`;
}

// Импорт в другом файле
import greet, { PI, add, multiply, Calculator } from './math.js';

// Импорт всего как объект
import * as math from './math.js';
console.log(math.PI, math.add(2, 3));

// Импорт с переименованием
import { add as sum, multiply as product } from './math.js';

// Динамический импорт
async function loadModule() {
    const module = await import('./math.js');
    console.log(module.add(5, 3));
    
    // Или с деструктуризацией
    const { add, multiply } = await import('./math.js');
}

// Модуль с side effects
import './analytics.js'; // Выполняется сразу

// Циклические зависимости (осторожно!)
// moduleA.js
import { b } from './moduleB.js';
export const a = 'A';

// moduleB.js
import { a } from './moduleA.js';
export const b = 'B';`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "CommonJS и другие системы",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// CommonJS (Node.js)
// math.js
const PI = 3.14159;

function add(a, b) {
    return a + b;
}

module.exports = {
    PI,
    add,
    Calculator: class Calculator {
        // ...
    }
};

// Или экспорт по умолчанию
module.exports = function greet(name) {
    return \`Привет, \${name}!\`;
};

// Импорт в CommonJS
const math = require('./math.js');
const { PI, add } = require('./math.js');

// AMD (Asynchronous Module Definition) - устаревший
define(['dependency1', 'dependency2'], function(dep1, dep2) {
    return {
        method: function() {
            return dep1.doSomething();
        }
    };
});

// UMD (Universal Module Definition)
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['exports'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports);
    } else {
        // Глобальная переменная
        factory(root.myModule = {});
    }
}(typeof self !== 'undefined' ? self : this, function(exports) {
    exports.myFunction = function() {
        return 'Hello World';
    };
}));

// Tree shaking и оптимизация
// webpack и другие сборщики удаляют неиспользуемый код
export const used = 'Используется';
export const unused = 'Не используется'; // Будет удалено

// Бандл анализ
import(/* webpackChunkName: "math" */ './math.js')
    .then(module => {
        console.log('Модуль загружен');
    });`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "note",
          content: "Используйте ES6 модули для нового кода. Они поддерживаются во всех современных браузерах и имеют лучшую производительность."
        }
      ]
    },
    {
      id: "js-9",
      slug: "js-advanced",
      title: "Продвинутый JavaScript",
      description: "Современные возможности и паттерны",
      duration: "60 минут",
      videoId: "advanced234",
      order: 9,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Прокси и Рефлексия",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// Proxy - перехват операций над объектом
const target = {
    name: "Иван",
    age: 30
};

const handler = {
    get(obj, prop) {
        console.log(\`Чтение свойства \${prop}\`);
        return prop in obj ? obj[prop] : "Не существует";
    },
    
    set(obj, prop, value) {
        console.log(\`Установка свойства \${prop} в \${value}\`);
        
        if (prop === 'age' && typeof value !== 'number') {
            throw new TypeError('Возраст должен быть числом');
        }
        
        obj[prop] = value;
        return true; // Успешно
    },
    
    has(obj, prop) {
        console.log(\`Проверка существования \${prop}\`);
        return prop in obj;
    },
    
    deleteProperty(obj, prop) {
        console.log(\`Удаление свойства \${prop}\`);
        delete obj[prop];
        return true;
    },
    
    ownKeys(obj) {
        console.log('Получение ключей');
        return Reflect.ownKeys(obj);
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name); // "Иван" + лог
proxy.age = 31; // Лог + установка
console.log('name' in proxy); // true + лог

// Proxy для валидации
const validator = {
    set(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value) || value < 0 || value > 150) {
                throw new TypeError('Некорректный возраст');
            }
        }
        
        if (prop === 'name') {
            if (typeof value !== 'string' || value.length < 2) {
                throw new TypeError('Некорректное имя');
            }
        }
        
        obj[prop] = value;
        return true;
    }
};

// Reflect API
const user = { name: "Иван" };

// Вместо user.name = "Петр"
Reflect.set(user, 'name', 'Петр');

// Вместо 'name' in user
console.log(Reflect.has(user, 'name'));

// Вместо delete user.name
Reflect.deleteProperty(user, 'name');

// Вместо Object.getOwnPropertyDescriptor
const descriptor = Reflect.getOwnPropertyDescriptor(user, 'name');

// Proxy + Reflect
const loggingHandler = {
    get(target, prop, receiver) {
        console.log(\`GET \${prop}\`);
        return Reflect.get(...arguments);
    },
    
    set(target, prop, value, receiver) {
        console.log(\`SET \${prop} = \${value}\`);
        return Reflect.set(...arguments);
    }
};`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "Генераторы и Итераторы",
          level: 2
        },
        {
          id: "p4",
          type: "code",
          content: `// Итераторы
const myIterable = {
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step <= 3) {
                    return { value: \`Шаг \${step}\`, done: false };
                }
                return { value: undefined, done: true };
            },
            
            return() {
                console.log('Итерация прервана');
                return { done: true };
            }
        };
    }
};

for (let value of myIterable) {
    console.log(value);
    if (value === 'Шаг 2') break; // Вызовет return()
}

// Генераторы
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Бесконечный генератор
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

// Генератор для асинхронного кода
async function* asyncNumberGenerator() {
    for (let i = 0; i < 5; i++) {
        // Имитация асинхронной операции
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

// Использование async генератора
(async () => {
    for await (let num of asyncNumberGenerator()) {
        console.log(num);
    }
})();

// yield* для делегирования
function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield* generator1();
    yield 3;
    yield 4;
}

const gen2 = generator2();
console.log([...gen2]); // [1, 2, 3, 4]

// Генераторы для обработки данных
function* filterGenerator(array, predicate) {
    for (let item of array) {
        if (predicate(item)) {
            yield item;
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = [...filterGenerator(numbers, n => n % 2 === 0)];
console.log(evenNumbers); // [2, 4, 6]`,
          language: "javascript"
        },
        {
          id: "p5",
          type: "heading",
          content: "Мемоизация и Оптимизация",
          level: 2
        },
        {
          id: "p6",
          type: "code",
          content: `// Мемоизация (кеширование результатов)
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('Из кэша:', key);
            return cache.get(key);
        }
        
        console.log('Вычисление:', key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Пример тяжелой функции
function expensiveCalculation(n) {
    console.log(\`Вычисление для \${n}...\`);
    // Имитация тяжелых вычислений
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += Math.sin(i) * Math.cos(i);
    }
    return n * n;
}

const memoizedCalc = memoize(expensiveCalculation);

console.log(memoizedCalc(5)); // Вычисление
console.log(memoizedCalc(5)); // Из кэша
console.log(memoizedCalc(5)); // Из кэша

// Throttle и Debounce
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Пример использования
window.addEventListener('resize', throttle(() => {
    console.log('Размер окна изменился');
}, 1000));

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', debounce((event) => {
    console.log('Поиск:', event.target.value);
}, 300));

// Ленивая загрузка (Lazy Loading)
class LazyLoader {
    constructor() {
        this.observers = new Map();
    }
    
    observe(element, callback) {
        if (!('IntersectionObserver' in window)) {
            callback();
            return;
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
        this.observers.set(element, observer);
    }
    
    unobserve(element) {
        if (this.observers.has(element)) {
            this.observers.get(element).unobserve(element);
            this.observers.delete(element);
        }
    }
}`,
          language: "javascript"
        }
      ]
    },
    {
      id: "js-10",
      slug: "js-project",
      title: "Финальный проект",
      description: "Создание приложения с использованием всех изученных концепций",
      duration: "90 минут",
      videoId: "project567",
      order: 10,
      paragraphs: [
        {
          id: "p1",
          type: "heading",
          content: "Проект: Task Manager",
          level: 1
        },
        {
          id: "p2",
          type: "code",
          content: `// taskManager.js - основной модуль
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        this.render();
        this.bindEvents();
    }
    
    loadTasks() {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    addTask(title, description = '', priority = 'medium') {
        const task = {
            id: Date.now(),
            title,
            description,
            priority,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.tasks.push(task);
        this.saveTasks();
        this.render();
        
        return task;
    }
    
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.saveTasks();
            this.render();
            return true;
        }
        return false;
    }
    
    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
            return true;
        }
        return false;
    }
    
    updateTask(id, updates) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            Object.assign(task, updates);
            this.saveTasks();
            this.render();
            return true;
        }
        return false;
    }
    
    filterTasks(filter) {
        this.currentFilter = filter;
        this.render();
    }
    
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }
    
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const active = total - completed;
        
        return { total, completed, active };
    }
    
    bindEvents() {
        // Добавление задачи
        document.getElementById('add-task-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('task-title');
            const descriptionInput = document.getElementById('task-description');
            const prioritySelect = document.getElementById('task-priority');
            
            if (titleInput.value.trim()) {
                this.addTask(
                    titleInput.value.trim(),
                    descriptionInput.value.trim(),
                    prioritySelect.value
                );
                
                titleInput.value = '';
                descriptionInput.value = '';
            }
        });
        
        // Фильтры
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterTasks(filter);
                
                // Обновляем активную кнопку
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.toggle('active', b === e.target);
                });
            });
        });
        
        // Делегирование событий для списка задач
        document.getElementById('task-list').addEventListener('click', (e) => {
            const taskElement = e.target.closest('.task-item');
            if (!taskElement) return;
            
            const taskId = parseInt(taskElement.dataset.id);
            
            if (e.target.classList.contains('delete-btn')) {
                if (confirm('Удалить задачу?')) {
                    this.deleteTask(taskId);
                }
            } else if (e.target.classList.contains('toggle-btn')) {
                this.toggleTask(taskId);
            } else if (e.target.classList.contains('edit-btn')) {
                this.editTask(taskId);
            }
        });
        
        // Поиск
        const searchInput = document.getElementById('task-search');
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.searchTasks(e.target.value.trim());
            }, 300);
        });
        
        // Drag and Drop
        this.setupDragAndDrop();
    }
    
    searchTasks(query) {
        if (!query) {
            this.render();
            return;
        }
        
        const filtered = this.tasks.filter(task =>
            task.title.toLowerCase().includes(query.toLowerCase()) ||
            task.description.toLowerCase().includes(query.toLowerCase())
        );
        
        this.render(filtered);
    }
    
    setupDragAndDrop() {
        const taskList = document.getElementById('task-list');
        
        taskList.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('task-item')) {
                e.dataTransfer.setData('text/plain', e.target.dataset.id);
                e.target.classList.add('dragging');
            }
        });
        
        taskList.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('task-item')) {
                e.target.classList.remove('dragging');
            }
        });
        
        taskList.addEventListener('dragover', (e) => {
            e.preventDefault();
            const dragging = document.querySelector('.dragging');
            const afterElement = this.getDragAfterElement(taskList, e.clientY);
            
            if (afterElement) {
                taskList.insertBefore(dragging, afterElement);
            } else {
                taskList.appendChild(dragging);
            }
        });
    }
    
    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    
    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;
        
        const newTitle = prompt('Новое название:', task.title);
        if (newTitle !== null && newTitle.trim()) {
            this.updateTask(id, { title: newTitle.trim() });
        }
    }
    
    render(tasksToRender = null) {
        const tasks = tasksToRender || this.getFilteredTasks();
        const stats = this.getStats();
        
        // Обновляем статистику
        document.getElementById('total-tasks').textContent = stats.total;
        document.getElementById('active-tasks').textContent = stats.active;
        document.getElementById('completed-tasks').textContent = stats.completed;
        
        // Рендерим список задач
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        
        if (tasks.length === 0) {
            taskList.innerHTML = \`
                <div class="empty-state">
                    <p>\${this.currentFilter === 'all' 
                        ? 'Задач пока нет. Добавьте первую!' 
                        : 'Нет задач по выбранному фильтру.'}</p>
                </div>
            \`;
            return;
        }
        
        tasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            taskList.appendChild(taskElement);
        });
    }
    
    createTaskElement(task) {
        const element = document.createElement('div');
        element.className = \`task-item \${task.priority} \${task.completed ? 'completed' : ''}\`;
        element.dataset.id = task.id;
        element.draggable = true;
        
        element.innerHTML = \`
            <div class="task-content">
                <input type="checkbox" class="toggle-btn" \${task.completed ? 'checked' : ''}>
                <div class="task-info">
                    <h3 class="task-title">\${this.escapeHtml(task.title)}</h3>
                    \${task.description ? \`
                        <p class="task-description">\${this.escapeHtml(task.description)}</p>
                    \` : ''}
                    <div class="task-meta">
                        <span class="priority-badge \${task.priority}">\${this.getPriorityText(task.priority)}</span>
                        <span class="task-date">\${new Date(task.createdAt).toLocaleDateString('ru-RU')}</span>
                    </div>
                </div>
            </div>
            <div class="task-actions">
                <button class="edit-btn" title="Редактировать">✏️</button>
                <button class="delete-btn" title="Удалить">🗑️</button>
            </div>
        \`;
        
        return element;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    getPriorityText(priority) {
        const texts = {
            low: 'Низкий',
            medium: 'Средний',
            high: 'Высокий'
        };
        return texts[priority] || priority;
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    
    // Экспорт для консоли
    window.taskManager = taskManager;
    
    // Сохранение перед закрытием страницы
    window.addEventListener('beforeunload', () => {
        taskManager.saveTasks();
    });
});`,
          language: "javascript"
        },
        {
          id: "p3",
          type: "heading",
          content: "Итоги курса",
          level: 2
        },
        {
          id: "p4",
          type: "list",
          content: "Что вы изучили в курсе:",
          listItems: [
            "✓ Основы JavaScript: переменные, типы данных, операторы",
            "✓ Управление потоком: условия, циклы, функции",
            "✓ Работа с массивами и объектами",
            "✓ Асинхронное программирование: промисы, async/await",
            "✓ DOM манипуляции и обработка событий",
            "✓ Модульная система ES6+",
            "✓ Продвинутые концепции: прокси, генераторы, итераторы",
            "✓ Оптимизация и паттерны проектирования",
            "✓ Работа с локальным хранилищем",
            "✓ Создание полноценного приложения"
          ]
        },
        {
          id: "p5",
          type: "heading",
          content: "Дальнейшие шаги",
          level: 2
        },
        {
          id: "p6",
          type: "list",
          content: "Что изучать дальше:",
          listItems: [
            "TypeScript - типизированный JavaScript",
            "React/Vue/Angular - современные фреймворки",
            "Node.js - серверный JavaScript",
            "Тестирование (Jest, Mocha, Cypress)",
            "Оптимизация производительности",
            "Архитектурные паттерны (MVC, Flux, Redux)",
            "Работа с базами данных",
            "DevOps и CI/CD для JavaScript проектов"
          ]
        },
        {
          id: "p7",
          type: "quote",
          content: "JavaScript - это не просто язык, это экосистема. Постоянное обучение и практика - ключ к успеху в веб-разработке."
        },
        {
          id: "p8",
          type: "note",
          content: "Поздравляем с завершением курса! Теперь вы обладаете всеми необходимыми знаниями для создания современных веб-приложений на JavaScript."
        }
      ]
    }
  ]
}