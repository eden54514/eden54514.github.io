const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });


   let sum=0;

              function  getNumber(){
                
                 readline.question('enter number2? ', num => {
                    if(num ==='stop'){
                        console.log(sum);
                        readline.close();
                       }else{
                        sum  += parseInt( num);
                        return getNumber()}
                         })                                          
                }

                getNumber();




