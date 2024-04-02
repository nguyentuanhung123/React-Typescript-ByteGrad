// function convertToArray<T>(input: T): T[] {
//     return [input]
// }

// const convertToArray = <T>(input: T): T[] => {
//     return [input]
// }

// convertToArray(5);
// convertToArray('hello');
// convertToArray(true);
// convertToArray({
//     name: 'Hung',
//     age: 18,
//     address: {
//         city: 'Ha Noi',
//         number: 10
//     }
// })

// -------------------------------------------------------------------------

// function getIndexOfArrayItem<T>(array: T[], arrayItem: T){
//    return array.findIndex((item) => item === arrayItem);
// }

// const getIndexOfArrayItem = <T>(array: T[], arrayItem: T): number => {
//     return array.findIndex((item) => item === arrayItem);
// }

// const arr = [55, 99, 77];
// getIndexOfArrayItem(arr, 77);

// -------------------------------------------------------------------------

// function createArrayPair<T, K>(input1: T, input2: K): [T, K]{
//     return [input1, input2]
// }

// const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
//     return [input1, input2];
// }

// createArrayPair('hello', 10)

// -------------------------------------------------------------------------


function convertToArray<T extends number | string>(input: T): T[] {
    return [input]
}

/**
 *  Argument of type 'boolean' is not assignable to parameter of type 
 */
//convertToArray(true);