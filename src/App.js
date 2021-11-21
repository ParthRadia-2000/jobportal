import Homepage from "./Components/Homepage";
import Shortlisted from "./Components/Shortlisted";
import Rejected from "./Components/Rejected";
import Applicants from "./Components/Applicants";
import SingleApplicantDetail from "./Components/SingleApplicantDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const CloseButton = ({ closeToast }) => (
    <i
      className="material-icons"
      onClick={closeToast}
    >
      delete
    </i>
  );
  return (
    <BrowserRouter>
      <div className="App">

        <ToastContainer closeButton={CloseButton} />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/applicants" element={<Applicants />}></Route>
          <Route exact path="/applicants/:id:name" element={<SingleApplicantDetail />}></Route>
          <Route exact path="/shortlisted" element={<Shortlisted />}></Route>
          <Route exact path="/rejected" element={<Rejected />}></Route>
        </Routes>
      </div>
    </BrowserRouter >

  );
}
export default App;
