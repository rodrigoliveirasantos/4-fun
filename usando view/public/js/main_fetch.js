const baseUrl = '127.0.0.1'
const input = document.getElementsByClassName('text-input')[0].children[0]
const linkArea = document.getElementById('linkArea');

function carregarLink() {
    let section = input.value;
    input.value = '';

    let url = section ? `${baseUrl}?section=${section}` : '#'

    if ( !linkArea.children[0] ) {
        linkArea.innerHTML += `<a href='${url}'> Link Pronto </a>`;
    
    } else {
        linkArea.children[0].href = url;
    }

}
