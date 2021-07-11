import Modal from "react-modal";

//state
import { useState } from "react";

//styles
import vendorStore from "../../stores/vendorStore";

const VendorModal = (props) => {
    const [vendor, setVendor] = useState({
        name: "",
        image: "",
    });

    const handleChange = (event) => {
        setVendor({ ...vendor, [event.target.name]: event.target.value });
    };

    const handleImage = (event) => {
        setVendor({ ...vendor, image: event.target.files[0] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        vendorStore.createNew(vendor);
        props.closeModal();
    };

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="vendor Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Name</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="name"
                                value={vendor.name}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            className="form-control"
                            type="file"
                            onChange={handleImage}
                            name="image"
                        />
                    </div>
                    <button>Add</button>
                </form>
            </Modal>
        </div>
    );
};

export default VendorModal;