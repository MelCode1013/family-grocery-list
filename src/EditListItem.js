let editPost = (item) => {
  input.value = item.parentElement.previousElementSibling.innerHTML
    item.parentElement.parentElement.remove()

  console.log("testing")
}

export default editPost;