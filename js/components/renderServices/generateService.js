function generateService(service) {
    // params validacija
    if (service.active !== true) {
        return '';
    }

    // logic
    const HTML = `<div class="col-4 col-md-6 col-sm-12">
                    <span class="${service.icon}"></span>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`

    // post logic validacija

    // output
    return HTML;

}

export { generateService } 