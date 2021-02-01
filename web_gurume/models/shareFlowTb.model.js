const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shareFlowTbSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userTbId: { type: mongoose.Schema.Types.ObjectId, ref: 'userTb' },
  userId: String,
  shareTitle: String,
  shareThumbnail: String,
  folderTitle: String,
  adminTag: {
    seasonTag: String,
    regionTag: Array,
  },
  userTags: Array,
  shareDate: Date,
  updateDate: Date,
  likeUp: Number,
  hits: Number
}, {
  versionKey: false,
  collection: "shareFlowTb"
});

const ShareFlowTb = mongoose.model('shareFlowTb', shareFlowTbSchema);

// mongoose.model('스키마 이름','스키마 객체')
// 데이터베이스는 스키마 이름을 정해주면 이 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다.

module.exports = ShareFlowTb;