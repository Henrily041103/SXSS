import { Link } from 'react-router-dom';
// import './Content.css';
import {recipes} from "./RecipeLoader.js";
import Routing from './Routing';
import {useRef} from 'react';
import menu_logo from "./Assets/Logos/Menu-button-removebg-preview.png" ;
import blog_logo from "./Assets/Logos/Blog-button_before-removebg-preview.png";
import info_logo from "./Assets/Logos/Info-button-removebg-preview.png";
import zoom_in from "./Assets/Logos/Zoom_in-button-removebg-preview.png";
import zoom_out from "./Assets/Logos/Zoom_out-button-removebg-preview.png";
import * as scripts from "./Homepage_Scripts";

function MainContent() {
  var recipes_list = [];

  recipes.forEach((recipe, index) => {
    recipes_list.push(<li key = {index}><Link to={"/recipes/" + recipe.id}>{recipe.name}</Link></li>);
  })

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row" >
            <div className="col-sm-3" id="main_menu">
                <span><img src={menu_logo} id="menu_logo"/></span>
                <ul>
                  {recipes_list}
                </ul>
            </div>
                
            <div className="col-sm-9" id="content">
                <div className="row" id = "modes">
                    <div className="col" >
                        <button type="button" className="btn btn-primary btn-lg btn-block" id="blog" onClick={() => {
                          scripts.openBlog();
                        }}>
                            <img src= {blog_logo} id="blog_logo"/>
                        </button>
                    </div>
                    <div className="col" >
                        <button type="button" className="btn btn-primary btn-lg btn-block" id="info" onClick={() => {
                          scripts.openInfo();
                        }}>
                            <img src={info_logo} id="info_logo"/>
                        </button>
                    </div>
                </div>
                <div id="buttons">
                    <button type="button" className="btn-primary" id="zoom_in" onClick={() => {
                          var zoom_in=document.getElementById("zoom_in");
                          var zoom_out= document.getElementById("zoom_out");
                          var main_menu = document.getElementById("main_menu");
                          var content = document.getElementById("content");
                          scripts.openZoomin(main_menu, content, zoom_in, zoom_out);
                        }}>
                        <img src={zoom_in} id="in"/>
                    </button>
                    <button type="button" className="btn-primary" id="zoom_out" onClick={() => {
                          var zoom_in=document.getElementById("zoom_in");
                          var zoom_out= document.getElementById("zoom_out");
                          var main_menu = document.getElementById("main_menu");
                          var content = document.getElementById("content");
                          scripts.openZoomout(main_menu, content, zoom_in, zoom_out);
                        }}>
                        <img src={zoom_out} id="out"/>
                    </button>
                </div>

                <div id="main_stuff">
                  <Routing/>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default MainContent;
