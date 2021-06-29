//CHAPTER # (14-16)
//ARRAYS
//Q1.(Js literal notation)
//var names=[];
//names [0] = "Arham";
//names [1] = "Ayesha";
//console.log(names)


//Q2.(Js object notation)

//var names=newArray=[];
//names [0] = "Arham";
//names [1] = "Ayesha";
//names [2] = "Muskan";
//names [3] = "Emaan";
//console.log(names)


//Q3.(STRING ARRAY)

//var studentName=["Ahmed"];
//console.log(studentName)

//Q4.(NUMBERS ARRAY)

//var number=["000223"];
//console.log(number)

//Q5.(BOOLEAN ARRAY)

//var boolean=["True" , "False"];
//console.log(boolean)

//Q6.(MIXED ARRAY)

//var mixed=["Ashbil" , 10 , true , "89"];
//console.log(mixed)


//Q7.

//var qualification=["Qualifications:" + "<br>" + "1)   SSC" + "<br>" + "2)   HSC" + "<br>" +  "3)   BCS" + "<br>" +  "4)   BS" + "<br>" +  "5)   BCOM"+ "<br>" +  "6)   MS" + "<br>" +  "7)   M.Phil." + "<br>" +  "8)   PhD"];
//document.write(qualification)

//Q8.
//var students=["Michael","John","Tony"];
//var score=[320,230,480];
//var totalmarks=[500,500,500];
//var percentage=[((320/500)*100) , ((230/500)*100) , ((480/500)*100)];
//document.write("Score of Michael is" + " " + score [0] + "percentage :" + " " + percentage[0] + "<br>" + "Score of John is" + " " + score [1] + "percentage :" + " " + percentage[1] + "<br>" + "Score of Tony is" + " " + score [2] + "percentage :" + " " + percentage[2] )


//Q9.

//document.write("<h1>Colors</h1>")

//var color=["pink","blue","purple","green","yellow"]
//document.write(color)



//color.unshift(prompt("enter the color you want to add at the begining"))
//document.write("<br>" + color)



//color.push(prompt("enter the color you want to add at the end"))
//document.write("<br>" + color)



//color.unshift("purple","orange")
//document.write("<br>" + color)



//color.shift("skyblue")
//document.write("<br>"+ color)



//color.pop("brown")
//document.write("<br>"+ color)

//color.splice(prompt("where you want to add"),0,prompt("which color you want to add"))
//document.write("<br>"+ color)

//color.slice(0,prompt("which color you want to delete"))
//document.write("<br>"+ color)



//Q10.

//var score=[320,230,480,120]
//document.write( "<h1> Score of students </h1>" + " " +  score)
//score.sort();
//document.write("<h1> Ordered score of students </h1>" + score);







//Q11.
//document.write("<h1> Cities List : <h1>")
//var citiesNames=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
//document.write("<h1> Cities List : </h1>" + citiesNames)
//var copyCities = citiesNames.slice(2,4);
//document.write("<h1> Selected Cities List :</h1>" + "<br>" + copyCities)



//Q12.

//var arr=["This" , "is" , "my" , "cat"];
//document.write("<h1> Array: </h1>" + arr.join() + "<br>" + "<h1> String: </h1>" +  arr.join('  '));





//Q13.

//var newarray=["Keyboard" , "Mouse" , "Printer" , "Monitor"];
//var elements=newArray=[];
//elements [0] = "Keyboard";
//elements [1] = "Mouse";
//elements [2] = "Printer";
//elements [3] = "Monitor";
//document.write("<h1> Devices: </h1>" + "<br>" + elements)

//elements.splice(1,3)
//document.write("<br> OUT: <br>" + elements)

//var copyelements = elements.slice(1,2)

//document.write("<br> OUT: <br>" + copyelements)



//var copyelements = elements.slice(2,3)
//document.write("<br> OUT: <br>" + copyelements)

//elements.splice( 0,3)
//document.write("<br> OUT: <br>" + elements)



//Q14.

//var newarray=["Keyboard" , "Mouse" , "Printer" , "Monitor"];
//var elements=newArray=[];
//elements [0] = "Keyboard";
//elements [1] = "Mouse";
//elements [2] = "Printer";
//elements [3] = "Monitor";
//document.write("<h1> Devices: </h1>" + "<br>" + elements)

//elements.splice(0,3)

//document.write("<br> OUT: <br>" + elements)

//var copyelements = elements.slice(2,3)

//document.write("<br> OUT: <br>" + copyelements)

//var copyelements = elements.slice(1,2)

//document.write("<br> OUT: <br>" + copyelements)

//elements.splice( 1,3)
//document.write("<br> OUT: <br>" + elements)



//Q15.

//var phone=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
//document.write(`<select>
//<option>${phone[0]}</option>
//<option>${phone[1]}</option>
//<option>${phone[2]}</option>
//<option>${phone[3]}</option>
//<option>${phone[4]}</option>
//<option>${phone[5]}</option>
//</select>`)



