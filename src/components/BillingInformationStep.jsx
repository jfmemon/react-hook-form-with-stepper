import React from "react";

const BillingInformationStep = ({ register }) => {
  return (
    <div>
      <h2>Billing Information</h2>
      <label htmlFor="address">Address</label>
      <br />
      <input
        type="text"
        name="address"
        id="address"
        {...register("address")}
        required
        className="text-input"
      />
    </div>
  );
};

export default BillingInformationStep;
