const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const AttractionCrawlingTb = require('../../models/attractionCrawlingTb.model');
router.get('/', (req, res, next) => {
  AttractionCrawlingTb.find()
    // .select("name price _id")
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            attractionCrawlingTb: docs.map(doc => {
                return {
                    _id: doc._id,
                    attractionInfo: doc.attractionInfo,
                    status: doc.status,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/attractionCrawlingTb/' + doc._id
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
    const attractionCrawlingTb = new AttractionCrawlingTb({
      _id: new mongoose.Types.ObjectId(),
      attractionInfo: req.body.attractionInfo,
      status: req.body.status
    });
    attractionCrawlingTb.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created attractionCrawlingTb successfully',
            createdAttractionCrawlingTbId: {
                _id: result._id,
                attractionInfo: result.attractionInfo,
                status: result.status,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/attractionCrawlingTb/' + result.userId
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