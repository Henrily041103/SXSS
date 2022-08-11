import {useParams} from "react-router-dom";
import { recipes } from "./RecipeLoader";

function getRecipe(ID) {
    var rec;
    recipes.forEach((recipe) => {
        if (ID == recipe.id) {
            console.log(1);
            rec = recipe;
        }
    })
    return rec;
}

function RecipeGenerator() {
    const {id} = useParams();
    
    var recipe = getRecipe(id);
    // console.log(recipe);
    return (
        <div id="RecipeContainer">
            <h1>{recipe.name}</h1>
            <div>Thời gian nấu ăn: {recipe.Prep_cook}</div>
            <div>Khẩu phần: {recipe.Serves}</div>
            <div>Nguyên liệu:</div>
            <ul>
                {() => {
                    var ing = [];
                    recipe.Ingredients.forEach((element, index) => {
                        ing.push(<li key={index}>element</li>);
                    });
                    return ing;
                }}
            </ul>
            <div>Cách làm:</div>
            <ul>
                {() => {
                    var dir = [];
                    recipe.Directions.forEach((element, index) => {
                        dir.push(<li key={index}>element</li>);
                    });
                    return dir;
                }}
            </ul>
        </div>
    );
}

export default RecipeGenerator;
