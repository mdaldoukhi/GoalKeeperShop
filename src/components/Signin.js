import Modal from "react-modal";
import { useState } from "react";
import authStore from "../stores/authStore";

const Signin = (props) => {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.signin(user);
        props.closeModal();
    };
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
                        <input
                            type={"password"}
                            className="form-control"
                            placeholder="Password ..."
                            onChange={handleChange}
                            name="password"
                        />
                </div>
                <button type="submit" class="btn btn-outline-dark col-md-3 mx-auto">
                    {"Sign-in"}
                </button>
            </form>
        </Modal>
    );
};
export default Signin;
