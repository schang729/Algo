// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
// function array01(myArr){
//     var idx = (myArr.length - 1)
//     if (((myArr.length) % 2) == 0){

//         howMany = myArr.length/2
//     } else {

//         howMany = Math.floor((myArr.length)/2)

//     }
//     for (i=0; i<howMany; i++){
//         var temp2 = myArr[i]
//         myArr[i] = myArr[idx-i]
//         myArr[idx-i]= temp2
        



//     }
//     return myArr



// }
// var test = [1,2,3,4,5]
// console.log(array01(test))

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// function rotateArr(arr, count) {
//     return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
//   };
  
//   const arr = [1,2,3,4,5];
//   console.log(rotateArr(arr,-1))

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.


// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// function concat(arr1, arr2) {
//     return [...arr1, ...arr2]



// }
// arr1 = ['a','b']
// arr2 = [1,2 ]
// console.log(concat(arr1,arr2))
