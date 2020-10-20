class URL {
    constructor() {
        this.githubPathname = '/18a-grupe-portfolio/';
        this.DOMAINS = [
            '127.0.0.1',
            'localhost',
            'front-end-by-rimantas.github.io'
        ];
        this.domain = location.hostname;
    }

    /**
     * @returns grazina githubo pathname
     */

    static githubPathname() {
        return '/18a-grupe-portfolio/';
    };
    /**
     * @returns sarasas galimu DOMAIN daliu, kiek localpath tiek github
     */
    static DOMAINS() {
        return '127.0.0.1',
            'localhost',
            'front-end-by-rimantas.github.io'
    };
    /**
     * @returns grazina pilna kelia pagrindines URL dalies... protocolas+domain+port(jei yra), bei jei iskvieciama githube, tai prie grazamo URL yra pridetas projekto kelias
     */
    static baseURL() {
        let url = location.origin;

        if (location.hostname === URL.DOMAINS()[2]) {
            url += URL.githubPathname();
        }

    }

    fullURL(path) {
        // return protocol + domain + path;
    }

    static isHomePage() {
        const domain = location.hostname;

        if (domain === URL.DOMAINS()[0] ||
            domain === URL.DOMAINS()[1]) {
            // localhost
            if (location.pathname === '/') {
                return true;
            }
        } else {
            // github
            if (location.pathname === URL.githubPathname()) {
                return true;
            }
        }
        return false;
    }
}

export { URL }