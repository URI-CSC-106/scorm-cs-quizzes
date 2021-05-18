/*
Source code created by Rustici Software, LLC is licensed under a 
Creative Commons Attribution 3.0 United States License
(http://creativecommons.org/licenses/by/3.0/us/)

Want to make SCORM easy? See our solutions at http://www.scorm.com.

This example provides for the bare minimum SCORM run-time calls.
It will demonstrate using the API discovery algorithm to find the
SCORM API and then calling Initialize and Terminate when the page
loads and unloads respectively. This example also demonstrates
some basic SCORM error handling.
*/


//Include the standard ADL-supplied API discovery algorithm

///////////////////////////////////////////
//Begin ADL-provided API discovery algorithm
///////////////////////////////////////////
var findAPITries = 0;

function findAPI(win)
{
   // Check to see if the window (win) contains the API
   // if the window (win) does not contain the API and
   // the window (win) has a parent window and the parent window
   // is not the same as the window (win)
   while ( (win.API == null) &&
           (win.parent != null) &&
           (win.parent != win) )
   {
      // increment the number of findAPITries
      findAPITries++;

      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7)
      {
         alert("Error finding API -- too deeply nested.");
         return null;
      }

      // set the variable that represents the window being
      // being searched to be the parent of the current window
      // then search for the API again
      win = win.parent;
   }
   return win.API;
}

function getAPI()
{
   // start by looking for the API in the current window
   var theAPI = findAPI(window);

   // if the API is null (could not be found in the current window)
   // and the current window has an opener window
   if ( (theAPI == null) &&
        (window.opener != null) &&
        (typeof(window.opener) != "undefined") )
   {
      // try to find the API in the current window�s opener
      theAPI = findAPI(window.opener);
   }
   // if the API has not been found
   if (theAPI == null)
   {

   }
   return theAPI;
}



///////////////////////////////////////////
//End ADL-provided API discovery algorithm
///////////////////////////////////////////
  
  
//Create function handlers for the loading and unloading of the page


//Constants
var SCORM_TRUE = "true";
var SCORM_FALSE = "false";

//Since the Unload handler will be called twice, from both the onunload
//and onbeforeunload events, ensure that we only call LMSFinish once.
var finishCalled = false;

//Track whether or not we successfully initialized.
var initialized = false;

var API = null;

// Time in which the activity was opened
let startTime = new Date();

let grade = 0;
let maxGrade = 0;
let completed = "incomplete";

function handleError(){
    var errorNumber = API.LMSGetLastError();
    var errorString = API.LMSGetErrorString(errorNumber);
    var diagnostic = API.LMSGetDiagnostic(errorNumber);
    
    var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
    
    $("#error").html("Error - Can't update score. Are signed in to the LMS and connected to the internet? Error details:\n\n" + errorDescription);
    $("#error").fadeIn()

    setTimeout(() => {
        $("#error").html("(trying to reconnect) Error - Can't update score. Are signed in to the LMS and connected to the internet? Error details:\n\n" + errorDescription);

        window.ScormProcessInitialize();
    }, 5000)
}

function setValue(n, v) 
{
    if (API == null){
        $("#error").html("No LMS present.")
        return;
    }
    
    var s = API.LMSSetValue(n, v);
    return s;
}

function getValue(n)
{
    if (API == null){
        $("#error").html("No LMS present.")
        return;
    }
    
    var s = API.LMSGetValue(n);
    return s;
}

function ScormProcessInitialize(){
    var result;
    
    API = getAPI();
    
    if (API == null){
        $("#error").html("No LMS detected - preview mode")
        $("#error").fadeIn()
        return;
    }
    
    result = API.LMSInitialize("");
    
    if (result == SCORM_FALSE){
        handleError()
    }else{
        $("#error").hide()
    }
    
    initialized = true;

    // Modificans made for boilerplate begin below

    // Pull the current grade
    grade = getValue("cmi.core.score.raw");
    maxGrade = getValue("cmi.core.score.max");
    completed = getValue("cmi.core.lesson_status");
}

function commitGrade(){

    // Comitt all cached values
    
    if (initialized == false){
        return;
    }
    
    result = API.LMSCommit("")

    if (result == SCORM_FALSE){
        handleError();
    }

    $("#alert").html("Grade published to the learning management system.");
    $("#alert").show()

    setTimeout(() => {
        $("#alert").hide()
    }, 5000)
}

function ScormProcessFinish(){
    
    // Prevent updating score before init or after session closed

    forceScoreUpdate()

    if (initialized == false){
        return;
    }

    result = API.LMSFinish("");
    
    if (result == SCORM_FALSE){
        handleError();
    }

    initialized = false;

}




/*
Assign the processing functions to the page's load and unload
events. The onbeforeunload event is included because it can be 
more reliable than the onunload event and we want to make sure 
that Terminate is ALWAYS called.
*/
// window.onload = ScormProcessInitialize;
$(document).ready(() => {
    ScormProcessInitialize();
})

window.onunload = ScormProcessFinish;
window.onbeforeunload = ScormProcessFinish;
