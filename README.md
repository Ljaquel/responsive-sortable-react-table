# responsive-sortable-react-table
 Fully Customizable React Table Component
 * Responsive
 * Sortable
 * Pagination

## Live Demos
 * [Site](https://ljaquel.github.io/responsive-sortable-react-table-demo/)
 * [CodeSandbox](https://codesandbox.io/s/keen-framework-8qlpf?file=/src/App.js&resolutionWidth=973&resolutionHeight=757)

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
* paginationClass: String\
    Class name applied to pagination container
* pageSize: Number\
    Maximum number of rows per page

## Sorting
Sorting feature gets activated when you provide the sorting function prop (onSort). That function will be called whenever user clicks a header for sorting. This function will be provided an object with the two following fields, 'key' and 'dir'. Please make use fo those for your sorting algorithm. 'key' contains a string which represents the key field the user clicked on while 'dir' contains the direction of the sorting which is either 1 or -1.
 
## Customization
The easiest way to customize the table is to create another stylesheet to override the default styles.

User can provide custom class names for the table and the pagination container separately. Follow the 'options' sections for specific directions. Note that classNames are not required for customization since both the table and pagination container already have default class names, which are: 'responsive-sortable-react-table' and 'responsive-sortable-react-table-pagination' respectively.

User can further customize the header and body tags by using css tag selectors. For example: assume 'my-table' is the custom class you provided then you could do: '.my-table tbody { }', '.my-table td {}' etc...

#### Customizing Specific Cells, Rows or Columns
All cells get applied two classnames by default behavior. Those two are taken from the content and headers props objects user provides to the component:
* Given the headers prop object (key,value) pairs, each cell will get applied the corresponding key as classname
* Given the content prop object, the table takes the value of the first (key, value) pair and asssignes it to the cell as className
For Example: Following the data from the 'Usage' section, the second cell would have the following classname by default: '112018495 name' 

#### Customizing Sorting and Pagination Icons
Color Customization:
```
  .responsive-sortable-react-table g {
    fill: rgb(255, 255, 255)
  }

  .responsive-sortable-react-table-pagination g {
    fill: rgb(255, 255, 255)
  }
```
Size and Related Properties:
```
  .responsive-sortable-react-table svg {
    width: 10px;
  }
```

## Feedback - Report an Issue
Follow this [link](https://github.com/Ljaquel/responsive-sortable-react-table/issues)