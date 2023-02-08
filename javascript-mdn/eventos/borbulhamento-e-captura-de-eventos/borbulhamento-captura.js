const btn = document.querySelector('button')
const videoBox = document.querySelector('div')
const video = document.querySelector('video')

btn.addEventListener('click',()=>{
    videoBox.setAttribute('class', 'showing')
})
videoBox.addEventListener('click',()=>{
    videoBox.setAttribute('class', 'hidden')
})
video.addEventListener('click',(e)=>{
    e.stopPropagation()
    video.play()
})