const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const AttractionTb = require("../../models/attractionTb.model")

router.get('/', (req, res, next) => {
    AttractionTb.find()
    .select()
    .populate('adminTagTbId')
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            attractionTb: docs.map(doc => {
                return {
                    _id: doc._id,
                    attractionInfo: doc.attractionInfo,
                    regionTag: doc.regionTag,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/attractionTb/' + doc._id
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
      const attractionTb = new AttractionTb({
        _id: new mongoose.Types.ObjectId(),
        attractionInfo: req.body.attractionInfo,
        regionTag: req.body.regionTag
      });
      attractionTb.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'attractionTb stored',
            createdAttractionTb: {
                _id: result._id,
                attractionInfo: result.attractionInfo,
                regionTag: result.regionTag
            },
            request: {
                type: 'POST',
                url: 'http://localhost:3000/attractionTb/' + result._id
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