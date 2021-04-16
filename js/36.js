function checkForSpam(message) {
  let result;

 
  let lowerMessage = message.toLowerCase();
 
  if (lowerMessage.includes('spam') || lowerMessage.includes('sale')) {
    result = true;
  }
  else {
    result = false;
  }

  return result;
}

