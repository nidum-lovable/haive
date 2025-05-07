
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
          
          // Add more aggressive CSS to ensure widget doesn't overlap content
          const styleElement = document.createElement('style');
          styleElement.textContent = `
            body { 
              padding-bottom: 160px !important; 
              margin-bottom: 160px !important;
            }
            [data-haive-widget] { 
              z-index: 1000 !important; 
              bottom: 20px !important;
              position: fixed !important;
            }
            #hero, section {
              z-index: 1 !important;
              position: relative !important;
            }
            .pb-56 {
              padding-bottom: 14rem !important;
            }
            .pb-44 {
              padding-bottom: 11rem !important;
            }
          `;
          document.head.appendChild(styleElement);
        } else {
          console.warn('HaiVE widget script loaded but widget not initialized yet');
        }
      }, 5000); // Check after 5 seconds to give it time to initialize
    } else {
      console.warn('HaiVE widget script might not be properly loaded');
      
      // Attempt to reload the script
      reloadHaiveScript();
    }
  }, 2000);
};

// Function to reload the HaiVE script if it's missing
const reloadHaiveScript = () => {
  const existingScript = document.querySelector('script[src="https://widget.haive.tech/widget.iife.js"]');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = "https://widget.haive.tech/widget.iife.js";
    script.async = true;
    script.setAttribute('data-id', "e0cba082-be1e-4d12-88d9-b1f3c3eeafba_63767a13-c85c-4ede-b29f-c8691628025e");
    script.setAttribute('data-phone_number', "6XHPXCcYFelxHXcQ");
    script.setAttribute('data-assistant_name', "Sara");
    document.body.appendChild(script);
    console.log('Attempted to reload HaiVE widget script');
  }
};

// Render the app
createRoot(document.getElementById("root")!).render(<App />);

// Check HaiVE script
checkHaiveScriptLoaded();
