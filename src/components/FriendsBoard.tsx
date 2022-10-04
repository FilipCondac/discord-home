const FriendsBoard = () => {
  return (
    <div className="bg-light-dark w-1/2">
      <div className="flex font-semibold text-lg text-gray-300 ml-6 mt-2 h-8">
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
    </div>
  );
};

export default FriendsBoard;
