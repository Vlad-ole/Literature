// Begin Display Left Side Navigation Images
a="";
as="<tr><td width=110 align=left valign=top><img src=\"";
ae=" width=110 border=0></td></tr>";
a+="<table width=110 border=0 cellspacing=0 cellpadding=0>";
a+=as+ir+"/images/nav/leftnav_top.gif\" height=14 alt=\"Top Left Side Navigation\""+ae;
a+=as+ir+"/images/nav/leftnav_diagnostic.gif\" usemap=\"#radimgmap\" height=56 alt=\"Diagnostic Imaging\""+ae;
a+=as+ir+"/images/nav/leftnav_cardiology.gif\" usemap=\"#cardimgmap\" height=58 alt=\"cardiology\""+ae;
a+=as+ir+"/images/nav/leftnav_interventional.gif\" usemap=\"#interimgmap\" height=62 alt=\"Interventional Solutions\""+ae;
a+=as+ir+"/images/nav/leftnav_monitoring.gif\" usemap=\"#monimgmap\" height=62 alt=\"Monitoring Solutions\""+ae;
a+=as+ir+"/images/nav/leftnav_it.gif\" usemap=\"#itimgmap\" height=61 alt=\"IT Solutions\""+ae;
a+=as+ir+"/images/nav/leftnav_education.gif\" usemap=\"#eduimgmap\" height=63 alt=\"education\""+ae;
a+=as+ir+"/images/nav/leftnav_healthcare.gif\" usemap=\"#hcareimgmap\" height=63 alt=\"Healthcare Financing\""+ae;
a+=as+ir+"/images/nav/leftnav_accessories.gif\" usemap=\"#accimgmap\" height=63 alt=\"accessories\""+ae;
a+=as+ir+"/images/nav/leftnav_bottom.gif\" height=50 alt=\"End of Arch\""+ae;
a+="</table>";
document.writeln(a);
if (gemsMenuDebug) gemsMDW.document.writeln(a);
a="";
as="";
ae="";
// End Display Left Side Navigation Images
		
//Define variables for Image Maps		
addie=(is_ie)?" onFocus=\"if(this.blur)this.blur()\" ":"";
i="<area shape=rect coords=\"";
ip="<area shape=poly coords=\"";	
ipm="href=\"javascript:void(0);\" alt=\"Click To Close\" title=\"Click To Close\" ";
ipm2="href=\"javascript:void(0);\" alt=\"Click To Expand\" title=\"Click To Expand\" onClick=\"gems_ln_menu_init(";
ipm3="href=\"javascript:void(0);\" alt=\"Click To Toggle\" title=\"Click To Toggle\" onClick=\"gems_ln_menu_flip(";
// Begin Image Map Definitions for GEMS Left Navigation Popout Items
if (gemsmenuon) {
	var a="<map name=\"lnradmap\">";
	a+=i+"46,0,126,28\" href=\""+gr+"/it_solutions/rad_pacs/products/aw/index.html\" alt=\"Advantage Workstation\" title=\"Advantage Workstation\" id=menuId01 onMouseOver=gemsMenuToggle('01',1) onmouseOut=gemsMenuToggle('01')"+addie+">";
	a+=i+"132,0,156,28\" href=\""+gr+"/rad/ct/index.html\" alt=\"CT\" title=\"CT\" id=menuId02 onMouseOver=gemsMenuToggle('02',1) onmouseOut=gemsMenuToggle('02')"+addie+">";
	a+=i+"162,0,190,28\" href=\""+gr+"/rad/mri/index.html\" alt=\"MRI\" title=\"MRI\" id=menuId03 onMouseOver=gemsMenuToggle('03',1) onmouseOut=gemsMenuToggle('03')"+addie+">";
	a+=i+"197,0,259,28\" href=\""+gr+"/rad/nm_pet/index.html\" alt=\"Functional Imaging\" title=\"Functional Imaging\" id=menuId04 onMouseOver=gemsMenuToggle('04',1) onmouseOut=gemsMenuToggle('04')"+addie+">";
	a+=i+"267,0,334,28\" href=\""+gr+"/rad/us/index.html\" alt=\"Ultrasound\" title=\"Ultrasound\" id=menuId05 onMouseOver=gemsMenuToggle('05',1) onmouseOut=gemsMenuToggle('05')"+addie+">";
	a+=i+"339,0,374,28\" href=\""+gr+"/rad/xr/index.html\" alt=\"X-ray\" title=\"X-ray\" id=menuId06 onMouseOver=gemsMenuToggle('06',1) onmouseOut=gemsMenuToggle('06')"+addie+">";
	a+=i+"377,0,407,28\" href=\""+gr+"/it_solutions/rad_pacs/index.html\" alt=\"PACS/RIS\" title=\"PACS/RIS\" id=menuId07 onMouseOver=gemsMenuToggle('07',1) onmouseOut=gemsMenuToggle('07')"+addie+">";
	a+=i+"422,0,481,28\" href=\""+gr+"http://www.gemedicalsystems.com/goldseal/\" alt=\"GoldSeal\" title=\"GoldSeal\" id=menuId08 onMouseOver=gemsMenuToggle('08',1) onmouseOut=gemsMenuToggle('08')"+addie+">";
	a+=i+"496,0,570,28\" href=\""+gr+"/rad/bonedens/index.html\" alt=\"Bone Densitometry\" title=\"Bone Densitometry\" id=menuId09 onMouseOver=gemsMenuToggle('09',1) onmouseOut=gemsMenuToggle('09')"+addie+">";
	a+=i+"584,0,633,28\" href=\""+gr+"/rad/whc/index.html\" alt=\"Women's Health\" title=\"Women's Health\" id=menuId10 onMouseOver=gemsMenuToggle('10',1) onmouseOut=gemsMenuToggle('10')"+addie+">";
	a+=ip+"43,5,43,19,17,22,4,15,8,7,18,4\" "+ipm+"onClick=gems_ln_menu_close(0)"+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);
	a="";
	a+="<map name=\"lncardmap\">";
	a+=i+"56,0,156,28\" href=\""+gr+"/cardiology/index.html\" alt=\"Cardiology Center\" title=\"Cardiology Center\" id=menuId21 onMouseOver=gemsMenuToggle('21',1) onmouseOut=gemsMenuToggle('21')"+addie+">";
	a+=i+"171,0,195,28\" href=\""+gr+"/cardiology/products/cath_centerpg.html\" alt=\"Cathlab\" title=\"Cathlab\" id=menuId22 onMouseOver=gemsMenuToggle('22',1) onmouseOut=gemsMenuToggle('22')"+addie+">";
	a+=i+"211,0,195,28\" href=\""+gr+"/cardiology/products/eplab_centerpg.html\" alt=\"EP Lab\" title=\"EP Lab\" id=menuId23 onMouseOver=gemsMenuToggle('23',1) onmouseOut=gemsMenuToggle('23')"+addie+">";
	a+=i+"246,0,302,28\" href=\""+gr+"/cardiology/products/ecg_centerpg.html\" alt=\"Diagnostic ECG\" title=\"Diagnostic ECG\" id=menuId24 onMouseOver=gemsMenuToggle('24',1) onmouseOut=gemsMenuToggle('24')"+addie+">";
	a+=i+"319,0,420,28\" href=\""+gr+"/cardiology/products/echo_centerpg.html\" alt=\"Echocardiography\" title=\"Echocardiography\" id=menuId25 onMouseOver=gemsMenuToggle('25',1) onmouseOut=gemsMenuToggle('25')"+addie+">";
	a+=i+"435,0,518,28\" href=\""+gr+"/cardiology/products/cvimage_centerpg.html\" alt=\"Cardiovascular Imaging\" title=\"Cardiovascular Imaging\" id=menuId26 onMouseOver=gemsMenuToggle('26',1) onmouseOut=gemsMenuToggle('26')"+addie+">";
	a+=i+"535,0,650,28\" href=\""+gr+"/it_solutions/cvascular/centricity_cockpit.html\" alt=\"Cardiovascular Information Systems\" title=\"Cardiovascular Information Systems\" id=menuId27 onMouseOver=gemsMenuToggle('27',1) onmouseOut=gemsMenuToggle('27')"+addie+">";
	a+=i+"667,0,714,28\" href=\""+gr+"/cardiology/services/index.html\" alt=\"Services\" title=\"Services\" id=menuId28 onMouseOver=gemsMenuToggle('28',1) onmouseOut=gemsMenuToggle('28')"+addie+">";
	a+=ip+"43,4,43,23,13,23,4,17,4,9,15,5\" "+ipm+"onClick=gems_ln_menu_close(1)"+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);
	a="";
	a+="<map name=\"lnintermap\">";
	a+=i+"142,0,194,28\" href=\""+gr+"/rad/xr/vascular/index.html\" alt=\"Vascular\" title=\"Vascular\" id=menuId31 onMouseOver=gemsMenuToggle('31',1) onmouseOut=gemsMenuToggle('31')"+addie+">";
	a+=i+"199,0,262,28\" href=\""+gr+"\" alt=\"Neurology\" title=\"Neurology\" id=menuId32 onMouseOver=gemsMenuToggle('32',1) onmouseOut=gemsMenuToggle('32')"+addie+">";
	a+=i+"258,0,332,28\" href=\""+gr+"/rad/xr/cardiology/index.html\" alt=\"Cardiology\" title=\"Cardiology\" id=menuId33 onMouseOver=gemsMenuToggle('33',1) onmouseOut=gemsMenuToggle('33')"+addie+">";
	a+=i+"340,0,388,28\" href=\""+gr+"/rad/xr/surgery/index.html\" alt=\"Surgery\" title=\"Surgery\" id=menuId34 onMouseOver=gemsMenuToggle('34',1) onmouseOut=gemsMenuToggle('34')"+addie+">";
	a+=i+"394,0,469,28\" href=\""+gr+"\" alt=\"Navigation and Visualisation\" title=\"Navigation and Visualisation\" id=menuId35 onMouseOver=gemsMenuToggle('35',1) onmouseOut=gemsMenuToggle('35')"+addie+">";
	a+=i+"479,0,534,28\" href=\""+gr+"/rad/xr/urology/index.html\" alt=\"Urology\" title=\"Urology\" id=menuId36 onMouseOver=gemsMenuToggle('36',1) onmouseOut=gemsMenuToggle('36')"+addie+">";
	a+=i+"544,0,634,28\" href=\""+gr+"\" alt=\"Musculoskeletal\" title=\"Musculoskeletal\" id=menuId37 onMouseOver=gemsMenuToggle('37',1) onmouseOut=gemsMenuToggle('37')"+addie+">";
	a+=ip+"43,4,43,23,15,23,6,17,6,7,21,4\" "+ipm+"onClick=gems_ln_menu_close(2)"+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);
	a="";
	a+="<map name=\"lnmonmap\">";
	a+=i+"48,0,201,28\" href=\""+gr+"/monitor/index.html\" alt=\"Monitoring Systems Center\" title=\"Monitoring Systems Center\" id=menuId41 onMouseOver=gemsMenuToggle('41',1) onmouseOut=gemsMenuToggle('41')"+addie+">";
	a+=i+"212,0,319,28\" href=\""+gr+"/monitor/emer_dept/emer_dept_index.html\" alt=\"Emergency Dept.\" title=\"Emergency Dept.\" id=menuId42 onMouseOver=gemsMenuToggle('42',1) onmouseOut=gemsMenuToggle('42')"+addie+">";
	a+=i+"331,0,404,28\" href=\""+gr+"/monitor/periop/periop_index.html\" alt=\"Perioperative\" title=\"Perioperative\" id=menuId43 onMouseOver=gemsMenuToggle('43',1) onmouseOut=gemsMenuToggle('43')"+addie+">";
	a+=i+"420,0,489,28\" href=\""+gr+"/monitor/critical/criticalcare_index.html\" alt=\"Critical Care\" title=\"Critical Care\" id=menuId44 onMouseOver=gemsMenuToggle('44',1) onmouseOut=gemsMenuToggle('44')"+addie+">";
	a+=i+"504,0,569,28\" href=\""+gr+"/monitor/subacute/subacute_index.html\" alt=\"Progressive Care\" title=\"Progressive Care\" id=menuId45 onMouseOver=gemsMenuToggle('45',1) onmouseOut=gemsMenuToggle('45')"+addie+">";
	a+=i+"587,0,645,28\" href=\""+gr+"/monitor/outpatient/outpatient_index.html\" alt=\"Outpatient\" title=\"Outpatient\" id=menuId46 onMouseOver=gemsMenuToggle('46',1) onmouseOut=gemsMenuToggle('46')"+addie+">";
	a+=i+"661,0,709,28\" href=\""+gr+"/monitor/perinatal/perinatal_index.html\" alt=\"Perinatal\" title=\"Perinatal\" id=menuId47 onMouseOver=gemsMenuToggle('47',1) onmouseOut=gemsMenuToggle('47')"+addie+">";
	a+=ip+"43,4,43,21,12,23,6,17,6,8,17,4\" "+ipm+"onClick=gems_ln_menu_close(3)"+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);
	a="";
	a+="<map name=\"lnitmap\">";
	a+=i+"54,0,105,28\" href=\""+gr+"/it_solutions/index.html\" alt=\"IT Center\" title=\"IT Center\" id=menuId51 onMouseOver=gemsMenuToggle('51',1) onmouseOut=gemsMenuToggle('51')"+addie+">";
	a+=i+"122,0,230,28\" href=\""+gr+"/it_solutions/acqdevice_center.html\" alt=\"Data Acquisition & Analysis Systems\" title=\"Data Acquisition & Analysis Systems\" id=menuId52 onMouseOver=gemsMenuToggle('52',1) onmouseOut=gemsMenuToggle('52')"+addie+">";
	a+=i+"249,0,365,28\" href=\""+gr+"/it_solutions/infosys_center.html\" alt=\"Centricity Information Systems\" title=\"Centricity Information Systems\" id=menuId53 onMouseOver=gemsMenuToggle('53',1) onmouseOut=gemsMenuToggle('53')"+addie+">";
	a+=i+"382,0,534,28\" href=\""+gr+"/it_solutions/commnetworks_center.html\" alt=\"Communication Networks\" title=\"Communication Networks\" id=menuId54 onMouseOver=gemsMenuToggle('54',1) onmouseOut=gemsMenuToggle('54')"+addie+">";
	a+=i+"400,0,601,28\" href=\""+gr+"/it_solutions/services/services_index.html\" alt=\"Services\" title=\"Services\" id=menuId55 onMouseOver=gemsMenuToggle('55',1) onmouseOut=gemsMenuToggle('55')"+addie+">";
	a+=ip+"42,5,42,23,15,23,5,17,5,10,14,4\" "+ipm+"onClick=gems_ln_menu_close(4)"+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);
	a="";
	a+="<map name=\"lnedumap\">";
	a+=i+"54,0,195,28\" href=\""+gr+"/education/index.html\" alt=\"All Educational Offerings\" title=\"All Educational Offerings\" id=menuId61 onMouseOver=gemsMenuToggle('61',1) onmouseOut=gemsMenuToggle('61')"+addie+">";
	a+=i+"214,0,317,28\" href=\""+gr+"/education/index.html\" alt=\"Offerings by Topic\" title=\"Offerings by Topic\" id=menuId62 onMouseOver=gemsMenuToggle('62',1) onmouseOut=gemsMenuToggle('62')"+addie+">";
	a+=i+"339,0,449,28\" href=\""+gr+"/rad/research/gerraf.html\" alt=\"Academic Research\" title=\"Academic Research\" id=menuId63 onMouseOver=gemsMenuToggle('63',1) onmouseOut=gemsMenuToggle('63')"+addie+">";
	a+=i+"468,0,601,28\" href=\""+gr+"/education/tip/index.html\" alt=\"TIPs Application Center\" title=\"TIPs Application Center\" id=menuId64 onMouseOver=gemsMenuToggle('64',1) onmouseOut=gemsMenuToggle('64')"+addie+">";
	a+=ip+"43,4,43,20,19,23,7,17,7,9,16,4\" "+ipm+"onClick=gems_ln_menu_close(5)"+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);
	a="";
	a+="<map name=\"lnhcaremap\">";
	a+=i+"60,0,143,28\" href=\""+gr+"/services/index.html\" alt=\"Asset Services\" title=\"Asset Services\" id=menuId71 onMouseOver=gemsMenuToggle('71',1) onmouseOut=gemsMenuToggle('71')"+addie+">";
	a+=i+"164,0,352,28\" href=\""+gr+"/services/index.html\" alt=\"Performance Improvement\" title=\"Performance Improvement\" id=menuId72 onMouseOver=gemsMenuToggle('72',1) onmouseOut=gemsMenuToggle('72')"+addie+">";
	a+=i+"350,0,479,28\" href=\""+gr+"/services/index.html\" alt=\"Education Services\" title=\"Education Services\" id=menuId73 onMouseOver=gemsMenuToggle('73',1) onmouseOut=gemsMenuToggle('73')"+addie+">";
	a+=i+"490,0,525,28\" href=\""+gr+"/services/index.html\" alt=\"Financial Services\" title=\"Financial Services\" id=menuId74 onMouseOver=gemsMenuToggle('74',1) onmouseOut=gemsMenuToggle('74')"+addie+">";
	a+=i+"560,0,670,28\" href=\""+gr+"http://apps.gemedicalsystems.com/geCommunity/home/home.jsp?gecomm_ssolog=true\" alt=\"Online Community\" title=\"Online Community\" id=menuId75 onMouseOver=gemsMenuToggle('75',1) onmouseOut=gemsMenuToggle('75')"+addie+">";
	a+=ip+"43,4,40,23,12,23,4,16,6,7,19,4\" "+ipm+"onClick=gems_ln_menu_close(6)"+addie+">";
	a+="</map>";
	a+="<map name=\"lnaccmap\">";
	a+=i+"57,0,87,28\" href=\""+gr+"/services/repl_parts/parts.html\" alt=\"Parts\" title=\"Parts\" id=menuId81 onMouseOver=gemsMenuToggle('81',1) onmouseOut=gemsMenuToggle('81')"+addie+">";
	a+=ip+"43,4,43,23,14,23,4,18,7,6,17,5\" "+ipm+"onClick=gems_ln_menu_close(7)"+addie+">";
	a+="</map>";
	document.writeln(a);
if (gemsMenuDebug) gemsMDW.document.writeln(a);
	a="";
}
// End Image Map Definitions for GEMS Left Navigation Popout Items	

// Begin Image maps for Left Nav Items
if (gemsmenuon) {
	a="";
	a+="<map name=\"radimgmap\">";
	a+=i+"27,11,83,23\" "+ipm3+"0)\""+addie+">";
	a+=ip+"90,25,83,52,47,51,34,43,34,36,41,27,47,25\" "+ipm2+"0)\""+addie+">";
	a+="</map>";
	a+="<map name=\"cardimgmap\">";
	a+=i+"9,12,72,26\" "+ipm3+"1)\""+addie+">";
	a+=ip+"77,28,72,54,47,54,29,45,29,35,40,27\" "+ipm2+"1)\""+addie+">";
	a+="</map>";
	a+="<map name=\"interimgmap\">";
	a+=i+"4,8,64,28\" "+ipm3+"2)\""+addie+">";
	a+=ip+"70,33,67,58,33,58,20,50,20,38,31,30\" "+ipm2+"2)\""+addie+">";
	a+="</map>";
	a+="<map name=\"monimgmap\">";
	a+=i+"3,6,60,27\" "+ipm3+"3)\""+addie+">";
	a+=ip+"66,30,63,57,26,56,17,51,14,38,26,30\" "+ipm2+"3)\""+addie+">";
	a+="</map>";
	a+="<map name=\"itimgmap\">";
	a+=i+"5,14,61,26\" "+ipm3+"4)\""+addie+">";
	a+=ip+"65,29,65,56,24,56,17,47,16,37,27,30\" "+ipm2+"4)\""+addie+">";
	a+="</map>";
	a+="<map name=\"eduimgmap\">";
	a+=i+"2,9,64,30\" "+ipm3+"5)\""+addie+">";
	a+=ip+"73,58,69,33,32,32,22,39,19,50,30,59\" "+ipm2+"5)\""+addie+">";
	a+="</map>";
	a+="<map name=\"hcareimgmap\">";
	a+=i+"5,18,73,30\" "+ipm3+"6)\""+addie+">";
	a+=ip+"79,33,85,60,40,58,29,51,27,40,40,31\" "+ipm2+"6)\""+addie+">";
	a+="</map>";
	a+="<map name=\"accimgmap\">";
	a+=i+"13,10,82,29\" "+ipm3+"7)\""+addie+">";
	a+=ip+"94,33,100,59,48,58,37,50,37,39,52,31\" "+ipm2+"7)\""+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);	
} else {
	//Begin Standard Left Nav button links for Menus Not Supported Clients
	a="";
	a+="<map name=\"radimgmap\">";
	a+=i+"27,11,83,23\" href=\""+gr+"/company/nav_radiology.html\" alt=\"\" "+addie+">";
	a+=ip+"90,25,83,52,47,51,34,43,34,36,41,27,47,25\" href=\""+gr+"/company/nav_radiology.html\" alt=\"\" "+addie+">";
	a+="</map>";
	a+="<map name=\"cardimgmap\">";
	a+=i+"9,12,72,26\" href=\""+gr+"/cardiology/index.html\" alt=\"\" "+addie+">";
	a+=ip+"77,28,72,54,47,54,29,45,29,35,40,27\" href=\""+gr+"/cardiology/index.html\" alt=\"\" "+addie+">";
	a+="</map>";
	a+="<map name=\"interimgmap\">";
	a+=i+"4,8,64,28\" href=\""+gr+"/index.html\" alt=\"\" "+addie+">";
	a+=ip+"70,33,67,58,33,58,20,50,20,38,31,30\" href=\""+gr+"/index.html\" alt=\"\" "+addie+">";
	a+="</map>";
	a+="<map name=\"monimgmap\">";
	a+=i+"3,6,60,27\" href=\""+gr+"/monitor/index.html\" alt=\"\" "+addie+">";
	a+=ip+"66,30,63,57,26,56,17,51,14,38,26,30\" href=\""+gr+"/monitor/index.html\" alt=\"\" "+addie+">";
	a+="</map>";
	a+="<map name=\"itimgmap\">";
	a+=i+"5,14,61,26\" href=\""+gr+"/it_solutions/index.html\" alt=\"\" "+addie+">";
	a+=ip+"65,29,65,56,24,56,17,47,16,37,27,30\" href=\""+gr+"/it_solutions/index.html\" alt=\"\" "+addie+">";
	a+="</map>";
	a+="<map name=\"eduimgmap\">";
	a+=i+"2,9,64,30\" href=\""+gr+"/education/index.html\" alt=\"\" "+addie+">";
	a+=ip+"73,58,69,33,32,32,22,39,19,50,30,59\" href=\""+gr+"/education/index.html\" alt=\"\" "+addie+">";
	a+="</map>";
	a+="<map name=\"hcareimgmap\">";
	a+=i+"5,18,73,30\" href=\""+gr+"/services/index.html\" alt=\"\" "+addie+">";
	a+=ip+"79,33,85,60,40,58,29,51,27,40,40,31\" href=\""+gr+"/services/index.html\" alt=\"\" "+addie+">";
	a+="</map>";
	a+="<map name=\"accimgmap\">";
	a+=i+"13,10,82,29\" href=\""+cr+"/apps2/accessories\" alt=\"\" "+addie+">";
	a+=ip+"94,33,100,59,48,58,37,50,37,39,52,31\" href=\""+cr+"/apps2/accessories/\" alt=\"\" "+addie+">";
	a+="</map>";
	document.writeln(a);
	if (gemsMenuDebug) gemsMDW.document.writeln(a);	
	//End Standard Left Nav button links for Menus Not Supported Clients	
}
// End Image Map Definitions for GEMS Left Navigation Items

//Release variables for Image Maps
a="";
addie="";
i="";
ip="";
ipm="";
ipm2="";
ipm3="";
