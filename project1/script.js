//  sting reverse  using javaScript 

  let text ="I love Codding"

   console.log(text.split('').reverse().join(''))

/// another method for reverse 
  let str ="luhaR"
   let reversed = '';

   for (let i = str.length - 1; i >= 0; i--) {

     reversed += str[i];
     
     
    }console.log(reversed);

  ///  check A string is palidrome  string ? 

   const checkPalidromeString = (strCheck)=>{

      let reversedString ='';
      for( let i = strCheck.length -1 ; i>=0; i--){

         reversedString += strCheck[i];

         };
        
         if(reversedString === strCheck){
          console.log("String is Palidrome String")
      } else {
        console.log("String is  not Palidrome ")
      }       
   } 

   checkPalidromeString("Rahull")