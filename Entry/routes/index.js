module.exports = (router, models) => {

  router.route('/entries')
    .post(require('./post')(models));

}
