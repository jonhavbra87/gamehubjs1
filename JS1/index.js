import { gamePage } from "./pages/product.js";
import { gamesPage } from "./pages/products.js";
// import { oldGamesPage } from "./pages/oldProducts.js";
import { aboutPage } from "./pages/about.js";
import { homePage } from "./pages/homepage.js";
import { renderNews } from "./pages/news.js";
import { validateForm } from "./forms.js";
import { setMinDateForExpiration } from "./checkout/creditcard.js";
// import * `./cart.js`;





switch(location.pathname) {
    case "/products/":
        gamesPage();
        break;
    case "/product/":
        gamePage();
        break;
    // case "/oldProducts/":
    //     getOldGames();
    //     break;
    case "/about/":
        aboutPage();
        break;
     case "/checkout/":
        setMinDateForExpiration()
        // updateamount();
        break;
    // case "/cart/"
    //     break;
    case "/contact/":
        const form = document.querySelector("#contactForm");
        form.addEventListener("submit", validateForm);    
        // Since I change the eventListener to index.js, I don't need to call validateForm() here    
        break;
        default:
        homePage();
        renderNews();
        break;
}


