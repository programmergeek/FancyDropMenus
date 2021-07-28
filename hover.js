//get elements
const button = document.getElementById("hover-drop-menu")
const menuItems = document.getElementById("hover-menu-items")

//initial state
menuItems.style.display = "none"

//event handlers
button.addEventListener("mouseover", function(){
    menuItems.style.display = "flex"
})

menuItems.addEventListener("mouseleave", function(){
    menuItems.style.display = "none"
})