'use strict';

module.exports = function (source) {
  return function (h) {

    var rows = require('./template/rows')(h, this);
    var normalFilter = require('./template/normal-filter')(h, this);
    var dropdownPagination = require('./template/dropdown-pagination')(h, this);
    var columnFilters = require('./template/column-filters')(h, this);
    var footerHeadings = require('./template/footer-headings')(h, this);
    var noResults = require('./template/no-results')(h, this);
    var pagination = require('./template/pagination')(h, this);
    var dropdownPaginationCount = require('./template/dropdown-pagination-count')(h, this);
    var headings = require('./template/headings')(h, this);
    var perPage = require('./template/per-page')(h, this);

    return h(
      'div',
      {
        directives: [{
          name: 'loading',
          value: this.loading
        }],
        'class': "VueTables VueTables--" + this.source },
      [h(
        'div',
        { 'class': "mb20 el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition" },
        [h(
          'div',
          { 'class': 'row' },
          [h(
            'div',
            { 'class': 'col-md-6' },
            [normalFilter]
          )]
        ), h(
          'div',
          { 'class': 'el-table__header-wrapper' },
          [h(
            'table',
            {
              attrs: { cellspacing: '0', cellpadding: '0', border: '0' },
              style: 'width:100%', 'class': 'el-table__header VueTables__table table ' + this.opts.skin },
            [h(
              'thead',
              null,
              [h(
                'tr',
                null,
                [headings]
              ), columnFilters]
            ), footerHeadings, h(
              'tbody',
              null,
              [noResults, rows]
            )]
          )]
        )]
      ), h(
        'div',
        null,
        [h(
          'div',
          { 'class': 'el-pagination' },
          [h(
            'span',
            {
              directives: [{
                name: 'show',
                value: parseInt(this.count)
              }],

              'class': 'el-pagination__total VuePagination__count' },
            [' \u5171', this.count, '\u6761']
          ), h(
            'span',
            { 'class': 'el-pagination__sizes' },
            [dropdownPagination, perPage]
          ), pagination]
        )]
      ), dropdownPaginationCount]
    );
  };
};
