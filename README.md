# React UI Component Training

A practical application for practicing and improving your React component building skills. This app provides a side-by-side comparison between a goal component and your attempt, allowing you to practice recreating UI components.

## Overview

This application is designed to help developers improve their React component building skills through practice. The interface displays a goal component on the left side and provides a workspace for your attempt on the right side. The goal is to recreate the component as accurately as possible.

![App Screenshot](https://via.placeholder.com/800x400?text=React+UI+Component+Training)

## Features

- **Side-by-side comparison**: See the goal component and your attempt simultaneously
- **Interactive components**: Practice building components with state and user interactions
- **Responsive design**: Learn to build components that work across different screen sizes
- **TypeScript support**: Improve your TypeScript skills while building components

## Project Structure

```
├── src/
│   ├── App.tsx              # Main application component
│   ├── App.css              # Main application styles
│   ├── Goal/                # Contains the goal component to recreate
│   │   ├── GoalComponent.tsx
│   │   └── GoalComponent.css
│   ├── Attempt/             # Where you build your attempt
│   │   ├── AttemptComponent.tsx
│   │   └── AttemptComponent.css
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd react-ui-training-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## How to Use

1. Examine the goal component on the left side of the screen
2. Open the source code for the goal component at `src/Goal/GoalComponent.tsx` to understand its structure
3. Modify the attempt component at `src/Attempt/AttemptComponent.tsx` to recreate the goal component
4. Use the side-by-side comparison to check your progress
5. Refresh the page to see your changes

## Current Goal Component

The current goal component is a card with:
- An image placeholder
- A "Featured" badge
- Title and description
- Meta information (date and author)
- Interactive star rating system
- Like button with toggle functionality

Try to recreate all these features in your attempt!

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Inspired by the need for practical React component building exercises
- Thanks to all contributors who help improve this training tool