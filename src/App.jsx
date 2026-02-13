import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import AppProvider from "./components/App/AppProvider";
import Calendar from "./components/Calendar/Calendar";
import ListContainer from "./components/Container/ListContainer";
import { useState } from "react";
function App() {
  const month = new Date().getMonth() + 1;
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      <AppProvider setPage={setActivePage}>
        <Header />
        <ListContainer active={activePage === 0} />
        <div className="app-container">
          <Calendar year={2026} month={month} active={activePage === 1} />
        </div>

        <Footer />
      </AppProvider>
    </>
  );
}
export default App;
