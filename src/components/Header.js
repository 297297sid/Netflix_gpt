import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
//import { SUPPORTED_LANGUAGES } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  //const showGptSearch = useSelector((store) => store.showGptSearch);
  const showGptSearch = useSelector((store) => store.gpt.toggleGptSearch);
  const handleGptButtonClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
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
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  console.log("us", user);
  return (
    <div className="absolute w-screen  px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch &&( <select className="p-2 text-white bg-gray-900 "onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
         
          <button
            className="py-4 px-4 mx-4 h-10 my-2  bg-purple-800 text-white rounded-lg"
            onClick={handleGptButtonClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <img alt="usericon" className="w-12 h-12 p-4" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white mb-4">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
