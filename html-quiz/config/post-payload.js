// Evalute the student's DOM to see if they meet the HTML quiz requirments...?

let html = $.parseHTML(liveEditor.editor.text())

let listItemCount = $(html).find("li").length;

console.log(`${listItemCount} items in list`)

if(listItemCount >= 3){

    setGrade({
        grade: 100,
        max_score: 100,
        comment: "Nice job! Your Grade has been updated in the Brightspace gradebook. "
    })

}else{

    setGrade({
        grade: 0,
        max_score: 100,
        comment: "Try again. Make sure you have an unordered list with at least 3 items."
    })


}
