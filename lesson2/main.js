// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let brends = [
    "Dolce & Gabbana",
    "Versace",
    "Nike",
    "Adidas",
    "Lacoste",
    "Tommy Hilfiger",
    "Stradivarius",
    "Zara",
    "Chanel",
    "Moncler"
];
console.log(brends[0]);
console.log(brends[1]);
console.log(brends[2]);
console.log(brends[3]);
console.log(brends[4]);
console.log(brends[5]);
console.log(brends[6]);
console.log(brends[7]);
console.log(brends[8]);
console.log(brends[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookridgetJones = {
    title: "Bridget Jones",
    pageCount: 320,
    genre: "comedy"
};
console.log(bookridgetJones)

let bookZen = {
    title: "Zen",
    pageCount: 224,
    genre: "speeches"
};
console.log(bookZen)


let bookForestGamp = {
    title: "Forest Gamp",
    pageCount: 240,
    genre: "novel"
};
console.log(bookForestGamp)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookLittlePrince = {
    title: "The Little Prince",
    pageCount: 320,
    genre: "classics",
    autors: [
        {
            name: "Antoine de Saint-Exupery",
            ade: 50
        },
        {
            name: "Tom Barton",
            ade: 45
        }
    ]
};
console.log(bookLittlePrince)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". ' +
// 'Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: "olya", username: "olala", password: 12345},
    {name: "vasya", username: "olala", password: 12346},
    {name: "petya", username: "olala", password: 12347},
    {name: "ira", username: "olala", password: 12348},
    {name: "tanya", username: "olala", password: 12349},
    {name: "kolya", username: "olala", password: 12310},
    {name: "sasha", username: "olala", password: 12311},
    {name: "tolya", username: "olala", password: 12312},
    {name: "vika", username: "olala", password: 12313},
    {name: "anna", username: "olala", password: 12314}
];
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0) {
    console.log('Вірно!');
} else (x = 0);
{
    console.log('Не вірно!');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 16;
if (time > 0 && time < 15) {
    console.log('1');
} else if (time > 15 && time < 30) {
    console.log('2');
} else if (time > 30 && time < 45) {
    console.log('3');
} else if (time > 45 && time < 60) {
    console.log('4');
} else {
    console.log('No!!!')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).


let day = 13;
if (day > 0 && day < 10) {
    console.log('1');
} else if (day > 10 && day < 20) {
    console.log('2');
} else if (day > 20 && day < 31) {
    console.log('3');
} else {
    console.log('???');
}


// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).


let dayweek = 5;
switch (dayweek) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('???');

}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a =5;
let b = 10; {
    if(a>b) {
        console.log('a');
    } else if(b>a) {
        console.log('b');
    }else if(a === b) {
        console.log('===');
    }
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = '';
let result = x1 || 'default';
console.log(result)



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration> 5) {
    console.log("Супер");
}else if(coursesAndDurationArray[1].monthDuration> 5) {
    console.log("Супер");
}else if(coursesAndDurationArray[2].monthDuration> 5) {
    console.log("Супер");
}else if(coursesAndDurationArray[3].monthDuration> 5) {
    console.log("Супер");
}else if(coursesAndDurationArray[4].monthDuration> 5) {
    console.log("Супер");
}else if(coursesAndDurationArray[5].monthDuration> 5) {
    console.log("Супер");
}