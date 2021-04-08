import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';

function App() {
  const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];
  return (
    <div className="App">
      <ComponentA property = {rooms} />
    </div>
  );
}

export default App;
