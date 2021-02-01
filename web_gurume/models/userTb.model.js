const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userTbSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  social: String,
  nickname: String,
  photoUrl: String,
  shareCount: Number,
  memo: { type:String, default: '' },
  folders: [
    {
      folderTitle: String,
      createDate: Date,
      updateDate: Date,
      stores: [
        {
          ytbStoreTbId: { type: mongoose.Schema.Types.ObjectId, ref: 'ytbStoreTb' },
          attractionTbId : { type: mongoose.Schema.Types.ObjectId, ref: 'attractionTb' },
          storeId: String,
          typeStore: String
        }
      ]
    }
  ]
}, {
  versionKey: false,
  collection: "userTb"
});

const UserTb = mongoose.model('userTb', userTbSchema);

// mongoose.model('스키마 이름','스키마 객체')
// 데이터베이스는 스키마 이름을 정해주면 이 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다.

module.exports = UserTb;