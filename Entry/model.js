'use strict';
module.exports = (mongoose, models) => {
  console.log('requiring Entry model');
  models.Entry = mongoose.model(
    'Entry',
    new mongoose.Schema({
      date: Date,
      text: String,
      language: String,
      vocab: [{type: mongoose.Schema.Types.ObjectId, ref: 'Vocab'}]
    })
  );

}
