import { createImageUri } from "../util";
import Friends from "./Friends";

const FriendList = () => {
  return (
    <div className="bg-slate-700 h-screen w-64 flex flex-col">
      <input
        className="text-sm m-3"
        type="text"
        placeholder="Search for a friend"
      ></input>
      <div className="font-semibold text-gray-400 float-left ml-6 mb-4 mt-1 text-lg w-full">
        <h2>
          {" "}
          <i className="fa-solid fa-user-group mr-2"></i> Friends
        </h2>
        <h2>
          {" "}
          <i className="fa-solid fa-bolt-lightning mr-5 ml-1"></i>Nitro
        </h2>
      </div>

      <div className=" font-medium text-gray-400 flex flex-col mt-1 mb-1 m-auto text-base w-full text-center ">
        <h2 className="inline-flex justify-evenly">
          Direct Messages <h2>+</h2>
        </h2>
        {Friends &&
          Friends.map((item) => (
            <div key={item.id}>
              <div className="flex float-left ml-6">
                <img
                  src={createImageUri(item.imgLocation)}
                  className="w-12 h-12 m-auto mt-2 mr-3 rounded-full"
                />
                <p className="m-auto ml-0">{item.friendName}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FriendList;
