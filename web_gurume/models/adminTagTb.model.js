const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminTagTbSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  adminTag: {
    seasonTag: { type: Array, default: [ "봄", "여름", "가을", "겨울" ] },
    regionTag: { type: Array, default: [ "서울특별시", "대구광역시", "부산광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시",
    "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도" ] }
  }
}, {
  versionKey: false,
  collection: "adminTagTb"
});

const AdminTagTb = mongoose.model('adminTagTb', adminTagTbSchema);

// mongoose.model('스키마 이름','스키마 객체')
// 데이터베이스는 스키마 이름을 정해주면 이 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다.

module.exports = AdminTagTb;