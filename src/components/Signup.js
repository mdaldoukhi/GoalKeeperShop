import Modal from "react-modal";
import { useState } from "react";
import authStore from "../stores/authStore";
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { PasswordSec, PostionPass } from "../styles";
import PasswordStrengthBar from 'react-password-strength-bar';

 

const Signup = (props) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
    });
    const [password, setPassword] = useState("");

    const [isRevealPwd, setIsRevealPwd] = useState(false)
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.createUser(user)
        props.closeModal()
    }
    return (
<Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type Username .."
                            onChange={handleChange}
                            name="username"
                        />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                            Password
                        </label>
                        <PasswordSec>
                        <input
                            type={isRevealPwd ? "text" : "password"}
                            className="form-control"
                            placeholder="Password ..."
                            onChange={handleChange}
                            name="password"
                        />
                        <PostionPass onClick={() => setIsRevealPwd(!isRevealPwd)}>{isRevealPwd ? <h4><BiHide/></h4> : <h4><BiShow/></h4>}</PostionPass>
                        <PasswordStrengthBar password={user.password} />
                        </PasswordSec>
                    </div>
                    <div className="col-md-12">
                        <label for="inputPassword4" className="form-label">
                        email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Type Your Email ..."
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                            FirstName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type Your First Name ... "
                            onChange={handleChange}
                            name="firstName"
                        />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                            LastName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type Your Last Name ... "
                            onChange={handleChange}
                            name="lastName"
                        />
                    </div>
                    <button type="submit" class="btn btn-outline-dark col-md-3 mx-auto">{props.oldGlove ? "Update" : "Add"}</button>
                </form>
            </Modal>
    )
}
export default Signup;