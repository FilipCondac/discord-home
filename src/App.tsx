import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import FriendList from "./components/FriendList";

const App = () => {
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-row">
        <SideBar />
        <FriendList />
      </div>


    </main>
  );
};

export default App;
