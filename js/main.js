// header
import { headerData } from './data/header.js';
import { RenderHeader } from './components/header/RenderHeader.js';
// hero
// about us
// portfolio gallery
import { portfolioData } from './data/portfolio.js';
import { Gallery } from './components/gallery/Gallery.js';
// our services
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
// our team
// achievements
// pricing
// blog
// testimonials
// contact us
// maps
// footer

// header
new RenderHeader(headerData);
// hero
// about us
// portfolio gallery
new Gallery(portfolioData);
// our services
renderServices(servicesData);
// our team
// achievements
// pricing
// blog
// testimonials
// contact us
// maps
// footer