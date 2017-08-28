module.exports = function(h, that) {

 var sortControl = require('./sort-control')(h, that);

 var headings = [];

 if (that.opts.childRow) headings.push(<th></th>);

 that.allColumns.map(function(column, index) {
  headings.push(<th on-click={that.orderByColumn.bind(that,column)}
    class={'is-center is-leaf el-table_column_' + index + " " + that.sortableClass(column)}>
    <div class="VueTables__heading">{that.getHeading(column, h)}</div>
    {sortControl(column)}
    </th>)
}.bind(that))

 return headings;
}
