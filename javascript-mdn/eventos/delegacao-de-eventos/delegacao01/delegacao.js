document.querySelector('ul#parent-list').addEventListener('click', (e)=>{
    if(e.target && e.target.nodeName == 'LI'){
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!")
    }
})