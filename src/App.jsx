import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import AppProvider from "./components/App/AppProvider";
import Calendar from "./components/Calendar/Calendar";
import ListContainer from "./components/Container/ListContainer";
import { useState } from "react";
import Loading from "./components/Miscs/Loading";
import ErrorPopup from "./components/Miscs/ErrorPopup";
import SuccessPopup from "./components/Miscs/SuccessPopup";
import Login from "./components/App/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [activePage, setActivePage] = useState(-1);

  return (
    <>
      <AppProvider
        page={activePage}
        setPage={setActivePage}
        setYear={setYear}
        setMonth={setMonth}
      >
        <Header />
        <Login />
        <div className="app-container">
          <ErrorPopup />
          <SuccessPopup />
          <Loading isActive={activePage === -1} />
          <ListContainer active={activePage === 0} />

          <Calendar year={year} month={month} active={activePage === 1} />
          <ProfileContainer active={activePage === 3} />
        </div>

        <Footer />
      </AppProvider>
    </>
  );
}
export default App;
