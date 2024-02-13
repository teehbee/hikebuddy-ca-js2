

export function validateEmail(regEmail) {
  const regEx = /^[a-zA-Z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/;
  const patternMatches = regEx.test(regEmail);
  return patternMatches;
}