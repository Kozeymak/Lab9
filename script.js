const student ={
    group: "201-321",
    last_name: "Гусев",
    first_name: "Данила"
}
keysArr=Object.keys(student);
keysStr="Список свойств: ";
keysArr.forEach(key => {
    keysStr+=(key+", ")
});
keysStr=keysStr.slice(0,-2);
console.log(keysStr);
outputStr=`Студент ${student.first_name} ${student.last_name} учится в группе ${student.group}.`;
console.log(outputStr);