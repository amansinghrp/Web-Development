const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user == 'aman'){
        req.user = {name:'Aman', id:1}
        next();
    }
    else if(user == 'aakriti'){
        req.user = {name:'Aakriti', id:2}
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
}

module.exports = authorize;