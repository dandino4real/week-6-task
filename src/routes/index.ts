import { responseEncoding } from "axios";
import express,{Request, Response, NextFunction} from "express"



const router = express.Router();


//Homepage

router.get('/', (req:Request, res:Response, next:NextFunction)=>{

    const token = req.cookies.token;
    const user = req.cookies.user;
    res.status(200).render('index')
})



export default router;