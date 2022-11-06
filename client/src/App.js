import './index.css';
import Dashboard from './components/views/Dashboard';
import CreateEvent from './components/views/CreateEvent';
import DetailsEvent from './components/views/DetailsEvent';
import UpdateEvent from './components/views/UpdateEvent';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">



        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/event/new" element={<CreateEvent />} />
          <Route path="/event/:id" element={<DetailsEvent />} />
          <Route path="event/update/:id" element={<UpdateEvent />} />

        </Routes>
      

    </div>
  );
}

export default App;
