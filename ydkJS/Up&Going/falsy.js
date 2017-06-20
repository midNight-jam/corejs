
Falsy conditions 
---
false,
0,
-0,
Nan,
"",
undefined,
null
---
Any Value that is not Falsy is Truth

 ==  : is comparision with coercion
 === : is comparision without coercion

 some rules for determining what to use
# if any of the value in a comparision can be true or false use === not ==
# if any of the value in a comparision could be among these specific values 
	(0, "",[] ) use === not ==
# in rest all places you can use == or === 

function foo(){
	"use strict";

	function bar(){

	}
}

/////////////////////////
// Module (use of closure)
/////////////////////////
function User(){
	var username, password;

	function doLogin(user, pwd){
		username = user;
		password = pwd;
	}

	var publicAPI = {
		login : doLogin
	};

	return publicAPI;
}


if(!Number.isNaN){
	Number.isNaN = function isNaN(x){
		return x !== x;
	}
}
