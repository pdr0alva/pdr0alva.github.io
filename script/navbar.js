/*   INJECT HTML TO PREVENT CODE DUPLICATION (CLEAN CODE BASED)   */

document.addEventListener('DOMContentLoaded', () => 
{
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(navbarHTML => {
            const navCont = document.createElement('div');
            navCont.innerHTML = navbarHTML;
            
            document.body.insertBefore(navCont, document.body.firstChild);
            navbarManager();
        })
        .catch(error => window.alert("Algo deu errado. Volte Novamente mais tarde." + error));     
});



const navbarManager = () =>
{
    const navmobile_button = document.getElementById('navbar-mobile__button');
    const navmobile_content = document.getElementById('navbar-mobile__items');

    navmobile_button.addEventListener("click", (ev) => 
    {
        navmobile_content.classList.toggle("active");
        console.log("Mob Navbar clicked");
        ev.stopPropagation();
    });
            

    window.addEventListener("click", (ev) => 
    {
        if (!navmobile_content.contains(ev.target) && !navmobile_button.contains(ev.target))
        {
            navmobile_content.classList.remove("active");
        }
    });
}