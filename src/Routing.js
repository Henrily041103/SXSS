import {
    Routes,
    Route,
  } from "react-router-dom";
import BlogContent from "./blog";
import RecipeGenerator from "./RecipeGenerator";

function Routing () {
    return (
            <Routes>
                <Route exact path = "/" element={<BlogContent/>}></Route>
                <Route path = "/blog" element={<BlogContent/>}></Route>
                <Route path = "/info" element={"Unimplemented"}></Route>
                <Route path="/recipes/:id" element={<RecipeGenerator/>}></Route>
            </Routes>
    )
}

export default Routing;