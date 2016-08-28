'use strict';
module.exports = (mongoose, models) => {

  models.Entry = mongoose.model(
    'Entry',
    new mongoose.Schema({
      date: Date,
      text: String,
      language: String,
      vocab: [{mongoose.Schema.Types.ObjectId, ref: 'Vocab'}]
    })
  );

}
