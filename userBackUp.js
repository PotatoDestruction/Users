// let usersData = localStorage.getItem("usersData")
// let extractedData = JSON.parse(usersData)
// console.log(extractedData)

let getUserDataById = localStorage.getItem("userId")
fetch(`https://jsonplaceholder.typicode.com/users/${getUserDataById}`)
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res => res.json())
.then(user=>{
    
    let nameBox = document.getElementById("userName")
    nameBox.style.fontSize = "30px"
    nameBox.innerHTML = `<strong style="font-size: 40px; color:red";>User:</strong> ${user[0].name}`


    let username = document.createElement("div")
    document.getElementById("mainContainer").append(username)
    username.innerHTML =`<span id="keys">Nick:</span> <span id="values"> ${user[0].username}</span>`


    let userEmail = document.createElement("div")
    document.getElementById("mainContainer").append(userEmail)
    userEmail.innerHTML =`<span id="keys">Email:</span> <span id="values"> ${user[0].email}</span>`


    let addressValues = Object.values(user[0].address)
    let addressKeys = Object.keys(user[0].address)
    let div = document.createElement("div")
    document.getElementById("mainContainer").append(div)
    div.innerHTML = `<a href="https://www.google.com/maps/place/${user[0].address.geo.lat},${user[0].address.geo.lng}" target="_blank" style="text-decoration:none">Address:</a>`
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
   userPhone.innerHTML =`<span id="keys">Phone:</span> <span id="values"> ${user[0].phone}</span>`

   let userWebsite = document.createElement("div")
   document.getElementById("mainContainer").append(userWebsite)
   userWebsite.innerHTML =`<span id="keys">Website:</span> <span id="values"> ${user[0].website}</span>`

   let userCompany = document.createElement("div")
   document.getElementById("mainContainer").append(userCompany)
   userCompany.innerHTML =`<span id="keys">Company:</span> <span id="values"> ${user[0].company.name}</span><hr>`

   fetch(`https://jsonplaceholder.typicode.com/users/1/posts`)
   .then(res => res.json())
   .then(posts =>{
       let userPosts = document.createElement("div")
       document.body.append(userPosts)
       userPosts.innerHTML = "User Posts:"
       userPosts.style.fontSize = "30px"
       let postsOl = document.createElement("ol")
       userPosts.append(postsOl)
       console.log(posts)
        posts.forEach(post => {
           let postsLi =  document.createElement("li")
           postsOl.append(postsLi)
           postsLi.innerHTML = `<a href="userPost.html" id="${post.id}" target="_blank"><h3>${post.title}</h3></a>
                                <span>${post.body}</span> `
            document.getElementById(post.id).style.textDecoration = "none"
            document.getElementById(post.id).addEventListener("click", ()=>{
                localStorage.setItem("userPostId", post.id)
                localStorage.setItem("userUsername", user[0].username)
                setTimeout(()=>{
                    localStorage.removeItem(`userPostId`)
                    localStorage.removeItem("userUsername")
                }, 5000)               
            })
        })
   })
})
