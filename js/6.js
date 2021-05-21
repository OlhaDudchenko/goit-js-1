// Change code below this line
const pricePerDroid = 800;
console.log(pricePerDroid);

const orderedQuantity = 6;
console.log(orderedQuantity);

const deliveryFee = 50;
console.log(deliveryFee);

const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
console.log(totalPrice);

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
console.log(message);
