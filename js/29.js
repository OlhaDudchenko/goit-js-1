function getShippingCost(country) {
  let message;
  // Change code below this line
switch (country){
  case 'China':
    message =`Shipping to ${country} will cost ${100} credits`;
break;
  case 'Chile':
    message = `Shipping to ${country} will cost ${250} credits`;
break;
  case 'Australia':
    message = `Shipping to ${country} will cost ${170} credits`;
break;
  case 'Jamaica':
    message = `Shipping to ${country} will cost ${120} credits`;
break;
  default:
    message = "Sorry, there is no delivery to your country";
}
  // Change code above this line
  return message;
};

console.log(getShippingCost("China"));
console.log(getShippingCost("Sweden"));
