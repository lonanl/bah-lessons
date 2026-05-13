export function setInnerHtmlForFirsElemntByClass(className, innerHTML) {
  let el = document.getElementsByClassName(className)[0];
  el.innerHTML = innerHTML;
}

export function setInnerHtmlForFirsElemntById(id, innerHTML) {
  let el = document.getElementsByClassName(id)[0];
  el.innerHTML = innerHTML;
}

function add(n1, n2) {
  return n1 + n2;
}
let num = 14;
console.log(14);

// Спрашиваем возраст (как строку) => Преобразуем в число => Потом можем считать

let name2 = Number(prompt("Сколько тебе лет?"));

console.log("Ты родился в " + 2026 - name2 + " году.");

// Тип данных string - строка. Обозначается в ''
// Конкатенация (слияние строк) - через плюсик 
// (!!!у плюсика со строкой приоритет над другими его значениями, т.е. 5 + '10' получится '510')

// Тип данных number - число. Обозначется целым или дробным положительм или отрицательм числом, NaN, Infinity (-Infinity)
// Операции + - * /,  % - остаток деления,  ** возведение в степень
// операторы сравнения чисел: >  <  >=  <=  ===  !==

// Типы данных undefined и null, задаются как undefined и null - означают "ничего - отсутствие значения"
// null задается вручную в программе, undefined автоматиически

// Тип данных boolean - логическое значение. true или false
// логические операторы: && - и,  || - или, ! - не. Перед выполнением операции аргумент приводится к boolean

// Условная конструкция - выполняет разные наборы блоков кода в зависимости от результата условия. Вычисляется как приведенное к boolean выражение

let canPitPivo = ''
if (name2 >= 18) {
  canPitPivo = 'можно'
} else {
  canPitPivo = 'нельзя'
}
