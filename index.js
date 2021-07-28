//get elements
const button = document.getElementById("hover-drop-menu")
const menuItems = document.getElementById("hover-menu-items")

//get elements (sub menu)
const subMenuButton = document.getElementById("hover-drop-submenu")
const menu = document.getElementById("hover-menu-items-two")
const subMenu = document.getElementById("hover-submenu-items")
const openSubOne = document.getElementById("first-sub")
const openSubTwo = document.getElementById("last-sub")

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

subMenuButton.addEventListener("mouseover", function(){
    menu.style.display = "flex"
})

menu.addEventListener("mouseleave", function(){
    menu.style.display = "none"
})

subMenu.addEventListener("mouseleave", function(){
    subMenu.style.display = "none"
})

openSubOne.addEventListener("mouseover", function(){
    openSubMenu(openSubOne)
})

openSubTwo.addEventListener("mouseover", function(){
    openSubMenu(openSubTwo)
})

function openSubMenu(key){
    subMenu.style.display = "flex"
    subMenu.style.position = "absolute"
    subMenu.style.left = `${key.getBoundingClientRect().x+120}px`
    subMenu.style.top = `${key.getBoundingClientRect().y}px`
}