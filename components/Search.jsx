import React, { useState, useEffect } from "react";

export const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  const handleChange = (e) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    if (newTerm === "") {
      // Odmah pozivamo onSearch sa praznim stringom kada se obriše sav tekst
      onSearch("");
    }
  };

  return (
    <form className="w-4/5 md:w-2/5 flex flex-col items-center justify-center">
      <div className="flex justify-start items-center pl-5 w-full h-10 rounded-3xl text-[#5E6166] font-normal text-sm bg-[#1D1F30] mb-5 border-[#5865F2] border">
        <span>🔍</span>&nbsp;
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search by game name"
          className="bg-transparent w-full h-full focus:outline-none"
        />
      </div>
    </form>
  );
};