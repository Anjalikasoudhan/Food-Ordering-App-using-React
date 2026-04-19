# 🍕 FoodSathi — Smart Food Ordering Platform

A feature-rich food ordering app built with React.js, featuring live Swiggy API integration, 
Redux-powered cart management, and a polished user experience.

## 🔗 Live Demo
[foodsathi.vercel.app](https://food-ordering-app-using-react-two.vercel.app/)

ScreenShots 
<img width="1837" height="933" alt="image" src="https://github.com/user-attachments/assets/2c84ee17-8a14-4f61-af7e-2772ce2ab14f" />
<img width="1845" height="910" alt="image" src="https://github.com/user-attachments/assets/945a9fd6-5574-40e8-8698-86ec837be261" />
<img width="1841" height="911" alt="image" src="https://github.com/user-attachments/assets/fa7ada18-6b3c-49a5-a73d-6576599401a7" />
<img width="1827" height="889" alt="image" src="https://github.com/user-attachments/assets/9eb01859-f5c1-4de0-9945-d7c5abe20fbf" />
<img width="1843" height="877" alt="image" src="https://github.com/user-attachments/assets/246ee872-f4bb-4816-a403-35ae46ac4e77" />
<img width="1856" height="899" alt="image" src="https://github.com/user-attachments/assets/e2bf83ef-5fde-4a1e-9f6e-735f1f7ea9c3" />


## ✨ Features
- 🔍 **Real-time Search** — Instant filtering as you type
- 🛒 **Smart Cart** — Add, remove, increment/decrement items with quantity tracking
- 📊 **Bill Calculator** — Auto-calculates subtotal, delivery fee, and 5% GST
- 🔐 **User Auth** — Login/Logout flow with Redux state management
- 📱 **Responsive Design** — Works on mobile and desktop
- ⚡ **Shimmer UI** — Skeleton loading for better UX
- 🌐 **Online/Offline Detection** — Custom hook for network status
- 🎯 **Filter System** — Top Rated & Fast Delivery filters

## 🛠️ Tech Stack
| Technology | Purpose |
|---|---|
| React 19 | UI Library |
| Redux Toolkit | Global State Management |
| React Router v6 | Client-side Routing |
| Parcel | Module Bundler |
| Swiggy API | Restaurant Data |
| Vercel | Deployment |
| CSS3 | Styling (custom, no frameworks) |

## 🏗️ Architecture
- **Custom Hooks**: `useRestaurants`, `useRestaurantMenu`, `useOnlineStatus`
- **Redux Store**: Cart slice (CRUD operations), Auth slice
- **Utility Layer**: Filter helpers, constants, mock data fallback

## 🚀 How to Run
git clone https://github.com/your-username/FoodSathi.git
cd FoodSathi
npm install
npm start
