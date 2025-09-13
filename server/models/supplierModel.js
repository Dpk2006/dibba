import { Schema, model } from 'mongoose';

const supplierSchema = new Schema({
    profile: {
        type: String,
        trim: true
    },
    shopName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    kyc: {
        type: Boolean,
        default: false,
    },
    serviceRange: {
        type: Number, // distance in kilometers
        required: true,
        default: 1 // for example: 5 km
    }


}, { timestamps: true });

export default model('SupplierModel', supplierSchema);


// Future purpose 

 // another method for service serviceRange

    /*
    location: {
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: true
  }
},
serviceRadius: {
  type: Number, // in kilometers
  default: 5
}

    */


// complete diff schema for service range 

// const providerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   serviceRange: { type: Number, required: true, default: 5 }, // in km
//   location: {
//     type: {
//       type: String,
//       enum: ['Point'],
//       default: 'Point'
//     },
//     coordinates: {
//       type: [Number], // [lng, lat]
//       required: true
//     }
//   }
// });

// providerSchema.index({ location: "2dsphere" });


// 🔹 Option 2: GeoJSON + Radius(recommended for scale)

// Provider ka address ko latitude / longitude me convert karna hoga(geocoding, e.g.Google Maps API).

// Schema me store karo:

// location: {
//     type: {
//         type: String,
//     enum: ['Point'],
//     default: 'Point'
//     },
//     coordinates: {
//         type: [Number], // [longitude, latitude]
//             required: true
//     }
// },
// serviceRadius: {
//     type: Number, // in km
//   default: 5
// }


// Index lagao:

// providerSchema.index({ location: "2dsphere" });


// Jab user ka area search karna ho, uske lat / lng lekar MongoDB query use karo:

// Provider.find({
//     location: {
//         $geoWithin: {
//             $centerSphere: [
//                 [userLongitude, userLatitude],
//                 provider.serviceRadius / 6378.1  // Earth radius km
//             ]
//         }
//     }
// });


// ⚡ Is approach se tum automatic nikal sakte ho ki user provider ke service area ke andar aata hai ya nahi(chahe wo Sector 3 ho ya Sector 20).
