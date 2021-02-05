const create = document.getElementById('create')
const isUser = document.getElementById('user');


const url = window.location.href;
const formatedURL = url.split("/")[2].split('.')[0];



window.onload = function () {
    isUser.innerHTML = `{${url}}`
    document.title = `${formatedURL} | Logsnap`
}

const createdRecord = {
    type: "CNAME",
    name: "linearx",
    content: "logsnap.netlify.app",
    ttl: 120,
    proxied: true,
    domain_alias: 'linearx.logsnap.site'
}

create.addEventListener('click', () => {
    async function postRecords(url: string) {
       let response = fetch(url, {
            body: JSON.stringify(createdRecord),
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST'
        })
        let result = (await response).json();
        result.then(result => {
            console.log(result);
        })
        .then(() => {
            setTimeout(function() {
                location.href = `https://${createdRecord.name}.logsnap.site/`
            },5000)
        })
        .catch(error => {
            console.log(error);
        })
    }
    postRecords("https://logsnap-api.onrender.com/logsnap/api/createdns")
})
