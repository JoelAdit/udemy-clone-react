import Navbar from "./components/Navbars";
import Categories from "./components/Categorie";
import Saleimage from "./components/Saleimage";
import Recommended from "./components/Recommended";
import Topic from "./components/Topic";
import Papular from "./components/Papular";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Saleimage></Saleimage>
      <Recommended></Recommended>
      <Topic></Topic>
      <Papular></Papular>
      <Footer></Footer>
    </div>
  );
}

export default App;
