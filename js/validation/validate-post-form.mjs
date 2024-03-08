export function validatePostForm() {
  if (!messageTitle.value.trim() || !messageContent.value.trim()) {
    return false;
  } 
  return true
  }