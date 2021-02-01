const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attractionTbSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  attractionId: String,
  attractionInfo: {
    attractionName: String,
    attractionAddress: String,
    attractionPhoto: { type: String, default: "../images/test.png" },
    location: {
      lat: Number,
      lng: Number,
    },
    typeStore: String,
  },
  regionTag: String,
}, {
  versionKey: false,
  collection: "attractionTb"
});

const AttractionTb = mongoose.model('attractionTb', attractionTbSchema);

// mongoose.model('스키마 이름','스키마 객체')
// 데이터베이스는 스키마 이름을 정해주면 이 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다. 

module.exports = AttractionTb;