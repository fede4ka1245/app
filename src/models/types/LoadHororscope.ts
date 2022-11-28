import { HoroscopeData } from './HoroscopeData';
import { AddressInformation } from './AddressInformation';
import { TimeZoneData } from './TimeZoneData';

export interface LoadHoroscope extends Omit<HoroscopeData, 'latitude' | 'longitude'> {
  addressInformation: AddressInformation
  timeZoneData: TimeZoneData
}
