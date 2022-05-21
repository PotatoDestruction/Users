let postId = localStorage.getItem("userPostId")
let userNickName = localStorage.getItem("userUsername")
let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
console.log(urlParams.get("post_id"))
fetch(`https://jsonplaceholder.typicode.com/posts/${urlParams.get("post_id")}`)
   .then(res => res.json())
   .then(post => {
    let h2 = document.querySelector("h2")
    h2.innerHTML = `<span style="color:red">Post created by:</span> ${localStorage.getItem("userUsername")}`
    
    
    let mainContainer = document.getElementById("postAndComments")
    let postInfo = document.createElement("div")
    mainContainer.append(postInfo)
    
    let postTitleBox = document.createElement("div")
    postInfo.append(postTitleBox)
    postTitleBox.innerHTML = `<h3><span style="color:red">Title:</span><br> ${post.title}</h3>`

    let postBodyBox = document.createElement("div")
    postInfo.append(postBodyBox)
    postBodyBox.innerHTML = `<h3><span style="color:red">Content: </span><br> ${post.body}</h3>`

    fetch(`https://jsonplaceholder.typicode.com/posts/${urlParams.get("post_id")}/comments`)
   .then(res => res.json())
   .then(comment => {
    console.log(comment)
    comment.forEach(commentData =>{
        let postComment = document.createElement("div")
    document.getElementById("commentBox").append(postComment)
    postComment.style.marginBottom = "20px"
    postComment.innerHTML = `<span style="color:red; font-size:25px">By:</span> ${commentData.email}<br><br> ${commentData.body}`
    })
    
   })
   
   })