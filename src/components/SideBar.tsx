import ServerImages from "./ServerImages";
const SideBar = () => {
  return (
    <div className="bg-dark-grey w-16 overflow-auto left-0 flex flex-col">
      <div className="place-content-centre flex flex-col mt-6">
        <img
          src="/messageIcon.png"
          className="rounded-xl w-12 m-auto mt-0 mb-2"
        />
        <hr className="w-10 m-auto border-light-dark"></hr>
        {ServerImages &&
          ServerImages.map((item) => (
            <div key={item.id}>
              <img src={item.location} className="w-12 m-auto mt-4"></img>
            </div>
          ))}
        <i className="fa-solid fa-plus  m-auto mt-4 bg-light-dark p-4 rounded-full text-green-600"></i>
        <i className="fa-solid fa-compass m-auto mt-4 bg-light-dark p-4 rounded-full text-green-600"></i>
      </div>
    </div>
  );
};

export default SideBar;
