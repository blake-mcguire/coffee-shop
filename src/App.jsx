
// :movie_camera: Exercise 1: Launching a Café’s Digital Menu Board with React and Vite
// Objective: Build a digital menu board for a café using React. This initial setup will display different categories such as coffees, teas, and pastries, with a few items listed under each category.
// Problem Statement: Java Joy, a local café, is seeking to transition from traditional paper menus to a digital menu board. Your challenge is to set up a basic React project using Vite, where you’ll create a simple digital menu board displaying various café items.
// Instructions:
// Environment Setup:Confirm Node.js is installed on your machine.
// Initiate a new React project using Vite: npx create-vite java-joy-menu --template react.
// Enter the project directory: cd java-joy-menu.
// Run npm install to install dependencies.
// Project Structure:Inside the src directory, create a components folder for your React components.
// In components, make individual files for menu categories: Coffees.jsx, Teas.jsx, and Pastries.jsx.
// Developing Components:Each component (Coffees, Teas, Pastries) should return a list of items to be displayed.
// For now, hardcode the items within each component. Example: <p>Espresso</p>, <p>Cappuccino</p> in Coffees.jsx.
// Integrating Components in App:Import your newly created components into App.jsx.
// Render these components in App.jsx to form your digital menu board.
// Basic Styling:Create a CSS file, MenuStyles.css, inside the src directory.
// Write basic CSS to style your menu board and import this stylesheet in App.jsx.
// Hints:
// Use <div> elements to wrap the list of items in each component for better structure and styling.
// Keep your CSS simple. For example, use text-align: center to center your text.
// function App() {

import React, {Component} from "react"; 

import Teas from "./components/Teas";
import CoffeesList from "./components/Coffees";
import PastryList from "./components/Pastries";
function App(){
  return (
    <>
      <div>
         <CoffeesList />
         <Teas />
         <PastryList />
      </div>
    </>
  )
}

export default App
