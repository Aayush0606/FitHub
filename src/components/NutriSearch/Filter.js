import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Filter = ({ method }) => {
  //doctor data
  let [data, setData] = useState([]);
  //filters
  let [filter, setFilter] = useState({
    ratings: "-1",
    fee: "-1",
    experience: "-1",
    locality: "Andheri",
  });

  useEffect(() => {
    method(filter);
  }, []);

  //updating the filters
  const updateFilters = (e) => {
    setFilter((prevObj) => {
      return { ...prevObj, [e.target.name]: e.target.value };
    });
  };

  const callMethod = () => {
    method(filter);
  };

  return (
    <div className="w-[85%] mt-5 mx-auto bg-primary-blue p-4 text-dark-100 rounded-lg flex justify-between">
      {/* Search Nutritionists */}
      {/* <div className="w-[25%]">
        <label for="doctorSearch" className="block text-lg font-semibold">
          Search Nutritionists:
        </label>
        <div className="">
          <input
            id="doctorSearch"
            name="text"
            type="text"
            autocomplete="text"
            required
            className="w-full rounded-lg p-2 text-lg"
            placeholder="Search"
          />
        </div>
      </div> */}

      {/* Fee */}
      <div className="">
        <label for="fee" className="block text-lg font-semibold">
          Fee:
        </label>
        <select
          aria-label="Default select example required"
          name="fee"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
        >
          {/* <option value="None">None</option> */}
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
        </select>
      </div>

      {/* Experience (in yrs) */}
      <div className="">
        <label for="experience" className="block text-lg font-semibold">
          Exp (in yrs):
        </label>
        <select
          aria-label="Default select example required"
          name="experience"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
        >
          {/* <option value="None">None</option> */}
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
        </select>
      </div>

      {/* Rating */}
      <div>
        <label htmlFor="state" className="block text-lg font-semibold">
          Rating:
        </label>
        <select
          name="rating"
          id="state"
          className="rounded-lg p-2 w-full"
          onChange={updateFilters}
        >
          {/* <option value="None">None</option> */}
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
        </select>
      </div>

      {/* Locality */}
      <div>
        <label for="locality" className="block text-lg font-semibold">
          Search Locality:
        </label>
        <select
          name="locality"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
        >
          <option value="Central Delhi">Central Delhi</option>
          <option value="East Delhi">East Delhi</option>
          <option value="New Delhi">New Delhi</option>
          <option value="North Delhi">North Delhi</option>
          <option value="North East Delhi">North East Delhi</option>
          <option value="North West Delhi">North West Delhi</option>
          <option value="Shahdara">Shahdara</option>
          <option value="South Delhi">South Delhi</option>
          <option value="South East Delhi">South East Delhi</option>
          <option value="South West Delhi">South West Delhi</option>
          <option value="West Delhi">West Delhi</option>
        </select>
      </div>
      <button
        type="button"
        className="button bg-dark-100 hover:bg-dark-200 py-2 text-lg h-14 my-auto"
        onClick={callMethod}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
