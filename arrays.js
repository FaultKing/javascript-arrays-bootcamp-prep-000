ar chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addBeginningConserve = [1];

function addElementToBeginningOfArray(addBeginningConserve, element){
  return ["foo",...addBeginningConserve]
}

var addBeginningDestruct = [1];
function destructivelyAddElementToBeginningOfArray(addBeginningDestruct, element){
  addBeginningDestruct.unshift("foo");
  return addBeginningDestruct;
}

var addEndConserve = [1];
function addElementToEndOfArray(addEndConserve, element){
  return [...addEndConserve,"foo"]
}
