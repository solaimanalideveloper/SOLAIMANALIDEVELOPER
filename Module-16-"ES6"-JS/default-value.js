function greed(name) {
  return "Hello " + name;
}
console.log(greed("Solaiman"));

function cractor(name = "Geast", roll = "Mentor") {
  return "Hi iam " + name + ". Progmming Hero in a " + roll;
}
console.log(cractor());

function cractor(name = "Geast", roll = "Mentor") {
  return "Hi iam " + name + ". Progmming Hero in a " + roll;
}
console.log(cractor("Solaiman", "Student"));
