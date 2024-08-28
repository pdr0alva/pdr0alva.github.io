window.addEventListener('DOMContentLoaded', () =>
{
    const copy_button = document.getElementById("contact__email__button");

    copy_button.addEventListener('click', () => {
        navigator.clipboard.writeText("pedro.alvarenga.afonso@gmail.com");
    }); 
});