import { useState } from "react";
import Modal from "react-modal";
import productStore from "../../stores/productStore";

const AddButton = (props) => {
    const [gloves, setGloves] = useState(props.oldGlove ? props.oldGlove : {
        name: "",
        price: 0,
        detail: "",
        image: "",
    });
    const handleChange = (event) => {
        setGloves({ ...gloves, [event.target.name]: event.target.value });
    };
    const handleImage = (event) => {
        setGloves({ ...gloves, image: event.target.files[0] });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(props.oldGlove)productStore.updateItem(gloves)
        else productStore.createNew(gloves, props.vendor)
        props.closeModal()
    }
    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Example Modal"
            >
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type the Gloves Name"
                            onChange={handleChange}
                            name="name"
                            value={gloves.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                            Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            placeholder="Accepted only real number"
                            onChange={handleChange}
                            name="price"
                            value={gloves.price}

                        />
                    </div>
                    <div className="col-md-12">
                        <label for="inputPassword4" className="form-label">
                            Description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type the Descripe of Gloves ..."
                            onChange={handleChange}
                            name="detail"
                            value={gloves.detail}

                        />
                    </div>
                    <div className="col-md-12">
                        <label for="inputPassword4" className="form-label">
                            Image
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            placeholder="Type URL address ... "
                            onChange={handleImage}
                            name="image"
                        />
                    </div>
                    <button type="submit" class="btn btn-outline-dark col-md-3 mx-auto">{props.oldGlove ? "Update" : "Add"}</button>
                </form>
            </Modal>
        </div>
    );
};

export default AddButton;
