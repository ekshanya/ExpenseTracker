# Expense Tracker

A web-based application designed to help users manage their personal finances by tracking income, expenses, budgets, and providing insightful analytics.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)


## Overview
Expense Tracker is a single-page, client-side web application built to simplify personal finance management. It allows users to log transactions, set budgets, monitor spending, and visualize financial data through charts. The app supports both light and dark modes for enhanced user experience and uses LocalStorage for data persistence.

## Features
- **Dashboard**: View total income, expenses, and balance with quick navigation to key sections.
- **Transaction Management**: Add, update, and delete income/expense entries with categories, amounts, dates, and descriptions.
- **Budget Tracking**: Set budgets for specific categories and track spending against them, with a delete option.
- **Analytics**: Visualize spending by category (pie chart), monthly trends (bar chart), income vs. expenses (bar chart), and see top spending categories.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Dark Mode**: Toggle between light and dark themes with persistent settings.

## Technologies
- **HTML5**: Structure and layout.
- **CSS3**: Custom styling with variables for theming, enhanced by Bootstrap 5 for responsiveness.
- **JavaScript**: Core logic, DOM manipulation, and event handling (vanilla JS).
- **Bootstrap 5**: Grid system and UI components.
- **Chart.js**: Data visualizations (pie and bar charts).
- **LocalStorage**: Client-side data persistence.

## Installation
To run the Expense Tracker locally, follow these steps:

1. **Clone the Repository** (if hosted on GitHub):
    ```bash
    git clone https://github.com/[your-username]/expense-tracker.git
    cd expense-tracker
    ```

2. **Open in a Browser**:
    - No server is required since it’s a static app.
    - Open `index.html` in a modern web browser (e.g., Chrome, Firefox) by double-clicking the file or dragging it into the browser.

3. **Optional: Use a Local Server** (recommended for development):
    - Install a simple HTTP server (e.g., via VS Code’s Live Server extension or Node.js):
    ```bash
    npm install -g http-server
    http-server .
    ```
    - Access the app at [http://localhost:8080](http://localhost:8080).

## Usage
- **Home (Dashboard)**: Start here to see an overview and navigate to other sections.
- **Add Transaction**: Log income or expenses via the form.
- **Transaction History**: View, edit, or delete past transactions.
- **Budget**: Set category-specific budgets and monitor spending.
- **Analytics**: Explore spending patterns through charts and summaries.
- **Dark Mode**: Toggle the theme using the switch in the navbar.

## Screenshots

- **Dashboard**:
[Dashboard Light](/screenshots/Dashboard-light.png)
[Dashboard Dark](/screenshots/Dashboard-dark.png)


- **Add Transaction**:
[Expenses Light](/screenshots/Expenses-light.png)
[Expenses Dark](/screenshots/Expenses-dark.png)

- **Transactions**:
[Transaction Light](/screenshots/Transaction-light.png)
[Transaction Dark](/screenshots/Transaction-dark.png)

- **Budget**:
[Budget Light](/screenshots/Budget-light.png)
[Budget Dark](/screenshots/Budget-dark.png)

- **Analytics**:
[Analytics 1 Light](/screenshots/Analytics-light.png)
[Analytics 2 Light](/screenshots/Analytics-light(1).png)
[Analytics 1 Dark](/screenshots/Analytics-dark.png)
[Analytics 2 Dark](/screenshots/Analytics-dark(1).png)


## Future Enhancements
- **Backend Integration**: Add a server (e.g., Node.js/Express) with a database (e.g., MongoDB) for multi-user support.
- **User Authentication**: Implement login/signup with OAuth or JWT.
- **Advanced Analytics**: Add date range filters and predictive spending trends.
- **Settings Page**: Include options for currency selection and recurring transactions.
- **Export Functionality**: Allow users to export data as CSV or PDF.
