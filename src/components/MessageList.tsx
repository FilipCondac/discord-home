import { useState } from "react";
import { createImageUri } from "../util";

const [messages, setMessages] = useState([
  {
    id: 1,
    imgLocation: "/chad.jpeg",
    friendName: "Gigachad",
  },
  {
    id: 2,
    imgLocation: "/chad2.jpeg",
    friendName: "Gigachadimus",
  },
  {
    id: 3,
    imgLocation: "/chad3.jpeg",
    friendName: "Gigabigachad",
  },
  {
    id: 4,
    imgLocation: "/chad4.jpeg",
    friendName: "Gigacrab",
  },
]);

const removeElement = (id: number) => {
  const newList = messages.filter((l) => l.id !== id);
  setMessages(newList);
};

const MessageList = () => {
  return (
    <div className="bg-mid-dark overflow-y-hidden overflow-x-hidden w-72 h-screen min-w-min flex flex-col">
      <input
        className="text-sm m-3 p-1 bg-dark-grey rounded"
        type="text"
        placeholder="Find or start a conversation"
      ></input>
      <div className="font-semibold text-gray-400 float-left ml-6 mb-4   mt-1 text-lg w-full">
        <h2>
          <i className="fa-solid fa-user-group mr-2 mb-4"></i> Friends
        </h2>
        <div className="flex">
          <h2 className="flex-inline">
            <i className="fa-solid fa-bolt-lightning mr-5 ml-1"></i>Nitro
          </h2>
          <p className="flex-inline text-sm ml-7 bg-gradient-to-r text-white rounded-xl p-1 from-cyan-500 to-blue-500">
            1 MONTH FREE
          </p>
        </div>
      </div>

      <div className=" font-medium text-gray-400 flex flex-col m-1 ml-2  text-base w-11/12 text-center overflow-scroll h-screen">
        <h2 className="inline-flex ml-4">
          Direct Messages <h2 className="ml-20">+</h2>
        </h2>
        {Messages.map((item) => (
          <div key={item.id} className="group">
            <div className="flex  hover:bg-gray-500 rounded w-full">
              <img
                src={createImageUri(item.imgLocation)}
                className="w-12 h-12 mt-2 mr-3  ml-3 rounded-full"
              />
              <p className="m-auto ml-1 flex w-32">{item.friendName}</p>
              <div
                className="hidden group-hover:block text-white m-auto "
                onClick={() => removeElement(item.id)}
              >
                x
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-auto inline-flex h-12 p-1  bg-strong-dark">
        <img src="/chad.jpeg" className="w-10 rounded-full"></img>
        <div className="">
          <p className="ml-2 text-base text-white">Flips</p>
          <p className="flex-col flex text-sm text-gray-400 ml-2"> #3018 </p>
        </div>
        <div className=" text-gray-400 ml-auto m-auto flex">
          <i className="fa-solid fa-microphone ml-4"></i>
          <i className="fa-solid fa-headphones ml-4"></i>
          <i className="fa-solid fa-gear ml-4"></i>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
