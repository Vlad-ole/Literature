//Begin Define Server Locations
/*
gr = GE Medical Systems Content Server
cr = GE Medical Systems Catalog Server
crs = GE Medical Systems Catalog Secure Server
ir = GE Medical Systems Images Server
*/
var gr="/inen";
var cr="http://apps.gemedicalsystems.com";
var crs="https://apps.gemedicalsystems.com";
var ir="/inen";
var gemsMyAccLog="Login";
var gemsMyAccReg="Register";
var gemsMyAccLogOut="Logout";
var hlMoreText="More";
//End Define Server Locations

//Begin Client Detection
// Ultimate client-side JavaScript client sniff. 
// (C) Netscape Communications 1999.  Permission granted to reuse and distribute. 
var agt=navigator.userAgent.toLowerCase(); 
var is_major = parseInt(navigator.appVersion); 
var is_minor = parseFloat(navigator.appVersion); 
var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1) 
            && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) 
            && (agt.indexOf('webtv')==-1)); 
var is_nav2 = (is_nav && (is_major == 2)); 
var is_nav3 = (is_nav && (is_major == 3)); 
var is_nav4 = (is_nav && (is_major == 4)); 
var is_nav4up = (is_nav && (is_major >= 4)); 
var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) || 
                      (agt.indexOf("; nav") != -1)) ); 
var is_nav5 = (is_nav && (is_major == 5)); 
var is_nav5up = (is_nav && (is_major >= 5)); 
var is_ie   = ((agt.indexOf("msie") != -1) && (agt.indexOf('opera')==-1)); 
var is_ie3  = (is_ie && (is_major < 4)); 
var is_ie4  = (is_ie && (is_major == 4) && ((agt.indexOf("msie 5")==-1) && (agt.indexOf("msie 6")==-1)) ); 
var is_ie5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5")!=-1) ); 
var is_ie6  = (is_ie && (is_major == 4) && (agt.indexOf("msie 6")!=-1) );
if ((is_ie5) && (is_major < 5)) is_major=5;
if ((is_ie6) && (is_major < 5)) is_major=6;
var is_ie4up  = (is_ie  && (is_major >= 4));
var is_ie5up  = (is_ie  && (is_major >= 5));
var is_ie6up  = (is_ie  && (is_major >= 6));
if ((is_nav || is_nav5up) && (is_major < 6) && (agt.indexOf("netscape6")!=-1)) is_major=6;
// *** PLATFORM ***
var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
// NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
//        Win32, so you can't distinguish between Win95 and WinNT.
var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));
// NOTE: Reliable detection of Win98 may not be possible. It appears that:
//       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
//       - On Mercury client, the 32-bit version will return "Win98", but
//         the 16-bit version running on Win98 will still return "Win95".
var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
var is_win32 = (is_win95 || is_winnt || is_win98 || 
                ((is_major >= 4) && (navigator.platform == "Win32")) ||
                (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));
var is_mac    = (agt.indexOf("mac")!=-1);
var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) || 
                           (agt.indexOf("68000")!=-1)));
var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) || 
                            (agt.indexOf("powerpc")!=-1)));						
//	End Browser Detect
//End Client Detection
//Begin GEMS Navigation Menus Variable Definitions
//Define array for Left Navigation Items
var gemsmenuon=false;
var gemsmenuloaded=false;
var gemsMenuDebug=false;
var gems_lnmenus=new Array("gemslnrad","gemslncard","gemslninter","gemslnmon","gemslnit","gemslnedu","gemslnhcare","gemslnacc")
var gems_lnmenus_start=new Array(1,21,31,41,51,61,71,81,101);
var gems_lnmenus_end=new Array(12,29,39,48,56,65,76,83,106);
var gems_currmenu="";
var currmenu="";
var refURL="";
var gemsMenuBarOpen=-1;
var gemsContentDivs=0;
var gemsContentVisible = true;
linkagentstart=(gr == "/inen")?"/inen/js/nav/int_linkagent":gr+"/js/nav/linkagent";
if (is_win32) {
	if (is_nav4up) gemsmenuon = true;
	if (is_ie4up) gemsmenuon = true;
}

//Disable Mac support until more testing can be done
if (is_mac) {
	if (is_nav4up) gemsmenuon = true;
	if (is_ie && (is_major > 4)) gemsmenuon = true;
}

if (is_nav && is_major > 4) gemsmenuon = false;		//Disable Netscape 6 or later
//gemsmenuon = false;								//Force all menus off

/*
// Generate a Dynamic Style Sheet for IE 4+ browsers only
if (is_ie4up) {
	document.writeln("<style id=\"gemsnav_style\" type=\"text/css\"></style>");
	document.close();							
}
*/
//End GEMS Navigation Menus Variable Definitions

//Begin Standard Functions
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function tmt_findObj(n){
	var x,t; if((n.indexOf("?"))>0&&parent.frames.length){t=n.split("?");
	x=eval("parent.frames['"+t[1]+"'].document.getElementById('"+t[0]+"')");
	}else{x=document.getElementById(n)}return x;
}

function MM_showHideLayers() { //v3.0A Modified by Al Sparber and Massimo Foti for NN6 Compatibility
  var i,p,v,obj,args=MM_showHideLayers.arguments;if(document.getElementById){
   for (i=0; i<(args.length-2); i+=3){ obj=tmt_findObj(args[i]);v=args[i+2];
   v=(v=='show')?'visible':(v='hide')?'hidden':v;
   if(obj)obj.style.visibility=v;}} else{
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }}
}
//End Standard Functions

//Begin Navigation Menus Functions

//Function to use LinkAgent
function z(linkID) {
	window.location=linkagentstart+Math.floor(linkID/1000)+".html?gemsredir="+linkID;
}

function gems_ln_menu_init(idnum) {
	//Verify all menus have loaded
	if (!gemsmenuloaded) {
		i="";
		if (idnum==0) i=gr+"/company/nav_radiology.html";
		if (idnum==1) i=gr+"/company/nav_cardiology.html";
		if (idnum==2) i=gr+"/company/nav_monitor.html";
		if (idnum==3) i=gr+"/company/nav_it_solutions.html";
		if (idnum==4) i=gr+"/company/nav_education.html";
		if (idnum==5) i=gr+"/company/nav_services.html";
		if (idnum==6) i=gr+"/company/nav_accessories.html";
		if (idnum==7) i=gr+"/company/nav_prod_solutions.html";
		if (i!="") location.href=i;
		return true;
	}
	//Begin by hiding all other Left Navigation Main Layers	and showing only the one selected
	for (i=0; i < gems_lnmenus.length; i ++) {
		(i == idnum) ? MM_showHideLayers(gems_lnmenus[i],'','show') : MM_showHideLayers(gems_lnmenus[i],'','hide');
	}
	gemsMenuBarOpen=idnum;
	//Hide content section, if exists
	if (gemsContentDivs > 0 && gemsContentVisible==true) {
		for (i=1;i<=gemsContentDivs;i++){
			MM_showHideLayers("gemsContent" + i,'','hide');
			gemsContentVisible = false;
		}
	}		
	return true;
}

function gems_ln_menu_close(idnum) {
	//Verify all menus have loaded
	if (!gemsmenuloaded) return true;
	//Begin by manually turning off all the menus of the bar
	for (i=gems_lnmenus_start[idnum]; i <= gems_lnmenus_end[idnum]; i++) {
		stringidnum = (i < 10) ? "gemsMenu0" + String(i) : "gemsMenu" + i;
		MM_showHideLayers(stringidnum,'','hide');			
	}	
	//Finally, hide the menubar itself
	MM_showHideLayers(gems_lnmenus[idnum],'','hide');
	gemsMenuBarOpen=-1;
	//Show content section, if exists
	if (gemsContentDivs > 0 && gemsContentVisible==false) {
		for (i=1;i<=gemsContentDivs;i++){
			MM_showHideLayers("gemsContent" + i,'','show');
			gemsContentVisible = true;
		}
	}		
	return true;		
}

function gems_ln_menu_flip(idnum) {
	var i=gemsMenuBarOpen;
	if (gemsMenuBarOpen > -1) gems_ln_menu_close(gemsMenuBarOpen); 
	if (i != idnum) gems_ln_menu_init(idnum);
	return true;
}

function gemsMenuToggle() {
	//Verify all menus have loaded
	if (!gemsmenuloaded) {
		return true;
	}
	var argsObj = gemsMenuToggle.arguments;
	var args = argsObj.length;	
	var id = argsObj[0];
	var forcedOn = (args > 1) ? argsObj[1] : false;
	var i = 0;
	var mstart = 1;
	var mend = 11;
	if (id > 20) i=1;
	if (id > 30) i=2;
	if (id > 40) i=3;
	if (id > 50) i=4;
	if (id > 60) i=5;
	if (id > 70) i=6;
	if (id > 80) i=7;
	if (id > 100) i=8;
	var mstart=gems_lnmenus_start[i];
	var mend=gems_lnmenus_end[i];
	barId= "menuId"+id;
	MenId= "gemsMenu"+id;
	if (is_ie) {
	    if ((barId != currmenu) || (forcedOn != false)) {
			currmenu = barId;
			MM_showHideLayers(MenId,'','show');
			//Hide all other associated menu items
			for (i=mstart; i <= mend; i ++) {
				stringidnum = (i < 10) ? "gemsMenu0" + String(i) : "gemsMenu" + i;
				if (i != id) MM_showHideLayers(stringidnum,'','hide');
			}			
			//Hide content section, if exists
			if (gemsContentDivs > 0) {
				for (i=1;i<=gemsContentDivs;i++){
					MM_showHideLayers("gemsContent" + i,'','hide');
					gemsContentVisible = false;
				}
			}			
		} else {
			if (event.toElement) {
				if (event.toElement.className.substr(0,4) == "ieTN" || event.toElement.className.substr(0,4) == "ieLN") return true;				
			}
			currmenu = "";
			MM_showHideLayers(MenId,'','hide');
			//show content section, if exists
			if (gemsContentDivs > 0 && gemsMenuBarOpen==-1) {
				for (i=1;i<=gemsContentDivs;i++){
					MM_showHideLayers("gemsContent" + i,'','show');
					gemsContentVisible = true;
				}
			}				
		}	
	} 
	if (is_nav) {
		obj = MM_findObj(MenId);
		if ((forcedOn = false) || (obj.visibility == 'show') || (obj.visibility == 'visible')) {
			currmenu = "";
			MM_showHideLayers(MenId,'','hide');				
			//show content section, if exists
			if (gemsContentDivs > 0 && gemsMenuBarOpen==-1) {
//				
				for (i=1;i<=gemsContentDivs;i++){
					MM_showHideLayers("gemsContent" + i,'','show');
					gemsContentVisible = true;
				}
			}							
		} else {
			currmenu = barId;
			MM_showHideLayers(MenId,'','show');
			//Hide all other associated menu items
			for (i=mstart; i <= mend; i ++) {
				stringidnum = (i < 10) ? "gemsMenu0" + String(i) : "gemsMenu" + i;
				if (i != id) MM_showHideLayers(stringidnum,'','hide');
			}		
			//hide content section, if exists
			if (gemsContentDivs > 0) {
				for (i=1;i<=gemsContentDivs;i++){
					MM_showHideLayers("gemsContent" + i,'','hide');
					gemsContentVisible = false;
				}
			}			
		}
	}
	return true;	
}
//End Navigation Menus Functions

//Begin Catalog Functions
function open_help() {
   // this flag is used to check whether we are on catalog pages or OP pages
   // because depending on that we will go to the relative location of help directory
   flag=0;
   url = document.URL;
   urlContent = new Array();
   urlContent = url.split("/");
   for (i=0; (i<url.length && flag==0); i++) {
     if (urlContent[i]=="gems") flag=1;
   }
   if (typeof(sHelp)=="undefined") {
      sHelp = "hlp1.html"
      if (flag==0) {
         n = open(cr+"/apps2/browse/catalog/gems/help/frameset_help.jhtml?sHelp="+ sHelp,"help","width=790,height=600,status=yes,menubar=no,resizable=yes,toolbar=no,scrollable=no");n.focus();
      }
      else {
         n = open(cr+"/apps2/browse/catalog/gems/help/frameset_help.jhtml?sHelp="+ sHelp,"help","width=790,height=600,status=yes,menubar=no,resizable=yes,toolbar=no,scrollable=no");n.focus();
      }
   }
   else {
      if (flag==0) {
         n = open(cr+"/apps2/browse/catalog/gems/help/frameset_help.jhtml?sHelp="+ sHelp,"help","width=790,height=600,status=yes,menubar=no,resizable=yes,toolbar=no,scrollable=no");
      }
      else {
         n = open(cr+"/apps2/browse/catalog/gems/help/frameset_help.jhtml?sHelp="+ sHelp,"help","width=790,height=600,status=yes,menubar=no,resizable=yes,toolbar=no,scrollable=no");
      }
   n.focus();
   }
}

function writeLink(newURL) {
	if (refURL=="") refURL=window.location;
	var catalogLink = cr + "/apps2/browse/catalog/gems/redirect.jhtml?pageTitle='";
	catalogLink+=escape(document.title);
	catalogLink+="'";
	catalogLink+="&redirectURL="+newURL;
	catalogLink=catalogLink+"&referrerURL="+refURL;
	if (window.location.href.indexOf(cr) == -1) {
		if (refURL!=window.location) {
			location.replace(catalogLink);
		} else {
			window.location=catalogLink;
		}
	} else {
		if (refURL!=window.location) {
			location.replace(newURL);
		} else {
			window.location=newURL;
		}		
	}
}

//Begin isLogin Function
function isLogin() {
  var dc = document.cookie;
  var prefix = "SMSESSION=";
  var begin = dc.indexOf(prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return (0);
  } else
    return (1);
}
//End isLogin Function

//End Catalog Functions

//Begin Wizards Functions
function open_callme() {
  open("/company/faq_phone.html","help","width=625,height=600,status=yes,menubar=no,resizable=yes,toolbar=no,scrollbars=yes,left=50,top=50");
}

function open_findrep() {
   foo = open("/company/faq_phone.html","help","width=625,height=650,status=yes,menubar=no,resizable=yes,toolbar=no,scrollbars=yes,left=50,top=50");
}

function pop_up(cUrl) {
	var xWin = window.open(cUrl,"_blank","toolbar=yes,location=yes,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=640,height=400");
}

function gems_Printable() {
   var xWin = window.open("","gemsPrintable","width=695,height=560,toolbar=yes,location=yes,status=yes,menubar=yes,resizable=yes,toolbar=yes,scrollbars=yes,left=50,top=50");
}

//End Wizards Functions

//Begin of Cookie Functions
function Set_Cookie(Home,value) {
	expires="";
	path="/";
	domain="";
	document.cookie = Home + "=" + escape(value) + ((expires)?";expires="+expires.toGMTString():"") + ((path)?";path="+path:"") + ((domain)?";domain="+domain:"");
}

function Get_Cookie(Home) {
	var start=document.cookie.indexOf(Home+"=");
	var len=start+Home.length+1;
	var newURL="/splash.html";
	if ((!start) && (Home != document.cookie.substring(0,Home.length))) {
		newURL="/splash.html";
	} else {
		if (start == -1) {
		 	newURL="/splash.html";
		}
		var end=document.cookie.indexOf(";",len);
		if (end == -1) end=document.cookie.length;
		var uRl= unescape(document.cookie.substring(len,end));
		switch (uRl) {
			case "cnzh": newURL=gr+"/cnzh/index.html";break;
			case "inen": newURL=gr+"/inen/index.html";break;
			case "seen": newURL=gr+"/seen/index.html";break;
			case "krko": newURL=gr+"/krko/index.html";break;
			case "twzh": newURL=gr+"/twzh/index.html";break;
			case "jaja": newURL=gr+"/index.html";break;
			case "dkda": newURL="http://www.gemedicalsystemseurope.com/dkda/index.html";break;
			case "frfr": newURL="http://www.gemedicalsystemseurope.com/frfr/index.html";break;
			case "dede": newURL="http://www.gemedicalsystemseurope.com/dede/index.html";break;
			case "huhu": newURL="http://www.gemedicalsystemseurope.com/huhu/index.html";break;
			case "ilen": newURL="http://www.gemedicalsystemseurope.com/ilen/index.html";break;
			case "itit": newURL="http://www.gemedicalsystemseurope.com/itit/index.html";break;
			case "eses": newURL="http://www.gemedicalsystemseurope.com/eses/index.html";break;
			case "sesv": newURL="http://www.gemedicalsystemseurope.com/sesv/index.html";break;
			case "chfr": newURL="http://www.gemedicalsystemseurope.com/chfr/index.html";break;
			case "uken": newURL="http://www.gemedicalsystemseurope.com/uken/index.html";break;
			case "eueu": newURL="http://www.gemedicalsystemseurope.com/eueu/index.html";break;
			case "naffr": newURL="http://www.gemedicalsystemseurope.com/naffr/index.html";break;
			case "safen": newURL="http://www.gemedicalsystemseurope.com/safen/index.html";break;
			case "meaar": newURL="http://www.gemedicalsystemseurope.com/meaar/index.html";break;
			case "egen": newURL="http://www.gemedicalsystemseurope.com/egen/index.html";break;
			case "saen": newURL="http://www.gemedicalsystemseurope.com/saen/index.html";break;
			case "cafr": newURL=gr+"/cafr/index.html";break;
			case "caen": newURL=gr+"/caen/index.html";break;
			case "usen": newURL=gr+"/index.html";break;
			case "laen": newURL=gr+"/laen/index.html";break;
			case "lapt": newURL=gr+"/lapt/index.html";break;
			case "laes": newURL=gr+"/laes/index.html";break;
			case "auen": newURL=gr+"/auen/index.html";break;
			case "": newURL=gr+"/splash.html";break;
			default: newURL=gr+"/splash.html";
		}
	}
	parent.location.replace(newURL);
} 

function Set_newurl(Home,value,target_url,opt) {
	path="/";
	domain="";
	var expiredays=360;
	var ExpireDate = new Date ();
	if (opt=="1") {
		ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
		expires=ExpireDate;
		document.cookie = Home+"="+escape(value) + ((expires)?";expires="+expires.toGMTString():"") + ((path)?";path="+path:"") + ((domain)?";domain="+domain:"");
	}
	parent.location.replace(target_url);
}
//End of Cookie Functions
