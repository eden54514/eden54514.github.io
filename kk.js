
   


// console.log(max(5,10));
//    console.log( maxOfThree(1,2,3));
//    console.log(isVowel("f"))
   
//    console.log( sum([1,2,3,4]));
//    console.log( multiply([1,2,3,4]));
//    console.log(reverse("eden"))

//    console.log(findLongestWord(["edeneeeeee","ede","ed","e"]))

//    console.log(filterLongestWord(["edene","eeeee","ede","ed","e"], 2))




//1
function max(x,y){
    if(x>y){
        return x;
    }
    else return y;
}


//........................................
//2
function maxOfThree(x,y,z){

    if(x > y && x > z){

        return x;

    }
    else if(y > z){
         return y;
    }
    else 
    return z;

}

//.......................................

//3

function isVowel(x){
    switch(x){
        case "a":
            return true;
         case "e":
             return true;
        case "i":
            return true;
        case "o":
            return true;
        case "u":
            return true;
        default:
        return false; 

    }
}

//.......................................

//4

function sum(x){
    let sum = 0;

    for(let i=0 ; i < x.length ; i++){
        sum += x[i]
    }

        return sum;
}

function multiply(x){
    let multiple = 1;

    for(let i=0 ; i < x.length ; i++){
        multiple *= x[i]
    }

        return multiple;
}
//.......................................

//5

function reverse(x){

    let rev="";

    for(let i = x.length-1 ; i>=0 ; i--){

        rev += x.charAt(i);
    }
    return rev;
}
//.......................................

//6

function findLongestWord(x){

    let long = x[0].length;

    for(let i = 0; i < x.length; i++){

        if(long < x[i].length){

            long = x[i].length;
        }
    }
    return long;
}
//.......................................

//7

function filterLongestWord(x,a){

    let filter= [];

    for(let i = 0; i< x.length; i++){

        if(x[i].length > a){

            filter.push(x[i]);
        }
    }
    return filter;
}
//.......................................

//8
const a = [1,3,5,3,3]; 

const b = a.map(function(elem, i, array) {
    return elem * 10;
})

//.......................................


const c = a.filter(function(elem, i, array){
    return elem === 3;
});

//.......................................

const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
  });


//.......................................
//9
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

//   console.log("Expected output of max(20,10) is 10 and  "+ myFunctionTest(20, max(20,10)));

//   console.log("Expected output of maxOfThree(10,20,30) is 30 and  "+myFunctionTest(30, maxOfThree(10,20,30)));

//   console.log(" Expected output of isVowel('e') is true and "+myFunctionTest(true, isVowel('e')));

//   console.log(" Expected output of sum([1,2,3,4]) is 10 and "+ myFunctionTest(10, sum([1,2,3,4])));

//   console.log(" Expected output of multiply([1,2,3,4]) is 24 and "+myFunctionTest(24, multiply([1,2,3,4])));

//   console.log(" Expected output of reverse('eden') is nede and " + myFunctionTest("nede", reverse("eden")));

//   console.log(" Expected output of findLongestWord([edeneeeeee","ede","ed","e]) is 10 and "+ myFunctionTest(10, findLongestWord(["edeneeeeee","ede","ed","e"])));

// console.log(" Expected output of filterLongestWord([edene","eeeee","ede","ed","e], 2) is ([edene","eeeee","ede]) and " + myFunctionTest(['edene','eeeee', 'ede'], filterLongestWord(["edene","eeeee","ede","ed","e"], 2)));

// console.log(" Expected output of map is [10,30,50,30,30] and " + myFunctionTest('[10,30,50,30,30]',b));

// console.log(" Expected output of filter is [3,3,3] and " + myFunctionTest('[3,3,3]',c));

// console.log(" Expected output of reduce is 135 and " + myFunctionTest(135,d));

// Functional programming
//1
// x=[1,2,3]


function sum11(x){
    return x.reduce((a,b)=> a+b);
 
}

function multiple1(x){
    return x.reduce((a,b)=> a*b);
}

function rev1(x){

return  x.split('').reverse().join('');
}


function longest(x,i){

    return x.filter(a=>a.length>i);
}


console.log(multiple1([1,2,3,4]))
console.log(sum11([1,2,3]));
console.log(rev1('eden'));
console.log(longest(["eden","haben","filmon","edu","ed"],3));




