var User = require('../models/user');
router.get('/node-mongodb-mongoose-user', function(req, res, next){
    res.render('node');
});

router.post('/node-mongodb-mongoose-user', function(req, res, next){
    var emailVar = req.body.emailBody;
    var userObject = new User({
        firstName: 'Bernardo',
        lastName: 'Simonassi',
        password: 'teste',
        email: emailVar
    })

    userObject.save();

    res.redirect('node-mondogb-mongoose-user');
})
