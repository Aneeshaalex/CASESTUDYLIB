const express =  require('express');
const signupRouter = express.Router();
// const bodyParser = require('body-parser')
// const { check, validationResult } = require('express-validator')


function routerss(navs){

    
    // const urlencodedParser = bodyParser.urlencoded({ extended: false })
   
    
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            navs,
             title: 'Library',
           
            });
    });


   




    signupRouter.get('/welcome',function(req,res){
        const id = req.params.id
        res.render("welcome",{
            navss:[{link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/addbook',name:'Addbook'},
            {link:'/',name:'Logout'}],
            title: 'Library',
            
    
    
        })
    })



    // signupRouter.post('/', urlencodedParser, [
    //     check('username', 'This username must me 3+ characters long')
    //         .exists()
    //         .isLength({ min: 3 }),
    //     check('email', 'Email is not valid')
    //         .isEmail()
    //         .normalizeEmail()
    // ], (req, res)=> {
    //     const errors = validationResult(req)
    //     if(!errors.isEmpty()) {
    //         // return res.status(422).jsonp(errors.array())
    //         const alert = errors.array()
    //         res.render('signup', {
    //             alert
    //         })
    //     }
    // })
    
 
    return signupRouter;

}


module.exports = routerss;