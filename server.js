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
}

