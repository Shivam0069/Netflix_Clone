import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";
import HeaderItem, { HeaderListHover } from "./HeaderItem";
import { changeSelected } from "../utils/headerSlice";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();

  const isLoggedIn = auth.currentUser;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  const HeaderItems = [
    {
      title: "Home",
    },
    {
      title: "TV Shows",
    },
    {
      title: "Movies",
    },
    {
      title: "New & Popular",
    },
    {
      title: "My List",
    },
    {
      title: "Browse by Languages",
    },
  ];
  return (
    <div className="bg-black/50 w-full mx-auto flex items-center justify-between fixed top-0 h-20  z-20 text-white ">
      <div className="flex items-center ml-16 ">
        <Link to="/">
          <img
            src={logo}
            alt="netflix"
            className="flex flex-shrink-0 h-10 w-20 mr-5 hover:scale-125 transition-transform duration-300 hover:brightness-125 "
          />
        </Link>
        {isLoggedIn &&
          HeaderItems.map((item) => (
            <HeaderItem key={item.title} title={item.title} />
          ))}
      </div>
      {isLoggedIn && (
        <div className="flex items-center space-x-4 mr-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 hover:scale-105 cursor-pointer hidden sm:inline"
          >
            <path
              fill="#FFFFFF"
              d="M20.87 20.17l-5.59-5.59A6.956 6.956 0 0017 10c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 0011.58 5.29l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
            ></path>
          </svg>
          <p className="text-sm brightness-75 hover:scale-105 cursor-pointer hidden sm:inline">
            Children
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 hover:scale-105 cursor-pointer hidden sm:inline "
          >
            <path
              fill="#FFFFFF"
              d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42l-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"
            ></path>
          </svg>
          <div className="relative">
            <div
              className="h-10 w-10 rounded-full flex m-auto relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <img
                className="h-9 w-9 rounded-full hover:scale-125 transition-all duration-200 cursor-pointer border-2 hover:border-[#FFD700] object-cover"
                src="https://media.licdn.com/dms/image/D4D03AQERLA-5EsZKtw/profile-displayphoto-shrink_800_800/0/1670099195064?e=2147483647&v=beta&t=FRqOsFvEcUnktAVAVT5dAleiDYp7yvO1-S6c6aYNs1I"
                alt="profile"
              />

              {isDropdownOpen && (
                <div className="absolute right-0 top-6 mt-2 w-40  bg-black border border-gray-300 shadow-lg rounded-md z-50">
                  <ul
                    onClick={() => setDropdownOpen(false)}
                    className="flex flex-col text-sm "
                  >
                    {isLoggedIn &&
                      HeaderItems.map((item) => (
                        <HeaderListHover key={item.title} title={item.title} />
                      ))}
                    <li onClick={handleSignOut} className="text-white brightness-50  mx-1 lg:mx-2 hover:scale-110 hover:brightness-150 py-2 px-4 hover:bg-white/25 text-sm   cursor-pointer">
                     SignOut
                    </li>

                    {/* Add more list items as needed */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
