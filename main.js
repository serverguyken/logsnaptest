var create = document.getElementById('create');
var isUser = document.getElementById('user');
var url = window.location.hostname;
window.onload = function () {
    isUser.innerHTML = "{" + url + "}";
    document.title = url;
};
create.addEventListener('click', function () {
});
