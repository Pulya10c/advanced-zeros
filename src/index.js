module.exports = function getZerosCount(number, base) {
  // your implementation

  class SetNum  {
    constructor () {
      this.arr = [];
      this.num = 2;
      
    }
    getNum (x) {
      if (x === '1') {
          this.arr.push(1);
          }
      if(x % this.num === 0){
       this.arr.push(this.num);
       x = x / this.num;
       this.getNum(x);
       //alert (this.arr);
    
    }else if(x % this.num !== 0){
      if(!(x <= this.num)){
        this.num++;
        this.getNum(x);
      }
    }
      this.arr.sort((left, right) => left-right);
      return Number(this.arr[this.arr.length-1]);
     
    }
  }
  
    
  var sN = new SetNum;
  
  var promtFactor = sN.getNum (base);

  let count = 0;
  let n = Math.trunc(number/promtFactor);
  //if (n=0) {return 0;}
  while(n > 0) {
    count = count + n;
    n = Math.trunc(n/promtFactor);
  }
 
 

  return count;
}