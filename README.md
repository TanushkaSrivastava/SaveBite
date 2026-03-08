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
