var questions = [

    ["What is 2+2?", 4], 
    ["How many stripes on the American Flag?", 13], 
    ["What year was USC founded?", 1801]

];

var correctQuestionsArray = [];
var wrongQuestionsArray = [];

var correctAnswers = 0;
var wrongAnswers = 0;
var question;
var answer;
var response;
var html;

function buildList( arr ) {                                                             //this function is building an HTML <ol> using a for loop and storing it in the variable listHTML 
    var listHTML = "<ol>";                                                          //this <ol> tag is closed at the end, and then all is stored in the var listHTML as one solid chunk of HTML
    for (var i = 0; i < arr.length; i+= 1) {                        
            listHTML += "<li>" + arr[i] + "</li>"
        }
        listHTML += "</ol>"
        return listHTML;
}

    for (var i = 0; i < questions.length; i+=1) {                               // this is the quiz for loop that prompts by pulling from the questions array and uses parseInt on each answer
                                                                                                // and then stores it as the response var and then runs the if else conditional to determine which array to add answer to
       question = questions[i][0];
       answer = questions[i][1];
       response = parseInt(prompt(question));
            
       if ( response === answer ) {
                correctAnswers += 1;
                correctQuestionsArray.push(question);               //this is bumping up correct answers counter and using .push method to add question to correctQuestionsArray
            }       else {
                wrongAnswers += 1;
                wrongQuestionsArray.push(question);         //this is bumping up wrong answers counter and using .push method to add question to wrongQuestionsArray
            }
            
            
    }
    
html = "You got " + correctAnswers + " questions correct!" + ""
html += "<h2> You got these questions correct: </h2>"
html += buildList(correctQuestionsArray);                                       // here we are adding to our HTML var by running the buildList function for both correct and wrong answers
html += "<h2>You got these questions wrong:</h2>"                   // by running the function with both the correct and wrong arrays
html += buildList(wrongQuestionsArray);
print(html);
   

function print(message) {                       //this function is just made so you can type print() instead of document.write, 
                                                    //which is not commonly used anymore.  A better tool is                           document.getElementbyID
 var outputDiv = document.getElementById("output");        //"output" is an html element id of a div on the index page
outputDiv.innerHTML = message;                                  //.innerHTML property allows you to change the html content on a page
}

