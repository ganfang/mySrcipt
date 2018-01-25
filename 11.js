function ChangeArrIndex(){
var cookieIndex=localStorage.getItem('cookieIndex');
var cookieArr=GetCookieArr();
 var arrLength=cookieArr.length;
 cookieIndex=(cookieIndex+1)%arrLength;
  localStorage.setItem ('cookieIndex',cookieIndex);
}

 function changeCookie(){
   var cookieIndex=localStorage.getItem('cookieIndex');
   var cookieArr=GetCookieArr();
	 var cookieStr=cookieArr[cookieIndex];
    setCookie("MydlCookie",cookieStr);
    //document.getElementById("form1").submit();
 }
function setCookie(name,value)
{
    var Days = 30*12*100;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+value + ";expires=" + exp.toGMTString();
}
function GetCookieArr(){
  var cookieStr=localStorage.getItem('cookieArr');
  if(!cookieStr){
    return [];
  }
  var cookieArr=cookieStr.split(",");
  return cookieArr;
}
