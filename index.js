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

function calculatesFarePrice(startingBlock,endingBlock){
  let dInf  = distanceTravelledInFeet(startingBlock, endingBlock)
}

 

