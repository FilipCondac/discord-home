const ActivityBar = () => {
  return (
    <div className="bg-light-dark m-0 w-1/3 flex-col">
      <div className="flex m-3 text-2xl text-gray-400 w-full justify-end">
        <i className="fa-solid fa-message border-r-2 mr-6 pr-5 border-gray-400"></i>
        <i className="fa-solid fa-inbox mr-6"></i>
        <i className="fa-solid fa-circle-question mr-10 "></i>
      </div>
      <div className="flex-col m-auto">
        <h1 className="font-semibold text-xl text-white m-3 mt-8">
          Active now
        </h1>
        <div>
          <h2 className="text-white font-semibold text-center">
            It's quiet for now...
          </h2>
          <p className="text-gray-400 text-center w-72 text-sm m-auto">
            When a friend start an activity - like playing a game or hanging out
            on a voice channel - we'll show it here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
