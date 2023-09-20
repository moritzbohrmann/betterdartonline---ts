import Flex from "../components/@ui/Flex";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import lobbySlice from "../redux/reducers/lobby/lobbySlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Filter, Lobby, Newsletter, Profile, Tournaments } from "../components/home/_index";
import { SearchProvider } from "../contexts/search/SearchContext";

type Props = {};

const Home = ({}: Props) => {
   const store = configureStore({
      reducer: {
         lobby: lobbySlice,
      },
   });

   return (
      <Provider store={store}>
         <Navigation />
         <Flex orientation="v" justify="c" align="c" className="mb-2">
            <Flex orientation="w" justify="c" align="c" stretchY>
               <Flex orientation="v" align="c" justify="c" className="">
                  <Profile />
                  <SearchProvider>
                     <Filter />
                  </SearchProvider>
               </Flex>
               <Lobby />
               <Tournaments />
            </Flex>
            <Newsletter />
         </Flex>
         <Routes>
            <Route path="menu" element={<Sidebar />} />
         </Routes>
      </Provider>
   );
};

export default Home;
