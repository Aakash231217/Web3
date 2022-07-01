import { Navbar, Welcome, Footer, Services, Transactions, Loader } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Loader/>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;