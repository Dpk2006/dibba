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




// Features:


User model - 
    Profile
    name
    address 
    Mobile
    Gmail

    Order history (Mtlb kitni services le chuka hai wo)
    Patment related details

Providers detail model  -
    Unique id for their shop
    Shop name 
    Address 
    Mobile no 
    Gmail 
    Photo
    pass
    Authentication section using aadhar

Tiffin services model (Mtlb tiffin sare isme dal skta hu) 
    state
        district   
            Majors cities (like jaipur)
                Areas and sector ()
                    Tiffins services on this area and nearby this area 
                        provider name 
                        Tiffin service - food items and all details 
