import React from 'react';

/**
 * A class component that renders a list of items and allows filtering and selection of items.
 * @extends React.Component
 */
class ExampleClassComponent extends React.Component {
    /**
     * Creates an instance of ExampleClassComponent.
     * @param {Object} props - The props object passed down from the parent component.
     */
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: true,
            filter: '',
            selectedItem: null,
        };

        // Bind event handlers to the component instance
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
    }

    /**
     * Simulates an API call to fetch data and updates the component state with the fetched data.
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                items: [
                    { id: 1, name: 'Item 1' },
                    { id: 2, name: 'Item 2' },
                    { id: 3, name: 'Item 3' },
                    // ... more items
                ],
                isLoading: false,
            });
        }, 1000);
    }

    /**
     * Filters the list of items based on the current filter value in the component state.
     * @param {Object} prevProps - The previous props object.
     * @param {Object} prevState - The previous state object.
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.filter !== this.state.filter) {
            // Some filter logic, e.g., an API call or in-memory filtering
        }
    }

    /**
     * Updates the component state with the current filter value.
     * @param {Object} e - The input change event object.
     */
    handleInputChange(e) {
        this.setState({
            filter: e.target.value,
        });
    }

    /**
     * Updates the component state with the selected item.
     * @param {Object} item - The selected item object.
     */
    handleItemSelect(item) {
        this.setState({
            selectedItem: item,
        });
    }

    /**
     * Renders the component UI.
     * @returns {JSX.Element} The component UI.
     */
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
                            {item.name}
                        </li>
                    ))}
                </ul>
                {this.state.selectedItem && (
                    <div>
                        <h2>Selected Item</h2>
                        <p>{this.state.selectedItem.name}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default ExampleClassComponent;
