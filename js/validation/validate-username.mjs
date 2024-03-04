

export function checkRegUsername(value) {
  const regExt = /^[a-zA-Z0-9_]*$/;
  return value.trim().length > 0 && regExt.test(value);
}