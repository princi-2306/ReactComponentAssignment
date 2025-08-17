# React Component Library Assignment

A modern React component library built with TypeScript, TailwindCSS, and Storybook featuring flexible InputField and DataTable components.

## 🚀 Live Demo

- *Preview Link*: https://react-component-assignment-797j.vercel.app/
- *Repository*: https://github.com/princi-2306/ReactComponentAssignment

## 📋 Components Overview

### 1. InputField Component
A flexible, accessible input component with multiple variants and validation states.

*Features:*
- ✅ Text input with label, placeholder, helper text, error message
- ✅ States: disabled, invalid, loading
- ✅ Variants: filled, outlined, ghost
- ✅ Sizes: small, medium, large
- ✅ Optional clear button and password toggle
- ✅ Light & dark theme support
- ✅ Full TypeScript support
- ✅ ARIA accessibility labels

### 2. DataTable Component
A powerful data table component with sorting and selection capabilities.

*Features:*
- ✅ Display tabular data with custom columns
- ✅ Column sorting functionality
- ✅ Row selection (single/multiple)
- ✅ Loading and empty states
- ✅ Responsive design
- ✅ TypeScript generics for type safety
- ✅ ARIA accessibility support

## 🛠 Tech Stack

- *React 18* - UI library
- *TypeScript* - Type safety
- *TailwindCSS* - Utility-first styling
- *Storybook* - Component documentation
- *Vite* - Build tool and dev server
- *Vitest* - Testing framework
- *ESLint & Prettier* - Code quality

## 📁 Project Structure


react-components-assignment/ <br>
├── src/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── components/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── InputField/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── InputField.tsx <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── InputField.types.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── InputField.test.tsx <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   └── index.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── DataTable/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── DataTable.tsx <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── DataTable.types.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── DataTable.test.tsx <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   └── index.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   └── index.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── stories/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   ├── InputField.stories.tsx <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   └── DataTable.stories.tsx <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── hooks/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   └── useTheme.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── utils/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   │&nbsp;&nbsp;&nbsp;&nbsp;   └── cn.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   └── styles/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;       └── globals.css <br>
├── .storybook/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── main.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── preview.ts <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   └── preview-head.html <br>
├── public/ <br>
├── tests/ <br>
│&nbsp;&nbsp;&nbsp;&nbsp;   └── setup.ts <br>
├── package.json <br>
├── tailwind.config.js <br>
├── tsconfig.json <br>
├── vite.config.ts <br>
└── README.md <br>


## 🚦 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. *Clone the repository*
   bash
   git clone [your-repo-url]
   cd react-components-assignment
   

2. *Install dependencies*
   bash
   npm install
   # or
   yarn install
   

3. *Start development server*
   bash
   npm run dev
   # or
   yarn dev
   

4. *Run Storybook*
   bash
   npm run storybook
   # or
   yarn storybook
   

## 🧪 Testing

Run the test suite:

bash
npm run test
# or
yarn test

# Run tests in watch mode
npm run test:watch
# or
yarn test:watch

# Generate coverage report
npm run test:coverage
# or
yarn test:coverage


## 📚 Storybook Documentation

Storybook provides interactive documentation for all components:

bash
npm run storybook
# or
yarn storybook


Visit http://localhost:6006 to explore component stories, variants, and interactive controls.

### Building Storybook

bash
npm run build-storybook
# or
yarn build-storybook


## 🔧 Development Approach

### Design System Philosophy

1. *Atomic Design*: Components are built following atomic design principles
2. *Composition over Configuration*: Flexible, composable components
3. *Accessibility First*: WCAG 2.1 AA compliance
4. *TypeScript First*: Full type safety and IntelliSense support

### Component Architecture

1. *Separation of Concerns*: Logic, types, and styles are separated
2. *Generic Types*: DataTable uses TypeScript generics for type safety
3. *Hook-based Logic*: Custom hooks for reusable stateful logic
4. *Compound Components*: Complex components broken into smaller parts

### Code Quality Standards

- *ESLint*: Enforced coding standards
- *Prettier*: Consistent code formatting
- *TypeScript*: Strict type checking
- *Testing*: Comprehensive unit tests with Vitest
- *Accessibility*: ARIA labels and semantic HTML

## 🚀 Deployment

### Storybook Deployment

Deploy to Chromatic:
bash
npm run chromatic
# or
yarn chromatic


Deploy to Vercel:
bash
vercel --prod


### Component Library Build

bash
npm run build
# or
yarn build


## 📊 Performance Considerations

- *Tree Shaking*: Components are individually exportable
- *Bundle Size*: Minimal dependencies and optimized builds
- *Lazy Loading*: Stories are code-split automatically
- *Memoization*: React.memo used where appropriate
---

*Built using React, TypeScript, and TailwindCSS*
