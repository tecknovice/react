import Header from "./Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import List from "./List";
import Update from "./Update";

const App = (): JSX.Element => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="create" element={<Create />} />
          <Route path="list" element={<List />} />
          <Route path="update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
