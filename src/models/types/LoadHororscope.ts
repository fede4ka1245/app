import { HoroscopeData } from './HoroscopeData';
import { TimeZoneData } from './TimeZoneData';
import { AddressSuggestion } from './AddressSuggestion';

export interface LoadHoroscope extends Omit<HoroscopeData, 'latitude' | 'longitude'> {
  addressInformation: AddressSuggestion
  timeZoneData: TimeZoneData
}
