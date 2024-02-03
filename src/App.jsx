import { useState } from "react";
import { useForm } from "react-hook-form";
import PersonalInformationStep from "./components/PersonalInformationStep";
import BillingInformationStep from "./components/BillingInformationStep";
import LegalInformationStep from "./components/LegalInformationStep";
import CongratulationsStep from "./components/CongratulationsStep";

const MAX_STEP = 3;

const App = () => {
  const { register, handleSubmit, watch } = useForm();
  const [formStep, setFormStep] = useState(0);

  const stepUp = () => {
    setFormStep((prev) => prev + 1);
  };

  const stepDown = () => {
    setFormStep((prev) => prev - 1);
  };

  const onSubmit = (values) => {
    if (formStep === MAX_STEP - 1) {
      // Show alert only if it's the last step
      window.alert(JSON.stringify(values, null, 2));
    } else {
      // Move to the next step if it's not the last step
      stepUp();
    }
  };

  const renderStepComponent = () => {
    switch (formStep) {
      case 0:
        return <PersonalInformationStep register={register} />;
      case 1:
        return <BillingInformationStep register={register} />;
      case 2:
        return <LegalInformationStep register={register} />;
      case 3:
        return <CongratulationsStep />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formStep <= 2 && <p>Step {formStep + 1} of {MAX_STEP}</p>}
          {renderStepComponent()}
          {formStep <= 2 ? (
            <div>
              {formStep > 0 && (
                <button
                  style={{ marginTop: "10px" }}
                  type="button"
                  onClick={stepDown}
                >
                  Back
                </button>
              )}
              <button
                style={{ marginTop: "10px", marginLeft: "6px" }}
                type="submit"
              >
                {formStep === MAX_STEP - 1 ? "Finish" : "Next"}
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <button
                style={{ marginTop: "10px", marginLeft: "6px" }}
                type="button"
                onClick={stepUp}
              >
                Next
              </button>
            </div>
          )}
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </form>
      </div>
    </div>
  );
};

export default App;
