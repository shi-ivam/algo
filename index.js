l = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
l.reverse();
console.log(l)
wrapper = document.querySelector('.main')
// console.log(wrapper)
wrapper.style.backgroundColor = "orange"


// for (let x = 0; x < l.length; x++){
//   var s = document.createElement('div');
//   s.style.height = l[x]*5 + "px";
//   s.style.width = "5px";
//   s.style.backgroundColor = "black";
//   wrapper.appendChild(s)
// }

function sleep(ms) {
  console.log(ms)
  return new Promise(resolve => setTimeout(resolve, ms));
}

wrapper.innerHTML = '';
for (let y = 0; y < l.length; y++){
      var s = document.createElement('div');
      s.style.height = l[y]*5 + "px";
      s.style.width = "5px";
      s.style.backgroundColor = "black";
      wrapper.appendChild(s)
      // sleep(250)
    }

setTimeout(async () => {
  x = 0;
  while (x < l.length){
    i = 0
    while (i < (l.length - 1)){
      if (l[i] > l[i+1]){
        f = l[i]
        g = l[i+1]
        l[i] = g;
        l[i+1] = f
      }
      wrapper.innerHTML = '';

      for (let y = 0; y < l.length; y++){
        var s = document.createElement('div');
        s.style.height = l[y]*5 + "px";
        s.style.width = "5px";
        s.style.backgroundColor = "black";
        wrapper.appendChild(s)
      }
      await sleep(100)
      i++
    };

    x++
  }

},100)


