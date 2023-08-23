import React, { useState, useEffect } from 'react';

/**
 * A functional component that renders a list of items and allows filtering and selection of items.
 */
function ExampleFunctionalComponent() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        // Simulate an API call to fetch data
        setTimeout(() => {
            setItems([
                { id: 1, name: 'Item 1', image: '/images/item1.jpg' },
                { id: 2, name: 'Item 2', image: '/images/item2.jpg' },
                { id: 3, name: 'Item 3', image: '/images/item3.jpg' },
                // ... more items
            ]);
            setIsLoading(false);
        }, 1000);
    }, []);

    function navigateToDetails() {
        // Placeholder for navigating to a detailed view
        alert("Navigating to item details page!");
    }

    function handleInputChange(e) {
        setFilter(e.target.value);
    }

    function handleItemSelect(item) {
        setSelectedItem(item);
    }

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <input
                        type="text"
                        value={filter}
                        onChange={handleInputChange}
                        placeholder="Filter items..."
                    />
                    <ul>
                        {filteredItems.map(item => (
                            <li key={item.id} onClick={() => handleItemSelect(item)}>
                                <img src={item.image} alt={item.name} width="50" height="50" />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    {selectedItem && (
                        <div>
                            <h2>Selected Item</h2>
                            <p>{selectedItem.name}</p>
                            <button onClick={navigateToDetails}>View Details</button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default ExampleFunctionalComponent;
