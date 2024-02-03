import React from "react";

const LegalInformationStep = ({ register }) => {
    return (
        <div>
            <h2>Legal Information</h2>
            <div>
                <input
                    type="checkbox"
                    {...register("tac", { required: true })}
                    name="tac"
                />
                <span className="ml-3">I accept all terms and conditions.</span>
            </div>
            <div>
                <input
                    type="checkbox"
                    {...register("pp", { required: true })}
                    name="pp"
                />
                <span className="ml-3">I accept the privacy policy.</span>
            </div>
        </div>
    );
};

export default LegalInformationStep;
