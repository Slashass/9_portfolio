class Gallery {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;

        console.log(this.selector);
        console.log(this.data);

        this.init();
    };

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
    }

    isValidGallery() {

    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);  // false -> DOM = null
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }

}

export { Gallery }