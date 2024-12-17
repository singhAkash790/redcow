import React from 'react'

class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {addClass: false}
    }
    toggle() {
      this.setState({addClass: !this.state.addClass});
    }
    render() {
      let boxClass = ["nav-toggle"];
      if(this.state.addClass) {
        boxClass.push('open');
      }
      return(
          <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
              <span></span>
              <span></span>
          </div>       
      );
    }
  }
  export default Menu;


