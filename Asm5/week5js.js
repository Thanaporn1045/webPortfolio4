{
let BottonCount = 0;
function Postit(){
    BottonCount = BottonCount+1;
    //console.log(BottonCount);

    var textinput = document.getElementById("textinput").value;
    if(BottonCount==1)
    { 
    var topic1 = document.getElementById("Topic1");
    topic1.innerHTML = textinput;
    }
    else if(BottonCount==2)
    {
    var Comment1 = document.getElementById("Comment1");
    Comment1.innerHTML = textinput;
    }
    else
    {
    var Comment2 = document.getElementById("Comment2");
    Comment2.innerHTML = textinput;
    }
}
function Clearit(){
    BottonCount = 0;
    var topic1 = document.getElementById("Topic1");
    topic1.innerHTML = null;
    var Comment1 = document.getElementById("Comment1");
    Comment1.innerHTML = null;
    var Comment2 = document.getElementById("Comment2");
    Comment2.innerHTML = null;
}
}