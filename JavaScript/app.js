// first task
function EvenSqr(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result += Math.pow(arr[i], 2);
    }
  }
  return result;
}
document.getElementById('t1').innerHTML = EvenSqr([2, 4, 3, 0, 6, 1]);
console.log(EvenSqr([2, 4, 3, 0, 6, 1]));

//second task

function IsExist(num) {
  let result;
  if (num % 3 == 0 && num % 7 == 0) {
    result = "eded 3 ve 7 ye bolunendir";
  } else {
    result = "eded 3 ve 7 ye eyni zamanda bolunmur";
  }
  return result;
}
document.getElementById('t2').innerHTML=IsExist(21);
// document.getElementById('t2').innerHTML=IsExist(23);


console.log(IsExist(21));
