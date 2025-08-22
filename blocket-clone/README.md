# Blocket Clone

This project is a web application that mimics the functionalities of Blocket, a popular marketplace for buying and selling items. It features an admin view for managing listings and users, as well as a user-friendly interface for browsing and posting listings.

## Features

- **User Authentication**: Secure login for users to manage their accounts and listings.
- **Admin Dashboard**: An overview of admin functionalities, including user management and statistics.
- **Listing Management**: Users can create, edit, and delete listings with images and descriptions.
- **Responsive Design**: The application is designed to be mobile-friendly and responsive.
- **Animations**: Smooth transitions and animations enhance the user experience.

## Project Structure

```
blocket-clone
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── Admin
│   │   │   ├── Dashboard.tsx
│   │   │   └── UserManagement.tsx
│   │   ├── Listings
│   │   │   ├── ListingCard.tsx
│   │   │   └── ListingForm.tsx
│   │   ├── Animations
│   │   │   └── AnimatedTransition.tsx
│   │   └── Navbar.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── ListingDetails.tsx
│   │   ├── AdminView.tsx
│   │   └── Login.tsx
│   ├── styles
│   │   └── animations.css
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/blocket-clone.git
   ```
2. Navigate to the project directory:
   ```
   cd blocket-clone
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage

- Visit the home page to browse listings.
- Users can log in to manage their accounts and listings.
- Admins can access the admin dashboard to manage users and view statistics.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.