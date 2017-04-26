'use strict';

module.exports = function (h, that) {
  var perpageValues = [];

  that.opts.perPageValues.every(function (value) {
    var isLastEntry = value >= that.count;
    var selected = that.limit == value || isLastEntry && that.limit > value;
    // perpageValues.push(<option value={value} selected={selected}>{value}</option>)
    perpageValues.push(h(
      'el-option',
      {
        attrs: { label: value + '条/页', value: value }
      },
      []
    ));
    return !isLastEntry;
  });

  return perpageValues;
};