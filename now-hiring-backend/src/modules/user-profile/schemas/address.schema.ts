import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
    country: String,
    city: String,
    fullAddress: String,
    latitude: String,
    longitude: String,
});

