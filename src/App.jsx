import ListOfLists from "./components/List/ListOfLists";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Container from "./components/Container/Container";
import AppProvider from "./components/App/AppProvider";
import Calendar from "./components/Calendar/Calendar";
function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <div className="app-container">
          <Calendar year={2026} month={8} />
          {/* <Container />
          <ListOfLists /> */}
        </div>
        <Footer />
      </AppProvider>
    </>
  );
}
export default App;
