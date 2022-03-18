<!--
function validForm(theForm)
{
	var adresse = theForm.email.value;
	var place = adresse.indexOf("@",1);
	var point = adresse.indexOf(".",place+1);	

	if (!((place > -1)&&(adresse.length >2)&&(point > 1)))
	{
		alert("Please enter a valid email address.");
		theForm.email.focus();
		return (false);
	}
}

function Validform2(theForm)
{
	if (theForm.lastname.value == "")
	{
		alert("Please enter your lastname.");
		theForm.lastname.focus();
		return (false);
	}
	
	var adresse = theForm.email.value;

	var place = adresse.indexOf("@",1);
	var point = adresse.indexOf(".",place+1);	

	if (!((place > -1)&&(adresse.length >2)&&(point > 1)))
	{
		alert("Please enter a valid email address.");
		theForm.email.focus();
		return (false);
	}
		
	if (theForm.message.value == "")
	{
		alert("Please enter a message.");
		theForm.message.focus();
		return (false);
	}
	
	if (theForm.ptitcaptcha_entry.value == "")
	{
		alert("Please copy the security code.");
		theForm.ptitcaptcha_entry.focus();
		return (false);
	}
	
	theForm.submit();
}

//fonctions pour les sous-menu
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayersldl() { //v6.0
  var i,p,v,obj,args=MM_showHideLayersldl.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj("ssmenu-"+args[i]))!=null) { v=args[i+2];
	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	obj.visibility=v; 
	}
}

function selectAllCats(nb)
{
	if(document.forms["searchform"].elements["allcat"].checked == false)
	{
		for (i = 1; i <= nb; i++) 
		{
			document.forms["searchform"].elements["c"+i].checked = false;
		}
	}
	else
	{
		for (i = 1; i <= nb; i++) 
		{
			document.forms["searchform"].elements["c"+i].checked = true;
		}
	}
}

function selectAllRegs(nb)
{
	if(document.forms["searchform"].elements["allregion"].checked == false)
	{
		for (i = 1; i <= nb; i++) 
		{
			document.forms["searchform"].elements["r"+i].checked = false;
		}
	}
	else
	{
		for (i = 1; i <= nb; i++) 
		{
			document.forms["searchform"].elements["r"+i].checked = true;
		}
	}
}

//fonction pour déplacement bulle de la carte
var anim1 = false;
var anim2 = false;
var anim3 = false;
var anim4 = false;
var anim5 = false;
document.onmousemove = showRegion;
function showRegion(evenement)
{
		if(navigator.appName=="Microsoft Internet Explorer")
		{
				var x = event.x+document.body.scrollLeft;
				var y = event.y+document.body.scrollTop;
		}
		else
		{
				var x =  evenement.pageX;
				var y =  evenement.pageY;
		}
			
		if(anim1 == true)
		{
			document.getElementById("region1").style.visibility = "visible";
			document.getElementById("region1").style.display = "block";
			document.getElementById("region1").style.left = (x+20)+'px';
			document.getElementById("region1").style.top  = (y-110)+'px';
		}
		else
		{
			document.getElementById("region1").style.visibility = "hidden";
			document.getElementById("region1").style.display = "none";
		}
		
		if(anim2 == true)
		{
			document.getElementById("region2").style.visibility = "visible";
			document.getElementById("region2").style.display = "block";
			document.getElementById("region2").style.left = (x+15)+'px';
			document.getElementById("region2").style.top  = (y-130)+'px';
		}
		else
		{
			document.getElementById("region2").style.visibility = "hidden";
			document.getElementById("region2").style.display = "none";
		}
		
		if(anim3 == true)
		{
			document.getElementById("region3").style.visibility = "visible";
			document.getElementById("region3").style.display = "block";
			document.getElementById("region3").style.left = (x+15)+'px';
			document.getElementById("region3").style.top  = (y-100)+'px';
		}
		else
		{
			document.getElementById("region3").style.visibility = "hidden";
			document.getElementById("region3").style.display = "none";
		}
		
		if(anim4 == true)
		{
			document.getElementById("region4").style.visibility = "visible";
			document.getElementById("region4").style.display = "block";
			document.getElementById("region4").style.left = (x+15)+'px';
			document.getElementById("region4").style.top  = (y-90)+'px';
		}
		else
		{
			document.getElementById("region4").style.visibility = "hidden";
			document.getElementById("region4").style.display = "none";
		}
		
		if(anim5 == true)
		{
			document.getElementById("region5").style.visibility = "visible";
			document.getElementById("region5").style.display = "block";
			document.getElementById("region5").style.left = (x+15)+'px';
			document.getElementById("region5").style.top  = (y-65)+'px';
		}
		else
		{
			document.getElementById("region5").style.visibility = "hidden";
			document.getElementById("region5").style.display = "none";
		}
}

-->