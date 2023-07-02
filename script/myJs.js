console.log('xel')
/*Surveillance de la mise en page par defaut d'IntersectionObsever*/
const surveiller = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('apparition')
        } else{
            entry.target.classList.remove('apparition')
        }
    })
})
const toscrollElements = document.querySelectorAll('.scroll-anim')
toscrollElements.forEach((el) => surveiller.observe(el))

//Autre curseur
const cursor = document.querySelector('.curseur')

document.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
})

document.addEventListener('click', () =>{
    cursor.classList.add("extention")
    setTimeout(() => {
        cursor.classList.remove("extention")
    }, 500);

})
//Form validation and form popup
 function showPopup() {
    let nameInput = document.getElementById("name")
    let emailInput = document.getElementById("email")
    let messageInput = document.getElementById("message")
    let errorDiv = document.getElementById("error")
    let username = nameInput.value.trim()
    let email = emailInput.value.trim()
    let message = messageInput.value.trim()
    //validated fields
    if (username === "" || email === "" || message === "") {
        errorDiv.style.display = "block"
        return false
    }
    //clear error message
    errorDiv.style.display = "none"
    //Show popup
    let popup = document.getElementById("popup")
    popup.style.display = "block"
    //clear form inputs after submission
    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""  
  return false
}

function closePopup(){
    let popup = document.getElementById("popup")
    popup.style.display = "none"
}