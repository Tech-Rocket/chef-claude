import { useState } from "react";
import ChefClaudeIcon from "../../../public/images/chef-claude-icon.png";
import { FaStar, FaRegStar } from "react-icons/fa";

const Challenge = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+23134759847854",
    email: "john@gmail.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      isFavorite: !prevUserInfo.isFavorite,
    }));
  }

  let starIcon = userInfo.isFavorite ? (
    <FaStar className="text-2xl" />
  ) : (
    <FaRegStar className="text-2xl" />
  );
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white font-medium">
      <div className=" bg-white rounded-xl p-4 w-[300px] text-slate-800">
        <div className="flex items-center justify-center mb-2 ">
          <div className="flex items-center justify-center bg-blue-400 h-32 w-32 rounded-full">
            <img src={ChefClaudeIcon} />
          </div>
        </div>
        <button
          onClick={toggleFavorite}
          aria-pressed={userInfo.isFavorite}
          aria-label={starIcon ? "Add to favorites" : "Remove from favorites"}
        >
          {starIcon}
        </button>
        <h1 className="text-2xl font-bold my-2">
          {userInfo.firstName} {userInfo.lastName}
        </h1>
        <p className="mb-1 tracking-wide">{userInfo.phone}</p>
        <p className="tracking-wide">{userInfo.email}</p>
      </div>
    </main>
  );
};

export default Challenge;
