document.addEventListener('DOMContentLoaded', () => 
{
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(navbarHTML => {
            const navCont = document.createElement('div');
            navCont.innerHTML = navbarHTML;
            
            document.body.insertBefore(navCont, document.body.firstChild);
        })
        .catch(error => window.alert("Algo deu errado. Volte Novamente mais tarde." + error));
});