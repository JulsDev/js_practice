
function diff(firstAngle, secondAngle) {
  if(firstAngle > 360 || firstAngle < -360 || secondAngle > 360 || secondAngle < -360 ) {
    return 'Error: bad angle!';
  }

  const different = (firstAngle <= secondAngle) ? (secondAngle - firstAngle) : (firstAngle - secondAngle);

  return result = (different > 180) ? (360 - different) : different;  
}

const rez1 = diff(0, 45);
const rez2 = diff(0, 180);
const rez3 = diff(0, 190);
const rez4 = diff(120, 280);
const rez5 = diff(440, 15);

console.log('rez1: ', rez1 );
console.log('rez2: ', rez2 );
console.log('rez3: ', rez3 );
console.log('rez4: ', rez4 );
console.log('rez5: ', rez5 );