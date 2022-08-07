document.addEventListener("DOMContentLoaded", () => {
    var blog_content = document.getElementById("blog_window");
    var blog_mode = document.getElementById("blog");
    var info_content = document.getElementById("info_window");
    var info_mode = document.getElementById("info");
    var zoom_in=document.getElementById("zoom_in");
    var zoom_out= document.getElementById("zoom_out");
    var main_menu = document.getElementById("main_menu");
    var options = document.getElementById("options");
    var content = document.getElementById("content");
    var current_focus;

    function openBlog() {
        blog_content.style.display="flex";
        info_content.style.display="none";
        current_focus = blog_mode;
    }
    function openInfo() {
        info_content.style.display ="flex";
        blog_content.style.display ="none";
        current_focus = info_mode;
    }
    function openZoomin(){
        main_menu.style.display ="none";
        content.className = "col-sm-12";
        zoom_out.style.display = "flex";
        zoom_in.style.display = "none";
        current_focus.focus();
    }
    function openZoomout(){
        main_menu.style.display = "flex";
        content.className = "col-sm-9";
        zoom_out.style.display = "none";
        zoom_in.style.display = "flex";
        current_focus.focus();
    }
    function options(){

    }
    blog_mode.addEventListener("click", openBlog);
    info_mode.addEventListener("click", openInfo);
    zoom_in.addEventListener("click", openZoomin);
    zoom_out.addEventListener("click", openZoomout);

    blog_mode.click();
    blog_mode.focus();
    zoom_out.click();
})