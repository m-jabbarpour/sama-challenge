import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Info from "./pages/Info";
import Address from "./pages/Address";
import Bank from "./pages/Bank";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FieldsProvider } from "./context/FieldsContext";
import Register from "./pages/Register";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const queryClient = new QueryClient();

  return (
    <FieldsProvider>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>
                {/* <Route path="/" element={<Layout />}> */}
                {/* <Route index element={<Home />} /> */}
                <Route path="/info" element={<Info />} />
                <Route path="/address" element={<Address />} />
                <Route path="/bank" element={<Bank />} />
                <Route path="/register" element={<Register />} />
                {/* </Route> */}
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </FieldsProvider>
  );
}

export default App;
