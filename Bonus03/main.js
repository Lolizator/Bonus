let lang = prompt('Введите язык ru или en?');

let arrLang = [["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"], ["Monday", "Tuesday", "Wednesday", "Thursda", "Friday", "Saturday", "Sunday"]];

// a)
if (lang === "ru"){
    console.log(arrLang[0]);
} else if (lang === "en"){
    console.log(arrLang[1]);
} else {
    console.log("Вы наверное ошиблись")
}

// б)
switch(lang) {
    case 'ru':  
        console.log(arrLang[0]);
    break;

    case 'en':
        console.log(arrLang[1]);
    break;

    default:
        console.log('Вы наверное ошиблись');
}

// в)
let lang_array = [];
lang_array['ru'] = arrLang[0];
lang_array['en'] = arrLang[1];
console.log(lang_array[lang]);

// Второе задание
let namePerson = prompt('Введите ваше имя?');

let person = (namePerson === 'Артём') ? 'директор' :
             (namePerson === 'Максим') ? 'преподаватель' :
             'студент';
console.log(person);