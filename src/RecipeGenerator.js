import {useParams} from "react-router-dom";
import { recipes } from "./RecipeLoader";

function getRecipe(ID) {
    var rec;
    recipes.forEach((recipe) => {
        if (ID == recipe.id) {
            rec = recipe;
        }
    })
    return rec;
}

function splitter(str, pattern) {
    var str_raw = str.substring(2, str.length-2).split(pattern);
    var s =[]
    str_raw.forEach((element, index) => {
        if (!element.match(pattern)) {s.push(<li key={index}>{element}</li>);}
    });
    return s;
}

function RecipeGenerator() {
    const {id} = useParams();
    
    var recipe = getRecipe(id);
    return (
        <div id="RecipeContainer">
            <h1>{recipe.name}</h1>
            <div>Thời gian nấu ăn: {recipe.Prep_cook}</div>
            <div>Khẩu phần: {recipe.Serves}</div>
            <div>Nguyên liệu:</div>
            <ul>
                {splitter(recipe.Ingredients, /(','|', ')/)}
            </ul>
            <div>Cách làm:</div>
            <ul>
                {splitter(recipe.Directions, /(','|', ')/)}
            </ul>
        </div>
    );
}

export default RecipeGenerator;
