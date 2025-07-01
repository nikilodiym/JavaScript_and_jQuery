// Основні функції

function comparison_number(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function creating_three_digit_number(a, b, c) {
  return Number(`${a}${b}${c}`);
}

function place(length, width) {
  if (width === undefined) return length * length;
  return length * width;
}

function perfect_number(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

function perfect_numbers_in_range(min, max) {
  for (let i = min; i <= max; i++) {
    if (perfect_number(i)) console.log(i);
  }
}

function time(hours, minutes = 0, seconds = 0) {
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  console.log(`${hours}:${minutes}:${seconds}`);
}

function in_sec(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

function sec_in_time(allSeconds) {
  let hours = Math.floor(allSeconds / 3600);
  let minutes = Math.floor((allSeconds % 3600) / 60);
  let seconds = allSeconds % 60;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return `${hours}:${minutes}:${seconds}`;
}

function difference_in_time(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
  let timers1 = in_sec(hours1, minutes1, seconds1);
  let timers2 = in_sec(hours2, minutes2, seconds2);
  let difference = Math.abs(timers1 - timers2);
  return sec_in_time(difference);
}

// Task functions for buttons

function task1() {
  alert("Результат: " + comparison_number(5, 10));
}

function task2() {
  alert("Факторіал 5 = " + factorial(5));
}

function task3() {
  alert("Число з цифр 1,4,9 = " + creating_three_digit_number(1,4,9));
}

function task4() {
  alert("Площа прямокутника (5,10) = " + place(5,10) + "\nПлоща квадрата (5) = " + place(5));
}

function task5() {
  alert("Число 28 досконале? " + perfect_number(28));
}

function task6() {
  alert("Досконалі числа від 1 до 10000 дивись у консолі");
  perfect_numbers_in_range(1, 10000);
}

function task7() {
  time(9, 5, 3);
}

function task8() {
  alert("Час 1:1:1 у секундах = " + in_sec(1,1,1));
}

function task9() {
  alert("3661 секунд = " + sec_in_time(3661));
}

function task10() {
  alert("Різниця між 1:0:0 і 0:30:0 = " + difference_in_time(1,0,0,0,30,0));
}
