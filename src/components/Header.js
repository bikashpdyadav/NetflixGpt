import React from "react";
import netflex from "../assets/netflix.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSearch } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { useLocation } from "react-router-dom";

const Header = () => {
  const toggleSearchValue = useSelector(
    (store) => store.search.ToggleSearchGPT
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ email: user.email, uid: user.uid }));
        if (location.pathname === "/") navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return unsubscribe;
  }, [dispatch, location.pathname, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
      });
  };

  const handleSearchGPT = () => {
    dispatch(toggleSearch());
  };

  const handleLanguageChange = async (e) => {
    dispatch(changeLanguage(e.target.value));
    // if (e.target.value === "hindi") {
    //   try {
    //     const translationResult = await translate(original_title, {
    //       to: "hi",
    //     });
    //     const translatedText = translationResult.text;
    //     dispatch(languageStore({ title: translatedText }));
    //     console.log(translatedText);
    //     setTranslatedText(translatedText);
    //   } catch (error) {
    //     console.error("Translation error:", error);
    //   }
    // } else if (e.target.value === "spanish") {
    //   try {
    //     const translationResult = await translate(original_title, { to: "es" });
    //     const translatedText = translationResult.text;
    //     dispatch(languageStore({ title: translatedText }));
    //     console.log(translatedText);
    //     setTranslatedText(translatedText);
    //   } catch (error) {
    //     console.error("Translation error:", error);
    //   }
    // } else {
    //   try {
    //     const translationResult = await translate(original_title, { to: "en" });
    //     const translatedText = translationResult.text;
    //     dispatch(languageStore({ title: translatedText }));
    //     console.log(translatedText);
    //     setTranslatedText(translatedText);
    //   } catch (error) {
    //     console.error("Translation error:", error);
    //   }
    // }
  };
  return (
    <>
  <div className="flex w-full absolute z-40 flex-row justify-between items-center px-4 py-2 bg-gradient-to-b from-black">
    {/* Logo with responsive sizing and hover effect */}
    <img
      className="w-[25%] sm:w-[20%] lg:w-[15%] cursor-pointer transition-transform duration-200 hover:scale-105"
      onClick={() => navigate('/browse')}
      src={netflex}
      alt="Netflex Logo"
    />

    {/* Conditional rendering of buttons and dropdown for paths other than "/" */}
    {location.pathname !== "/" && (
      <div className="flex items-center space-x-4">
        {/* Language select visible only on larger screens */}
        <select
          name="language"
          id="language"
          className="hidden lg:block h-8 bg-blue-700 text-white rounded-md cursor-pointer"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGE.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>

        {/* Search GPT/Homepage button with responsive styling */}
        {toggleSearchValue && (
          <button
            onClick={handleSearchGPT}
            className="bg-purple-700 text-white rounded-lg cursor-pointer px-3 py-1 xs:text-xs sm:text-sm lg:text-base"
          >
            {!toggleSearchValue ? "Search GPT" : "HomePage"}
          </button>
        )}

        {/* Sign out button with responsive size and margin */}
        <button
          onClick={handleSignOut}
          className="bg-red-800 text-white rounded-lg cursor-pointer px-3 py-1 xs:text-xs sm:text-sm lg:text-base lg:w-32"
        >
          Sign out
        </button>
      </div>
    )}
  </div>
</>

  );
};

export default Header;
