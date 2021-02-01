const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const YtbStoreTb = require("../../models/ytbStoreTb.model")

router.get('/', (req, res, next) => {
    YtbStoreTb.find()
    .select()
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            ytbStoreTb: docs.map(doc => {
                return {
                    _id: doc._id,
                    storeInfo: doc.storeInfo,
                    regionTag: doc.regionTag,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/ytbStoreTb/' + doc._id
                    }
                }
            })
        });
        
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
      const ytbStoreTb = new YtbStoreTb({
        _id: new mongoose.Types.ObjectId(),
        storeInfo: req.body.storeInfo,
        regionTag: req.body.regionTag
      });
      ytbStoreTb.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'ytbStoreTb stored',
            createdYtbStoreTb: {
                _id: result._id,
                ytbStoreTbInfo: result.ytbStoreTbInfo,
                regionTag: result.regionTag
            },
            request: {
                type: 'POST',
                url: 'http://localhost:3000/ytbStoreTb/' + result._id
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;