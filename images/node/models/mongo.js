var mongoose    =   require("mongoose");
mongoose.connect('mongodb://mongo:27017/demoDb', function(err) {
  if (err) { throw err; }
});
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = new mongoSchema({
    "userEmail" : String,
    "userPassword" : String
});
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);