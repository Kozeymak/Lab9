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

function isPalindrome(word){
    let flag=true;
    for(let i=0;i<word.length/2;i++){
        if(word[i].toLowerCase()!=word[word.length-1-i].toLowerCase()){
            flag=false;
            break;
        }
    }
    console.log(flag);
}
isPalindrome("кек");

function matrixMultiplication(k, matrix){
    let outputStr="";
    matrix.forEach(vector=>{
        vector.forEach(el=>{
            console.log(el);
            outputStr+=el*k+' ';
        });
        outputStr+='\n';
    });
    console.log(outputStr);
}
matrixMultiplication(69, [[2,2,8],[2,8,2],[8,2,2]]);