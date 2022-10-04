import SideBar from "./components/SideBar";
import MessageList from "./components/MessageList";
import FriendsBoard from "./components/FriendsBoard";

const App = () => {
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-row">
        <SideBar />
        <MessageList />
        <FriendsBoard />
      </div>
    </main>
  );
};

export default App;
