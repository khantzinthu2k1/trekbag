import BackgroundHeading from "./layout/BackgroundHeading";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ItemList from "./layout/ItemList";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
