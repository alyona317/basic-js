/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
// Проверка, если аргумент не передан
if (date === undefined) {
  return 'Unable to determine the time of year!';
}

// Настоящий метод Date.prototype сработает только на настоящей дате:
// для фальшивого объекта он выбросит TypeError, сколько бы методов тот ни подделал
let month;
try {
  if (isNaN(Date.prototype.getTime.call(date))) {
    throw new Error('Invalid time value');
  }
  // Получение месяца из даты (0-based индекс)
  month = Date.prototype.getMonth.call(date);
} catch (err) {
  throw new Error('Invalid date!');
}

// Определение времени года на основе месяца
if (month >= 2 && month <= 4) {
  return 'spring';
} else if (month >= 5 && month <= 7) {
  return 'summer';
} else if (month >= 8 && month <= 10) {
  return 'autumn';
} else {
  return 'winter';
}

}

module.exports = {
  getSeason
};
