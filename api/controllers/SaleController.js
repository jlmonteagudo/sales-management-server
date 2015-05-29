/**
 * SaleController
 *
 * @description :: Server-side logic for managing Sales
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	findOne: function (req, res) {
		ModelService.findOne(req, res, function(matchingRecord, pk) {

			SaleLine.find()
				.where({sale: pk})
				.populate('product')
				.exec(function(err, lines){
					if (err) return res.serverError(err);
					matchingRecord.lines = lines;
					res.send(matchingRecord);
				});
			
		});
	}

};

