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
  let distanceToPayForInFeet = dInf - 400
  let total = 0
  if(distanceToPayForInFeet > 0){
      if(distanceToPayForInFeet<2000){
        total = distanceToPayForInFeet*0.02
      }else if (distanceToPayForInFeet>2000 && 
                distanceToPayForInFeet<2500){
        total = total + (distanceToPayForInFeet - 2000)*25
      }else{
        total =  'cannot travel that far'
      }
      return total
  }else{
    return 0
  }
}

 

