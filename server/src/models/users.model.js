// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema(
    {
      email: { type: String, lowercase: true, unique: false },
      password: { type: String },
      name: { type: String },
      id: { type: String },
      avatar: { type: String },
      location: { type: String },
      login: { type: String }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('users', users);
};
