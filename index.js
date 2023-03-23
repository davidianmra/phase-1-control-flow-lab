function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    const message1 = 'This one is on me!';
    return message1;
  }
  
  if (ride > 400 && ride <= 2000) {
    const message2 = 'That will be twenty bucks.'
    return message2;
  }

  if (ride > 2000 && ride <= 2500) {
    const message2 = 'I will gladly take your thirty bucks.'
    return message2;
  }

  if (ride > 2500) {
    const message2 = 'No can do.'
    return message2;
  }
}

function ternaryCheckCity(city){
  let message;
  city == 'NYC'? (message = 'Ok, sounds good.') : (message = 'No go.');
  return message;
  
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip) {
    case 'generous':
      message = 'Thank you so much.'
    break;
    case 'not as generous':
      message = 'Thank you.'
    break;
    default:
      message = 'Bye.';
      break;
  }
  return message;

}