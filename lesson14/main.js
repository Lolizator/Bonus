'use strict';

const DomElement = function(selector, height, width, bg = '#000', fontSize = '12px') {
    this.selector = prompt('Введите block или best');
    this.height = +prompt('Введите высоту');
    this.width = +prompt('Введите ширину');
    this.bg = prompt('Введите цвет на английском');
    this.fontSize = +prompt('Введите размер шрифта');
};

DomElement.prototype.createElement = function() {

    // let selector = this.selector.split('')[0];

    let div = document.createElement('div');

    if (this.selector === 'block') {
        document.body.appendChild(div);
        div.setAttribute('class', this.selector);
    } else if ((this.selector === 'best')) {
        document.body.appendChild(div);
        div.setAttribute('id', this.selector);
    }

    div.textContent = '"Элемент"';
    div.style.cssText = `text-align: center; 
                        display: inline-block; 
                        height: ${this.height}px; 
                        width: ${this.width}px; 
                        background: ${this.bg}; 
                        font-size: ${this.fontSize}px; 
                        margin-left: 30px`;
};

const elem = new DomElement();
elem.createElement();