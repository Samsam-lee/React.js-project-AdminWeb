const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const YtbCrawlingTb = require('../../models/ytbCrawlingTb.model');
router.get('/', (req, res, next) => {
  YtbCrawlingTb.find()
    // .select("name price _id") 
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            ytbCrawlingTb: docs.map(doc => {
                return {
                    _id: doc._id,
                    ytbChannel: doc.ytbChannel,
                    ytbProfile: doc.ytbProfile,
                    videoCount: doc.videoCount,
                    video: doc.video,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/ytbCrawlingTb/' + doc._id
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
    const ytbCrawlingTb = new YtbCrawlingTb({
      _id: new mongoose.Types.ObjectId(),
      ytbChannel: req.body.ytbChannel,
      ytbProfile: req.body.ytbProfile,
      videoCount: doc.videoCount,
      video: req.body.video,
    });
    ytbCrawlingTb.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created ytbCrawlingTb successfully',
            createdYtbCrawlingTbId: {
                _id: result._id,
                ytbChannel: result.ytbChannel,
                ytbProfile: result.ytbProfile,
                video: result.video,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/attractionCrawlingTb/' + result._id
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

// router.get('/:userId', (req, res, next) => {
//     AttractionCrawlingTb.findOne({userId : req.params.userId})
//     // .select('name price _id')
//     .exec()
//     .then(doc => {
//         console.log("From database", doc);
//         if (doc) {
//             res.status(200).json({
//                 userTb: doc,
//                 request: {
//                     type: 'GET',
//                     url: 'http://localhost:3000/attractionCrawlingTb'
//                 }
//             });
//         } else {
//             res.status(404)
//             .json({
//                 message: "No valid entry found for userId"
//             })
//         }
//     }).catch(err => {
//         console.log(err);
//     });
// });

// router.patch('/:userId', (req, res, next) => {
//     const updateOps = {};
//     for(const ops of req.body) {
//         updateOps[ops.propName] = ops.value
//     }
//     AttractionCrawlingTb.update({userId : req.params.userId}, { $set: updateOps })
//     .exec()
//     .then(result => {
//         res.status(201).json({
//             message: 'AttractionCrawlingTb updated',
//             request: {
//                 type: 'GET',
//                 url: 'http://localhost:3000/attractionCrawlingTb' + userId
//             }
//         });
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         });
//     });
// });

// router.delete('/:userId', (req, res, next) => {
//     AttractionCrawlingTb.remove({userId : req.params.userId})
//     // const id = req.params.productId;
//     // UserTb.remove({_id: id})
//     .exec()
//     .then(result => {
//         res.status(200).json({
//             message: 'AttractionCrawlingTb deleted',
//             request: {
//                 type: 'POST',
//                 url: 'http://localhost:3000/attractionCrawlingTb/',
//                 // body: { name: 'String', price: 'Number' }
//             }
//         })
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         });
//     });
// });

module.exports = router;