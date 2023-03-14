// This is the data for holding which page we're on
let pageNumber = 0 

// Pick the relevant tags 
const nextTag = document.querySelector("footer img.next") //Similar to how you'd pick in CSS
const previousTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")

// Created a next function to increase the page number
const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > 4) {
        pageNumber = 1
    }


    updateSection()
 }

 // Created a next function to decrease the page number
 const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 1) {
        pageNumber = 4
    }

    updateSection()
 }

//  With JS event-based model, order of code doesn't matter. That's when updateSection can be used before it's defined. 
// This will update the section's content and style
 const updateSection = function () {
    outputTag.innerHTML = pageNumber
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