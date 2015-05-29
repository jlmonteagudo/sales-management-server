/**
* SaleLine.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    product: {
      model: 'Product'
    },
    quantity: 'integer',
    price: 'float',
    sale: {
      model: 'Sale'
    },
    getAmount: function() {
      return this.price * this.quantity;
    }
  }  
  
};
