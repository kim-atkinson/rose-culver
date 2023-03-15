// This is the data for holding which page we're on
let pageNumber = 0 

// The content for the different pages

const pages = [

    { copy: "a Toronto-based graphic designer", background: "#edc7a9", circle: "#3e78ed" }, 
    { copy: "FKA Twigs' biggest fan", background: "#a1fffe", circle: "#e34a47" }, 
    { copy: "looking for a job at the start of June", background: "#d3c7f3", circle: "#f7fe00" }, 
    { copy: `welcoming you to <a href="#" style = "color: #000000;">download her PDF</a>`, background: "#faffb8", circle: "#b472e6" }, 
]

// Pick the relevant tags 
const nextTag = document.querySelector("footer img.next") //Similar to how you'd pick in CSS
const randomTag = document.querySelector("footer img.random")
const previousTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

// Created a next function to increase the page number
const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }


    updateSection()
 }

 // Created a next function to decrease the page number
 const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()
 }

//  With JS event-based model, order of code doesn't matter. That's when updateSection can be used before it's defined. 
// This will update the section's content and style
 const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
 }
//  Now going to add an event, which states when we do something the following happens. 

// Pick a random slide
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length) 

    updateSection()
}


// On click of nextTag, run this
nextTag.addEventListener("click", function () {
    // Need to run the next function on click
    next()
})

// On click of previousTag, run this
previousTag .addEventListener("click", function () {
    // Need to run the next function on click
    previous()
})

// On click of randomTag, run this 
randomTag.addEventListener("click", function () { 
    random()
})

// Extra Challenge: Don't allow random to pick the same slide. 








// When a user presses a key, check for arrow left or right
// And do next or previous correctly
document.addEventListener("keyup", function(event) {
    console.log(event)

    // If the key being pressed is ArrowRight

    if (event.key === "ArrowRight") {
        next()
    } 

    // If the key being pressed is ArrowLeft

    if (event.key === "ArrowLeft") {
        previous()
    }
})

// Extra Challenge: Make the left and right slides of the screen clickable so that it goes to the next page