let queryParams;



fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res => res.json())
.then(user => {   
    let allUsers = document.createElement("h2")
    allUsers.innerHTML = "List of users:"
    document.getElementById("allUserContainer").prepend(allUsers)
    user.forEach((user, num)=> {
    let userContainer = document.createElement("li")
    userContainer.style.margin = "10px"
    userContainer.style.fontSize = "25px"
    document.getElementById("usersOl").append(userContainer)
    userContainer.id ="container" + num
    let linkToUser = document.createElement("a")
    linkToUser.addEventListener("click", ()=>{
        localStorage.setItem("userId", (num))
        // setTimeout(()=>{
        //     localStorage.removeItem(`userId`)
        // }, 10000)
    })
    linkToUser.style.textDecoration = "none"
    linkToUser.style.color = "green"
    userContainer.append(linkToUser)
    linkToUser.setAttribute("href", "user.html")
    linkToUser.setAttribute("target", "_blank")
    linkToUser.textContent = user.name
    })
})