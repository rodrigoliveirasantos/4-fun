const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const host = "127.0.0.1";
const port = 8000;

const paths = {
    'home': 'index.html',
    'about': 'outraRota.html'
}

function choosePath(params){
    let basePath = './html/';

    if ( Object.keys(params).length == 0 ) {
        return basePath + 'index.html'
    }
    
    let path = paths[params.section];

    if (path) {
        return basePath + path
    } else {
        return undefined
    }

}

app.use( express.static( __dirname + '/public') )

const options = {
    root: __dirname
}

app.get('*', (req, res) => {
    const params = url.parse(req.url, true).query;
    const path = choosePath(params);

    if (!path) {
        res.status(404).send({ Error: 'Caminho não existente' });
        return
    }
    
    res.sendFile(path, options, (err) => {
        if (err){ res.status(400).send({ Error: err }) }
    })

})

app.listen(port, () => {
    console.log('Web service carregado')
});