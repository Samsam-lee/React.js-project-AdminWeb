const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const YtbReqTb = require("../../models/ytbReqTb.model")
const UserTb = require("../../models/userTb.model")
const YtbChannelTb = require("../../models/ytbChannelTb.model")

router.get('/', (req, res, next) => {
    YtbReqTb.find()
    .select()
    .populate('userTbId')
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            ytbReqTb: docs.map(doc => {
                return {
                    _id: doc._id,
                    ytbChannel: doc.ytbChannel,
                    ytbProfile: doc.ytbProfile,
                    ytbLinkAddress: doc.ytbLinkAddress,
                    ytbSubscribe: doc.ytbSubscribe,
                    ytbHits: doc.ytbHits,
                    userTbId: doc.userTbId,
                    userId: doc.userId,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/ytbReqTb/' + doc.ytbChannel
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

// router.get('/:userId', (req, res, next) => {
//     YtbReqTb.find({ 'userTbId.userId' : req.params.userId })
//     .populate({
//         path: '  userTbId',
//         match: {
//             userId: req.params.userId
//         },
//         select: 'nickname -_id -userId'
//     })
//     .exec()
//     .then(doc => {
//         res.status(200).json(doc)
//     }).catch(err => {
//         res.status(500).json({
//             error: err
//         });
//     });
// });

// populated 안의 값 쿼리
// router.get('/:userId', (req, res, next) => {
//     UserTb.find({
//       "userId": req.params.userId
//     }).exec()
//     .then(docs => {
//         let ids = docs.map(doc => doc.id);
//         YtbReqTb.find({
//             "userTbId": {$in:ids}
//         })
//         .populate({
//             path: 'userTbId'
//         })
//         .exec()
//         .then(docs => {
//             res.status(200).json({
//                 docs
//             }); 
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             });
//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             error: err
//         });
//     });
// });

// populated 안 값 쿼리 - 간단 버전
// router.get('/:userId', async (req, res, next) => {
//     try {
//         const docs = await UserTb.find({
//             "userId": req.params.userId
//           }).exec()

//         let ids = docs.map(doc => doc.id);

//         const data = await YtbReqTb.find({
//               "userTbId": {$in:ids}
//           })
//           .populate({
//               path: 'userTbId'
//           })
//           .exec()

//         return res.status(200).json({
//             data
//         }); 


//     } catch(e) {
//         res.status(500).json({
//             error: e
//         });
//     }
// });

// populated 내 쿼리 map 안 쓴 버전 - userId
router.get('/:userId', async (req, res, next) => {
    try {
        const docs = await UserTb.find({
            "userId": req.params.userId
          }).exec()

        // let ids = docs.map(doc => doc.id);
        let ids = ''
        docs.forEach(doc => {
            ids = doc.id;
        });

        const data = await YtbReqTb.find({
              "userTbId": {$in:ids}
          })
          .populate({
              path: 'userTbId'
          })
          .exec()

        return res.status(200).json({
            data
        }); 

    } catch(e) {
        res.status(500).json({
            error: e
        });
    }
});

// 신청 유튜버 작성
router.post('/', (req, res, next) => {
      const ytbReqTb = new YtbReqTb({
        _id: new mongoose.Types.ObjectId(),
        ytbChannel: req.body.ytbChannel,
        ytbProfile: req.body.ytbProfile,
        ytbLinkAddress: req.body.ytbLinkAddress,
        ytbSubscribe: req.body.ytbSubscribe,
        ytbHits: req.body.ytbHits,
        userTbId: req.body.userTbId,
        userId: req.body.userId
      });
      ytbReqTb.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'ytbReqTb stored',
            createdYtbReqTbTb: {
                _id: result._id,
                ytbChannel: result.ytbChannel,
                ytbProfile: result.ytbProfile,
                ytbLinkAddress: result.ytbLinkAddress,
                ytbSubscribe: result.ytbSubscribe,
                ytbHits: result.ytbHits,
                userTbId: result.userTbId,
                userId: result.userId
            },
            request: {
                type: 'POST',
                url: 'http://localhost:3000/ytbReqTb/' + result._id
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

// 신청 유튜버 승인 시 - ytbChannelTb에 입력
router.put('/:youtuber', (req, res, next) => {
    const ytbChannelTb = new YtbChannelTb({
      _id: new mongoose.Types.ObjectId(),
      ytbChannel: req.body.ytbChannel,
      ytbProfile: req.body.ytbProfile,
      ytbLinkAddress: req.body.ytbLinkAddress,
      ytbSubscribe: req.body.ytbSubscribe,
      ytbHits: req.body.ytbHits,
      userTbId: req.body.userTbId,
      userId: req.body.userId
    });
    ytbReqTb.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
          message: 'ytbReqTb stored',
          createdYtbReqTbTb: {
              _id: result._id,
              ytbChannel: result.ytbChannel,
              ytbProfile: result.ytbProfile,
              ytbLinkAddress: result.ytbLinkAddress,
              ytbSubscribe: result.ytbSubscribe,
              ytbHits: result.ytbHits,
              userTbId: result.userTbId,
              userId: result.userId
          },
          request: {
              type: 'POST',
              url: 'http://localhost:3000/ytbReqTb/' + result._id
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