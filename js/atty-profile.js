// JavaScript Document for Cors & Bassett Attorney Profile pages.

/**********************************************************
*************Attorney Profile Builder**********************
***********************************************************/

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
	$('#prof-officeAddy-phone').html(profile.contact.phone);
	$('#prof-officeAddy-email a').attr('href','mailto:' + profile.contact.email);
	$('#prof-officeAddy-email a').html(profile.contact.email);
	$('#prof-linkedin').attr('href',profile.contact.linkedin);
	$('#prof-desc').html(profile.description);
	$('#prof-repMatters').html(profile.repmatters);
	$('#prof-artPubs').html(profile.publications);
	$('#full-prof-container').fadeIn(500,'easeInOutCubic');
	//smoothScroll(e,target,role);
}


	
	function profileBuild(a){
		var atty;
		var role;
		var profile = {
		'init' : function(attId){
			atty = this.attorney(attId);
			role = atty.role;
			
			var profile = {
				'paList' : this.palistbuild(atty.practice_areas),//this passes an array object into the method
				'edList' : this.edlistbuild(atty.education),
				'admitList' : this.admitlistbuild(atty.admissions),
				'imageName' : this.imagenamebuild(atty.portrait_200),
				'fullName' : this.fullnamebuild(atty.first_name, atty.last_name, atty.middle_initial),
				'contact' : {'phone' : atty.contact.office_phone, 'email' : atty.contact.email, 'linkedin' : atty.contact.linkedIn},
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
	
$('.full-link').click(function(){
	buildFullProfile(this);
	});