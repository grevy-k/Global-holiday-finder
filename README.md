GLOBAL PUBLIC HOLIDAY FINDER📅

OVERVIEW

Web App: https://www.grevy.tech/
The Global Public Holiday Finder is a web application designed to help users easily discover public holidays across multiple countries. The application is hosted on two servers for redundancy and is fronted by a load balancer to ensure high availability.


FEATURES


Holiday Search: Users can search for public holidays by country and year.

API Integration: The web app integrates with a third-party API to fetch holiday data for countries.

Responsive Design: The app is fully responsive and optimized for both desktop and mobile devices.

Interactive Interface: Simple and clean user interface to provide an easy experience for finding public holidays.



HOW THE LOAD BALANCER WORKS


The load balancer distributes incoming traffic between two servers, ensuring high availability and reliability for the web application. It helps to handle larger traffic loads by redirecting requests in a balanced manner, making sure that users do not experience downtime.

Both servers are set up with identical copies of the web application!

The load balancer ensures that if one server is down, traffic is redirected to the other, maintaining continuous service.

SSL certificates are configured on the load balancer to ensure secure HTTPS connections.



WEB APP USAGE


The application allows users to search and view public holidays based on their country and year preferences.
Simply select the country and the year you want to view holidays for.
The application will fetch the list of holidays from an API and display them in an organized format.


Setup and Usage 🖥️


Clone this repository:git clone(https://github.com/grevy-k/Global-holiday-finder.git)
cd public-holiday-finder-app
cd-app
vi index.html


STEPS TO USE:


Navigate to the homepage.

Choose the country and year from the dropdown menu.

View the list of public holidays for the selected country and year.



API INTERGRATION 🌐


Integration Process:
Register for an API key on https://calendarific.com/  web API website.
Use JavaScript to fetch data from these APIs.
Test the API endpoints.

The web app integrates with a third-party public holiday API to fetch the most up-to-date and accurate holiday data.
The API provides holiday information for countries around the world, making it easy for users to discover holiday dates.

API Endpoint: The app sends requests to the API, specifying the country and year, and retrieves holiday data.

Error Handling: In case of a failed request (like a wrong country or year), the app will show a user-friendly error message.



HOW THE APPLICATION WORKS:


When users select a country and year, the front-end sends a request to the API.

The API responds with the holiday data, and the web app processes and displays it in a clean and readable format.



FEATURES


Search functionality: Find holidays by country and year.

Responsive UI: The web app is designed to be used across various devices, including mobile phones, tablets, and desktops.

API-powered: Fetches live holiday data from an external API, ensuring up-to-date information.

Error Handling: The app gracefully handles any issues related to the API, such as incorrect data requests.



CREDITS


Developer: Grevy Karuretwa

API Provider: https://calendarific.com/

Load Balancer Configuration: The web application is deployed across two servers, with a load balancer ensuring optimal traffic distribution and availability.

Design: Inspired by simple, clean, and user-friendly design principles.
