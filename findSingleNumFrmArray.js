var singleNumber = function(nums) {
     

    let a= nums.sort((a,b)=>a-b);
 
     for(let i=0;i<a.length;i+=2){
         if(a[i]!==a[i+1])
            return a[i];   
 }
 };