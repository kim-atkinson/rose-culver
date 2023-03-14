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