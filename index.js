module.exports = function (cookie_key) {
  cookie_key = cookie_key || 'csrftoken';
  return function middleware (req, res, next) {
    if (req.session && req.session._csrf) {
      res.cookie[cookie_key] = req.session._csrf;
    }
    next();
  }

}
