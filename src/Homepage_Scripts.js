// import { useNavigate } from 'react-router-dom';
    
        function openBlog() {
            console.log("1")
            // navigate('/blog');
        }
        function openInfo() {
            console.log("2")
            // navigate('/info');
        }
        function openZoomin(main_menu, content, zoom_in, zoom_out){
            main_menu.style.display ="none";
            content.className = "col-sm-12";
            zoom_out.style.display = "flex";
            zoom_in.style.display = "none";
        }
        function openZoomout(main_menu, content, zoom_in, zoom_out){
            main_menu.style.display = "flex";
            content.className = "col-sm-9";
            zoom_out.style.display = "none";
            zoom_in.style.display = "flex";
        }

export {openBlog, openInfo, openZoomin, openZoomout};