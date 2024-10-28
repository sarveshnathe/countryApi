
# Countries Explorer 🌍

A React application that fetches data from the [REST Countries API](https://restcountries.com/) and displays details about various countries worldwide. The project allows users to search for countries, view detailed information, and explore countries by region.

## Table of Contents
- [Countries Explorer 🌍](#countries-explorer-)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [API Reference](#api-reference)
  - [Future Improvements](#future-improvements)
  - [Acknowledgments](#acknowledgments)

## Demo
Check out the live demo of the project [here](https://dazzling-gelato-d0e7a4.netlify.app/).

## Features
- Search for countries by name.
- Filter countries by region.
- View country details like capital, population, languages, and borders.
- Responsive design for mobile and desktop screens.

## Technologies
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation within the application.
- **Tailwind CSS**: For styling and responsive design.
- **REST Countries API**: Data source for country information.

## Setup
To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sarveshnathe/countryApi.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application at `http://localhost:5173` (or wherever Vite runs it) in your browser.

## Usage
- Use the search bar to find a specific country.
- Use the region filter to view countries by continent.
- Click on a country card to view more details.

## Project Structure
```
├── public
│   └── index.html
├── src
│   ├── components
│   ├── contexts
|   ├── hooks
│   ├── App.jsx
│   └── App.css
│   ├── main.jsx
└── README.md
```

## API Reference
- **Base URL**: `https://restcountries.com/v3.1/`
- **Endpoints**:
  - `/all`: Fetches data for all countries.
  - `/name/{name}`: Search for a country by name.
  - `/region/{region}`: Fetch countries by region.

## Future Improvements
- [ ] Add dark mode support.
- [ ] Implement pagination for countries.
- [ ] Add map integration for country locations.
- [ ] Cache API responses for offline viewing.

## Acknowledgments
Thanks to [REST Countries API](https://restcountries.com/) for providing the data.
