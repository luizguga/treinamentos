let myFavoriteBand = {
    name: 'Avenged Sevenfold',
    nationality: 'Norte Americana',
    genre: 'Metal progressivo',
    members: 5,
    formed: 1999,
    split: false,
    albums: [
        {name: '2000 Demo', released: 2000},
        {name: 'Warmness on the Soul', released: 2001},
        {name: 'Sounding the Seventh Trumpet', released: 2001},
        {name: 'Waking the Fallen', released: 2003},
        {name: 'City of Evil', released: 2005},
        {name: 'Avenged Sevenfold', released: 2007},
        {name: 'Live in the LBC & Diamonds in the Rough', released: 2008},
        {name: 'Nightmare', released: 2010},
        {name: 'Hail to the King', released: 2013},
        {name: 'Hail to the King: Deathbat', released: 2015},
        {name: 'The Stage', released: 2016},
        {name: 'The Best of 2005-2013', released: 2016},
        {name: 'Live at the Grammy Museum', released: 2017},
        {name: 'Black Reign', released: 2018}
    ]
}
let bandInfo = `${myFavoriteBand.name} é uma banda ${myFavoriteBand.nationality} de ${myFavoriteBand.genre}, ela é formada por ${myFavoriteBand['members']} membros e surgiu no ano de ${myFavoriteBand['formed']}. Seu primeiro albúm foi ${myFavoriteBand.albums[0].name} lançado em ${myFavoriteBand.albums[0].released}.`

const section = document.querySelector('section')

let para = document.createElement('p')
para.textContent = bandInfo
section.appendChild(para)