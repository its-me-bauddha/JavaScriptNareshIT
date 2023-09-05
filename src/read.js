var fs = require("fs");

 /*
    Blocking Technique - Sync method
 var data = fs.readFileSync("./help.txt");

 console.log(`----Reading File -------`);
 console.log(data.toString());
 console.log(`----Reading File Completed -------`); */

 //   Unblocking Technique - ASync method

console.log(`----Reading File -------`);
 fs.readFile("./help.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }
    else{
        console.log(err);
    }
 });

 console.log(`----Reading File Completed -------`);