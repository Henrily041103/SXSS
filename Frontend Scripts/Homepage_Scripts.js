var blog_content = document.getElementById("blog_window");
var blog_mode = document.getElementById("blog");
var info_content = document.getElementById("info_window");
var info_mode = document.getElementById("info");
var zoom_in_mode =document.getElementById("zoom_in");
var zoom_out_mode = document.getElementById("zoom_out");
var main_menu_content = document.getElementById("main_menu");
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

}
function openZoomout(){

}
function options(){

}
blog_mode.addEventListener("click", openBlog);
info_mode.addEventListener("click", openInfo);
