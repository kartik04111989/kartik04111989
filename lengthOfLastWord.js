var lengthOfLastWord = function(s) {
    
    let length = s.length - 1;
     let counter = 0;
     while (s[length] === " ") {
       length--;
     }
     while (s[length] !== " ") {
       if (s[length] === undefined) break
       counter++;
       length--;
     }
     return counter
   };