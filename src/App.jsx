import { Box } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { Header } from "./components";

const App = () => (
  <>
    <Header />

    <Box as="main" flex="1 1 auto" display="flex" flexDir="column">
      <Routes>
        <Route path="*" element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<Home />} />
      </Routes>
    </Box>
  </>
);

export default App;
