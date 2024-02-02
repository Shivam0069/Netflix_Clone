import React, { useRef } from "react";

export default function SettingElement({ title, placeholder, type }) {
  const inputRef = useRef();
  async function updateHandler() {
    const res = await setDoc(
      doc(db, "users", "LA"),
      {
        
      },
      { merge: true }
    );
  }
  return (
    <div className="flex items-center space-x-4">
      <h1 className="w-20">{title}:</h1>
      <input
        ref={inputRef}
        placeholder={placeholder}
        type={type}
        className={`focus:outline-none border w-96 px-4 py-2 text-md rounded-full `}
      />
      <button
        onClick={updateHandler}
        className="disabled:bg-gray-600 bg-blue-500 hover:scale-110 px-4 py-2 rounded-md"
      >
        Update
      </button>
    </div>
  );
}
