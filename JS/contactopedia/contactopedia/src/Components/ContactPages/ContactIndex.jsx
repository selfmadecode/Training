import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContacts from "./RemoveAllContacts";

class ContactIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "John Doe",
                    phone: "674-98484",
                    email: "john@email.com",
                    isFavorite: true
                }, {
                    id: 2,
                    name: "Ken Tek",
                    phone: "563-28 588",
                    email: "ken@email.com",
                    isFavorite: false
                }, {
                    id: 3,
                    name: "Max Man",
                    phone: "234-22332",
                    email: "max@email.com",
                    isFavorite: true
                }
            ],
            selectedContact: undefined,
            isUpdating: false
        };
    }

    handleAddContact = (newContact) => {
        if (newContact.name == "") {
            return { status: "failure", message: "Contact name needed" };
        } else if (newContact.phone == "") {
            return { status: "failure", message: "Contact phone needed" };
        } else if (newContact.email == "") {
            return { status: "failure", message: "Contact email needed" };
        };

        const duplicateRecord = this.state.contactList.filter((c) => {
            if (newContact.name == c.name || newContact.email == c.email || newContact.phone == c.phone) {
                return true;
            }
        });

        if (duplicateRecord.length > 0) {
            return { status: "failure", message: "Duplicate record" };
        } else {

            // we want to get the last element in the array and add 1 to it to get the index
            const contactToAdd = {
                ...newContact, // spread operator
                id: this.state.contactList[this.state.contactList.length - 1].id + 1, // overide the id by getting the last element and then add 1
                isFavorite: false
            };

            this.setState((previousState) => {
                return {
                    contactList: previousState.contactList.concat([contactToAdd]),
                }
            });
            return { status: "success", message: "Contact added successfully" };
        };
    };

    handleToggleFavourite = (contact) => {
        this.setState((previousState) => {
            return {
                contactList: previousState.contactList.map((x) => {
                    if (x.id == contact.id) {
                        return { ...x, isFavorite: !x.isFavorite }
                    }

                    return x;
                }),
            };
        });
    };

    handleDeleteContact = (contact) => {
        this.setState((previousState) => {
            return {
                contactList: previousState.contactList.filter((x) => {
                    return x.id != contact.id;
                }),
            };
        });
    };

    handleAddRandomContact = (newContact) => {
        // we want to get the last element in the array and add 1 to it to get the index
        const contactToAdd = {
            ...newContact, // spread operator
            id: this.state.contactList[this.state.contactList.length - 1].id + 1, // overide the id by getting the last element and then add 1
            isFavorite: false
        };

        this.setState((previousState) => {
            return {
                contactList: previousState.contactList.concat([contactToAdd]),
            }
        });
    };

    handleRemoveAllContacts = () => {
        this.setState((previousState) => {
            return {
                contactList: [],
            }
        });
    };

    handleUpdateClick = (contact) => {
        this.setState((previousState) => {
            return {
                selectedContact: contact,
                isUpdating: true
            }
        });
    }
    handleUpdateClick = (contact) => {
        this.setState((previousState) => {
            return {
                selectedContact: undefined,
                isUpdating: false
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container" style={{ minHeight: "85vh" }}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact handleAddRandomContact={this.handleAddRandomContact} />
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContacts handleRemoveAllContacts={this.handleRemoveAllContacts} />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact handleAddContact={this.handleAddContact}
                                    isUpdating={this.state.isUpdating}
                                    selectedContact={this.state.selectedContact}
                                    handleUpdateClick={this.handleUpdateClick}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavouriteContacts
                                    contacts={this.state.contactList.filter(
                                        (x) => x.isFavorite == true
                                    )}
                                    favouriteClick={this.handleToggleFavourite}
                                    deleteClick={this.handleDeleteContact}
                                    updateClick={this.handleUpdateClick}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts
                                    contacts={this.state.contactList.filter(
                                        (c) => c.isFavorite == false
                                    )}
                                    favouriteClick={this.handleToggleFavourite}
                                    deleteClick={this.handleDeleteContact}
                                    updateClick={this.handleUpdateClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    };
};

export default ContactIndex;