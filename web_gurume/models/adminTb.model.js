const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminTbSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  password: String,
  nickname: String
}, {
  versionKey: false,
  collection: "adminTb"
});

const AdminTb = mongoose.model('adminTb', adminTbSchema);

// mongoose.model('스키마 이름','스키마 객체')
// 데이터베이스는 스키마 이름을 정해주면 이 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다.

module.exports = AdminTb;