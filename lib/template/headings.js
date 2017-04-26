module.exports = function(h, that) {

 var sortControl = require('./sort-control')(h, that);

 var headings = [];

 if (that.opts.childRow) headings.push(<th></th>);

 that.allColumns.map(function(column) {
  headings.push(<th on-click={that.orderByColumn.bind(that,column)}
    class={that.sortableClass(column)}>
    <div class="VueTables__heading el-table_1_column_1 is-leaf">{that.getHeading(column, h)}</div>
    {sortControl(column)}
    </th>)
}.bind(that))

 return headings;
}
