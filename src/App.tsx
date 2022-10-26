import SideBar from "./components/SideBar";
import MessageList from "./components/MessageList";
import FriendsBoard from "./components/FriendsBoard";
import ActivityBar from "./components/ActivityBar";

const App = () => {
  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <div className="flex flex-row">
        <SideBar />
        <MessageList />
        <FriendsBoard />
        <ActivityBar />
      </div>
    </main>
  );
};

export default App;
