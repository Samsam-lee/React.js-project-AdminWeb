const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ShareFlowTb = require("../../models/shareFlowTb.model")

router.get('/', (req, res, next) => {
    ShareFlowTb.find()
    .select()
    .populate('userTbId')
    // .populate({
    //     path: 'userTbId',
    //     populate: { path: '' }
    // })
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            shareFlowTb: docs.map(doc => {
                return {
                    _id: doc._id,
                    userTbId: doc.userTbId,
                    userId: doc.userId,
                    shareTitle: doc.shareTitle,
                    shareThumbnail: doc.shareThumbnail,
                    folderTitle: doc.folderTitle,
                    adminTag: doc.adminTag,
                    userTags: doc.userTags,
                    shareDate: doc.shareDate,
                    updateDate: doc.updateDate,
                    likeup: doc.likeup,
                    hits: doc.hits,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/shareFlowTb/' + doc._id
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

// shareFlowTb에서 제목으로 검색
router.get('/title/:flowTitle', (req, res, next) => {
    ShareFlowTb.find({shareTitle : req.params.flowTitle})
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// shareFlowTb에서 아이디로 검색
router.get('/id/:userId', (req, res, next) => {
    ShareFlowTb.find({userId : req.params.userId})
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// shareFlowTb에서 지역으로 검색
router.get('/region/:regionTag', (req, res, next) => {
    ShareFlowTb.find({"adminTag.regionTag" : req.params.regionTag})
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
      const shareFlowTb = new ShareFlowTb({
        _id: new mongoose.Types.ObjectId(),
        userTbId: req.body.userTbId,
        userId: req.body.userId,
        shareTitle: req.body.shareTitle,
        shareThumbnail: req.body.shareThumbnail,
        folderTitle: req.body.folderTitle,
        adminTag: req.body.adminTag,
        userTags: req.body.userTags,
        shareDate: req.body.shareDate,
        updateDate: req.body.updateDate,
        likeup: req.body.likeup,
        hits: req.body.hits,
      });
      shareFlowTb.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'shareFlowTb stored',
            createdShareFlowTb: {
                _id: result._id,
                userTbId: result.userTbId,
                userId: result.userId,
                shareTitle: result.shareTitle,
                shareThumbnail: result.shareThumbnail,
                folderTitle: result.folderTitle,
                adminTag: result.adminTag,
                userTags: result.userTags,
                shareDate: result.shareDate,
                updateDate: result.updateDate,
                likeup: result.likeup,
                hits: result.hits,
            },
            request: {
                type: 'POST',
                url: 'http://localhost:3000/shareFlowTb/' + result._id
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