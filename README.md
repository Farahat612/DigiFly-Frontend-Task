# **Digi-Fly Frontend Challenge**

## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Technologies Used](#technologies-used)
6. [Localization](#localization)
7. [Accessibility](#accessibility)
8. [Issues](#issues)
9. [Contributing](#contributing)
10. [License](#license)

---

## **Overview**

This project is a **frontend challenge** for Digi-Fly marketing agency. It includes features such as a form, user list with table integration, a map section, and a rich text editor. The application prioritizes **responsiveness**, **accessibility**, and **globalization** with support for both English and Arabic.

> Figma design can be found [here](https://www.figma.com/design/2TwCYs6Ddo3sYy274l4gV9/Frontend-Task-2024?node-id=11-691&node-type=canvas&t=r6WfXg6zpIJA1GeW-0)

---

## **Features**

### **1. Localization**

- Supports multiple languages (English and Arabic).
- Right-to-left (RTL) and left-to-right (LTR) layout support.
- Dynamic content rendering based on the selected locale.

### **2. Rich Text Editor**

- A feature-rich text editor with bold, italic, underline, and list options.
- RTL and LTR toggling.
- Keyboard shortcuts for faster text editing.

### **3. Map Section**

- Interactive map powered by **Leaflet** and **React-Leaflet**.
- Custom tooltips and gradient boundaries.
- Accessible markers with keyboard navigation.

### **4. User Management**

- Form for creating users with real-time validation and feedback.
- User list displayed in a responsive and accessible table.
- Redux integration for global state management.

### **5. Accessibility**

- Implements **ARIA attributes**, roles, and labels across all components.
- Fully navigable via screen readers and keyboards.

### **6. Responsive Design**

- Scales gracefully across all screen sizes.
- Language selector adapts to small screens.
- Optimized font sizes and spacing for readability.

---

## **Getting Started**

### **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/Farahat612/digi-fly-frontend.git
   cd digi-fly-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## **Project Structure**

```bash
src/
├── app/                 # Next.js app directory
│   ├── [locale]/       # Localized routes
│   └── providers.tsx   # Global providers
├── components/         # React components
│   ├── global/        # Shared components
│   ├── ui/            # UI components
│   └── sections/      # Page sections
├── hooks/             # Custom React hooks
├── lib/               # Utilities and helpers
├── store/             # Redux store configuration
│   └── features/      # Redux slices and API
├── messages/          # i18n translation files
└── schemas/           # Zod validation schemas
```

---

## **Technologies Used**

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Localization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Map Integration**: [Leaflet](https://leafletjs.com/), [React-Leaflet](https://react-leaflet.js.org/)
- **Rich Text Editor**: Custom-built using ShadCN components
- **Toast Notifications**: [Sonner](https://sonner.dev/)

---

## **Localization**

The app uses `next-intl` for seamless localization and includes the following features:

- **Dynamic JSON-based translations**: Located in `public/locales/`.
- **RTL and LTR support**: Automatically adjusts layout based on the active language.
- **Language Switcher**: A select dropdown for switching between English and Arabic.

---

## **Accessibility**

Accessibility is a core focus of this project:

- **ARIA attributes and roles**:
  - Navbar, footer, forms, tables, and the text editor are fully labeled for screen readers.
- **Keyboard navigation**:
  - Map markers, language switcher, and the rich text editor are navigable via the keyboard.
- **Error announcements**:
  - Form validation errors are announced to assistive technologies.

---

## **Issues**

The following are the current issues identified in the project, organized by feature/component:

### **Rich Text Editor**

- **Deprecated APIs**:
  - Uses `execCommand` and `queryCommandState`, which are deprecated web APIs and need to be replaced with modern alternatives.
- **Selection-based Formatting**:
  - Font changes and RTL/LTR toggling currently apply to the entire input instead of the selected text.
  - Indentation functionality is inconsistent, especially in RTL mode.
- **Toggle List Functionality**:
  - The toggle list button is not working as expected.
- **Direction Synchronization**:
  - The text editor's direction is not fully synced with the global localization direction. For example, toggling between RTL and LTR for specific sections is inconsistent.

> These issues are being tracked and prioritized for resolution in upcoming sprints.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.
