var arith = require('./Arithmaticmodule.js');
console.log(arith.add(5, 10));

var palindromecheck = require('./Palindromemodule.js');
let String1 = "YashaahsaY";
let String2 = "YashYash";
let String3 = "AbbA";

console.log(palindromecheck.Palindrome(String1));
console.log(palindromecheck.Palindrome(String2));
console.log(palindromecheck.Palindrome(String3));

var Rletter = require('./ReverseString.js');

let string = "Yashaswini";
console.log(Rletter.Reverse(string));

var Arrayconcate = require('./ArrayModule.js');
var arr1 = ['html', 'css', 'Js', 'react js'];
var arr2 = ['node', 'express'];

const array = arr1.concat(arr2);
console.log(Arrayconcate.Array(array));

console.log("Helloo");
let num1 = 16;
let num2 = 4;

let sum = num1+num2;
let diff = num1-num2;
let product = num1 * num2;

let fname = "Yashaswini"
let lname = "Raghu"

console.log("Full Name: " + fname + " " + lname);
console.log("Sum:" + sum);
console.log("Difference:" + diff);
console.log("Product: " + product);
 




function prime(n){
    if (n<=1)
        return false;
    for (let i=2; i<n; i++)
        if(n%i ==0)


            return true;
        return false;
}

prime(13)? console.log("False"): console.log("True");
prime(8)? console.log("False"): console.log("True");


const fileStats = require('./filemodule.js');
const stats = fileStats.getFileStats('./test.txt');
if (stats){
  console.log("FileStats Found: " + stats);
} else{
  console.log('File not Found or Error Occurred.');
}


const FileStats2 = require('./filemodule.js');
const stats1 = FileStats2.getFileStats2('./notes.txt');
if (stats1){
  console.log("FileStats Found: " + stats1);
} else{
  console.log('File not Found or Error Occurred.');
}
  

const FileStats3 = require('./filemodule.js');

(async () => {
  try {
    const stats = await FileStats3.getFileStats3('./notes.txt');
    console.log("File Size: " + stats.size());
    console.log(stats.isfile());
    console.log("It is Directory: " + stats.isDirectory());
    console.log("Sumbolic : " + stats.isSymbolicLink());
  } catch (err) {
    console.log("Error");
  }
})();


const fs = require('node:fs');
fs.readFile('./notes.txt', 'utf8', (err, data) => {
  if (err){
    console.error(err);
    return;
  }
  console.log(data);
});


const fileread = require('node:fs');
try{
  const data =  fs.readFileSync('./test.txt','utf8');
  console.log("Data printed");
  console.log(data);

}
catch (err){
  console.error(err);
}


const fileStats5 = require('node:fs');
const content = 'Node js , File Writing module !!';

fileStats5.writeFile('./notes.txt', content, err => {
  if(err){
    console.errror(err);
  } else{
    // file written successfully 
  }


})

const fss = require('node:fs');

const content1 = 'Some content!';

try {
  fss.writeFileSync('./test.txt', content1);
  // file written successfully
} catch (err) {
  console.error(err);
}

const fsss = require('node:fs/promises');

async function example() {
  try {
    const content2 = 'Some content!';
    await fsss.writeFile('./notes.txt', content2);
  } catch (err) {
    console.log(err);
  }
}

example();

const fsy = require('node:fs');

const content3 = 'New content!';

fsy.appendFile('./notes.txt', content3, err => {
  if (err) {
    console.error(err);
  } else {
    // done!
  }
});





const fssy = require('node:fs/promises');

async function example1() {
  try {
    const content4 = 'All content!';
    await fssy.appendFile('./test.txt', content4);
  } catch (err) {
    console.log(err);
  }
}

example1();






































// const fs = require('node:fs/promises');

// async function example() {
//   try {
//     const stats =await fs.stat('notes.txt');
//     console.log(stats.isFile()); // true
//     console.log(stats.isDirectory()); // false
//     console.log(stats.isSymbolicLink()); // false
//     console.log(stats.size); // 1024000 //= 1MB
//   } 
//   catch (error) {
//     console.log(err);
//   }
// }
// example();



// const path = require('node:path');
// const { error } = require('node:console');

// const notes = 'notes.txt';

// console.log("Directory Name: "+path.dirname(notes)); // ''
// console.log("Directory basen name: "+path.basename(notes)); // 'notes.txt'
// console.log("File Extension: "+path.extname(notes)); // '.txt'
// console.log("Notes "+path.basename(notes, path.extname(notes))); // 'notes'

// const name = 'yashu';
// console.log("file address:" + path.join('/', 'users', name, 'notes.txt')); // '/users/joe/notes.txt'


// console.log("Found path:" + path.resolve('notes.txt')); // '/Users/joe/joe.txt' if run from my home folder
// console.log(" resolved:  " + path.resolve('tmp', 'notes.txt')); // '/Users/joe/tmp/joe.txt' if run from my home folder
// console.log("Reesolved:" + path.resolve('/etc', 'joe.txt')); // '/etc/joe.txt'


// console.log("Normalised Path: "+ path.normalize('/users/joe/..//test.txt')); // '/users/test.txt'

