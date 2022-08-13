// import { useNavigate } from 'react-router-dom';
    
        function openBlog() {
            console.log("1")
            // navigate('/blog');
        }
        function openInfo() {
            console.log("2")
            // navigate('/info');
        }
        function openZoomin(main_menu, menu_list, content, zoom_in, zoom_out){
            main_menu.className = "col-sm-2";
            menu_list.style.display = "none";
            content.className = "col-sm-10";
            zoom_out.style.display = "flex";
            zoom_in.style.display = "none";
        }
        function openZoomout(main_menu, menu_list, content, zoom_in, zoom_out){
            main_menu.className = "col-sm-3";
            content.className = "col-sm-9";
            zoom_out.style.display = "none";
            zoom_in.style.display = "flex";
            menu_list.style.display = "block";
        }

export {openBlog, openInfo, openZoomin, openZoomout};