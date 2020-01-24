class DOMNodeCollection {
    constructor(htmlElements) {
        this.htmlElements = htmlElements;
    }

    html(arg) {
        debugger
        if (arg === undefined){
            // debugger
            return this.htmlElements[0].innerHTML;
        } else {
            // debugger
            this.htmlElements.forEach( (el)=> {
                el.innerHTML = arg;
            });
            return this.htmlElements;
        }
    }

    empty() {
        return this.html("");
     
    }

    append(arg) {
        if (arg instanceof HTMLElement) {
            this.htmlElements.forEach( (el)=> {
                // debugger
                el.innerHTML += arg.outerHTML;
            });
        } else { 
            this.htmlElements.forEach( (el)=> {
                el.innerHTML += arg;
            });
        }

        return this.htmlElements;
    }

    attr(prop, val){

        if (val === undefined){
            return this.htmlElements[0].getAttribute(prop);
        }else{
            this.htmlElements.forEach( (el) => {
                el.setAttribute(prop, val);
            });
            return this.htmlElements;
        }
    }

    addClass(name){
        this.htmlElements.forEach( (el) => {
            el.className.length === 0 ? el.className = name : el.className += ` ${name}`;
            // el.className += name;
        });
        return this.htmlElements;
    }

    removeClass(name){
        this.htmlElements.forEach( (el) => {
            const classes_array = el.className.split(" ");
            const new_classes = classes_array.filter( (x) => x !== name );
            el.className = new_classes.join(" ");
        });
        return this.htmlElements;
    }

    // ul.append(li)
    children(selector){
        selector = new DOMNodeCollection([selector]);
        let arr = [];
        this.htmlElements.forEach( (el) => {
            // debugger
            arr = arr.concat(Array.from(el.children)); //Array.from because el.children is array-like not an actual array;
            // arr.push(el.children);
        });
        if (selector){
            debugger
            arr = arr.filter((x) => x === selector);
        }

        return new DOMNodeCollection(arr);

    }

    parent () {
        let arr = [];
        this.htmlElements.forEach( (el) => {
            debugger
            if (!arr.includes(el.parentNode)){
                arr.push(el.parentNode); //Array.from because el.children is array-like not an actual array;
            // arr.push(el.children);
            }
        });
        if (selector){
            debugger
            arr = arr.filter((x) => x === selector);
        }
        return new DOMNodeCollection(arr);
    }

    find (selector) {
        let arr =[];
        this.htmlElements.forEach( (el) => {
            // let els = el.querySelectorAll(selector)
            // 
            arr = arr.concat(Array.from(el.querySelectorAll(selector)));
        });
        return new DOMNodeCollection(arr);


    }

    remove(){

    }
}


module.exports = DOMNodeCollection;