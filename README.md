# responsive-sortable-react-table
 Fully Customizable React Table Component\
 * Responsive
 * Sortable
 * Pagination
## Installation
```
    npm install responsive-sortable-react-table
```
## Usage
```
    import Table from 'responsive-sortable-react-table';
    import 'responsive-sortable-react-table/dist/style.css'

    <Table {options...} />
```
## Options
* content: Array of Objects | Required\
    Table's content array where each object maps field keys to values
* headers: Object\
    Object mapping field keys to the label you want to be displayed for on that field's column header
* className: String\
    Class name for the table component. This will be inserted to the table html tag
* breakpoint: Number\
    Number in 'px'. Determines breakpoint for the desktop-mobile layout transition of the table
* onSort: Function\
    Function to be called whenever user clicks a header for sorting. This function will be provided an object with the two following fields, 'key' and 'dir'. Please make use fo those for your sorting algorithm. 'key' contains the key field the user clicked on while 'dir' contains the direction of the sorting which is either 1 or -1.
* sortDir: Number 1 | -1\
    You can provide a sorting direction you want to be the table to be displayed on by default
* sortKey: String\
    sortKey takes the string which determines which key field should be sorted by default
* headerClass: String\
    Class name applied to head tag
* bodyClass: String\
    Class name applied to body tag
* paginationClass: String\
    Class name applied to pagination container
* pageSize: Number\
    Maximum number of rows per page
 
## Styling
Following, there are examples on how to further style individual table cells, rows or columns by making use of the table class selector\
Note that all cells get applied two classnames by default which are the column the pertain to and an ID which identifies its row

Specific row
```
._112479392 {
  background-color: #858585;
}
```
Specific column
```
.email {
  background-color: #858585;
}
```
Specific cell
```
._112067971 td.major {
  background-color: white;
}
```
All content cells or all header cells:
```
.my-table th {
  padding: 10px;
}

.my-table td {
  padding: 10px;
}
```
All content cells under an specific column
```
.my-body td.credits {
  background-color: #868686;
}
```
Pagination links
```
.my-pagination a {
  background-color: #868686;
}
```