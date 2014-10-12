var wt = require('../index');
function history() {
  wt.history(function (err,data) {
    if(err){
      console.warn(err);
    }else{
      console.log(data);
    }
  })
}
history();