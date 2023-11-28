//For The Given JSON Iterate Over All for Loops (for, for-in, for-of, for-Each)

// JSON iteration using for loop
var data = { 
    "name" : "Balaji Venkateshwaran",
    "age": "29",
    "location": "Chennai",
    "current_Role" : "Full Stack Developer",
    "previous_Role": "Frontend Developer",
    "languageKnown": "JavaScript",
    "others": "HTML, CSS, Bootstrap, Responsive Design",
    "techUsedInProject" : "ReactJS, AntDesign, MaterialUI, TailWindCSS"
};
var result = JSON.stringify(data);
for(i=0; i<=result.length-1;i++){
    console.log(result[i]);
}



// JSON iteration using for-in loop
var data = { 
    "name" : "Balaji Venkateshwaran",
    "age": "29",
    "location": "Chennai",
    "current_Role" : "Full Stack Developer",
    "previous_Role": "Frontend Developer",
    "languageKnown": "JavaScript",
    "others": "HTML, CSS, Bootstrap, Responsive Design",
    "techUsedInProject" : "ReactJS, AntDesign, MaterialUI, TailWindCSS"
};
for (var key in data){
    console.log(`${key} : ${data[key]}`);  // key:value will display in console 
}



// JSON iteration using for-of loop
var data = [{ 
    "name" : "Balaji Venkateshwaran",
    "age": "29",
    "location": "Chennai",
    "current_Role" : "Full Stack Developer",
    "previous_Role": "Frontend Developer",
    "languageKnown": "JavaScript",
    "others": "HTML, CSS, Bootstrap, Responsive Design",
    "techUsedInProject" : "ReactJS, AntDesign, MaterialUI, TailWindCSS"
}];

for(var k of data){
        console.log(k);
    }

// JSON iteration using for-Each loop
var data = [{ 
    "name" : "Balaji Venkateshwaran",
    "age": "29",
    "location": "Chennai",
    "current_Role" : "Full Stack Developer",
    "previous_Role": "Frontend Developer",
    "languageKnown": "JavaScript",
    "others": "HTML, CSS, Bootstrap, Responsive Design",
    "techUsedInProject" : "ReactJS, AntDesign, MaterialUI, TailWindCSS"
}];

data.forEach((keyvalues) => console.log(keyvalues));