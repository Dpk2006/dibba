Provider 

{
    name : "",
    businessName: String,
    licenseNo: String,
    bankAccount: {
        accountHolder: String,
        accountNumber: String,
        ifsc: String,
        verified: { type: Boolean, default: false },
        bankId: String // gateway provider id
    },
    deliveryRadiusKm: { type: Number, default: 5 },
    pincodes: [String],
    maxCapacityPerDay: { type: Number, default: 100 },
    strikeCount: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
}


// Models - 

├─ models/
│  ├─ User.js
│  ├─ Provider.js
│  ├─ Tiffin.js
│  ├─ Subscription.js
│  ├─ Delivery.js
│  ├─ EscrowTransaction.js
│  ├─ Payout.js
│  ├─ Dispute.js
│  ├─ Wallet.js
│  └─ Transaction.js



Foler str - 

tiffin-app/
├─ package.json
├─ .env
├─ server.js
├─ config/
│  └─ db.js
├─ models/
│  ├─ User.js
│  ├─ Provider.js
│  ├─ Tiffin.js
│  ├─ Subscription.js
│  ├─ Delivery.js
│  ├─ EscrowTransaction.js
│  ├─ Payout.js
│  ├─ Dispute.js
│  ├─ Wallet.js
│  └─ Transaction.js
├─ routes/
│  ├─ auth.js
│  ├─ client.js
│  ├─ provider.js
│  └─ admin.js
├─ controllers/
│  ├─ authController.js
│  ├─ clientController.js
│  ├─ providerController.js
│  └─ adminController.js
├─ middlewares/
│  ├─ auth.js
│  └─ errorHandler.js
└─ utils/
   ├─ jwt.js
   └─ payments.js




// Models in my lang - 


