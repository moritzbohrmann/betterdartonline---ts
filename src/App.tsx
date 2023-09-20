import Flex from "./components/@ui/Flex";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
   return (
      <Flex orientation="v" align="c" className="min-h-screen">
         <Routes>
            <Route path="/home/*" element={<Home />} />
         </Routes>
      </Flex>
   );
}

export default App;
