const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const host = "127.0.0.1";
const port = 8000;

const paths = {
    'home': 'index.pug',
    'about': 'outraRota.pug'
}

function choosePath(params){

    if ( Object.keys(params).length == 0 ) {
        return 'index'
    }
    
    let path = paths[params.section];

    if (path) {
        return path
    } else {
        return undefined
    }

}

app.use( express.static( __dirname + '/public') )
app.set('view engine', 'pug')

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
    
    res.render(path)

})

app.listen(port, () => {
    console.log('Web service carregado')
});