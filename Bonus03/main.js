let lang = prompt('Введите язык ru или en?');

let ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let en = ["Monday", "Tuesday", "Wednesday", "Thursda", "Friday", "Saturday", "Sunday"];

// a)
if (lang == "ru"){
    console.log(ru);
} else if (lang === "en"){
    console.log(en);
} else {
    console.log("Вы наверное ошиблись")
}

// б)
switch(lang) {
    case 'ru':  
        console.log(ru);
    break;

    case 'en':
        console.log(en);
    break;

    default:
        console.log('Вы наверное ошиблись');
}

// в)
let lang_array = [];
lang_array['ru'] = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
lang_array['en'] = ["Monday", "Tuesday", "Wednesday", "Thursda", "Friday", "Saturday", "Sunday"];
console.log(lang_array[lang]);

// Второе задание
let namePerson = prompt('Введите ваше имя?');

let person = (namePerson == 'Артём') ? 'директор' :
             (namePerson == 'Максим') ? 'преподаватель' :
             'студент';
console.log(person);