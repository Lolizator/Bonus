'use strict';

function getConvert(str) {
    if (typeof(str) !== 'string'){
        return 'Это не строка!';
    }else if (str.length > 30) {
        return (str.trim().slice(0, 30) + '...');
    } else {
        return str.trim();
    }
}

let str = prompt('Введите строку!');

alert(getConvert(str));


