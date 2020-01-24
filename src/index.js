const DomNodeCollection = require("./dom_node_collection");

const $l = function(selector) {
    // debugger
    if (selector instanceof HTMLElement) {
        return new DomNodeCollection([selector]);
    } else {
        const els = document.querySelectorAll(selector);
        const nodes = Array.from(els);
        return new DomNodeCollection(nodes);
    }
};

window.$l = $l;


// let c = $l('div');
// c.html("chicken");
// c.html();

// console.log($l('div').html())