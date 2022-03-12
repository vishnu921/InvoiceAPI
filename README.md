# Invoice API

This API is built using nodejs and GraphQL.

## URL

https://my-invoice-api.herokuapp.com/

## Requirements

For development, you will only need Node.js and npm installed in your environement.

```
$ node --version
v14.17.5

$ npm --version
6.14.14
```

Then clone the repository and install the dependencies:

```
$ git clone https://github.com/vishnu921/InvoiceAPI.git
$ cd InvoiceAPI
$ npm install
```

# Instructions to use API

URL: https://my-invoice-api.herokuapp.com/graphql

## Mutation
1. Sample call for mutation of Store
```
mutation {
  createStore(input: {
    storeName: "Avatar Retails"
    address: "Rishilok Colony, Rishikesh"
    contactNumber: "9087786539"
    email: "avatar@gmail.com"
  }) {
    id
    storeName
    contactNumber
    email
  }
}
```

2. Sample call for mutation of Invoice
```
mutation {
  createInvoice(input: {
    buyerName: "Naman"
    contactNumber: "8293479320"
    items: [
      {
        itemName: "Pen"
        quantity: 2
        pricePerQuantity: 10
        gst: 4
        totalAmount: 24
      },
      {
        itemName: "Coffee Mug"
        quantity: 1
        pricePerQuantity: 500
        discount: 50
        gst: 81
        totalAmount: 369
      }
    ]
    amount: 393
    status: UNPAID
  }) {
    id
    buyerName
    date
    items {
      itemName
      quantity
      pricePerQuantity
      totalAmount
    }
    amount
    status
  }
}
```

3. Sample call to update the status of an invoice
```
mutation {
  updateInvoiceStatus(id: Your_Invoice_ID, status: "PAID") {
    buyerName
	date
    items {
      itemName,
      totalAmount
    }
    amount
    status
  }
}

// Here Your_Invoice_ID is the id of your invoice you got after ceating it.
```

## Query
1. Sample query to get Store
```
query {
  getStore(id: Your_Store_ID) {
    storeName
    address
    contactNumber
    email
  }
}

// here Your_Store_ID will be the ID you got after mutation
```

2. Sample query to get Invoice
```
query {
  getInvoice(id: Your_Invoice_ID) {
    buyerName
    contactNumber
    date
    items {
      itemName
      quantity
      pricePerQuantity
      discount
      gst
      totalAmount
    }
    amount
    status
  }
}

// Here Your_Invoice_ID is the id of your invoice you got after ceating it.
```