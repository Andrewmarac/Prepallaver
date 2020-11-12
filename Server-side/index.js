const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); 
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/products', (req, res) => {
var jsonData = {"products":[{
"_id": {
"$oid": "5968dd23fc13ae04d9000001"
},
"product_name": "sildenafil citrate",
"supplier": "Wisozk Inc",
"quantity": 261,
"unit_cost": "$10.47"
}, {
"_id": {
"$oid": "5968dd23fc13ae04d9000002"
},
"product_name": "Mountain Juniperusashei",
"supplier": "Keebler-Hilpert",
"quantity": 292,
"unit_cost": "$8.74"
}, {
"_id": {
"$oid": "5968dd23fc13ae04d9000003"
},
"product_name": "DextromathorphanHBr",
"supplier": "Schmitt-Weissnat",
"quantity": 211,
"unit_cost": "$20.53"
}]
}
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(jsonData));
});

app.get('*', (req, res) => {
res.send('app works!');
res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {console.log('Example app listening on port 3000!');});