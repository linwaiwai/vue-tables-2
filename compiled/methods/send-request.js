'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (data) {

  if (typeof _axios2.default !== 'undefined') if (this.method == 'get') {
    return _axios2.default.post(this.url, data).catch(function (e) {
      this.dispatch('error', e);
    }.bind(this));
  } else {
    return _axios2.default.get(this.url, { params: data }).catch(function (e) {
      this.dispatch('error', e);
    }.bind(this));
  }

  if (typeof this.$http !== 'undefined') return this.$http.get(this.url, { params: data }).then(function (data) {
    return data.json();
  }.bind(this), function (e) {
    this.dispatch('error', e);
  }.bind(this));

  if (typeof $ != 'undefined') return $.get(this.url, data).fail(function (e) {
    this.dispatch('error', e);
  }.bind(this));

  throw "vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource)";
};