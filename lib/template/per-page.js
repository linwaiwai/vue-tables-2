module.exports = function(h, that) {

  var perpageValues = require('./per-page-values')(h, that);
  var hello = ''
  if (perpageValues.length > 1) {
    var id = 'VueTables__limit_' + that.id;
    // console.debug(this.getLimit().bind(that));
    const directives = [
      { name: 'input', value: function(){
        alert('ddd');
      }, modifiers: {  } }
    ]

    // on-change事件有bug，所以使用input事件代替
    return <el-select value={that.limit} on-input={(function(e){
      this.limit = e;
    }).bind(that)} placeholder="请选择">
      {perpageValues}
    </el-select>
  }

  return '';
}
