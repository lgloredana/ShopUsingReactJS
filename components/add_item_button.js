
'use strict';

const e = React.createElement;

class AddItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You clicked add button.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      '+ Add Product'
    );
  }
}

const domContainer = document.querySelector('#add_item_button_container');
ReactDOM.render(e(AddItemButton), domContainer);