import { TextInput, Button } from "../components/";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="box-container">
      <h1>Sign up </h1>
      <div className="box">
        <TextInput heading="full name" type="text" />
        <TextInput heading="username" type="text" />
        <TextInput heading="password" type="password" />

        <div className="foot-box">
          <h5>
            <Link to="/login"> Click here to login </Link>
          </h5>
          <Button name="submit" type="mybutton-primary-1" />
        </div>
      </div>
    </div>
  );
}
