var merge = require('merge');

module.exports = function(promiseOnly) {

  var keys = this.opts.requestKeys;

  var send =  {
    [keys.query]:this.query,
    [keys.limit]:this.limit,
    [keys.orderBy]:this.orderBy.column,
    [keys.ascending]: this.orderBy.ascending?1:0,
    [keys.page]:this.page,
    [keys.byColumn]:this.opts.filterByColumn?1:0
  };

  var data = {};
  for(var key in send){
    if (send[key] != '') {
      if (!this.opts.orderBy &&  (key == keys.orderBy || key == keys.ascending)) {
        continue;
      }
      data[key] = send[key];
    };
  }    
  
  console.debug(data);
  data = merge(data, this.opts.params, this.customQueries);

  this.dispatch('loading', data);

  var promise = this.sendRequest(data);

  if (promiseOnly) return promise;

  return promise.then(function(response) {

    let data = this.getResponseData(response);

     return this.setData(this.opts.responseAdapter(data));
  }.bind(this));


}
