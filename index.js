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
  return (x-y)*264;
}
distanceTravelledInFeet(60,50);










