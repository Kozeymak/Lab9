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

popArray=['к', 'e', 'к', 2, 2, 8];
function popper(popArray) {
    length=popArray.length;
    for(let i=0; i<length; i++){
        let popStr=popArray.pop();
        if(popArray.length>0){
            popStr+=" осталось ["+popArray+']';
        }
        console.log(popStr);
    }
}
popper(popArray);