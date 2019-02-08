// JavaScript Document
var attorneyProfiles = '';
//################## Site Initialization Scripts
(function(){
	console.log('invoking at start');
	
	})();
//Build the attorney's full name
function fullName(fName, lName, middleI){
	var fullName = fName + ' ' + meddleI + ' ' + lName;
	return fullName;
}

function emailLink(email){
	var mailLink = '<a href="mailto: ' + email + '">'+email+'</a>'
	return mailLink;
}

function buildHonors(honors){
	var honorsBlock = '';
	return honorsBlock;
}

function buildSubcatList(){
	var cat = '';
	var subCats = buildSubcatLinks(cat);
	console.log(subCats);
	}

//function buildSubCatLinks(subCat){
	//for(x in ){
		//var subCatLink = buildSubCatIcons(subCat);
	//}
	
	
	//return subCatLink;
	//}

//function buildSubCatIcons(iconNames){
	//var subCatIcons = '';
	//console.log(iconNames);
	//for(x in iconNames)
	
	//}

//################# Navigation Behavior Scripts

$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
		console.log($target.offset().top);
		$('html, body').stop().animate({
	    //$('body').stop().animate({
	        'scrollTop': $target.offset().top-66
			//'scrollTop': $target.offset().top
	    }, 1000, 'easeInOutCubic', function () {
	        //document.getElementById('cb-mobile-nav-btn').click();
			$('#cb-mobile-nav-btn').click();
			//window.location.hash = target-66;
	    });
	});

	
//################# Attorney Area Behavior Scripts

function buildAttyBrief(){};
function buildAttyProfile(){};

$(".attorney-icon").click(function(){
	console.log("I just clicked " + this.id);
	$(".profile-space").each(function(index, element) {
		console.log("ckecking " + element.id);
        if(element.style.display === "block"){
			console.log(element.id + " is visible and I am now hiding it.");
			$("#" + element.id).hide();
			return;
		}
    });
	var attIconId = this.id
	var attNameArray = attIconId.split("-");
	var attName = attNameArray[0];
	var attProfileId = "attorney-"+attName;
	console.log("Going to fade in " + attProfileId)
	$("#" + attProfileId).fadeIn(1000, "easeInOutCubic");
	});
	
	$('.att-pa-list-item').click(function(){
		var clickedId = this.id;
		
		clickedIdArray = clickedId.split("-");
		
		var paId = clickedIdArray[1];
		
		document.getElementById("practice-areas-link").click();
		document.getElementById("pa-li-"+paId).click();
		});

//################# Practice Area Behavior Scripts
var paAttorneys = {
	"bcr" : ["pa-kfeazell","pa-rhassman","pa-tkilcoyne"], 		//1
	"blt" : ["pa-jburns","pa-jcarroll","pa-kfeazell","pa-jharmon","pa-rhassman","pa-sholmes","pa-jhouston","pa-kinder","pa-ckuhnhein","pa-swolf","pa-bapplegarth","pa-narnett","pa-fdiedrichs","pa-redmiston","pa-tkilcoyne","pa-mmullee","pa-dtodd","pa-twade"], 		//2
	"cle" : ["pa-kfeazell","pa-swolf","pa-mmullee"],		//3
	"con" : ["pa-dbarth","pa-jburns","pa-jcarroll","pa-ccornett","pa-kfeazell","pa-jharmon","pa-rhassman","pa-dschmitt"],		//4
	"emb" : ["pa-kkinder","pa-rhassman","pa-hzimmer"],		//5
	"ent" : ["pa-swolf"],		//6
	"env" : ["pa-jburns","pa-jharmon","pa-jkezele","pa-dschmitt"],		//7
	"epp" : ["pa-lbcors","pa-jhouston","pa-kkinder","pa-hzimmer","pa-bapplegarth","pa-narnett","pa-fdiedrichs","pa-redmiston","pa-dtodd","pa-dzerbe"],		//8
	"fam" : ["pa-mgay","pa-dtodd","pa-dzerbe"],		//9
	"inp" : ["pa-dbarth","pa-ccornett","pa-kfeazel","pa-swolf","pa-mmullee"],		//10
	"int" : ["pa-kfeazell","pa-sholmes","pa-hzimmer","pa-mmullee"],		//11
	"lae" : ["pa-dbarth","pa-sbell","pa-jburns","pa-ccornett","pa-jharmon","pa-harrison","pa-rhollingsworth","pa-jkezele","pa-swolf","pa-dtodd"],		//12
	"lah" : ["pa-sholmes","pa-bapplegarth"],		//13
	"lit" : ["pa-dbarth","pa-sbell","pa-ccornett","pa-kfeazell","pa-mgay","pa-jharmon","pa-jharrison","pa-rhollingsworth","pa-jkezele","pa-dschmitt","pa-tkilcoyne","pa-dtodd","pa-dzerbe","pa-rhassman","pa-twade"],		//14
	"pin" : 	["pa-mgay","pa-jkezele","pa-dzerbe"],		//15
	"rez" : ["pa-jburns","pa-jcarroll","pa-kfeazell","pa-jharmon","pa-hassman","pa-sholmes","pa-fdiedrichs","pa-redmiston","pa-tkilcoyne","pa-dtodd"],		//16
	"sft" : ["pa-jburns","pa-ckuhnhein"],		//17
	"tax" : ["pa-lbcors","pa-jhouston","pa-kkinder","pa-hzimmer","pa-bapplegarth"],		//18
	"tra" : ["pa-dbarth","pa-sbell","pa-jburns","pa-jharrison","pa-rhollingsworth","pa-sholmes","pa-dtodd","pa-ccornett","pa-jharmon"],		//19
	"wco" : ["pa-sholmes	","pa-dschmitt"]
};

function hidePA(e){
	//console.log("executing function: hidePA");
	$('#' + e.id).hide();
    
}
function showPA(id){
	//console.log(id + ' should be getting turned on.');
	$("#" + id).fadeIn(1000, 'easeInOutCubic', function(){
					console.log("finished fading in");
				});
}

function showHideAtty(e){
	//console.log(e.id);
	var paId = e.id;
	var paIdArray = paId.split("-");
	var attyArray = paAttorneys[paIdArray[2]];
	//console.log(attyArray);
	$(".practice-attorney").each(function(index,element){
		for(i = 0; i < attyArray.length; i++){
		//console.log("checking the element with the id of " + element.id); 
		if(element.id === attyArray[i]){
			//console.log(element.id + " paractices this area - showing now");
			$("#" + element.id).fadeIn(500,'easeInOutCubic');
			delete attyArray[i];
			return
		}
		else{
			//console.log(element.id + " doesn't practice this area - hiding now");
			$("#" + element.id).hide(500);
		}
		}
		//console.log(attyArray);
	});
}

function getPa(clicked){
	var PAId = clicked.id;//var hidden = false;
		$(".practice-brief").each(function(index,element) {
			if($(this).css('display') === "block"){
				hidePA(element);
			}
		});
	switch (PAId){	
		case "pa-li-bcr" : 
			showPA("pa-bankCredRights");
			showHideAtty(clicked);
			break;
		case "pa-li-blt" :
			showPA("pa-busLawTrans");
			showHideAtty(clicked);
			break; 
		case "pa-li-cle" :
			showPA("pa-compLaw");
			showHideAtty(clicked);
			break; 
		case "pa-li-con" :
			showPA("pa-constr");
			showHideAtty(clicked);
			break;
		case "pa-li-emb" : 
			showPA("pa-empBen");
			showHideAtty(clicked);
			break;
		case "pa-li-ent" :
			showPA("pa-ent");
			showHideAtty(clicked);
			break;
		case "pa-li-env" :
			showPA("pa-env");
			showHideAtty(clicked);
			break;
		case "pa-li-epp" : 
			showPA("pa-estPlanProb");
			showHideAtty(clicked);
			break;
		case "pa-li-fam" :
			showPA("pa-fam");
			showHideAtty(clicked);
			break;
		case "pa-li-inp" :
			showPA("pa-intProp");
			showHideAtty(clicked);
			break;
		case "pa-li-int" :
			showPA("pa-intl");
			showHideAtty(clicked);
			break;
		case "pa-li-lae" :
			showPA("pa-labEmp");
			showHideAtty(clicked);
			break;
		case "pa-li-lah" :
			showPA("pa-liqHosp");
			showHideAtty(clicked);
			break;
		case "pa-li-lit" :
			showPA("pa-litig");
			showHideAtty(clicked);
			break;
		case "pa-li-pin" : 
			showPA("pa-persInj");
			showHideAtty(clicked);
			break;
		case "pa-li-rez" :
			showPA("pa-realEstZon");
			showHideAtty(clicked);
			break;
		case "pa-li-sft" : 
			showPA("pa-secFinTrans");
			showHideAtty(clicked);
			break;
		case "pa-li-tax" :
			showPA("pa-tax");
			showHideAtty(clicked);
			break;
		case "pa-li-tra" : 
			showPA("pa-trans");
			showHideAtty(clicked);
			break;
		case "pa-li-wco" :
			showPA("pa-workComp");
			showHideAtty(clicked);
			break;	
		}
}

$(".pa-list-item").on('click',function(){
		getPa(this);
		document.getElementById("practice-areas-link").click();
});

$(".practice-attorney").click(function(){
	var clickedAttId = this.id;
	var clickedAttIdArray = clickedAttId.split("-");
	var clickedAtt = clickedAttIdArray[1];
	document.getElementById("attorneys-link").click();
	document.getElementById(clickedAtt + "-icon").click();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/**********************************************************
***********Goggle Maps API Stuff***************************
**********************************************************/
$(window).load(function(){
	console.log('Loading Maps!');
	function initialize() {
		var nkyInfo = '<h4>Cors &amp; Bassett | Northern Kentucky</h4><p>Fort Mitchell, KY<br>300 Buttermilk Pike<br>Suite 100<br>Fort Mitchell, KY 41017</p><hr><p>Phone: 859.331.6440</p>';
		var cincyInfo = '<h4>Cors &amp; Bassett | Cincinnati</h4><p>Cincinnati, Ohio<br>537 East Pete Rose Way<br>Suite 400<br>Cincinnati, OH 45202-3502</p><hr><p>Phone: 513.852.8200<br>Fax: 513.852.8222</p>';
		
		var cbPin = 'images/MapsPin.png';
		
        var cincyMapOptions = {
          	center: { lat: 39.10022, lng: -84.50183},
          	zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
        };
		var nkyMapOptions = {
			center: { lat: 39.043539, lng: -84.570014},
          	zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
		}
        var cincyMap = new google.maps.Map(document.getElementById('cincy-map'),
            cincyMapOptions);
		var nkyMap = new google.maps.Map(document.getElementById('nky-map'),
            nkyMapOptions);
			
		var cincyMarker = new google.maps.Marker({
				position: cincyMapOptions.center,
				map: cincyMap,
				title: 'Cincinnati Offices',
				icon: cbPin
			});
		var nkyMarker = new google.maps.Marker({
				position: nkyMapOptions.center,
				map: nkyMap,
				title: 'Buttermilk Office',
				icon: cbPin
			});
		var cincyInfoWindow = new google.maps.InfoWindow({
			content : cincyInfo
		});
		var nkyInfoWindow = new google.maps.InfoWindow({
			content: nkyInfo
			});
		cincyInfoWindow.open(cincyMap, cincyMarker);
		nkyInfoWindow.open(nkyMap, nkyMarker);
	
      }
	  initialize();
      //google.maps.event.addDomListener(window, 'load', initialize);
});
