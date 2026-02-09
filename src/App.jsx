import ListOfLists from "./components/List/ListOfLists";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Container from "./components/Container/Container";
import AppProvider from "./components/App/AppProvider";
function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <div className="app-container">
          <Container />
          <ListOfLists />
        </div>

        <Footer />
      </AppProvider>
    </>
  );
}
export default App;
