/**
 * Controlling and validating the email against the 
 * specific domain patterns. In this case
 * noroff.no or stud.noroff.no.
 * @param {string} regEmail - The email address to be validated.
 * @returns {boolean} True if the email matches the domain
 * patterns, otherwise false.
 * @example
 * ```js
 * // returns true 
 * validateEmail("ola.nordmann@stud.noroff.no");
 * // returns false 
 * validateEmail("ola.nordmann@gmail.com");
 * ```
 */

export function validateEmail(regEmail) {
  const regEx = /^[a-zA-Z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/;
  const patternMatches = regEx.test(regEmail);
  return patternMatches;
}