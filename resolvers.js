const {nanoid} = require('nanoid');

class Store {
    constructor(id, { storeName, address, contactNumber, email }) {
        this.id = id;
        this.storeName = storeName;
        this.address = address;
        this.contactNumber = contactNumber;
        this.email = email;
    }
}

class Invoice {
    constructor(id, { buyerName, contactNumber, items, amount, status}) {
        this.id = id;
        this.buyerName = buyerName;
        this.contactNumber = contactNumber;
        this.items = items;
        this.date = new Date().toString();
        this.amount = amount;
        this.status = status;
    }
}

const storeHolder = {}
const invoiceHolder = {}

const resolvers = {
    getStore: ({ id }) => {
        try {
            return storeHolder[id];
        } catch (error) {
            return error; 
        }
    },
    getInvoice: ({ id }) => {
        try {
            return invoiceHolder[id];
        } catch (error) {
            return error; 
        }
    },
    createStore: ({ input }) => {
        let id = nanoid();
        storeHolder[id] = new Store(id, input);
        return storeHolder[id];
    },
    createInvoice: ({ input }) => {
        let id = nanoid();
        invoiceHolder[id] = new Invoice(id, input);
        return invoiceHolder[id];
    },
    updateInvoiceStatus: ({ id, status }) => {
        try {
            invoiceHolder[id].status = status;
            return invoiceHolder[id];
        } catch (error) {
            return error;
        } 
    }
}

exports.resolvers = resolvers;