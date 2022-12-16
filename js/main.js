// task 1:
const array = [1, 2, 3, 1, 4, 5, 5, 2, 5, 1, 3, 6, 6, 5, 7, 6, 8, 9, 8];

function deleteIdentical(arr) {  
    const result = [];  
    
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    
    return result;
}

console.log(deleteIdentical(array));

// ====================================================================================================

// task 2:
const arr1 = ['a', 'b', 'c'],
      arr2 = ['a', 'a', 'c'];

function compare(a, b) {
    if (a.length != b.length) {
        return false;
    }

    for(let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    
    return true;
}

console.log(compare(arr1, arr2));

// ====================================================================================================

// task 3:
const names = ['Anna', 'Andrey', 'Boris', 'Bogdan', 'Bayraktar', 'Vova', 'Vasya', 'Gena', 'Grisha', 'Dima', 'Dasha'];

function sortedName(arr, letter) {
    const filterNames = [];
    
    for(let str of arr) {
        if(str[0].toLowerCase() == letter.toLowerCase()) {
            filterNames.push(str);
        }
    }
    return filterNames;
}

console.log(sortedName(names, 'b'));

// ====================================================================================================

// task 4:
const suggestions = ['Слава Україні!', 'Героям слава!', 'Доброго вечора, ми з України!', 'Відбій повітряної тривоги!', 'Вірю в ЗСУ!', 'Все буде Україна!', 'Україна понад усе!'];

function getSentence(arr, word) {
    const finded = [];

    for(let str of arr) {
        if (str.toLowerCase().includes(word.toLowerCase())) {
            finded.push(str);
        }
    }

    return finded;
}

console.log(getSentence(suggestions, 'СЛАВА'));