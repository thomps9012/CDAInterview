var path = require("path");
var router = require("express").Router();

router.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../CDAInterview/public/contact.html"))
})

router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../CDAInterview/public/home.html"))
})

module.exports = router;