import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  VideoDetails,
  ChannelDetails,
  Feed,
  SearchFeed,
} from "./components";

const App = () => {
    return (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#a13434" }}>
      <Navbar />
      <div>one</div>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
    );
};
export default App;