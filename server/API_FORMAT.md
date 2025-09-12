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