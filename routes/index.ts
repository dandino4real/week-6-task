
import express,{Request, Response, NextFunction} from 'express'
import createDb from '../services/createDb';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  createDb(`${__dirname}/db.json`)
  res.render('index', { title: 'Express' });
});

module.exports = router;
