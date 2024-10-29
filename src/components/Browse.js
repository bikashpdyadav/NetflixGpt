import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import SearchContainer from "./SearchContainer/SearchContainer";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import TVList from "./TVContainer/TVList";
import MenuBar from "./MenuBar";

const Browse = () => {
  const toggleSearch = useSelector((store) => store.search.ToggleSearchGPT);

  return (
    <>
      <div className="flex flex-row">
        <Header />
      </div>

      {toggleSearch ? (
        <>
          <SearchContainer />
        </>
      ) : (
        <>
          <div className="xs:hidden lg:block">
            <Sidebar />
          </div>
          <div className="xs:block lg:hidden">
            <MenuBar />
          </div>
          <div className="xs:bg-black">
            <MainContainer />
            <div className="mt-64">
              <SecondaryContainer />
            </div>
            <div className="mt-96">
              <TVList />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Browse;
