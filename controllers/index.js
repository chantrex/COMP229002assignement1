exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

exports.projects =  function(req, res, next) {
   res.render('projects', { title: 'Projects' });
}

exports.services =   function(req, res, next) {
    res.render('index', { title: 'Services' });
}

exports.about =  function(req, res, next) {
    res.render('index', { title: 'About Me' });
} 

exports.contact =  function(req, res, next) {
    res.render('index', { title: 'Contact me!' });
}  