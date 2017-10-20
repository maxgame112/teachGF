import React from 'react';

class Header extends React.Component {

  onChange(e) {
    var name = e.target.value;
    this.props.changeName(name);
  }

  render(){

    return (
      <div>
      <h1> This is Header {this.props.gg}</h1>
      <input onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
export default Header;
