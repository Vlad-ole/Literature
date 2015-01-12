//General Use Variables
a1="";
a2="";
a3="";
a4="";
a5="";
a6="";
b=" height=24 border=0></a>";
if (gemsmenuon) {
	a1=" id=menuId101 onMouseOver=gemsMenuToggle('101',1) onmouseOut=gemsMenuToggle('101')";
	a2=" id=menuId102 onMouseOver=gemsMenuToggle('102',1) onmouseOut=gemsMenuToggle('102')";
	a3=" id=menuId103 onMouseOver=gemsMenuToggle('103',1) onmouseOut=gemsMenuToggle('103')";
	a4=" id=menuId104 onMouseOver=gemsMenuToggle('104',1) onmouseOut=gemsMenuToggle('104')";
	a5=" id=menuId105 onMouseOver=gemsMenuToggle('105',1) onmouseOut=gemsMenuToggle('105')";
	a6=" id=menuId106 onMouseOver=gemsMenuToggle('106',1) onmouseOut=gemsMenuToggle('106')";
}
// Write out actual table content
var a = "<a href=\""+gr+"/index.html\"><img src=\""+ir+"/images/nav/topnav_home.gif\" alt=\"Home\" width=118"+b;
a+= "<a href=\""+gr+"/company/index.html\""+a1+"><img src=\""+ir+"/images/nav/topnav_company.gif\" alt=\"Company News\" width=110"+b;
a+= "<a href=\""+"http://www.gemedicalsystems.com/splash.html?vXa_&\""+a2+"><img src=\""+ir+"/images/nav/topnav_worldwide.gif\" alt=\"WorldWide\" width=109"+b;
a+= "<a href=\""+gr+"/geCommunity/home/home.jsp\""+a3+"><img src=\""+ir+"/images/nav/topnav_community.gif\" alt=\"Community\" width=110"+b;
a+= "<a href=\""+gr+"/help/index.html\""+a4+"><img src=\""+ir+"/images/nav/topnav_help.gif\" alt=\"Help Center\" width=109"+b;
a+= "<a href=\""+gr+"/contact/index.html\""+a5+"><img src=\""+ir+"/images/nav/topnav_contact.gif\" alt=\"Contact Us\" width=109"+b;
a+= "<a href=\""+gr+"/company/nav_catalog.html\""+a6+"><img src=\""+ir+"/images/nav/topnav_catalog.gif\" alt=\"Catalog\" width=115"+b;
document.write(a);
if (gemsMenuDebug) gemsMDW.document.writeln("<html><head><title>Debug</title></head><body>\n"+a);
//Release Variables
a="";
b="";
a1="";
a2="";
a3="";
a4="";
a5="";
a6="";
