const checkForCookie = () => {
    currentCookie =  localStorage.getItem("password")
    correctPassword = 'adventure'

    if (currentCookie !== correctPassword) {
        // when returns false redirect to page to ask password and set cookie there
        window.location.href = 'passinput.html'
    } 
}

checkForCookie()