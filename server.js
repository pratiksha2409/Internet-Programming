//fs.writeFile() used to create a new file or overwrite an existing one
//fs.readFile() used to read data from a file 
//fs.writeFile() updates the data 
//fs.rename() used to change the file name
//fs.appendFile()  used adds data to end of an existing file without overwriting its contents
//fs.unlink() is used to delete a file 

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("Select an operation (1: Create, 2: Read,3: Write, 4:Rename, 5:Append, 6: Delete):", (choice) =>{
    choice = parseInt(choice);
    switch(choice){
     case 1:
        //create a file
        fs.writeFile('example.txt', 'this is temp content!', (err)=>{
            if(err){
                console.error("error creating file:", err);

            }else{
                console.log("file created successfully");
            }
            rl.close();
        });
        break;
        case 2:
            //read data from the file
            fs.readFile('example.txt', 'utf8', (err,data)=>{
                if(err){
                    console.error("error reading the file",err);
                }else{
                    console.log("file contents:", data);
                }
                rl.close();
            });
            break;
        case 3:
            //write data to a file
            fs.writeFile('example.txt','this is new content',(err)=>{
                if(err){
                    console.error("there is an error in writing",err);
                }else{
                    console.log("writing is successful");
                }
                rl.close();
            });
            break;
        case 4:
            //rename a file
            fs.rename('example.txt','new_example.txt',(err)=>{
                if(err){
                    console.error("error in renaming ",err);

                }else{
                    console.log("renaming successful");
                }
                rl.close();
            });
            break;
        case 5:
            //append data to a file
            fs.appendFile('example.txt','\nAppend Data', (err)=>{
                if(err){
                    console.error("there is an error ", err);
                }else{
                    console.log("data appended succcessfully");
                }
                rl.close();
            });
            break;
        case 5:
            //delete a file
            fs.unlink('new_example.txt', (err)=>{
                if(err){
                    console.error("there is an error ", err);
                }else{
                    console.log("data appended succcessfully");
                }
                rl.close();
            });
            break;
        default : 
        console.log("Invalid choice");
        rl.close();
        }
});
