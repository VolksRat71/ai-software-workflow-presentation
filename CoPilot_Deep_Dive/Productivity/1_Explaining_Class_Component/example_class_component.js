import React from 'react';

class ExampleClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
      filter: '',
      selectedItem: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.navigateToDetails = this.navigateToDetails.bind(this);
  }

  componentDidMount() {
    // Simulate an API call to fetch data
    setTimeout(() => {
      this.setState({
        items: [
          { id: 1, name: 'Item 1', image: '/images/item1.jpg' },
          { id: 2, name: 'Item 2', image: '/images/item2.jpg' },
          { id: 3, name: 'Item 3', image: '/images/item3.jpg' },
          // ... more items
        ],
        isLoading: false,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      // Some filter logic, e.g., an API call or in-memory filtering
    }
  }

  handleInputChange(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  handleItemSelect(item) {
    this.setState({
      selectedItem: item,
    });
  }

  navigateToDetails() {
    // For now, this will be a placeholder. When integrating with Next.js, this will navigate using 'Link'
    alert("Navigating to item details page!");
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    const filteredItems = this.state.items.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.handleInputChange}
          placeholder="Filter items..."
        />
        <ul>
          {filteredItems.map(item => (
            <li key={item.id} onClick={() => this.handleItemSelect(item)}>
              <img src={item.image} alt={item.name} width="50" height="50" />
              {item.name}
            </li>
          ))}
        </ul>
        {this.state.selectedItem && (
          <div>
            <h2>Selected Item</h2>
            <p>{this.state.selectedItem.name}</p>
            <button onClick={this.navigateToDetails}>View Details</button>
          </div>
        )}
      </div>
    );
  }
}

export default ExampleClassComponent;
