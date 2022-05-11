
    var students = [];
    for (let i = 0; i < 10; i++){
        var student = {
            number: Math.ceil(Math.random() * 1000),
            grade: Math.random() * 20
        };
    students.push(student);
}

function listall(students) {
    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        console.log("number:" + student.number + ",grade:" + student.grade)
    }
}

function bestGrade(students){
    var biggestNumber = students[0].grade;
    for (let i = 0; i < students.length; i++){
        if (biggestNumber < students[i].grade){
            biggestNumber = students[i].grade;
        }
    }
    console.log("Best Note: " + biggestNumber);
}

function worstGrade(students){
    var lowestNumber = students[0].grade;
    for (var i = 0; i < students.length; i++){
        if (lowestNumber > students[i].grade){
            lowestNumber = students[i].grade;
        }
    }
    console.log("Worst Note: " + lowestNumber);
}

function averageGrade(students){
    sum = 0;
    for(i=0; i<students.length; i++){
        sum = sum + students[i].grade;
    }
    var media = sum / students.length;
    console.log("Media: " + media);
}

function negativesGrade(students){
    var sum= 0;
    for (i=0; i<students.length; i++){
        if (students[i].grade < 9.5){
            sum ++;
        }
    }
    console.log ("Numero de Negativas: " + sum)
}

function positiveGrade(students){
    sum= 0;
    for (i=0; i<students.length; i++){
        if (students[i].grade >= 9.5){
            sum += 1;
        }
    }
    console.log ("Numero de Positivas: " + sum)
}




function studentStats(students, option) {
    switch (option) {
        case 1:
            listall(students)
            bestGrade(students);
            positiveGrade(students);
            worstGrade(students);
            averageGrade(students)
            negativesGrade(students)
                break;
        default:
            console.log("invalid option")
            break;
    }
}

studentStats(students,1)