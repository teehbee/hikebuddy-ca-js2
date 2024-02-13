export function checkLength(value, len) {
  if(value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}


export function checkPasswordConfirm(password, confirmPassword) {
  return password === confirmPassword;
}