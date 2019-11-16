/**
 * fetch API
 */

let setImg = async () => {
  let response = await fetch('https://avatars1.githubusercontent.com/in/2740')
  let data = await response.blob()
  let objectURL = URL.createObjectURL(data)
  let myImage  = document.querySelector('#imgbox')
  myImage.src = objectURL
}

setImg();