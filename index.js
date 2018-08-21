// Code your solution in this file!
function distanceFromHqInBlocks(distination){
  if(distination < 42){
    return  (42-distination)
  }else{
    return (distination - 42)
  }
}

function distanceFromHqInFeet(distination){
  //let blocks = distanceFromHqInBlocks(distination)
  if(distination < 42){
    return  (42-distination)*264
  }else{
    return (distination - 42)*264
  }
  //return blocks*264
}


function distanceTravelledInFeet(x,y){
  return (x-y)*264;
}
distanceTravelledInFeet(60,50);










