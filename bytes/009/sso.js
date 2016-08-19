function getParam(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
    return decodeURIComponent(name[1]);
}

function checkToken() {
    var token;
    ssoToken = getParam('idStr');
	if (typeof ssoToken != 'undefined'){
	    document.cookie = 'ssoRSIToken=' + ssoToken + '; path=/';
	    window.location.replace("/atlas/rsi");
	}
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function verifyLogin() {
    var userAuth = 0;

    var cookieName = 'ssoRSIToken'
    var ssoToken = readCookie(cookieName);

   	if (!ssoToken){
        window.location.replace("/login.aspx?src=WEBMAP&returnuri=http://mds.3riverswetweather.org/atlas/rsi");
    }
}

function testAuthentication() {
    checkToken();
    verifyLogin();
}
