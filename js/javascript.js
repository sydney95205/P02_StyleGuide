'use strict';

window.onload=function(){
	var navToggle = document.querySelector("#nav-toggle");
	navToggle.addEventListener("click",navToggleFunction);
}


	function navToggleFunction() {

		var navToggle = document.querySelector("#nav-toggle");
		var navItems = document.querySelector("#nav-items");
		var navFirstItem = document.querySelector("#nav-items a");
		console.log("#nav-toggle has been clicked.");

		if ( navItems.classList.contains("hidden") ) {
			console.log("#nav-items are hidden, showing them now.");
			navItems.classList.remove("hidden");
			navItems.setAttribute("aria-hidden", "false");
			navToggle.setAttribute("aria-expanded", "true");
			navFirstItem.focus();
		}
		
		else {
			console.log("#nav-items are showing, hiding them now.");
			navItems.classList.add("hidden");
			navItems.setAttribute("aria-hidden", "true");
			navToggle.setAttribute("aria-expanded", "false");
		}
	}
