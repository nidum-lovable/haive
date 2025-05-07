
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a simple function to check if the HaiVE script is loaded
const checkHaiveScriptLoaded = () => {
  // This is a non-blocking check that runs after the app is rendered
  setTimeout(() => {
    const haiveScript = document.querySelector('script[src="https://widget.haive.tech/widget.iife.js"]');
    if (haiveScript) {
      console.log('HaiVE widget script is present in the DOM');
      
      // Check if widget is initialized in the DOM after a delay
      setTimeout(() => {
        const widgetElement = document.querySelector('[data-haive-widget]');
        if (widgetElement) {
          console.log('HaiVE widget is successfully initialized in the DOM');
        } else {
          console.warn('HaiVE widget script loaded but widget not initialized yet');
        }
      }, 5000); // Check after 5 seconds to give it time to initialize
    } else {
      console.warn('HaiVE widget script might not be properly loaded');
    }
  }, 2000);
};

// Render the app
createRoot(document.getElementById("root")!).render(<App />);

// Check HaiVE script
checkHaiveScriptLoaded();
