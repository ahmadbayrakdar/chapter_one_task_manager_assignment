# Task Manager

A React Native task management application built with Expo. Features a clean interface with support for both light and dark modes.

## Features

- **Task Management**: Create, complete, and delete tasks.
- **Task Counter**: Real-time tracking of pending tasks.
- **Theming**: Automatic light and dark mode support based on system settings.
- **Input Validation**: Prevents adding empty tasks.
- **Mobile Optimized**: Uses `KeyboardAvoidingView` for smooth input handling and `MaterialIcons` for a consistent visual language.

## Tech Stack

- React Native
- Expo (SDK 54)
- TypeScript
- Expo Router
- @expo/vector-icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmadbayrakdar/chapter_one_task_manager_assignment.git
   cd TaskManager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npx expo start
   ```

2. View the app on your preferred platform:
   - **iOS Simulator**: Press `i`.
   - **Android Emulator**: Press `a`.
   - **Physical Device**: Scan the QR code in your terminal using the **Expo Go** app (Android) or the **Camera** app (iOS).

## Project Structure

- `app/`: Core application screens and routing.
- `assets/`: Static images and icons.
- `scripts/`: Build and maintenance scripts.

## License

MIT
