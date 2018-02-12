"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.table.model.Abstract": {
        "load": true,
        "construct": true
      },
      "qx.lang.Type": {}
    },
    "extends": "qx.ui.table.model.Abstract",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qxc.restful.widget.table.model.Simple", {
    extend: qx.ui.table.model.Abstract,

    /**
     *
     * @param apiCollection {Promise} A promise returning an restful.js Collection.
     * @param columns {Array} Array of columns.
     * [
     *  {field: "name", name: "Name", sortable: true, editable: false},
     *  {field: "username", name: "Username", sortable: true, editable: false},
     *  {field: "email", name: "E-Mail", sortable: true, editable: false},
     *  {field: ["company", "name"], name: "Company", sortable: true, editable: false}
     * ]
     * @param putField {String} Field name for put urls.
     */
    construct: function construct(apiCollection, columns, putField) {
      qx.ui.table.model.Abstract.constructor.call(this);

      this._apiCollection = apiCollection;
      this._putField = putField;

      this._columns = columns;

      var columnIds = [];
      var columnNames = [];

      columns.forEach(function (column) {
        columnIds.push(column.field);
        columnNames.push(column.name);
      });

      this.setColumns(columnNames, columnIds);

      this._sortColumnIndex = -1;
      this._sortAscending = true;

      this._dataLoading = false;
      this._rowCount = -1;
    },

    members: {
      /* Construct params */
      _apiCollection: null,
      _columns: null,
      _putField: null,

      /* _loadData result/loading indicator */
      _data: null,
      _dataLoading: null,
      _rowCount: null,

      /* Sorting */
      _sortColumnIndex: null,
      _sortIsAscending: null,

      _loadData: function _loadData() {
        this._data = null;
        this._dataLoading = true;
        this._apiCollection.then(function (api) {
          api.getAll().then(function (response) {
            var data = response.body();

            this._data = data;
            var rowsLength = data.length;
            this._rowCount = Number(rowsLength);
            this._dataLoading = false;

            var changedData = {
              firstRow: 0,
              lastRow: rowsLength - 1,
              firstColumn: 0,
              lastColumn: this.getColumnCount() - 1
            };
            this.fireDataEvent("dataChanged", changedData);
          }.bind(this));
        }.bind(this));
      },

      getRowCount: function getRowCount() {
        if (!this._data) {
          if (!this._dataLoading) {
            this._loadData();
          }
          return null;
        }

        return this._rowCount;
      },

      getRowData: function getRowData(rowIndex) {
        if (!this._data) {
          if (!this._dataLoading) {
            this._loadData();
          }

          return null;
        }

        return this._data[rowIndex].data();
      },

      isColumnEditable: function isColumnEditable(columnIndex) {
        return this._columns[columnIndex].editable;
      },

      isColumnSortable: function isColumnSortable(columnIndex) {
        return this._columns[columnIndex].sortable;
      },

      sortByColumn: function sortByColumn(columnIndex, ascending) {
        if (!this._data) {
          return;
        }

        if (this._sortColumnIndex === columnIndex && this._sortAscending === ascending) {
          return;
        }

        this._sortColumnIndex = columnIndex;
        this._sortAscending = ascending;

        // temporary array holds objects with position and sort-value
        var mapped = this._data.map(function (el, i) {
          return { index: i, value: this.getValue(columnIndex, i) };
        });

        // sorting the mapped array containing the reduced values
        mapped.sort(function (a, b) {
          return +Number(a.value > b.value) || +Number(a.value === b.value) - 1;
        });

        // container for the resulting order
        var result = mapped.map(function (el) {
          return this._data[el.index];
        });

        // Sort Descending?
        if (!ascending) {
          result.reverse();
        }

        // Update this._data with the result
        this._data = result;

        this.fireDataEvent("sorted", {});

        // Inform the listeners
        this.fireEvent("metaDataChanged");
      },

      getSortColumnIndex: function getSortColumnIndex() {
        return this._sortColumnIndex;
      },

      isSortAscending: function isSortAscending() {
        return this._sortAscending;
      },

      /**
       * @param columnIndex {Integer}
       * @param rowIndex {Integer}
       */
      getValue: function getValue(columnIndex, rowIndex) {
        var rowData = this.getRowData(rowIndex);

        if (rowData === null) {
          return null;
        }

        var columnId = this.getColumnId(columnIndex);
        if (qx.lang.Type.isArray(columnId)) {
          columnId.forEach(function (ccId) {
            rowData = rowData[ccId];
          });
          return rowData;
        }

        return rowData[columnId];
      },

      /**
       * @param columnIndex {Integer}
       * @param rowIndex {Integer}
       * @param value {var} The new value.
       */
      setValue: function setValue(columnIndex, rowIndex, value) {
        var rowData = this.getRowData(rowIndex);

        var columnId = this.getColumnId(columnIndex);
        if (qx.lang.Type.isArray(columnId)) {
          var columnData = rowData;
          var columnIdLength = columnId.length - 1;
          var i = 0;
          for (i = 0; i < columnIdLength; i++) {
            columnData = columnData[columnId[i]];
          }
          columnData[i + 1] = value;
        } else {
          rowData[columnId] = value;
        }

        this._data[rowIndex].save().bind(this).then(function () {
          var changedData = {
            firstRow: rowIndex,
            lastRow: rowIndex,
            firstColumn: columnIndex,
            lastColumn: columnIndex
          };
          this.fireDataEvent("dataChanged", changedData);
        });
      }
    }
  });
  qxc.restful.widget.table.model.Simple.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Simple.js.map