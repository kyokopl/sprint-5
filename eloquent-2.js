// looping a triangle exercise

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// My FizzBuzz first version solution 

for (let n = 1; n <= 100; n++) {
     
    if (n % 3 == 0) 
      console.log("Fizz");
   
    else if (n % 5 == 0) 
      console.log("Buzz");
   
   else console.log(n);
  }  

 // My FizzBuss second version solution adding the result 'FizzBuzz'

 for (let n = 1; n <= 100; n++) {
   
    if (n % 5 == 0 && n % 3 == 0) 
          console.log("FizzBuzz");
      
    else if (n % 3 == 0) 
       console.log("Fizz");
    
    else if (n % 5 == 0) 
       console.log("Buzz");
    
    else console.log(n);
   }  

   // chessboard solution


let size = 8;

let board = "";

for (let y = 0; y < size; y++) {

for (let x = 0; x < size; x++) {
    
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
