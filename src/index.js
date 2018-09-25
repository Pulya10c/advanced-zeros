module.exports = function getZerosCount(number, base) {
  // your implementation

  let count = 0;
  let n = Math.trunc(number/5);
  //if (n=0) {return 0;}
  while(n > 0) {
    count = count + n;
    n = Math.trunc(n/5);
  }
 
  let c=0, d=0;
  let result = "";

 if (base<40) {
    return(count.toString(base));
   
 }
  
   while(count>=1){
           c=Math.floor(count/base);
           d=count%base;
           result = d+result;
         
           count=c;
        }

  

  return Number(result);
}