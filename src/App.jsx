import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import AppProvider from "./components/App/AppProvider";
import Calendar from "./components/Calendar/Calendar";
import ListContainer from "./components/Container/ListContainer";
import { useState } from "react";
function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      <AppProvider
        page={activePage}
        setPage={setActivePage}
        setYear={setYear}
        setMonth={setMonth}
      >
        <Header />
        <div className="app-container">
          <ListContainer active={activePage === 0} />
          <Calendar year={year} month={month} active={activePage === 1} />
        </div>

        <Footer />
      </AppProvider>
    </>
  );
}
export default App;
