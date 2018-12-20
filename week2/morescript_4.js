let answer = vehicleType("blue", 1);
console.log(answer);

function vehicleType(color, code) {
  
  if (code == 1) {
    return "a " + color + " car";
  }
  else if (code == 2) {
    return "a " + color + " motorbike";
  }
  else{
    return "Select 1 or 2"
  }

}