// Code your solution in this file!
function distanceFromHqInBlocks(distination){
  if(distination < 42){
    return  (42-distination)
  }else{
    return (distination - 42)
  }
}

function distanceFromHqInFeet(distination){
  let blocks = distanceFromHqInBlocks(distination)
  return blocks*264
}

function distanceTravelledInFeet(startingBlock,endingBlock){
  if(startingBlock > endingBlock){
    return (startingBlock - endingBlock)*264
  }else{
     return (endingBlock - startingBlock)*264
  }
}

function calculatesFarePrice(){
 switch  (calculatesFarePrice
 case 400: 
   fee = "free";
   break;
 block 
}
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;









