/*

Реализовать класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:

    - метод для вывода даты (числа и месяца) текстом;
    - метод для проверки – это прошедшая дата или будущая (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
    - метод для проверки – високосный год или нет;
    - метод, возвращающий следующую дату.

Создать объект класса ExtendedDate и вывести на экран результаты работы новых методов.

Использовать DOM
*/

class ExtendedDate extends Date {
    constructor(year = 0, month = 0, day = 0, hours = 0, minutes = 0, seconds = 0) {
        super(year, month, day, hours, minutes, seconds);
    }

    showDate(outpath = "body") {
        let textout = document.querySelector(outpath);

        let date = document.createElement("div");
        date.classList.add('output');

        date.innerHTML = `<div class="output">${this.getFullYear()}-${this.getMonth()}-${this.getDate()}:${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}</div>`;

        textout.append(date);
    }

    isLeapYear() {
        return (this.getFullYear() % 4 == 0 && this.getFullYear() % 100 != 0) || (this.getFullYear() % 400 == 0);
    }

    isFutureDate() {
        let current = new Date();

        return this >= current;
    }

    nextDate() {
        return new ExtendedDate(this.getFullYear(), this.getMonth(), this.getDate() + 1, this.getHours(), this.getMinutes(), this.getSeconds());
    }
}

let ed = new ExtendedDate(2024, 11, 14, 12);

ed.showDate(".out-block");
let nd = ed.nextDate();

nd.showDate(".out-block");

let fd = new ExtendedDate(5555, 11, 11);
let pd = new ExtendedDate(1111)
let curblock = document.querySelector(".is-future_text");
curblock.innerHTML += fd.isFutureDate() + "<br>";
curblock.innerHTML += pd.isFutureDate() + "<br>";

let leapYear = document.querySelector(".leap-year_text");
leapYear.innerHTML += ed.isLeapYear() + "<br>";
leapYear.innerHTML += fd.isLeapYear() + "<br>";