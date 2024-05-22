import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = { text: inputValue, completed: false };
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const toggleCompletion = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const handleFilterChange = (e) => {
    setShowCompleted(e.target.checked);
  };

  const filteredItems = showCompleted ? items.filter(item => item.completed) : items;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1>
        <div className="item-input">
          <input
            type="text"
            placeholder="Enter a new item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={handleFilterChange}
          />
          Show Completed Items
        </label>
        <ul className="item-list">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className={item.completed ? 'completed' : ''}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {item.completed ? '✔️ ' : ''}
              {item.text}
              <div className="button-container">
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                <button onClick={() => toggleCompletion(index)}>
                  {item.completed ? 'Undo' : 'Complete'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </header>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Muhammad Bintang Wibisono</p>
      </footer>
    </div>
  );
}

export default App;
