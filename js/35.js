function checkForName(fullName, name){
  const result = fullName.includes(name);
  return result;
}

console.log(checkForName("Egor Kolbasov", "Egor"));

