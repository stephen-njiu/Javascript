(function(){
    "use strict";

    const subMenus = document.querySelectorAll('ul li ul');
    const menuLinks = document.querySelectorAll('.menulink');

    function hideMenu(){
        for (let menu of subMenus){
        menu.className = 'hide-menu';
    }
    }

    hideMenu();
    // Add a Click Handler to Main Links
    for (let i = 0; i < menuLinks.length; i++){
        menuLinks[i].addEventListener('click', function(event){
            event.preventDefault();
            const thisMenu = this.parentNode.querySelector('ul');
            // thisMenu.className = 'show-menu';
            // alert(thisMenu.innerHTML);

            if(thisMenu.classList.contains('hide-menu')) {
                hideMenu();
                thisMenu.className = 'show-menu';
            }
            else{
                thisMenu.className = 'hide-menu'; 
            }
             // only show one menu at a time....
        })
    }
}())