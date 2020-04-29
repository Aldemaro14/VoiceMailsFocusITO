const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const serverUrl = 'https://sandbox.2600hz.com:8443/v2';
const credentials = 'NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY=';
const accountId = '4642e64040cdb8b89c310a21a07c7f62';
const vmBoxId = 'b37675a2d7b90d60f0ee5d4175502394';


router.get('/', (req, res, next) => {

    let requestUrl = `${serverUrl}/accounts/${accountId}/vmboxes/${vmBoxId}/messages?paginate=true`;
    

    console.log(requestUrl);

    const headers = {
        Authorization: `Basic ${credentials}`
    };

    fetch(requestUrl, { headers }).
        then(response => response.json()).
        then(({ data }) => 
            res.status(200).json({
                data
            })
        ).catch(console.log)
    
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PUT request to /account'
    });
});

router.get('/:vmID', (req, res, next) => {
    const id = req.params.vmId;
    if (id == 'special'){
        res.status(200).json({
            message: 'You discovered the special Id',
            ID: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
});

router.patch('/:vmID', (req, res, next) => {
    const id = req.params.vmId;
    res.status(200).json({
        message: 'Update Product',
    });
});

module.exports = router;