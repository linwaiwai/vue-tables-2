module.exports = function(source) {
return function(h) {

var rows = require('./template/rows')(h, this)
var normalFilter = require('./template/normal-filter')(h, this)
var dropdownPagination = require('./template/dropdown-pagination')(h, this)
var columnFilters = require('./template/column-filters')(h, this);
var footerHeadings = require('./template/footer-headings')(h, this);
var noResults = require('./template/no-results')(h, this);
var pagination = require('./template/pagination')(h, this);
var dropdownPaginationCount = require('./template/dropdown-pagination-count')(h, this);
var headings = require('./template/headings')(h, this);
var perPage = require('./template/per-page')(h, this);

return <div v-loading={this.loading} class={"VueTables VueTables--" + this.source}>
    <div class={"mb20 el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition"}>
      <div class="row">
        <div class="col-md-6">
          {normalFilter}
        </div>
      </div>

      <div class="el-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" style="width:100%" class={'el-table__header VueTables__table table ' + this.opts.skin}>
          <thead>
            <tr>
              {headings}
            </tr>
            {columnFilters}
          </thead>
          {footerHeadings}
          <tbody>
            {noResults}
            {rows}
          </tbody>
        </table>
      </div>

    </div>

    <div> 
      <div class="el-pagination">
        <span v-show={parseInt(this.count)}
        class="el-pagination__total VuePagination__count"> 共{this.count}条</span>
        <span class="el-pagination__sizes">
          {dropdownPagination}
          {perPage}
        </span>
        {pagination}
      </div>
    </div>

 
    {dropdownPaginationCount}
  </div>
}
}
