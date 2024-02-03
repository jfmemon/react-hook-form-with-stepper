import React from "react";

const PersonalInformationStep = ({ register }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        name="username"
        id="username"
        {...register("username")}
        required
        className="text-input"
      />
    </div>
  );
};

export default PersonalInformationStep;
