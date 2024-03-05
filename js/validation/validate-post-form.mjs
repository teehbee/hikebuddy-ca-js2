export function validatePostForm() {
  if (!messageTitle.value.trim() || !messageContent.value.trim()) {
    alert("Both title and content are required. This will be changed lager");
    return false;
  } 
  return true
  }