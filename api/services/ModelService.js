var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil')

module.exports = {

	findOne: function(req, res, cb) {

	  var Model = actionUtil.parseModel(req);
	  var pk = actionUtil.requirePk(req);

	  var query = Model.findOne(pk);
	  query = actionUtil.populateEach(query, req);
	  query.exec(function found(err, matchingRecord) {
	    if (err) return res.serverError(err);
	    if(!matchingRecord) return res.notFound('No record found with the specified `id`.');

	    if (sails.hooks.pubsub && req.isSocket) {
	      Model.subscribe(req, matchingRecord);
	      actionUtil.subscribeDeep(req, matchingRecord);
	    }

      	cb(matchingRecord, pk);

	  });

	}

};
