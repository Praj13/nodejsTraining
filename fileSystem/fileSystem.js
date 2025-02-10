const fs= require('fs')
//synchronous file creation
fs.writeFileSync("./test.txt","hello sir")

//Asynchronous file creation
fs.writeFile("./test2.txt","hello hello",(err)=>{})



//synchronous file reading
const result=fs.readFileSync('./test2.txt',"utf-8")
console.log(result);

//Asynchronous file reading
fs.readFile('./test.txt',"utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log(result)
    }
})

// appending data to file(modifying)
fs.appendFileSync('./test2.txt',new Date().getDate().toLocaleString());
fs.appendFileSync('./test.txt',`hey there, the time is ${new Date().getHours()}`);


//copying content of one file to another file using fs
// fs.cpSync('./test.txt','./copy.txt');


//deleting a file
// fs.unlinkSync('./copy.txt');

//checking status of a file
console.log(fs.statSync('./test.txt').isFile());

//creating directory
fs.mkdirSync('fileSystem')