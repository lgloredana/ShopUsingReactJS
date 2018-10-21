
'use strict';

class AddItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You clicked add button.';
    }

    return (
      <button onClick={() => this.setState({ clicked: true }) }>
        + Add Products
      </button>
    );
  }
}

let domContainer = document.querySelector('#add_item_button_container');
ReactDOM.render(<AddItemButton />, domContainer);