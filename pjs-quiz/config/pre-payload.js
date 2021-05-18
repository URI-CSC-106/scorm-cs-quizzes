// This is a script is that is evaluated before the student program is run
// May be used to create/set enviroment variables or run a regular expression

var studentPrints = [];

var print = function(text){
    studentPrints.push(String(text))
}

var println = function(text){
    studentPrints.push(String(text));
}

var text = function(text){
    studentPrints.push(String(text));
}
