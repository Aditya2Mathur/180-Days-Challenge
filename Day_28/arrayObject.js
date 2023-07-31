let courses =[
    {no:1, branch:'CSE'},
    {no:2, branch:'EE'},
    {no:2, branch:'ME'}
]
// console.log(courses);

// Callback function
let course = courses.find(function(course)
{
    return course.branch == "CSE";
})
console.log(course);
let course1  = courses.find(course1 => course1.branch == "CED");

console.log(course1);