import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  itineraries = [
  // 🇮🇳 India
  {
    country: 'India',
    place: 'Goa',
    food: 'Both',
    activities: ['Beach', 'Water Sports'],
    hotelType: '3 Star',
    nights: 3,
    flightCharges: 8000,
    totalCost: 25000
  },
  {
    country: 'India',
    place: 'Manali',
    food: 'Veg',
    activities: ['Trekking', 'Snow Sports'],
    hotelType: '3 Star',
    nights: 4,
    flightCharges: 9000,
    totalCost: 30000
  },

  // 🇫🇷 France
  {
    country: 'France',
    place: 'Paris',
    food: 'Veg',
    activities: ['Museum', 'City Tour'],
    hotelType: '4 Star',
    nights: 4,
    flightCharges: 30000,
    totalCost: 90000
  },
  {
    country: 'France',
    place: 'Nice',
    food: 'Both',
    activities: ['Beach', 'Sightseeing'],
    hotelType: '4 Star',
    nights: 3,
    flightCharges: 28000,
    totalCost: 85000
  },

  // 🇹🇭 Thailand
  {
    country: 'Thailand',
    place: 'Bangkok',
    food: 'Non-Veg',
    activities: ['Nightlife', 'Shopping'],
    hotelType: '3 Star',
    nights: 3,
    flightCharges: 20000,
    totalCost: 50000
  },
  {
    country: 'Thailand',
    place: 'Phuket',
    food: 'Both',
    activities: ['Island Tour', 'Water Sports'],
    hotelType: '4 Star',
    nights: 4,
    flightCharges: 22000,
    totalCost: 65000
  },

  // 🇦🇪 UAE
  {
    country: 'UAE',
    place: 'Dubai',
    food: 'Both',
    activities: ['Desert Safari', 'City Tour'],
    hotelType: '5 Star',
    nights: 3,
    flightCharges: 25000,
    totalCost: 75000
  },
  {
    country: 'UAE',
    place: 'Abu Dhabi',
    food: 'Both',
    activities: ['Ferrari World', 'Mosque Visit'],
    hotelType: '4 Star',
    nights: 3,
    flightCharges: 23000,
    totalCost: 70000
  },

  // 🇮🇹 Italy
  {
    country: 'Italy',
    place: 'Rome',
    food: 'Veg',
    activities: ['Historical Tour', 'Sightseeing'],
    hotelType: '4 Star',
    nights: 4,
    flightCharges: 32000,
    totalCost: 88000
  },
  {
    country: 'Italy',
    place: 'Venice',
    food: 'Both',
    activities: ['Gondola Ride', 'City Tour'],
    hotelType: '4 Star',
    nights: 3,
    flightCharges: 30000,
    totalCost: 82000
  },

  // 🇯🇵 Japan
  {
    country: 'Japan',
    place: 'Tokyo',
    food: 'Non-Veg',
    activities: ['City Tour', 'Shopping'],
    hotelType: '4 Star',
    nights: 4,
    flightCharges: 45000,
    totalCost: 110000
  },
  {
    country: 'Japan',
    place: 'Kyoto',
    food: 'Veg',
    activities: ['Temple Visit', 'Cultural Tour'],
    hotelType: '3 Star',
    nights: 3,
    flightCharges: 42000,
    totalCost: 98000
  },

  // 🇦🇺 Australia
  {
    country: 'Australia',
    place: 'Sydney',
    food: 'Both',
    activities: ['Opera House', 'City Tour'],
    hotelType: '4 Star',
    nights: 4,
    flightCharges: 50000,
    totalCost: 120000
  },
  {
    country: 'Australia',
    place: 'Melbourne',
    food: 'Veg',
    activities: ['Street Tour', 'Shopping'],
    hotelType: '4 Star',
    nights: 3,
    flightCharges: 48000,
    totalCost: 115000
  },

  // 🇸🇬 Singapore
  {
    country: 'Singapore',
    place: 'Singapore City',
    food: 'Both',
    activities: ['Universal Studios', 'City Tour'],
    hotelType: '4 Star',
    nights: 3,
    flightCharges: 22000,
    totalCost: 60000
  },
  {
    country: 'Singapore',
    place: 'Sentosa',
    food: 'Both',
    activities: ['Beach', 'Adventure Park'],
    hotelType: '4 Star',
    nights: 2,
    flightCharges: 21000,
    totalCost: 55000
  },

  // 🇲🇾 Malaysia
  {
    country: 'Malaysia',
    place: 'Kuala Lumpur',
    food: 'Both',
    activities: ['Twin Towers', 'Shopping'],
    hotelType: '3 Star',
    nights: 3,
    flightCharges: 18000,
    totalCost: 45000
  },
  {
    country: 'Malaysia',
    place: 'Langkawi',
    food: 'Both',
    activities: ['Island Tour', 'Cable Car'],
    hotelType: '4 Star',
    nights: 3,
    flightCharges: 19000,
    totalCost: 52000
  }
];


  countries: string[] = [];
  filtered: any[] = [];

  constructor() {
    this.countries = [...new Set(this.itineraries.map(i => i.country))];
  }

  onChange(event: Event) {
    const country = (event.target as HTMLSelectElement).value;
    this.filtered = this.itineraries.filter(i => i.country === country);
  }

  addToCart(item: any) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Package added to cart');
  }
}
