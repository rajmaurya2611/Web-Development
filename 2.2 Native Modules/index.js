const fs= require("fs");

fs.writeFile("RajMessage.txt", "Content Inside the file!", (err) =>{
    if(err) throw err;
    console.log("The file has been saved");
});

fs.readFile("./RajMessage.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  