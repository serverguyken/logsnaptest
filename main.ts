const create = document.getElementById('create')
const isUser = document.getElementById('user');


const url = window.location.hostname;


window.onload = function() {
    isUser.innerHTML = `{${url}}`
    document.title = url
}

create.addEventListener('click', () => {
    
})
