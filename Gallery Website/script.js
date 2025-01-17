const darkModeToggle = document.querySelector(".dark-mode-toggle")
const toggleSwitch = darkModeToggle.querySelector(".round-slider")
const cssRoot = document.querySelector(":root")
const navbarOptions = [...document.querySelectorAll(".navbar__items")]
const displayImgCntr = document.querySelector(".display__img-cntr")
const clickedImgCntr = document.querySelector(".clicked-img-cntr__img")
const imgDisplayCount = 9;
var darkModeStatus = false;


/* Page Appearance functionality */
let pageColorsObject = {
    lightMode: {
        color_1:"rgb(240, 240, 240)",
        color_2:"rgb(210, 210, 210)",
        color_3:"rgb(148, 148, 148)",
        fontColor:"rgb(0,0,0)",
        hoverColor:"rgb(255, 255, 255)",
        borderColor:"rgb(180, 179, 179)"

    },
    darkMode: {
        color_1:"rgb(75, 75, 75)",
        color_2:"rgb(30, 30, 30)",
        color_3:"rgb(0, 0, 0)",
        fontColor:"rgb(250, 250, 250)",
        hoverColor:"rgb(0,0,0)",
    }
}
function lightModeSettings (){

    // --> update the bg-color of the toggle btn with proper animation
    // --> Select the Css variables which set the bg,text and the shadow colors of the page and alter them according to the requested mode
        toggleSwitch.classList.remove("on")
        toggleSwitch.classList.add("off")
        darkModeToggle.style.backgroundColor = "lightgrey"
        cssRoot.style.setProperty("--color-1",pageColorsObject.lightMode.color_1)
        cssRoot.style.setProperty("--color-2",pageColorsObject.lightMode.color_2)
        cssRoot.style.setProperty("--color-3",pageColorsObject.lightMode.color_3)
        cssRoot.style.setProperty("--font-color",pageColorsObject.lightMode.fontColor)
        cssRoot.style.setProperty("--hover-color",pageColorsObject.lightMode.hoverColor)
        cssRoot.style.setProperty("--border-color",pageColorsObject.lightMode.borderColor)

    
}
function darkModeSettings (){
// --> update the bg-color of the toggle btn with proper animation
// --> Select the Css variables which set the bg,text and the shadow colors of the page and alter them according to the requested mode
    toggleSwitch.classList.remove("off")
    toggleSwitch.classList.add("on")
    darkModeToggle.style.backgroundColor = "rgba(67, 198, 37, 1)"
    cssRoot.style.setProperty("--color-1",pageColorsObject.darkMode.color_1)
    cssRoot.style.setProperty("--color-2",pageColorsObject.darkMode.color_2)
    cssRoot.style.setProperty("--color-3",pageColorsObject.darkMode.color_3)
    cssRoot.style.setProperty("--font-color",pageColorsObject.darkMode.fontColor)
    cssRoot.style.setProperty("--hover-color",pageColorsObject.darkMode.hoverColor)
    cssRoot.style.setProperty("--border-color",pageColorsObject.darkMode.color_1)
}
function pageColorModeSetter(mode){
// Analyse the requested mode and do the following
    if(mode === "dark") darkModeSettings()
    else if (mode === "light") lightModeSettings()
}

// Event listener for darkModeToggle.
darkModeToggle.addEventListener("click",() => {
// If darkModeStatus is false pass in "dark" into the pageColorModeSetter else pass in "light".
// And change the value of darkModeStatus to true or false.
    if(darkModeStatus === false){
        pageColorModeSetter("dark")
        darkModeStatus = true
    } else if (darkModeStatus === true){
        pageColorModeSetter("light")
        darkModeStatus = false
    }
})

/* Page Appearance functionality End */



//Event listener for navoptions 

navbarOptions.forEach(navOption => {
    navOption.addEventListener("click", (e) => {
        displayImgCntr.innerHTML = ""
        var navItemText = e.target.textContent
        for( var i = 1 ; i<= imgDisplayCount; i++){

        let imgCard = `<div class = "display__img-cntr_img " 
                style = "background-image: url('./images/${navItemText}/img-${i}.jpg'); background-size:cover" data-imgurl = "url('./images/${navItemText}/img-${i}.jpg')"></div>`;
                displayImgCntr.insertAdjacentHTML("afterbegin", imgCard)
           
        } 
        /* Adding eventlistener for displaying cards to the clicked card container*/
        const displayedCards = [...document.querySelectorAll(".display__img-cntr_img")]
        console.log(displayedCards)
        displayedCards.forEach( card => {
            card.addEventListener("click", () => {
                console.log(card.dataset.imgurl)
                clickedImgCntr.style.backgroundImage = card.dataset.imgurl
            }) 
        })
    })
})



