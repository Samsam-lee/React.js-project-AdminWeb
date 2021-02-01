const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const AdminTagTb = require('../../models/adminTagTb.model');
router.get('/', (req, res, next) => {
  AdminTagTb.find()
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            adminTagTbs: docs.map(doc => {
                return {
                    _id: doc._id,
                    adminTag: doc.adminTag,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/adminTag/' + doc.adminTag
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

// 관리자 해시태그 검색 - 지역 - 보류
router.get('/:adminTag', (req, res, next) => {
    AdminTagTb.find({
        "adminTag.regionTag" : req.params.adminTag
    })
    .exec()
    .then(docs => {
        res.status(200).json({
            docs
        }); 
    }).catch(err => {
        console.log(err);
    });
});

router.post('/', (req, res, next) => {
    const adminTagTb = new AdminTagTb({
        _id: new mongoose.Types.ObjectId(),
        adminTag: req.body.adminTag
    });
    adminTagTb.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created adminTagTb successfully',
            createdAdminTagId: {
                _id: result._id,
                adminTag: result.adminTag,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/adminTagTb/' + result.adminTag
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

// 관리자 해시태그 추가
router.patch('/insert/:newAdminTag', (req, res, next) => {
    AdminTagTb.update({ 'adminTag.regionTag': '서울특별시' }, { $push: { 'adminTag.regionTag': req.params.newAdminTag } })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'adminTagTb insert',
            request: {
                value: req.params.newAdminTag,
                request: {
                    type: 'Insert',
                    url: 'http://localhost:3000/adminTag/insert' + req.params.newAdminTag,
                }
            }
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

// 관리자 해시태그 삭제 - 보류
router.delete('/delete/:newAdminTag', (req, res, next) => {
    AdminTagTb.update({ 'adminTag.regionTag': '서울특별시' }, { $pull: { 'adminTag.regionTag': req.params.newAdminTag } })
    .exec()
    .then(result => {
        res.status(200).json({
            value: req.params.newAdminTag,
            request: {
                type: 'Delete',
                url: 'http://localhost:3000/adminTag/delete' + req.params.newAdminTag,
            }
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;