import {
  getAuth,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import toast from "react-hot-toast";

export default function Setting() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPas, setLoadingPas] = useState(false);

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };
  const navigate = useNavigate();
  const nameRef = useRef();
  const dobRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        async function getData() {
          const docRef = doc(db, "users", user.email);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
            setDob(docSnap.data().dob);
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        }
        getData();
      } else {
        navigate("/login");
      }
    });
  }, []);
  async function saveHandler() {
    setLoading(true);
    try {
      await setDoc(doc(db, "users", user.email), {
        name:
          nameRef.current.value === "" ? userData?.name : nameRef.current.value,
        dob: dobRef.current.value,
        address:
          addressRef.current.value === ""
            ? userData?.address
            : addressRef.current.value,
      });
      toast.success("Data Updated Successfully");

      setLoading(false);
    } catch (error) {
      toast.error("Error saving document");
      toast.error("Fill the form completely");

      setLoading(false);
    }
  }

  function passwordUpdate() {
    setLoadingPas(true);
    const user = auth.currentUser;

    updatePassword(user, passwordRef.current.value)
      .then(() => {
        toast.success("Password Updated Successfully");
        setLoadingPas(false);
      })
      .catch((error) => {
        toast.error("Something went wrong !! ");
        toast.error("Try login and then update !! ");
        setLoadingPas(false);
      });
  }
  return (
    <div>
      <Header />
      <div className="mt-32 flex flex-col ml-10">
        {user ? (
          <>
            <div className="border  p-2 w-fit shadow-lg">
              <h1 className="text-3xl font-bold text-[#41EFF5]">User Details:</h1>
              <div className="mt-10 flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <h1 className="w-24 text-2xl font-semibold">Name:</h1>
                  <input
                    placeholder={userData?.name || "Enter your Name"}
                    ref={nameRef}
                    type="name"
                    className={`focus:outline-none border w-96 px-4 py-2 text-md rounded-full `}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <h1 className="w-24  text-2xl font-semibold">DOB:</h1>
                  <input
                    value={dob}
                    onChange={handleInputChange}
                    ref={dobRef}
                    type="date"
                    className={`focus:outline-none border w-96 px-4 py-2 text-md rounded-full `}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <h1 className="w-24  text-2xl font-semibold">Address:</h1>
                  <input
                    placeholder={userData?.address || "Address"}
                    ref={addressRef}
                    type="name"
                    className={`focus:outline-none border w-96 px-4 py-2 text-md rounded-full `}
                  />
                </div>
              </div>
              <button
                className="bg-[#CAB60D] text-lg px-6 py-3 rounded-md  mt-8 hover:scale-110 transition-transform duration-200 "
                onClick={saveHandler}
              >
                {loading ? "Updating.." : "Update"}
              </button>
            </div>
            <div className="border max-w-2xl bg-gray-500 mt-5"></div>
            <div className="border  p-2 w-fit shadow-lg mt-5">
              <h1 className="text-3xl font-bold text-[#41EFF5]">User Credentials:</h1>

              <div className="flex  items-center space-x-4 mt-4">
                <h1 className="w-32 text-2xl">Password:</h1>
                <input
                  placeholder="**********"
                  className="focus:outline-none border w-96 px-4 py-2 text-md rounded-full "
                  ref={passwordRef}
                />
                <button
                  className="bg-[#CAB60D] text-lg px-4 py-2 rounded-md hover:scale-110  transition-transform duration-200"
                  onClick={passwordUpdate}
                >
                  {loadingPas ? "Updating.." : "Update"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col items-center mt-4">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <span className=" mb-80  text-lg font-semibold text-gray-700">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
