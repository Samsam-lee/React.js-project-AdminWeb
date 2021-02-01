const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const UserTagTb = require('../../models/userTagTb.model');
router.get('/', (req, res, next) => {
  UserTagTb.find()
    // .select("name price _id")
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            userTagTbs: docs.map(doc => {
                return {
                    _id: doc._id,
                    userTag: doc.userTag,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/userTag/' + doc.userTag
                    }
                }
            })
        };
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const userTagTb = new UserTagTb({
        _id: new mongoose.Types.ObjectId(),
        userTag: req.body.userTag
    });
    userTagTb.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created userTagTb successfully',
            createdUserTagId: {
                _id: result._id,
                userTag: result.userTag,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/userTagTb/' + result.userTag
                }
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

// ------------------------------------------------------------