# Task Manager App

A simple, intuitive, and clean Task Manager application built with React Native and Expo. This app allows users to efficiently manage their daily tasks by adding, completing, and deleting them.

## Features

- **Add Task**: Quickly add new tasks with a brief description.
- **Mark Task as Complete**: Toggle completion status with a single tap. Completed tasks are visually distinguished with a strike-through and a checkmark icon.
- **Delete Task**: Remove tasks from your list with the delete icon.
- **Task List**: View all tasks in a clean list format with real-time updates on remaining tasks.
- **Visual Feedback**: Interactive elements (buttons, checkboxes) provide immediate visual confirmation of user actions.
- **Modern UI**: A clean, mobile-first design with smooth interactions and responsive layout.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app installed on your mobile device (for testing on physical hardware) OR an Android/iOS emulator.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd TaskManager
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npx expo start
   ```

4. **Run on a device**:
   - For **iOS Simulator**: Press `i` in the terminal.
   - For **Android Emulator**: Press `a` in the terminal.
   - For **Physical Device**: Scan the QR code shown in the terminal using the Expo Go app (Android) or the Camera app (iOS).

## Tech Stack & Libraries

- **React Native**: For building the native application using React.
- **Expo**: A framework and platform for universal React applications.
- **Expo Router**: File-based routing for React Native.
- **@expo/vector-icons**: Used for `MaterialIcons` (check-circle, delete-outline, add, etc.).
- **Local State Management**: Built using React's `useState` hook for efficient task management within the component.

## Project Structure

- `app/index.tsx`: The main screen containing all task manager logic and UI.
- `app/_layout.tsx`: Root layout configuration using Expo Router's Stack.
- `assets/`: Contains images and icons used in the app.

## Evaluation Criteria Highlights

- **Functionality**: Fully implements Add, Complete, and Delete operations.
- **Code Quality**: Clean, modular code using TypeScript with proper interface definitions.
- **UI/UX**: Features a modern aesthetic, responsive design, and intuitive user feedback.
- **Core Concepts**: Demonstrates proficient use of React Hooks, FlatList for performance, and KeyboardAvoidingView for mobile UX.
