
# Simple E-Commerce Product List App

This is a cross-platform e-commerce application built with React Native, Redux Toolkit, and TypeScript. It showcases a simple product list with the ability to add and delete products.

## Features

- Display a list of products
- Add new products
- Delete existing products
- State management with Redux Toolkit
- Performance optimization with useMemo and useCallback
- Atomic Design structure

## Prerequisites

- Node.js (v12 or later)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ecommerce-product-list-app.git
   cd ecommerce-product-list-app
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```



## Running the App

### iOS

```
npx expo run:ios
```

### Android

```
npx expo run:android
```

## Project Structure

The project follows the Atomic Design principle:

- `src/components/atoms`: Basic building blocks (Button, Input, Text)
- `src/components/molecules`: Combinations of atoms (ProductCard)
- `src/components/organisms`: Collections of molecules (ProductList)
- `src/components/templates`: Layout structures (ProductListTemplate)
- `src/components/pages`: Complete page structures (ProductListPage)
- `src/store`: Redux store and slices
- `src/types`: TypeScript type definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.