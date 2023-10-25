window.onload = loginLoad;
function loginLoad(){
	var Form = document.getElementById("myLogin");
    Form.onsubmit = checkLogin;
	
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const Username = urlParams.get('username');
	const Password = urlParams.get('password');
	var LoginUsername = document.forms["myLogin"]["username"];
    var LoginPassword= document.forms["myLogin"]["password"];

	
	if(Username != LoginUsername.value || Password != LoginPassword.value)
	{
		alert("username หรือ password ไม่ถูกต้อง");	
		return false;	
	}
	else 
	{
		alert("Login success");
	}
}

			