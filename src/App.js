import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "firebase/firestore";
//fetch from fir
const USERROLE = "FARMER";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        ></Route>

        <Route
          path="/farmer"
          element={
            <FarmerElement>
              <Farmer />
            </FarmerElement>
          }
        ></Route>
        <Route
          path="/retailer"
          element={
            <RetailerElement>
              <Retailer />
            </RetailerElement>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        ></Route>

        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}
function Farmer() {
  return <div>Farmer User</div>;
}
function Admin() {
  return <div>admin</div>;
}
function Retailer() {
  return <div>Retailer</div>;
}
function PublicElement({ children }) {
  return children;
}
function FarmerElement({ children }) {
  if (USERROLE === "FARMER") {
    return children;
  } else {
    return <div>NO ACCESS TO USER ROUTES</div>;
  }
}
function RetailerElement({ children }) {
  if (USERROLE === "RETAILER") {
    return children;
  } else {
    return <div>NO ACCESS TO RETAILER ROUTES</div>;
  }
}
function AdminElement({ children }) {
  if (USERROLE === "ADMIN") {
    return children;
  } else {
    return <div>NO ACCESS TO ADMIN ROUTES</div>;
    // return <Navigate to={"/"}></Navigate>;
  }
}
export default App;
