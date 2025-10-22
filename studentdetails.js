let studentdetails=[{name:"john",mark:"85" },
    {name:"raf",mark:"90"},
    {name:"frobin",mark:"32"},
    {name:"sarah",mark:"40"}
];
function gradeca(mark){
    if(mark>=90 && mark<=100) return "O+";
    if (mark>=80 && mark<90) return "O";
    if(mark>=70 && mark<80) return "A+";
    if(mark>=60 && mark<70) return "A";
    if(mark>=50 && mark<60) return "B+";
    if(mark<=45 && mark <50) return "B";
    if(mark<45)  return "F"
};

studentdetails.forEach(function(student){
    student.grade=gradeca(student.mark);
})

console.log(studentdetails);
var p=studentdetails.filter(function(el){
    return el.mark>70;
})
console.log(p)
var d=studentdetails.find(function(st) {return st.name=='raf'
})
console.log(d)
console.log("Students who scored less than or equal to 40 marks:")
var f=studentdetails.filter(function(el) {return el.mark<=40})
console.log(f)
