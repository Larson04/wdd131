const mySelect = document.getElementsByTagName('select')[0];
function changeTheme()
{
    console.log(mySelect.value)

    if (mySelect.value == 'dark')
        {
            document.body.classList.add('dark');
            document.querySelector('.logo').src = 'images/byui-logo_white.png';
        }
        else
        {
            document.body.classList.remove('dark');
            document.querySelector('.logo').src = 'images/byui-logo_blue.webp';
        }
}
    
mySelect.addEventListener('click', changeTheme)
