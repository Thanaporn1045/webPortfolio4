window.onload = pageLoad;

function pageLoad(){
   var totop = document.getElementById("toTop");
   totop.onclick = windowtoTop;
   checkmouse();
	
}
function windowtoTop()
{
    window.scrollTo(0, 0);

}
function checkmouse()
{
    
    var asm3 = document.getElementById("asm3");
    asm3.onmouseover = function()
    {
        asm3.classList.remove("smallflex");
		asm3.classList.add("bigflex");
    }
    asm3.onmouseout = function()
    {
        asm3.classList.remove("bigflex");
		asm3.classList.add("smallflex");
    }
    asm3.onclick = function()
    {
        window.open("Asm3/recipe.html");
    }

    var asm4 = document.getElementById("asm4");
    asm4.onmouseover = function()
    {
        asm4.classList.remove("smallflex");
		asm4.classList.add("bigflex");
    }
    asm4.onmouseout = function()
    {
        asm4.classList.remove("bigflex");
		asm4.classList.add("smallflex");
    }
    asm4.onclick = function()
    {
        window.open("Asm4/recipeweek4.html");
    }

    var asm5 = document.getElementById("asm5");
    asm5.onmouseover = function()
    {
        asm5.classList.remove("smallflex");
		asm5.classList.add("bigflex");
    }
    asm5.onmouseout = function()
    {
        asm5.classList.remove("bigflex");
		asm5.classList.add("smallflex");
    }
    asm5.onclick = function()
    {
        window.open("Asm5/week5.html");
    }


    var asm6 = document.getElementById("asm6");
    asm6.onmouseover = function()
    {
        asm6.classList.remove("smallflex");
		asm6.classList.add("bigflex");
    }
    asm6.onmouseout = function()
    {
        asm6.classList.remove("bigflex");
		asm6.classList.add("smallflex");
    }
    asm6.onclick = function()
    {
        window.open("Asm6/register.html");
    }

    var asm7 = document.getElementById("asm7");
    asm7.onmouseover = function()
    {
        asm7.classList.remove("smallflex");
		asm7.classList.add("bigflex");
    }
    asm7.onmouseout = function()
    {
        asm7.classList.remove("bigflex");
		asm7.classList.add("smallflex");
    }
    asm7.onclick = function()
    {
        window.open("Asm7/gamehtml.html");
    }

    var pagealert = document.getElementById("changepage");
    pagealert.onclick = function()
    {
        alert("go to Project");

    }



}


	