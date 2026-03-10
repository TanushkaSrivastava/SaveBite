# WasteNot – Food Surplus Donation Platform

WasteNot is a MERN-based web application designed to reduce food waste by 
connecting food donors (restaurants, households, events) with NGOs that 
can redistribute surplus food to people in need.
```mermaid
flowchart TD

A[User Registration] --> B[Login]
B --> C{Select Role}

C -->|Donor| D[Add Food Donation]
C -->|NGO| E[View Available Food]

D --> F[Food Stored in MongoDB]
F --> E

E --> G[NGO Claims Food]
G --> H[Pickup Scheduled]
H --> I[Donation Completed]
```
