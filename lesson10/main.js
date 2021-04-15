'use strict';

const   books = document.querySelector('.books'),
        book = document.querySelectorAll('.book');


books.append(book[1]);
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

const links = document.getElementsByTagName('a');
links[2].textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();


const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

const content = document.getElementsByTagName('ul');

content[5].append(newChapter);

const chaptersSecondBook = content[1].getElementsByTagName('li');

content[1].append(chaptersSecondBook[2]);
content[1].insertBefore(chaptersSecondBook[7], chaptersSecondBook[3]);
content[1].insertBefore(chaptersSecondBook[6], chaptersSecondBook[3]);
content[1].insertBefore(chaptersSecondBook[10], chaptersSecondBook[9]);

const chaptersFifthBook = content[4].getElementsByTagName('li');

content[4].insertBefore(chaptersFifthBook[9], chaptersFifthBook[2]);
content[4].insertBefore(chaptersFifthBook[4], chaptersFifthBook[3]);
content[4].insertBefore(chaptersFifthBook[5], chaptersFifthBook[4]);
content[4].insertBefore(chaptersFifthBook[6], chaptersFifthBook[9]);

const chaptersSixBook = content[5].getElementsByTagName('li');

content[5].insertBefore(chaptersSixBook[10], chaptersSixBook[9]);

document.body.style.backgroundImage = "url('/image/you-dont-know-js.jpg')";





