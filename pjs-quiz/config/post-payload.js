

try {

  //Write a function findMin that accepts an array and loops through it to find the minimum value and then returns the minimum value.
  
  //Call println (findMin(myArray))
  
  var grade = 0;
  var failedCases = 0;
  var msg = "";
  var sampleData = [[1, 2, 3, 4, 5],
                    ['C', 'S', 'C', '1', '0', '6']
                  ];
  
  var sampleAnswers = [[5, 4, 3, 2, 1],
                       ['6', '0', '1', 'C', 'S', 'C']];
  
  if(autograder.jshint.functions.length >= 1){
  
      for (var i = 0; i < sampleData.length; i++) {

        console.log(JSON.stringify( eval(autograder.jshint.functions[0].name + "(" + JSON.stringify(sampleData[i]) + ")") ));
        console.log(JSON.stringify(sampleAnswers[i] ))
        if(JSON.stringify(eval(autograder.jshint.functions[0].name + "(" + JSON.stringify(sampleData[i]) + ")")) == JSON.stringify(sampleAnswers[i] )) {
          grade+= 2.5;
        }else{
          failedCases++;
        }
  
      }
  
  
      if(failedCases > 0){
        msg += "Program failed " + failedCases + "/2 test case(s). ";
      }
  
  
      if(grade < 5){
  
      }else{
        msg += "Nice job! " + grade + "/5";
      }
  
      if(grade < 1){
        grade = 1;
      }
  
      autograder.complete({
        grade: grade,
        max_score: 5,
        name: "find min",
        comment: msg
      });
  
    }else{
      autograder.complete({
        grade: 0,
        max_score: 5,
        name: "find min",
        comment: "You didn't define a function 0/5 "
      });
  
    }
  
  
  
  } catch (e){
      autograder.complete({
          grade: 0,
          max_score: 5,
          name: "find min",
          comment: "Program failed, message from autograder: " + e
      });
  }
  
  
  
  