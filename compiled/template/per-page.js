'use strict';

module.exports = function (h, that) {

  var perpageValues = require('./per-page-values')(h, that);
  var hello = '';
  if (perpageValues.length > 1) {
    var id = 'VueTables__limit_' + that.id;
    // console.debug(this.getLimit().bind(that));
    var directives = [{ name: 'input', value: function value() {
        alert('ddd');
      }, modifiers: {} }];

    // on-change事件有bug，所以使用input事件代替
    return h(
      'el-select',
      {
        attrs: { value: that.limit, placeholder: '\u8BF7\u9009\u62E9' },
        on: {
          'input': function (e) {
            this.limit = e;
          }.bind(that)
        }
      },
      [perpageValues]
    );
  }

  return '';
};