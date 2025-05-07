
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Render the app
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Function to load the HaiVE widget
function loadHaiVEWidget() {
  console.log("Loading HaiVE widget...");
  const widgetScript = document.createElement('script');
  widgetScript.src = "https://widget.haive.tech/widget.iife.js";
  widgetScript.setAttribute('data-id', "e0cba082-be1e-4d12-88d9-b1f3c3eeafba_63767a13-c85c-4ede-b29f-c8691628025e");
  widgetScript.setAttribute('data-phone_number', "6XHPXCcYFelxHXcQ");
  widgetScript.setAttribute('data-assistant_name', "Sara");
  document.body.appendChild(widgetScript);
  
  // Add styling for widget positioning
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    body { 
      padding-bottom: 160px !important;
    }
    [data-haive-widget] { 
      z-index: 999999 !important; 
      bottom: 20px !important;
      right: 20px !important;
      position: fixed !important;
    }
  `;
  document.head.appendChild(styleElement);
}

// Wait for DOM to be fully loaded before adding the widget
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit to make sure the app is rendered first
  setTimeout(loadHaiVEWidget, 1000);
});

// Also try to load on window load as a fallback
window.addEventListener('load', () => {
  // Check if widget already exists
  const widgetElement = document.querySelector('[data-haive-widget]');
  if (!widgetElement) {
    console.log("Widget not found on window load, trying again");
    loadHaiVEWidget();
  }
});
