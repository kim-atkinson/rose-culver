const nextTag = document.querySelector("footer img.next") //Similar to how you'd pick in CSS

 const outputTag = document.querySelector("h2")

//  Now going to add an event, which states when we do something the following happens. 

nextTag.addEventListener("click", function () {
    outputTag.innerHTML = "it worked!"
})