// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else if (block < 42) {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(blockA, blockB) {
  if (blockA < blockB) {
    return (blockB - blockA) * 264;
  } else {
    return (blockA - blockB) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled;
  if (destination > start) {
    distanceTravelled = (destination - start) * 264;
  } else {
    distanceTravelled = (start - destination) * 264;
  }

  if (distanceTravelled < 400) {
    return 0;
  } else if (distanceTravelled < 2000) {
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25;
  }else if (distanceTravelled > 2500) {
    return 'cannot travel that far';
  }
}
