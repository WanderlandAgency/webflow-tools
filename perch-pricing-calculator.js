console.log ("conected");

// les sous compteurs ont tous la mÃªme combo class "sub-count"
var subCountAll = document.querySelectorAll(".sub-count");

/// les id des Ã©lÃ©ments de additional hardware pour le mettre en actif si selectionnÃ©s
let batteryAdd = document.getElementById('battery-add');
let tabletAdd = document.getElementById('tablet-add');
let tabletMountAdd = document.getElementById('tablet-mount-add');
let rackAdapterAdd = document.getElementById('rack-adapter-add');
let carryingCaseAdd = document.getElementById('carrying-case-add');
// selct de l'id du upfront cost
let upfrontCost = document.getElementById('upfront-cost');
let batteryPrice=199;
let tabletPrice=399;
let tabletMountPrice=129;
let rackAdapterPrice=129;
let carryingCasePrice=299;

// quantity en variable globale. 
let quantity=0
//les switchs en global aussi pour savoir si ils sont on/off partout
cameraSwitch=false;
batterySwitch=false;
tabletSwitch= false;
tabletMountSwitch=false;
rackAdapterSwitch=false;
carryingCaseSwitch=false;

/// prix de l'abonnement en fx du nombre de camÃ©ras (calculÃ© ensuite)
let price=0;

// mettre event listener sur le compteur de finsweet
const cameraQty = document.getElementById('Camera-Qty');
const countLess = document.getElementById('count-less');
const countMore = document.getElementById('count-plus');




//// animation envoie premier formulaire
// un bouton fake submit va dÃ©clencher real submit et l'animation entre les deux sections

//***************************************************************************************************Pour le dev du pricing
$(".c-pricing-section-2").css("display", "none");// deuxiÃ¨me partie du questionnaire

$(".c-preloader").css("opacity", 0);
$("#fake-submit").on("click", function() {
	  // envoyer la valeur email dans l'autre formulaire  
     leadEmail= $("#email-input").val();
     $("#lead-email").val(leadEmail);
     cameraInput= $("#camera-input").val();
     
     // inti du count des cam en fx du nombre donnÃ© en formulaire 1
     
     
/*
let quantityCamForm; pas possible a cause de finsweet....

if (!isNaN(cameraInput)) { // Check if the variable is not a number
  let num = parseInt(cameraInput); // Convert the string to a number

  if (num >= 1 && num <= 10) { // Check if the number is between 1 and 10 (inclusive)
    quantityCamForm = num;
  } else {
    quantityCamForm = 0;
  }
} else {
  quantityCamForm = 0;
}
//on initialise 
// met tous les subcount Ã  jour	
for (var i = 0; i < subCountAll.length; i++) {
  subCountAll[i].textContent = quantityCamForm;}
  // le compteur finsweet
  cameraQty.setAttribute("fs-inputcounter-initial", "9");

     
  */ 
     
     
     
  $(".c-preloader").css("display", "flex");
  $(".c-preloader").animate({ opacity: 1 }, 400);
  
  setTimeout(function() {
    $("#real-submit").trigger("click");
  }, 400);
  
  setTimeout(function() {
    $(".c-pricing-section-2").css("display", "block");
    $(".c-preloader").animate({ opacity: 0 }, 200);
    $(".c-preloader").css("display", "none");
  }, 2000);
});











countLess.addEventListener('click', function() {
 baseCount();
});
// Event listener for tap event on "count-more" element
countMore.addEventListener('click', function() { 
  baseCount();
});





																	/// ecouteur sur les bouton toogle
				const cameraSystem = document.getElementById('Camera-System');
				cameraSystem.addEventListener('click', function() {
				cameraSwitch = !cameraSwitch;
				 baseCount();
				});
				
				const battery = document.getElementById('Battery');
				battery.addEventListener('click', function() {
				batterySwitch = !batterySwitch;
				 baseCount();
				});
				
				const tablet = document.getElementById('Tablet');
				tablet.addEventListener('click', function() {
				tabletSwitch = !tabletSwitch;
				 baseCount();
				});
				
				const tabletMount = document.getElementById('Tablet-Mount');
				tabletMount.addEventListener('click', function() {
				tabletMountSwitch = !tabletMountSwitch;
				baseCount();
				});
				
				const rackAdapter = document.getElementById('Rack-Adapter');
				rackAdapter.addEventListener('click', function() {
				rackAdapterSwitch = !rackAdapterSwitch;
				 baseCount();
				});
				
				const carryingCase = document.getElementById('Carrying-Case');
				carryingCase.addEventListener('click', function() {
				carryingCaseSwitch = !carryingCaseSwitch;
				 baseCount();
				});
				

// la fontion qui update les compteurs
function baseCount(){
	quantity= Number(cameraQty.value);// sort en string bravo finsweet..
// met tous les subcount Ã  jour	
for (var i = 0; i < subCountAll.length; i++) {
  subCountAll[i].textContent = quantity;
}



//Il faut ajouter la classe "cc-active" active Ã  chaque Ã©lÃ©ment de additional hardware
batteryAdd.classList.toggle("cc-active", batterySwitch);// si true alors ajout classe et false retire
tabletAdd.classList.toggle("cc-active", tabletSwitch);
tabletMountAdd.classList.toggle("cc-active", tabletMountSwitch);
rackAdapterAdd.classList.toggle("cc-active", rackAdapterSwitch);
carryingCaseAdd.classList.toggle("cc-active", carryingCaseSwitch);

// calcul du total 
console.log (batteryPrice*batterySwitch);
 upcost= ((batteryPrice*batterySwitch) + (tabletPrice*tabletSwitch)+(tabletMountPrice*tabletMountSwitch)+(rackAdapterPrice*rackAdapterSwitch)+(carryingCasePrice*carryingCaseSwitch))*quantity;
let upcostDisplay = "$" + upcost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel avec la virgule


upfrontCost.textContent = upcostDisplay;


/// calcul dans les 4 pricing blocs. 
 			// s'occuper du prix de l'abo dans le calculateur
		    // rÃ©cupÃ©rer le bon tarif dans la collection. les info prix sont dans un custom attribute ce qui Ã©vite de faire des tableau et on ne travaille qu'avec le nom 
			// ce qui simplifie.
			const elements = document.getElementsByClassName('cc-plan-data');
			// on chercher les plans pour chaque plan le prix avec le nombre de camera
			for (let i = 0; i < elements.length; i++) {
				
			const element = elements[i];
				if (element.textContent.trim() === "Basic"+'-'+quantity) {
			    // Get the value of the custom attribute 'price'
				price = Number(element.getAttribute('price'));
			    let priceDisplay = "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".annual-price").eq(0).text(priceDisplay);
			   // price mensuel
			   let mensualPrice= Math.round(price/12);
			   priceDisplay = "$" + mensualPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".c-javascript-big-price").eq(0).text(priceDisplay);
			  
			  	}
			  	
			  	///				
			  	if (element.textContent.trim() === "Standard"+'-'+quantity) {
			    // Get the value of the custom attribute 'price'
				price = Number(element.getAttribute('price'));
			    let priceDisplay = "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".annual-price").eq(1).text(priceDisplay);
			   // price mensuel
			   let mensualPrice= Math.round(price/12);
			   priceDisplay = "$" + mensualPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".c-javascript-big-price").eq(1).text(priceDisplay);
			  
			  	}
			  				  	///				
			  	if (element.textContent.trim() === "Professional"+'-'+quantity) {
			    // Get the value of the custom attribute 'price'
				price = Number(element.getAttribute('price'));
			    let priceDisplay = "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".annual-price").eq(2).text(priceDisplay);
			   // price mensuel
			   let mensualPrice= Math.round(price/12);
			   console.log ("mensualPrice",mensualPrice);
			   priceDisplay = "$" + mensualPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".c-javascript-big-price").eq(2).text(priceDisplay);
			  
			  	}
			  	
			  	/*
			  				  	if (element.textContent.trim() === "Championship"+'-'+quantity) {
			    // Get the value of the custom attribute 'price'
				price = Number(element.getAttribute('price'));
			    let priceDisplay = "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".annual-price").eq(3).text(priceDisplay);
			   // price mensuel
			   let mensualPrice= Math.round(price/12);
			   priceDisplay = "$" + mensualPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			   $(".c-big-price").eq(3).text(priceDisplay);
			  
			  	}
			  	*/
			}
		
		/// mise en place des bons prix dans les cases en jQuery
		



	
}


/// mettre les valeur de l'abo dans chaque radio button pour les mettre dans le formulaire ensuite. on recupÃ©re l'id qui est la valeur du plan et on la met dans la choice value 
const radioButtons = document.querySelectorAll('.c-radio__button');

radioButtons.forEach((button) => {
  const id = button.id;
  const radioElement = button.querySelector('.c-radio');
  
  if (radioElement) {
    radioElement.value = id;
  }
});

// rÃ©cupÃ©rer la valeur du plan choisit dans la collection list
var planButtons = document.querySelectorAll(".c-radio__button");
let planType;
// Iterate over each element and add event listeners
planButtons.forEach(function(planButton) {
		  planButton.addEventListener('click', function() {
		    planType=planButton.id;    
		    document.getElementById('suscription-type').textContent=planType;
		    
		    // s'occuper du prix de l'abo dans le calculateur
		    // rÃ©cupÃ©rer le bon tarif dans la collection. les info prix sont dans un custom attribute ce qui Ã©vite de faire des tableau et on ne travaille qu'avec le nom 
			// ce qui simplifie.
			const elements = document.getElementsByClassName('cc-plan-data');
		
		
			for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
				if (element.textContent.trim() === planType+'-'+quantity) {
			    // Get the value of the custom attribute 'price'
				price = Number(element.getAttribute('price'));
			
			    // Log the price value
			    let priceDisplay = "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			    document.getElementById('abo-total').textContent=priceDisplay;
			    
			    
			    
						    // cacher le prix des camÃ©ra si plan standard ou pro.
						    
						    if (planType=="Standard"|| planType=="Professional") {document.getElementById('camera-add').style.display = "none"; 
							    variableUpcost= upcost;
							    // montrer camera has service
							    document.getElementById('camera-haas').style.display = "flex";
						    }
						    else {document.getElementById('camera-add').style.display = "flex";
							    $("#camera-add").addClass("cc-active");
							    	
							    // cacher camera ha service
							    document.getElementById('camera-haas').style.display = "none";
							    
							    // ajouter prix des camÃ©ras au prix total 
							    variableUpcost = upcost + (1745*quantity)// le cout des camÃ©ra en plus
						    }
			    
			    			    // total cost varie en fx du plan donc on le met aprÃ¨s 
			    			    
			    totalCost=variableUpcost+price;
			    console.log ("totalCost",totalCost,"variableUpcost",variableUpcost,"price",price);
			   
			    priceDisplay = "$" + totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// met au format visuel le prix de l'abo
			    document.getElementById('grant-total').textContent=priceDisplay;
			    
			    // update de upforontcost ici 
			    upfrontCost.textContent= "$" + variableUpcost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
			    
			    ///ajouter les classes active sur tous les Ã©lÃ©ments 
			    if (batterySwitch==true){
				    $("#battery-add").addClass("cc-active");
			    }else {$("#battery-add").removeClass("cc-active");}
			    
			    if (tabletSwitch==true){
				    $("#tablet-add").addClass("cc-active");
			    }else {$("#tablet-add").removeClass("cc-active");}
		
			    if (tabletMountSwitch==true){
				    $("#tablet-mount-add").addClass("cc-active");
			    }else {$("#tablet-mount-add").removeClass("cc-active");}
			    

			    if (rackAdapterSwitch==true){
				    $("#rack-adapter-add").addClass("cc-active");
			    }else {$("#rack-adapter-add").removeClass("cc-active");}	

			    if (carryingCaseSwitch==true){
				    $("#carrying-case-add").addClass("cc-active");
			    }else {$("#carrying-case-add").removeClass("cc-active");}		    
			    
			    break;
			  	}
			}
		  });
  
  });
  
  //// mise Ã  jour du prix total 
  
  
  
  

/// scrool vers la partie quote
$('.c-radio__button').on('click', function() {
  $('#quote')[0].scrollIntoView({ behavior: 'smooth' });
});
