const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 // Преобразуем str и addition в строки, если это не так
 str = String(str);
 let addition = options.addition !== undefined ? String(options.addition) : '';

 // Устанавливаем значения по умолчанию
 const repeatTimes = options.repeatTimes || 1;
 const separator = options.separator || '+';
 const additionRepeatTimes = options.additionRepeatTimes || 1;
 const additionSeparator = options.additionSeparator || '|';

 // Генерируем повторение addition
 const additionPart = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

 // Генерируем повторение str с addition
 const result = Array(repeatTimes).fill(str + additionPart).join(separator);

 return result;
}

module.exports = {
  repeater
};
