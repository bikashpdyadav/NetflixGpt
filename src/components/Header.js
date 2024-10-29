import React from "react";
import netflex from "../assets/netflix.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSearch } from "../utils/searchSlice";
import { changeLanguage, languageStore } from "../utils/configSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { useState } from "react";
import { translate } from "@vitalets/google-translate-api";
import { useLocation } from "react-router-dom";
const Header = () => {
  const toggleSearchValue = useSelector(
    (store) => store.search.ToggleSearchGPT
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(addUser({ email: user.email, uid: user.uid }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
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
      <div className="flex absolute z-40 flex-row justify-between px-8 py-2 bg-gradient-to-b from-black">
        <img className=" w-1/12" src={netflex} alt="" />
        {location.pathname !== "/" && (
          <div className="flex justify-end">
            <select
              name=""
              id=""
              className="h-8 mt-6 mx-4 bg-blue-700 text-white rounded-md cursor-pointer xs:hidden lg:block"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            {toggleSearchValue && (
              <button
                onClick={handleSearchGPT}
                className="bg-purple-700 xs:h-8 xs:mt-2 xs:p-1 xs:text-xs lg:text-sm cursor-pointer lg:h-10 lg:mt-5 lg:px-4 rounded-lg text-white lg:py-2"
              >
                {!toggleSearchValue ? "Search GPT" : "HomePage"}
              </button>
            )}
            (
            <button
              onClick={handleSignOut}
              className="bg-red-800 xs:w-16 xs:text-sm xs:h-8 lg:w-32 lg:h-12 items-center justify-center rounded-lg xs:-mr-4 mt-2 lg:ml-4 lg:mt-4"
            >
              Sign out
            </button>
            )
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
