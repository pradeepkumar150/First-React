import React from 'react';
class Content extends React.Component {

	constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <Header/>
            <ul className="userlist">
                  {this.state.data.map((user) => <TableRow
                     userdata = {user} />)}
            </ul>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <li style={{color:'green'}} id={this.props.userdata.id}>{this.props.userdata.id} {this.props.userdata.name} {this.props.userdata.age}</li>
      );
   }
}
export default Content;