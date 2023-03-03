import { Route, Routes } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import { Error } from "./Pages/Error";
import HomePage from "./Pages/HomePage";
import Video from "./Pages/Video";
import { BrowserRouter } from "react-router-dom";
import Container from "./Components/Container";

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <AppNavbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/video/*"
              element={<Error message={"Video's ID Not Found"} />}
            />
            <Route path="/video/:id" element={<Video />} />
            <Route
              path="*"
              element={<Error message={"Error Happened. Please Try Again"} />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
