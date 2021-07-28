//get elements
const button = document.getElementById("hover-drop-menu")
const menuItems = document.getElementById("hover-menu-items")

//get elements (sub menu)
const subMenuButton = document.getElementById("hover-drop-submenu")
const menu = document.getElementById("hover-menu-items-two")
const subMenu = document.getElementById("hover-submenu-items")

//initial state
menuItems.style.display = "none"
menu.style.display = "none"
subMenu.style.display = "none"

//event handlers
button.addEventListener("mouseover", function(){
    menuItems.style.display = "flex"
})

menuItems.addEventListener("mouseleave", function(){
    menuItems.style.display = "none"
})