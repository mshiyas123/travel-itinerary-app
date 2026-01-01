# Travel Itinerary Application

A frontend-only Angular application built as part of a Full Stack Developer assessment.

## Project Overview
This application allows users to:
- Explore travel itineraries by destination
- View itinerary details in a card-based layout
- Add selected travel packages to a cart
- Review selected packages with total cost calculation

The project demonstrates Angular fundamentals such as component-based architecture, routing, and state management using localStorage.

## Application Pages

### 1. Itinerary Home Page
- Dropdown to select travel destination
- Displays itinerary packages based on selection
- Each itinerary shows:
  - Country & place
  - Food preference
  - Activities
  - Hotel details & nights
  - Flight charges
  - Total package cost
- Users can add packages to cart

### 2. Cart & Summary Page
- Displays selected itinerary packages
- Shows full package details
- Calculates total amount dynamically
- Allows removing items from cart

## Tech Stack
- Angular (Standalone Components)
- TypeScript
- HTML & CSS
- Browser localStorage (for cart persistence)

## How to Run
```bash
npm install
ng serve
