function getGrade() {
    const marks = document.getElementById('marks').value;
    let grade, equivalent, remarks;

    if (marks >= 80 && marks <= 100) {
        grade = 'A1';
        equivalent = 'A';
        remarks = 'Excellent';
    } else if (marks >= 70 && marks <= 79) {
        grade = 'B2';
        equivalent = 'B';
        remarks = 'Very Good';
    } else if (marks >= 65 && marks <= 69) {
        grade = 'B3';
        equivalent = 'C';
        remarks = 'Good';
    } else if (marks >= 60 && marks <= 64) {
        grade = 'C4';
        equivalent = 'D';
        remarks = 'Credit';
    } else if (marks >= 55 && marks <= 59) {
        grade = 'C5';
        equivalent = 'D';
        remarks = 'Credit';
    } else if (marks >= 50 && marks <= 54) {
        grade = 'C6';
        equivalent = 'D';
        remarks = 'Credit';
    } else if (marks >= 45 && marks <= 49) {
        grade = 'D7';
        equivalent = 'E';
        remarks = 'Pass';
    } else if (marks >= 40 && marks <= 44) {
        grade = 'E8';
        equivalent = 'F';
        remarks = 'Pass';
    } else {
        grade = 'F9';
        equivalent = 'F';
        remarks = 'Fail';
    }

    document.getElementById('result').innerHTML = `Marks: ${marks}<br>Grade: ${grade}<br>Equivalent: ${equivalent}<br>Remarks: ${remarks}`;
}
