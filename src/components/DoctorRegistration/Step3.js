import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";
import React, { forwardRef, useImperativeHandle } from "react";

const Step3 = forwardRef((props, ref) => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useImperativeHandle(ref, () => ({
    checkFields() {
      console.log("fields : ", userData);
      if (!userData.locality) {
        return false;
      }
      if (userData.have_clinic === "true" && !userData.address) {
        return false;
      }
      if (userData.have_clinic === "false" && !userData.address) {
        return false;
      }
      if (userData.have_clinic === "true" && !userData.c_name) {
        return false;
      }
      if (userData.have_clinic === "false" && !userData.c_name) {
        return false;
      }

      return true;
    },
  }));

  return (
    <div className="flex flex-col ">
      <div className="mt-3 mx-2 w-full flex-1">
        <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Do you have a Clinic/Gym?
        </label>
        <div className="flex items-center pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <input
            id="yesCheck"
            type="radio"
            value={"true"}
            name="have_clinic"
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            onChange={handleChange}
            checked={userData.have_clinic === "true" ? true : false}
          />
          <label
            htmlFor="yesCheck"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center mt-3 pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <input
            id="noCheck"
            type="radio"
            value={"false"}
            name="have_clinic"
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 "
            onChange={handleChange}
            checked={userData.have_clinic === "false" ? true : false}
          />
          <label
            htmlFor="noCheck"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            No
          </label>
        </div>
      </div>
      {userData.have_clinic === "true" && (
        <div className="mt-3 w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Clinic/Gym Name
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["c_name"] || ""}
              name="c_name"
              placeholder="Clinic/Gym name"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>

          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Clinic/Gym Address (GMap Link)
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["address"] || ""}
              name="address"
              placeholder="Clinic/Gym address"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      )}
      {userData.have_clinic === "false" && (
        <div className="mt-3 w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Hospital/Centre Name
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["c_name"] || ""}
              name="c_name"
              placeholder="Hospital/Centre name"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>

          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Hospital/Centre Address (GMap Link)
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["address"] || ""}
              name="address"
              placeholder="Hospital/Centre address"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      )}

      <div className="mt-3 w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Locality (In Delhi)
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select
            aria-label="Default select example required"
            onChange={handleChange}
            name="locality"
          >
            <option>Select Locality</option>

            <option
              value="Central Delhi"
              selected={userData.locality === "Central Delhi" ? true : false}
            >
              Central Delhi
            </option>
            <option
              value="East Delhi"
              selected={userData.locality === "East Delhi" ? true : false}
            >
              East Delhi
            </option>
            <option
              value="New Delhi"
              selected={userData.locality === "New Delhi" ? true : false}
            >
              New Delhi
            </option>
            <option
              value="North Delhi"
              selected={userData.locality === "North Delhi" ? true : false}
            >
              North Delhi
            </option>
            <option
              value="North East Delhi"
              selected={userData.locality === "North East Delhi" ? true : false}
            >
              North East Delhi
            </option>
            <option
              value="North West Delhi"
              selected={userData.locality === "North West Delhi" ? true : false}
            >
              North West Delhi
            </option>
            <option
              value="Shahdara"
              selected={userData.locality === "Shahdara" ? true : false}
            >
              Shahdara
            </option>
            <option
              value="South Delhi"
              selected={userData.locality === "South Delhi" ? true : false}
            >
              South Delhi
            </option>
            <option
              value="South East Delhi"
              selected={userData.locality === "South East Delhi" ? true : false}
            >
              South East Delhi
            </option>
            <option
              value="South West Delhi"
              selected={userData.locality === "South West Delhi" ? true : false}
            >
              South West Delhi
            </option>
            <option
              value="West Delhi"
              selected={userData.locality === "West Delhi" ? true : false}
            >
              West Delhi
            </option>
          </select>
        </div>
      </div>
    </div>
  );
});

export default Step3;
