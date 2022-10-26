import Messages from "./Messages";
import { createImageUri } from "../util";

const FriendsBoard = () => {
  return (
    <div className="bg-light-dark w-1/2 min-w-min m-0 flex-col h-screen overflow-hidden">
      <div className="flex font-semibold text-lg text-gray-300 ml-6 mt-2 h-8 ">
        <h2 className="flex-inline border-r-2 pr-2 border-gray-400">
          <i className="fa-solid fa-user-group mr-2 mb-4 "></i>Friends
        </h2>
        <h2 className="flex-inline ml-4">Online</h2>
        <h2 className="flex-inline ml-4">All</h2>
        <h2 className="flex-inline ml-4">Pending</h2>
        <h2 className="flex-inline ml-4">Blocked</h2>
        <h2 className="flex-inline ml-4 bg-green-500 text-white rounded-lg pl-1 pr-1">
          Add Friend
        </h2>
      </div>
      <div className="m-3 flex">
        <input
          className="text-s mt-3 p-1 bg-dark-grey rounded  min-w-full"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="flex">
        <h2 className="  text-gray-400 flex flex-col mt-1 mb-1 m-auto ml-3 text-lg w-full">
          Online - 4
        </h2>
      </div>
      <div className=" flex-col float-left min-w-full h-screen overflow-scroll">
        {Messages &&
          Messages.map((item) => (
            <div key={item.id}>
              <hr className="m-auto ml-6 mr-6 border-gray-400"></hr>
              <div className="flex ml-3">
                <img
                  src={createImageUri(item.imgLocation)}
                  className="w-12 h-12 m-2 mt-2  rounded-full"
                />
                <p className=" ml-3 m-auto font-bold text-white text-lg">
                  {item.friendName}
                </p>
                <div className="flex-col float-right mr-6 m-auto">
                  <i className="fa-solid fa-message mr-6 text-gray-300  bg-gray-600 p-4 rounded-full"></i>
                  <i className="fa-solid fa-ellipsis-vertical mr-6 text-gray-300 bg-gray-600 p-4  rounded-full"></i>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FriendsBoard;
