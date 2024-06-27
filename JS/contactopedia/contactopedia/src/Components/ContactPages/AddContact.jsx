import React from "react";

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            successMessage: ""
        }
    }

    handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.contactName.value.trim();
        const email = e.target.elements.contactEmail.value.trim();
        const phone = e.target.elements.contactPhone.value.trim();
        const id = e.target.elements.contactId.value.trim();

        const newContact = {
            name,
            email,
            phone
        }

        let response = undefined;
        if (this.props.isUpdating) {
            response = this.props.handleUpdateContact({ ...newContact, id: id })
        } else {
            response = this.props.handleAddContact(newContact);
        }

        if (response.status == "success") {
            this.setState({ errorMessage: "", successMessage: response.message });
            document.querySelector(".contact-form").reset();
        } else {
            this.setState({ errorMessage: response.message, successMessage: "" });
        }
    };

    handleCancel = () => {
        this.props.handleUpdateCancel();
    }

    render() {
        return (
            <div className="border col-12 text-black p-2">
                <form onSubmit={this.handleAddContactFormSubmit} className="contact-form">
                    <input
                        hidden
                        name="contactId"
                        defaultValue={this.props.isUpdating ? this.props.selectedContact.id : ""}
                    ></input>
                    <div className="row p-2">
                        {/* {
                            this.props.isUpdating ? (<div className="col-12 text-black-50">Update Contact</div>)
                                :
                                (<div className="col-12 text-black-50">Add a new Contact</div>)
                        } */}
                        <div className="col-12 text-black-50" > {this.props.isUpdating ? "Update Contact" : "Add a new Contact"} </div>
                        <div className="col-12 col-md-4 p-1">
                            <input className="form-control form-control-sm"
                                placeholder="Name:"
                                name="contactName"
                                defaultValue={this.props.isUpdating ? this.props.selectedContact.name : ""}
                            ></input>
                        </div>
                        <div className="col-12 col-md-4 p-1">
                            <input className="form-control form-control-sm"
                                placeholder="Email:"
                                name="contactEmail"
                                defaultValue={this.props.isUpdating ? this.props.selectedContact.email : ""}
                            ></input>
                        </div>
                        <div className="col-12 col-md-4 p-1">
                            <input className="form-control form-control-sm"
                                placeholder="Phone:"
                                name="contactPhone"
                                defaultValue={this.props.isUpdating ? this.props.selectedContact.phone : ""}
                            ></input>
                        </div>
                        {
                            this.state.errorMessage == "" ? (<div></div>)
                                :
                                (
                                    <div className="col-12 text-center text-danger">
                                        {this.state.errorMessage}
                                    </div>
                                )
                        }
                        {
                            this.state.successMessage == "" ? (<div></div>)
                                :
                                (
                                    <div className="col-12 text-center text-success">
                                        {this.state.successMessage}
                                    </div>
                                )
                        }
                        {/* {
                            this.props.isUpdating ?
                                (
                                    <div className="row col-12 col-md-6 offset-md-3 p-1">
                                        <button className="btn btn-success btn-sm form-control"> Update </button>
                                        <button className="btn btn-danger btn-sm form-control"> Cancel </button>
                                    </div>


                                )
                                :
                                (
                                    <div className="col-12 col-md-6 offset-md-3 p-1">
                                        <button className="btn btn-primary btn-sm form-control"> Create </button>
                                    </div>)
                        } */}
                        <div className={`col-12 p-1 ${this.props.isUpdating ? "col-md-4 offset-md-2" : "col-md-6 offset-md-3"}`}>
                            <button className="btn btn-primary btn-sm form-control">
                                {this.props.isUpdating ? "Update" : "Create"}
                            </button>
                        </div>
                        <div className="col-12 col-md-4 p-1">
                            {
                                this.props.isUpdating &&
                                (
                                    <button className="btn btn-secondary btn-sm form-control" onClick={this.handleCancel}>
                                        Cancel
                                    </button>
                                )
                            }
                        </div>

                    </div>
                </form>
            </div>
        );
    };
};

export default AddContact;