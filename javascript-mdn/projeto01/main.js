const thumbBar = document.querySelector('.thumb-bar')

for(let i=1;i<6;i++){
    let thumb = document.createElement('img')
    thumb.setAttribute('src', 'images/pic'+i+'.jpg')
    thumbBar.appendChild(thumb)
}