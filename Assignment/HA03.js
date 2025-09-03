//Grade Calculation
function studentScore(marks) {
    let grade;

    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = 'A'

            break;
        case (marks >= 80 && marks < 90):
            grade = 'B'

            break;

        case (marks >= 70 && marks <= 80):
            grade = 'C'

            break;
        case (marks >= 50 && marks <= 70):
            grade = 'D'
            console.log("D grade");

            break;

        case (marks >= 0 && marks <= 50):
            grade = 'E'

            break;

        default:
            grade = 'Invalid Score'
            break;
    }
    return grade
    console.log(grade);
    
}

let studentMark = 72

studentScore()
//console.log(studentScore(75));
//console.log("Score:"+studentMark +"->Grade:"+studentScore(studentMark));

studentScore(75)