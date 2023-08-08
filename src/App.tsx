import { Outlet } from "@tanstack/router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12 bg-neutral text-neutral-content pt-12">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default App;
