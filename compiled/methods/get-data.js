'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var merge = require('merge');

module.exports = function (promiseOnly) {
  var _send;

  var keys = this.opts.requestKeys;

  var send = (_send = {}, _defineProperty(_send, keys.query, this.query), _defineProperty(_send, keys.limit, this.limit), _defineProperty(_send, keys.orderBy, this.orderBy.column), _defineProperty(_send, keys.ascending, this.orderBy.ascending ? 1 : 0), _defineProperty(_send, keys.page, this.page), _defineProperty(_send, keys.byColumn, this.opts.filterByColumn ? 1 : 0), _send);

  var data = {};
  for (var key in send) {
    if (send[key] != '') {
      if (!this.opts.orderBy && (key == keys.orderBy || key == keys.ascending)) {
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

  return promise.then(function (response) {

    var data = this.getResponseData(response);

    return this.setData(this.opts.responseAdapter(data));
  }.bind(this));
};