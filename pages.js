let pageNumber = 0 


const nextTag = document.querySelector("footer img.next") //Similar to how you'd pick in CSS
const previousTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")


 const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > 4) {
        pageNumber = 1
    }


    updateSection()
 }

 const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 1) {
        pageNumber = 4
    }

    updateSection()
 }

//  With JS event-based model, order of code doesn't matter. That's when updateSection can be used before it's defined. 
 const updateSection = function () {
    outputTag.innerHTML = pageNumber
 }
//  Now going to add an event, which states when we do something the following happens. 


nextTag.addEventListener("click", function () {
    // Need to run the next function on click
    next()
})

previousTag .addEventListener("click", function () {
    // Need to run the next function on click
    previous()
})