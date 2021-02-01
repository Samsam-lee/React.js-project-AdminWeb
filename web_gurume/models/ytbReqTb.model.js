const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ytbReqTbSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ytbChannel: String,
  ytbProfile: String,
  ytbLinkAddress: String,
  ytbSubscribe: Number,
  ytbHits: Number,
  userTbId: { type: mongoose.Schema.Types.ObjectId, ref: "userTb", required: true },
  userId: String
}, {
  versionKey: false,
  collection: "ytbReqTb"
});

const YtbReqTb = mongoose.model('ytbReqTb', ytbReqTbSchema);

// mongoose.model('스키마 이름','스키마 객체')
// 데이터베이스는 스키마 이름을 정해주면 이 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다.

module.exports = YtbReqTb;