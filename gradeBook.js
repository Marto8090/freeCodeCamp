function getAverage(scores, sum) {
  sum = 0;
  for(let i = 0; i < scores.length; i++)
  {
    sum += scores[i];
  }
  return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


function getGrade(score) {
     let grade
    if (score == 100){
        grade = 'Grade: A++';
    }
    else if (90 <= score && score <= 99 ) {
        grade = 'Grade: A'
    }
    else if (80 <= score && score <= 89 ) {
        grade = 'Grade: B'
    } 
    else if (70 <= score && score <= 79 ) {
        grade = 'Grade: C'
    }
    else if (60 <= score && score <= 69 ) {
        grade = 'Grade: D'
    }
    else {
        grade = 'Grade: F'
    };
    return grade
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));


function hasPassingGrade(score) {
    let grade = getGrade(score);
    return grade !== 'Grade: F';
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));


function studentMsg(totalScores, studentScore) {
    let classAverage =  getAverage(totalScores);
    let studentGrade = getGrade(studentScore);
    let passedMessage;

    if (studentGrade !== 'Grade: F') {
        passedMessage = `Class average: ${classAverage} Your grade: ${studentGrade} You passed the course. `;
    }
    else {
        passedMessage = `Class average: ${classAverage} Your grade: ${studentGrade} You failed the course. `;
    }
    return passedMessage
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); 