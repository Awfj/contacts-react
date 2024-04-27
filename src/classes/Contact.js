class Contact {
    constructor(name, phone, group) {
        this._name = name;
        this._phone = phone;
        this._group = group;
    }

    get name() {
        return this._name;
    }

    get phone() {
        return this._phone;
    }

    get group() {
        return this._group;
    }

    set name(newName) {
        this._name = newName;
    }

    set phone(newPhone) {
        this._phone = newPhone;
    }

    set group(newGroup) {
        this._group = newGroup;
    }
}

export default Contact;