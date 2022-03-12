const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Store {
        id: ID
        storeName: String
        address: String
        contactNumber: String
        email: String
    }

    type Invoice {
        id: ID
        buyerName: String
        contactNumber: String
        date: String
        items: [Items]
        amount: Int
        status: Status
    }

    type Items {
        itemName: String
        quantity: Int
        pricePerQuantity: Int
        discount: Int
        gst: Int
        totalAmount: Int
    }

    enum Status {
        PAID
        UNPAID
    }

    type Query {
        getStore(id: ID): Store
        getInvoice(id: ID): Invoice
    }

    input StoreInput {
        id: ID
        storeName: String!
        address: String
        contactNumber: String
        email: String!
    }

    input InvoiceInput {
        id: ID
        buyerName: String!
        contactNumber: String
        date: String
        items: [ItemsInput]!
        amount: Int!
        status: Status!
    }

    input ItemsInput {
        itemName: String!
        quantity: Int!
        pricePerQuantity: Int
        discount: Int
        gst: Int!
        totalAmount: Int!
    }

    type Mutation {
        createStore(input: StoreInput): Store
        createInvoice(input: InvoiceInput): Invoice
        updateInvoiceStatus(id: ID!, status: String!): Invoice
    }
`)

exports.schema = schema;