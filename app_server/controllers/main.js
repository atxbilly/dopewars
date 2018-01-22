/* GET home page */
const index  = function(req, res){
  res.render('index', {title: 'International Dopewars'})
};
module.exports = {
  index
}