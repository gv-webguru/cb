// JavaScript Document
var attorneyProfiles = '';
//################## Site Initialization Scripts
(function(){
	buildAttySubcat();
	responsiveBanner();
	buildPAsubcats();
	copyright();
	tooltipInit();
	x();
	})();
	
function tooltipInit(){
	$('[data-toggle="tooltip"]').tooltip();
}
//################# Navigation Behavior Scripts

$('a[href^="#"]').on('click',function(e){
	var target = this.hash;
	var role = this.getAttribute('role');
	smoothScroll(e,target,role);});
	
	
$('.nav-bm').mouseup(function(){
	//console.log('the mouse is up. What now?');
	$('#cb-mobile-nav-btn').click();
	});

function smoothScroll(e,t,r){
	e.preventDefault();
	    var $target = $(t);
		//console.log(r);
		if(r !== 'tab'){
			//console.log('r is not tab or full-prof');
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top-66
			}, 1000, 'easeInOutCubic');
		}
		else{
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 1000, 'easeInOutCubic');
			}
}
	
//################# Attorney Area Behavior Scripts
//This function searches the particulare attorney's badges and builds the row of code necessary for the brief profile.
//function buildBadges(atty){
	//var badgeRow = '';
	//var attybadges = badges[atty];
	//console.log(attybadges.length);
	//var badgeCode = '';
	//$(attybadges).each(function(){
	//	console.log(this);
		//});
	//{//now traversing the object
		//console.log(bdg);
		//var codeString = attybadges.sm;
		//console.log(codeString);
		//badgeCode += '<div class="badge">'+codeString+'</div>';
	//};
	//return badgeCode;
//}


function buildAttySubcat(){
		$('.profile-space').each(function(index, element) {
            var attyName = element.id.split('-');
			var attyProfId = attyName[1];
        });
	}

//Establishes the set of actions to take when an attorney's icon is clicked.
$(".attorney-icon").click(function(){
	$('#full-prof-container').fadeOut(500,'easeInOutCubic');//fades out a full profile container just in case it is open - perhapes I shuld include a condtional statement.
	$(".profile-space").each(function(index, element) { //This loop checks to see if any of the divs with a class profile-space is displayed and hides any that are displayed
		if(element.style.display === "block"){
			$("#" + element.id).hide();
			return; //end of the function once the element is hidden
		}
    });
	
	//now... on to building a new brief profile.
	var practiceAreaIconRow = [''];
	var attIconId = this.id;
	var attNameArray = attIconId.split("-");
	var attyName = attNameArray[0];
	var att = '';
	//var badgeRow;
	for(var b in attorney){	
		//console.log('1d Loop iteration: ' + b);
		if(attorney[b].name === attyName){//Get the attoney's practice areas	
			//first, let's build the badges
			//badgeRow = buildBadges(attyName);//we are passing the argument of atty into the function.
			
			var attPa = attorney[b].practice_areas;
			//console.log(attorney[b].name +'\'s practice areas are: ');
			//console.log(attorney[b].practice_areas);
			for(var c in attPa){
				//console.log('2d Loop iteration: ' + c);
				var subCatIconName = attPa[c];
				//console.log(subCatIconName);
				practiceAreaIconRow.push(buildSubCatIcon(subCatIconName, attyName));
			}
		}
	}
	practiceAreaIconRow.sort();//sort the array of practice areas	
	//console.log(practiceAreaIconRow);
	//$('#attorney-' + attyName + ' .row .desc-exc .badges').html(badgeRow);//insert the practice area icons.
	$('#attorney-' + attyName + ' .row .desc-exc .atty-practices').html(practiceAreaIconRow);//insert the practice area icons.
	
	//The following fades the quick profile into the page.
	var attProfileId = "attorney-"+attyName;
	$("#" + attProfileId).fadeIn(1000, "easeInOutCubic");
	
	//This block of code establishes the event listener and the action to take when a PA icon is clicked.
	$('.att-pa-list-item').click(function(){
			var mainCat = '';
			var clickedId = this.id;
			var clickedIdArray = clickedId.split("-");
			var paId = clickedIdArray[1];
			var x;
			for(x in practiceArea){
				if(practiceArea[x].id === paId){
					mainCat = practiceArea[x].mainCatId;
				}
			}
			$('#' + mainCat).click();
			$('#' + paId + '-box').click();
		});	
	tooltipInit();
	});

//################# Practice Area Behavior Scripts

function hidePA(e){
	$('#' + e.id).hide();
    
}
function showPA(id){
	$("#" + id).fadeIn(1000, 'easeInOutCubic', function(){});
}

function showHideAtty(attName){
	$('#pa-'+attName).fadeIn(500,'easeInOutCubic');	
}

function showHideDescription(subcatRoot){
	var subcatDescId = subcatRoot + '-subcat-desc';
	$('.subcat-desc').hide();
	$('#'+subcatDescId).fadeIn(500,'easeInOutCubic');
}

function getPa(clicked){
	$(".practice-attorney").hide();
	var x;
	for(x in attorney){
		var y;
		for(y in attorney[x].practice_areas){
			if(attorney[x].practice_areas[y] === clicked){
				showHideAtty(attorney[x].name);
			}
		}
	}
}

function fadeOut(){
		$('.subcat').each(function(i){
			//$(this).fadeOut(250,'easeInOutCubic');	
			$(this).hide();
		});
		return true;
	}

function fadeIn(fadedOut, subCatGroup){
		if(fadedOut === true){
			$('#'+subCatGroup).fadeIn(500,'easeInOutCubic');
		}
	}
	

function buildSubCatIcon(iconName, attyName){
	 var openString ='';
	 var iconString = '';
	 var closeString = '</div></div>';
	 
	 for(var x in practiceArea){
		if(practiceArea[x].id === iconName){
			
			openString = '<div data-toggle="tooltip" data-placement="bottom" title="' + practiceArea[x].name + '" class="pa-icon fa-stack fa-lg att-pa-list-item" id="' + attyName + '-' + practiceArea[x].id +'"><i class="fa fa-circle fa-stack-2x"></i>';
			var y;
			for(y in practiceArea[x].icon){
				iconString += '<i class="fa ' + practiceArea[x].icon[y] + ' fa-stack-1x"></i>';
			}
		}
	}
	
	var practiceIcon = openString + iconString + closeString;
	
	return practiceIcon;
}
//This function shows and hides sub-categories once a main category is engaged.
$(".main-practiceArea").on('click',function(){
		
		var clickedId = this.id;
		var targetRoot = clickedId.split('-');
		var subCatGroup = targetRoot[1] + "-subcat";
		var fadedOut = fadeOut();
		$(".practice-attorney").hide();
		$('.subcat-desc').hide();
		fadeIn(fadedOut, subCatGroup);
		if($('#desc-subcat').css('display') === 'none' && $('#atty-subcat').css('display') === 'none'){
			//console.log('We gotta show these beasts.');
			$('#desc-subcat').css('display','block');
			$('#atty-subcat').css('display','block');
		}
		$('#bm-'+targetRoot[1]+'-subcat').click();
		
});

$(".practice-attorney").click(function(){
	var clickedAttId = this.id;
	var clickedAttIdArray = clickedAttId.split("-");
	var clickedAtt = clickedAttIdArray[1];
	document.getElementById("bm-atty-brief").click();//this function sends the page to the attorneys section
	document.getElementById(clickedAtt + "-icon").click();
	
	
});

$(".attorney-icon").click(function(){
	$('#bm-atty-icon').click();
	});

$('.subcat-icon-box').click(function(e){
	var subCatIconId = this.id;
	var subCatRoot = subCatIconId.split('-');
	showHideDescription(subCatRoot[0]);
		getPa(subCatRoot[0]);
	});

function buildPAsubcats(){
	$('#busProd-subcat-desc').append(practiceArea[32].desc);
	$('#busProd-subcat-desc h4').html(practiceArea[32].name);
	$('#dispProd-subcat-desc').append(practiceArea[33].desc);
	$('#dispProd-subcat-desc h4').append(practiceArea[33].name);
	$('#persProd-subcat-desc').append(practiceArea[34].desc);
	$('#persProd-subcat-desc h4').append(practiceArea[34].name);
}

/**********************************************************
*************Attorney Profile Builder**********************
***********************************************************/
$('#back-to-att').click(function(){
		$('#full-prof-container').fadeOut(500,'easeInOutCubic');
	});

function buildFullProfile(element){
	var target = '#full-prof-container';
	var role = 'full-prof';
	var clickedId = element.id;
	var reqAtt = clickedId.split('-');
	reqAtt = reqAtt[0];
	//console.log('I am requesting the full profile of the following attorney: ' +reqAtt);
	var profile = profileBuild(reqAtt);
	//console.log(profile);
	$('#prof-pa-list').html(profile.paList);
	$('#prof-ed-list').html(profile.edList);
	$('#prof-adm-list').html(profile.admitList);
	$('#prof-honors-list').html(profile.honors);
	$('#prof-affilRec-list').html(profile.memberships);
	$('#prof-fullName').html(profile.fullName);
	$('#prof-role').html(profile.role);
	$('#prof-atty-port img').attr('src',profile.imageName);
	$('#prof-atty-port img').attr('alt',profile.fullName);
	$('#prof-officeAddy-phone').html(profile.contact.phone + " <em>direct</em>");
	$('#prof-officeAddy-cell').html(profile.contact.cell);
	$('#prof-officeAddy-email a').attr('href','mailto:' + profile.contact.email);
	$('#prof-officeAddy-email a').html(profile.contact.email);
	$('#prof-linkedin').attr('href',profile.contact.linkedin);
	$('#prof-desc').html(profile.description);
	$('#prof-repMatters').html(profile.repmatters);
	$('#prof-artPubs').html(profile.publications);
	$('#full-prof-container').fadeIn(500,'easeInOutCubic');
	//smoothScroll(e,target,role);
}

$('.full-link').click(function(e){
	buildFullProfile(this);
	
	});
	
	function profileBuild(a){
		var atty;
		var role;
		var profile = {
		'init' : function(attId){
			atty = this.attorney(attId);
			role = atty.role;
			function checkMob(mobile){
				console.log(mobile !== "");
				
				if(mobile !== ""){
							var cellString = mobile + " <em>mobile</em>";
							console.log("Cell string is: "+cellString);
								return cellString;
							}
						else{
								return "";
							}
						}
			
			var yesMob = checkMob(atty.contact.mobile_phone);
						
			
			var profile = {
				'paList' : this.palistbuild(atty.practice_areas),//this passes an array object into the method
				'edList' : this.edlistbuild(atty.education),
				'admitList' : this.admitlistbuild(atty.admissions),
				'imageName' : this.imagenamebuild(atty.portrait_200),
				'fullName' : this.fullnamebuild(atty.first_name, atty.last_name, atty.middle_initial),
				'contact' : {
					'phone' : atty.contact.office_phone, 
					'cell' : yesMob, 
					'email' : atty.contact.email, 
					'linkedin' : atty.contact.linkedIn
				},
				'honors' : this.honorsbuild(atty.honors),
				'memberships' : this.membershipsbuild(atty.memberships),
				'repmatters' : this.repmattersbuild(atty.representative_matters),
				'publications' : this.publicationsbuild(atty.publications_presentations),
				'description' : atty.description,
				'role' : atty.role
			};
			return profile;
			},
		'attorney' : function(a){
			var x;
			for (x in attorney){
				//console.log(attorney[x].name);
				if(attorney[x].name === a){
					//console.log('hi');
					return attorney[x];
					}
				else{/*console.log('Not hi.');*/}
				}
			},
		'palistbuild' : function(pas){
			var paList = [];
			var nameList = [];
			var newPaList = '';
			
			if(atty.ocpa !== 'no'){//check for value to make sure that we can include values that can be converted
				console.log('This guy is Of Counsel that wants to be included, y\'know?');
				for(var x in pas){
					for(var y in practiceArea){
					if(pas[x] === practiceArea[y].id){
						paList.push(practiceArea[y].name);
						}
					}
				}
				$.each(paList, function(i, el){ //checking for duplicate names
					//console.log('argument i: ' + i);
					//console.log('argument el: ' + el);
					if($.inArray(el, nameList) === -1){ //if the item we're looking for isn't in the list, add it.
						nameList.push(el);
					}
				});
				//console.log(nameList);
				nameList.sort();
				//console.log('The nameList is now sorted into alphabetical order: ' + nameList);
				for(var z in nameList){
					newPaList += '<li>'+nameList[z]+'</li>';	
				}
				//console.log(newPaList);
				paList = newPaList;
			}
			else{
				for(var x in pas){
					paList.push('<li>');
					paList.push(pas[x]);
					paList.push('</li>');
				}
				paList.join('');
			}
			
			
			//console.log(paList);
			return paList;},
		'edlistbuild' : function(a){
			var edList = '';
			if(a !== undefined){
				for(x in a){
					edList += '<li>' + a[x] + '</li>';	
				}
			}
			else{
				return;} 
			
			return edList;},
		'admitlistbuild' : function(a){ 
			var admitList = '';
			if(a !== undefined){
				for(x in a){
					admitList += '<li>'+a[x]+'</li>';
				}
			}
			
			else{
				return;}
			return admitList;},
		'imagenamebuild' : function(a){
			var imageName = a;
			return imageName;},
		'fullnamebuild' : function(a,b,c){
			var fullName = a + ' ' + c + ' ' + b;
			return fullName;},
		'contactbuild' : function(a){
			var emailLink = '';
			if(a !== undefined){
			}
			else{
				return;} 
			
			return emailLink;},
		'honorsbuild' : function(a){
			//console.log(a);
			$('#prof-honors-head').css('display', 'none');
			var honors = '';
			if(a !== undefined || a !== ''){
				for(x in a){
					honors += '<li>'+a[x]+'</li>';
				}	
			}
			else{
				console.log('There are no honors');	
				
				return;}
			if(honors !== ''){
				$('#prof-honors-head').css('display', 'block');
			}
			return honors;},
		'membershipsbuild' : function(a){
			var memberships = '';
			if(a !== undefined || a !== ''){
				for(x in a){
					memberships += '<li>'+a[x]+'</li>';
				}
			}
			else{
				return;}
			return memberships;},
		'repmattersbuild' : function(a){
			var repMatters = '';
			if(a !== undefined || a !== ''){
			repMatters += a;
			}
			else{
				return;}
				
			return repMatters;},
		'publicationsbuild' : function(a){
			var publications = '';
			if(a !== undefined || a !== ''){
				for(x in a){
					publications += a[x];
				}
			}
			else{
				return;}
			
			return publications;}
		};
		var attProfile = profile.init(a);
		return attProfile;	
	}

/**********************************************************
******************** Layout Controls **********************
***********************************************************/
	function responsiveBanner(){
		if(document.getElementById('jumbotron-image').offsetWidth < 640){
			$('#bannerImage').attr('src','http://www.corsbassett.com/hubfs/images/Cincy-Skyline-06sm.jpg');
			//console.log('Loading the small banner!');
		}
		else if(document.getElementById('jumbotron-image').offsetWidth < 960 && document.getElementById('jumbotron-image').offsetWidth > 639){
			$('#bannerImage').attr('src','http://www.corsbassett.com/hubfs/images/Cincy-Skyline-06md.jpg');
			//console.log('Loading the medium banner!');
		}
		else{
			$('#bannerImage').attr('src','http://www.corsbassett.com/hubfs/images/Cincy-Skyline-06.jpg');
			//console.log('The big unit is in!');
		}
	}

	
	function copyright(){
		var d = new Date;
		var year = d.getFullYear();
		$('#copyright').html('&copy; '+year+' Cors &amp; Bassett');
	}

	function x(){
		console.log('Website design by:\nMulti-Craft\n131 E. 6th Street\nNewport,KY 41071\nPhone:859-581-2754\nEmail: dsimpson@multi-craft.com');
	}
/**********************************************************
*********** MSI International Scripts**********************
**********************************************************/

//$('#vid-1').attr('src','https://player.vimeo.com/video/159517986?title=0&byline=0&portrait=0');
//$('#vid-2').attr('src','https://player.vimeo.com/video/159479756?title=0&byline=0&portrait=0');	
//var vid1height = (document.getElementById('vid-1').offsetWidth)*0.5625;
//var vid2height = (document.getElementById('vid-2').offsetWidth)*0.5625;

//$('#vid-1').attr('height',vid1height);
//$('#vid-2').attr('height',vid2height);

//console.log(document.getElementById('vid-1').offsetWidth);
//console.log(vid1height);
	
/**********************************************************
***********Goggle Maps API Stuff***************************
**********************************************************/
$(window).load(function(){
	function initialize() {
		
		var cincyInfo = '<h4>Cors &amp; Bassett | Cincinnati</h4><p><a href="https://www.google.com/maps/place/201+E+5th+St+%23900,+Cincinnati,+OH+45202/@39.1011773,-84.510722,17z/data=!3m1!4b1!4m5!3m4!1s0x8841b15a53273d19:0xb44dc885ccf929da!8m2!3d39.1011732!4d-84.508528?hl=en">PNC Center<br>Cincinnati, Ohio<br>201 East Fifth Street<br>Suite 900<br>Cincinnati, OH 45202</a></p><hr><p>Phone: 513.852.8200<br>Fax: 513.852.8222</p>';
		
		var cbPin = 'http://www.corsbassett.com/hubfs/images/MapsPin.png';
		
        var cincyMapOptions = {
          	center: { lat: 39.1011773, lng: -84.510722},
          	zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
        };
		
        var cincyMap = new google.maps.Map(document.getElementById('cincy-map'),
            cincyMapOptions);
		
			
		var cincyMarker = new google.maps.Marker({
				position: cincyMapOptions.center,
				map: cincyMap,
				title: 'Cincinnati Offices',
				icon: cbPin
			});
		
		var cincyInfoWindow = new google.maps.InfoWindow({
			content : cincyInfo
		});
		
		cincyInfoWindow.open(cincyMap, cincyMarker);
		
	
      }
	  initialize();
      //google.maps.event.addDomListener(window, 'load', initialize);
});


/**********************************************************
************Career Opportunities Scripts*******************
**********************************************************/

$(".job-opp").click(function(){
	var targetElement = this;
	//console.log(targetId);
	viewJobDescription(targetElement.id);
});

function viewJobDescription(jobOp){
	var toggleDesc = "#"+jobOp+" .job-desc-wrapper";
	//console.log("#"+jobOp+".job-desc");
	$(toggleDesc).fadeToggle("slow","linear");
	
}