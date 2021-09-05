// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function array01 (myArr, newNum) {
    var idx = myArr.length
 
    for (i = idx; i > 0; i--) {
        myArr[i] = myArr[i-1]

    }
    myArr[0] = newNum
    return myArr;

}   
var test = [2,4,5,7,10];
var testNum = 6
console.log(array01(test, testNum))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function array02 (myArr){

    var x = myArr[0];
    for (i = 0; i < myArr.length-1; i++){
        myArr[i] = myArr[i+1]


    }
    myArr.pop()
    return myArr
    



}
var test = [2,3,4,5,6]
console.log(array02(test))


// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function array03 (myArr, idx, newNum){
    var x = myArr.length 

    for (i = x; i>idx ;i-- ){
        myArr[i] = myArr[i-1]

    }
    myArr[idx] = newNum
    return myArr


}
var test = [1,2,3,4,5,6,7]
console.log(array03(test, 2, 99));