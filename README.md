# responsive-sortable-react-table
 Fully Customizable React Table Component
 * Responsive
 * Sortable
 * Pagination

## Live Demos
 * [Site](https://ljaquel.github.io/responsive-sortable-react-table-demo/)
 * [CodeSandbox](https://ljaquel.github.io/responsive-sortable-react-table-demo/)
 
## Installation
```
    npm install responsive-sortable-react-table
```
## Usage
```
    import Table from 'responsive-sortable-react-table';
    import 'responsive-sortable-react-table/dist/style.css'

    const App = () => {

      const headers = {
        "id": "ID",
        "name": "Name",
        "email": "Email",
        "major": "Major"
      }

      const content = [
        {
            "id": "112018495",
            "name": "Jaquel",
            "email": "lj@gmail.com",
            "major": "Comp. Science"
        },
        {
            "id": "111694728",
            "name": "Joe",
            "email": "joe@gmail.com",
            "major": "Business"
        },
        {
            "id": "114729405",
            "name": "Clara",
            "email": "clara@gmail.com",
            "major": "Criminal Justice"
        }
      ]

      const handleSort = (obj) => {
        content.sort((a, b) => (a[obj.key] > b[obj.key]) ? obj.dir : -1*obj.dir)
      }

      return (
        <Table
          headers={headers}
          content={content}
          breakpoint={768}
          pageSize={4}
          onSort={(obj) => {handleSort(obj)}}
          className="my-table"
          headerClass="my-header"
          bodyClass="my-body"
          paginationClass="my-pagination"
          />
      )
    }

    export default App;
```
## Options
* content: Array of Objects | Required\
    Array of objects. Table's content array where each object maps field keys to values
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
 
## Customization
The easiest way to customize the table is to create another stylesheet to override the default styles.

Note: All cells get applied two classnames by default which are taken from the content and headers props objects:
* Given the headers prop object (key,value) pairs, which cell will get applied the corresponding key as classname
* Given the content prop object, the table takes the value of the first (key, value) pair and asssignes it to the cell as className

## Feedback - Report an Issue
Follow this [link](https://github.com/Ljaquel/responsive-sortable-react-table/issues)