let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
console.log(urlParams)
console.log(urlParams.get("post_id"))


let UserId = 5;

let getUserDataById = localStorage.getItem("userId")

console.log(getUserDataById)
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res => res.json())
.then(user=>{
    console.log(user)
    let nameBox = document.getElementById("userName")
    nameBox.style.fontSize = "30px"
    nameBox.innerHTML = `<strong style="font-size: 40px; color:red";>User:</strong> ${user[getUserDataById].name}`


    let username = document.createElement("div")
    document.getElementById("mainContainer").append(username)
    username.innerHTML =`<span id="keys">Nick:</span> <span id="values"> ${user[getUserDataById].username}</span>`


    let userEmail = document.createElement("div")
    document.getElementById("mainContainer").append(userEmail)
    userEmail.innerHTML =`<span id="keys">Email:</span> <span id="values"> <a href="mailto:${user[getUserDataById].email}">${user[getUserDataById].email}</a></span>`


    let addressValues = Object.values(user[getUserDataById].address)
    let addressKeys = Object.keys(user[getUserDataById].address)
    let div = document.createElement("div")
    document.getElementById("mainContainer").append(div)
    div.innerHTML = `<a href="https://www.google.com/maps/place/${user[getUserDataById].address.geo.lat}%2C${user[getUserDataById].address.geo.lng}" target="_blank" style="text-decoration:none">Address:</a>`
    div.id = "keys"
    let ul = document.createElement("ul")
    div.append(ul)
    ul.style.listStyle= "none"
    addressKeys.forEach((key,num)=>{
        if(!(key == "geo")){  
        let li = document.createElement("li")
        ul.append(li)
        li.innerHTML = `<span style="text-transform: capitalize">${key}</span>: <span style="font-size:20px">${addressValues[num]}</span>`
        }
    })

   let userPhone = document.createElement("div")
   document.getElementById("mainContainer").append(userPhone)
   userPhone.innerHTML =`<span id="keys">Phone:</span> <span id="values"> <a href="tel:${user[getUserDataById].phone}">${user[getUserDataById].phone}</a></span>`

   let userWebsite = document.createElement("div")
   document.getElementById("mainContainer").append(userWebsite)
   userWebsite.innerHTML =`<span id="keys">Website:</span> <span id="values"> <a target="/blank" href="https://${user[getUserDataById].website}">${user[getUserDataById].website}</a></span>`

   let userCompany = document.createElement("div")
   document.getElementById("mainContainer").append(userCompany)
   userCompany.innerHTML =`<span id="keys">Company:</span> <span id="values"> ${user[getUserDataById].company.name}</span><hr>`

    getUserDataById++
   fetch(`https://jsonplaceholder.typicode.com/users/${getUserDataById}/posts`)
   .then(res => res.json())
   .then(posts =>{
       console.log(getUserDataById)
       let userPosts = document.createElement("div")
       document.body.append(userPosts)
       userPosts.innerHTML = "User Posts:"
       userPosts.style.fontSize = "30px"
       let postsOl = document.createElement("ol")
       userPosts.append(postsOl)
        posts.forEach(post => {
           let postsLi =  document.createElement("li")
           postsOl.append(postsLi)
           postsLi.innerHTML = `<a href="./userPost.html?post_id=${post.id}" id="${post.id}" target="_blank"><h3>${post.title}</h3></a>
                                <span>${post.body}</span> `
            document.getElementById(post.id).style.textDecoration = "none"
            document.getElementById(post.id).addEventListener("click", ()=>{
                console.log(`post ${post.id}`)
                localStorage.setItem("userPostId", post.id)

                console.log(user[getUserDataById].username)
                localStorage.setItem("userUsername", user[getUserDataById -1].username)
                // setTimeout(()=>{
                //     localStorage.removeItem(`userPostId`)
                //     localStorage.removeItem("userUsername")
                // }, 5000)               
            })
        })
   })
})
