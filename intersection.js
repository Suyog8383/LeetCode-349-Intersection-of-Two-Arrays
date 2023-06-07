let num1=[4,7,9,7,6,7]
let num2=[5,0,0,6,1,6,2,2,4]
function intersection(num1,num2){
  let obj={};
  let result=[];
  for(let i=0;i<num1.length;i++){
          obj[num1[i]]=true;
  }
  for(let i=0;i<num2.length;i++){
      if(obj.hasOwnProperty(num2[i])){
          if(!result.includes(num2[i])){
              result.push(num2[i])
          }
      }
  }
  
  return result;
}
console.log(intersection(num1,num2));
