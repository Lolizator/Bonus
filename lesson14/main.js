'use strict';

const DomElement = function(selector, height, width, bg = '#000', fontSize = '12px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElement = function() {

    let selector = this.selector.split('')[0];

    let div = document.createElement('div');

    if (selector === '.') {
        document.body.appendChild(div);
        div.setAttribute('class', this.selector);
    } else if ((selector === '#')) {
        document.body.appendChild(div);
        div.setAttribute('id', this.selector);
    }

    div.textContent = '"Элемент"';
    div.style.cssText = `text-align: center; 
                        display: inline-block; 
                        height: ${this.height}px; 
                        width: ${this.width}px; 
                        background: ${this.bg}; 
                        fontSize: ${this.fontSize}px; 
                        margin-left: 30px`;
};

const elem = new DomElement('#square', '200', '200', 'red', 14);
elem.createElement();