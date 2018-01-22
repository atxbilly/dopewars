/* GET home page */
const index  = function(req, res){
  res.render('index', {title: 'Dopewars'})
};
module.exports = {
  index
}