//----------SIMPLE RUN ON NODE JS APP----------

//let username ="soban jadoon";
//console.log(username);



const fs = require ("fs");

//let readtext = fs.readFileSync("./text.txt", "UTF-8");
//console.log(readtext);

//create serverfile.txt FileSystemEntry

fs.writeFileSync("./server.txt", "this is my second node js app and i am learning node js from scratch");
console.log("kam ho gaya !");

// read the server file

let serverfile = fs.readFileSync("./server.txt", "UTF-8");
console.log(serverfile);



//let username ="soban jadoon";
//console.log(username);



//=hogaya