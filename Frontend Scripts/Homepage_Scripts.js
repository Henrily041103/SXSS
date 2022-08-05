var blog_content = document.getElementById("blog_window");
var blog_mode = document.getElementById("blog");
var info_content = document.getElementById("info_window");
var info_mode = document.getElementById("info");
var zoom_in=document.getElementById("zoom_in");
var zoom_out= document.getElementById("zoom_out");
var main_menu = document.getElementById("main_menu");
var options = document.getElementById("options");
function openBlog() {
    blog_content. style. display="flex";
    info_content. style. display="none";
}
function openInfo() {
    info_content.style.display ="flex";
    blog_content.style.display ="none";
}
function openZoomin(){
    bigdiv1.style.display ="none";
    bigdiv2.classname = "col-sm-11";
    zoom_out_mode.style.display = "flex";
    zoom_in_mode.style.display = "none";
}
function openZoomout(){
    bigdiv1.style.display = "flex";
    bigdiv2.classname = "col-sm-8";
    zoom_out_mode.style.display = "none";
    zoom_in_mode.style.display = "flex";
}
function options(){

}
blog_mode.addEventListener("click", openBlog);
info_mode.addEventListener("click", openInfo);
