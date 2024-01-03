
import ViewAll from "./Components/ViewAll";
import AddPatient from "./Components/AddPatient";
import DeletePatient from "./Components/DeletePatient";
import SearchPatient from "./Components/SearchPatient";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<AddPatient/>}/>
  <Route path="/search"  element={<SearchPatient/>}/>
  <Route path="/delete"  element={<DeletePatient/>}/>
  <Route path="/viewAll"  element={<ViewAll/>}/>
  <Route path="*"  element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
