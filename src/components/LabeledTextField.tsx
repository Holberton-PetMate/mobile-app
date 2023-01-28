import { Field } from "react-final-form";
import "../styles/components/form.css";

interface LabeledTextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "password";
  [rest: string]: any;
}

const LabeledTextField: React.FC<LabeledTextFieldProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div className="labeledTextField">
          <label>{label}</label>
          <input
            {...rest}
            className={
              (meta.error || meta.submitError) && meta.touched ? "error" : ""
            }
            {...input}
            type={type}
            placeholder={placeholder}
          />
          {(meta.error || meta.submitError) && meta.touched && (
            <span className="errorMessage">
              {meta.error || meta.submitError}
            </span>
          )}
        </div>
      )}
    </Field>
  );
};

export default LabeledTextField;
