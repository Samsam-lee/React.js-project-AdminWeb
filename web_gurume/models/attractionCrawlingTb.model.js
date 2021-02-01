const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attractionCrawlingTbSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  attractionInfo: {
    attractionName: String,
    attractionAddress: String,
    attractionPhoto: { type: String, default: "../images/test.png" },
    location: {
      lat: Number,
      lng: Number
    },
    typeStore: String,
  },
  status: {type: String, default: "대기"},
}, {
  versionKey: false,
  collection: "attractionCrawlingTb"
});

const AttractionCrawlingTb = mongoose.model('attractionCrawlingTb', attractionCrawlingTbSchema);

// mongoose.model('스키마 이름','스키마 객체')
// 데이터베이스는 스키마 이름을 정해주면 이 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다.

module.exports = AttractionCrawlingTb;