let posts = document.getElementById('posts')
let form = document.getElementById('form')
let msg = document.getElementById('msg')
let input = document.getElementById('input')

//event listener - for the form submit button

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('button was clicked')

    formValidation()
})

//the below function provides a conditional where if the msg is blank, and error will be thrown

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank"
        console.log('blank post - fail')
    } else {
        console.log('successful post!')
        msg.innerHTML = ""
        acceptData()
    }
}

//data storage - I created a "data" object to get the data from input and store it in the data object

let data = {};

let acceptData = () => {
  data["text"] = input.value
  console.log(data)

  //I added createPost function below so when acceptData is fired, so is create post. Since, of course, when my object takes in data, I want it to simultaneously inject the html + template literal into my post section 
  createPost()
}

//post creation - the template literal will input the data that goes into my object inside of the html designated below

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span className="options">
    <i onClick="editPost(this)" className="fas fa-edit"></i>
    <i onClick="deletePost(this)" className="fas fa-trash-alt"></i>
    </span>
    </div>
  `
  //the input.value is set to blank after the post is created
  input.value = ""
}

let deletePost = (item) => {
  item.parentElement.parentElement.remove()
}

editPost()


//each list item that gets dynamically created needs a way for us to reference it.
