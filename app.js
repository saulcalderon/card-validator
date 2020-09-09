let num = 4137894711755904 ;
//4137894711755904
//4083952015263
let array = ("" + num).split("").map(Number);

array.reverse();

for (let i = 1; i <= array.length; i++) {
  if (i % 2 == 0) {
    
    array.splice(i - 1, 1, array[i - 1] * 2);
    
    if (array[i - 1] >= 10) {
    
      let newNum = ("" + array[i - 1]).split("").map(Number);
    
      let numw;
      newNum.forEach((element) => {
        numw = ++element;
      });
    
      array.splice(i - 1, 1, numw);
    }
  }
}

let total=0;
array.forEach(el=> {
    total += el;
});
console.log(total);
