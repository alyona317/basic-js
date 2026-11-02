const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // The local part may contain "@" too, so the domain starts after the last one
  return email.slice(email.lastIndexOf('@') + 1);
}

module.exports = {
  getEmailDomain
};
