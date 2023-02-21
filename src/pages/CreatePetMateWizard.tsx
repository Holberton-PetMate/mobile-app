import { useEffect, useState } from "react";
import { H1, Small } from "../components/fonts";
import "../styles/pages/createPetMateWizard.css";
import { ChevronRight } from "../components/Icons";
import { useHistory } from "react-router";

const CreatePetMateWizard = () => {
  const history = useHistory();
  const [codeId, setCodeId] = useState<string | null>(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    console.log(codeId);
    if (codeId) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }
  }, [codeId]);

  return (
    <div className="wizardContainer">
      <div className="topToolsContainer">
        <Small onClick={() => history.push("/my-petmates")}>Cancel</Small>
      </div>

      <img className="petmateLogo" src="/assets/blue.png"></img>

      <H1>Enter your PetMate code</H1>
      <input type="text" onChange={(e) => setCodeId(e.target.value)} />
      <div className="buttonsContainer">
        <button
          className="primaryButton"
          disabled={nextButtonDisabled}
          onClick={() => console.log("Anda Brooo!!!")}
        >
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CreatePetMateWizard;
