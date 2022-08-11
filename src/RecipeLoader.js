import * as rec1 from "./Assets/Recipes/recipes/ASPARAGUS-MORINGA-MAYONNAISE.json"
import * as rec2 from "./Assets/Recipes/recipes/Avocado-MORINGA-SALAD.json"
import * as rec3 from "./Assets/Recipes/recipes/BROCCOLI-MORINGA-CREAM-SOUP.json"
import * as rec4 from "./Assets/Recipes/recipes/LEMON-MORINGA-RAINBOW-SALAD.json"
import * as rec5 from "./Assets/Recipes/recipes/MORINGA-MIXED-SALAD.json"
import * as rec6 from "./Assets/Recipes/recipes/MORINGA-PEANUTS-SALAD.json"
import * as rec7 from "./Assets/Recipes/recipes/MORINGA-POTATO-SALAD.json"
import * as rec8 from "./Assets/Recipes/recipes/Moringa-salad-with-tofu.json"
import * as rec9 from "./Assets/Recipes/recipes/TOFU-SOUP.json"
import * as rec10 from "./Assets/Recipes/recipes/VEGETABLES-BROTH.json"

var recipes_raw = [rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10];

let id = 0;
let getID = () => {
    id = id + 1;
    return "0".repeat(Math.floor(Math.log(id))) + id.toString();
}
var recipes = [];

recipes_raw.forEach(element => {
    element.id = getID();
    recipes[id-1] = element;
});

export {recipes};