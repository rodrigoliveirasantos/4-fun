const http = require('http');
const input = document.getElementById('section');

var options = {
    host: '127.0.0.1',
    path: '?section='
}

function makeRequest() {
    let section = input.value
    input.value = '';

    http.request(options, (res) => {
        if (res.statusCode == 404) {
            input.placeholder = 'Não encontrado'
        }
    })
    
}

