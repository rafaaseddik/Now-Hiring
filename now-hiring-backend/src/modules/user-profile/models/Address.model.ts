import { Document } from 'mongoose';
export interface Address extends Document{
    country: String,
    city: String,
    fullAddress: String,
    latitude: String,
    longitude: String,
}
