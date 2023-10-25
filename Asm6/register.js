window.onload = pageLoad;
function pageLoad(){
    var Form = document.getElementById("myForm");
    Form.onsubmit = validateForm;
	
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myForm"]["password"];
    var Repassword = document.forms["myForm"]["Repassword"];
    if(Repassword.value != password.value)
    {
        passwordincorrect();
        return false;

    }
    else
    {
        passwordcorrect();
    }

}

function passwordincorrect()
{
    var errormsg = document.getElementById("errormsg");
    errormsg.innerHTML = "Password ไม่ตรงกัน";
}
function passwordcorrect()
{
    alert("Register success");
}