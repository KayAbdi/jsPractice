function range(start, end, step){
    let list=[];
    if ( step == undefined ) step = 1;
   
    if ( step < 0){ //negative step variation
  
      let number = start;
      while( number >= end ){
       list.push(number);
        number += step;
      }
       return list;
    }
  
    else if ( step > 0){ //postive step variation
      let number = start;
      while( number <= end ){
       list.push(number);
        number += step;
      }
      return list;
    }
  
    else if ( step == 0) return undefined;
  }
  
function sum(range){
sum = 0;
for(let number of range){
sum += number;
}
return sum;
};


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
  
  