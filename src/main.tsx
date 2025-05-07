
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Render the app
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Add some styles to fix widget positioning
document.addEventListener('DOMContentLoaded', () => {
  // Wait for everything to load
  setTimeout(() => {
    // Add styling to ensure widget doesn't overlap content
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body { 
        padding-bottom: 160px !important;
      }
      [data-haive-widget] { 
        z-index: 10000 !important; 
        bottom: 20px !important;
        position: fixed !important;
      }
      .h-52 {
        height: 13rem !important;
      }
    `;
    document.head.appendChild(styleElement);

    // Check for widget and reload if needed
    const widgetElement = document.querySelector('[data-haive-widget]');
    if (!widgetElement) {
      console.warn('HaiVE widget not detected, reloading script');
      const script = document.createElement('script');
      script.src = "https://widget.haive.tech/widget.iife.js";
      script.setAttribute('data-id', "e0cba082-be1e-4d12-88d9-b1f3c3eeafba_63767a13-c85c-4ede-b29f-c8691628025e");
      script.setAttribute('data-phone_number', "6XHPXCcYFelxHXcQ");
      script.setAttribute('data-assistant_name', "Sara");
      document.body.appendChild(script);
    }
  }, 1000);
});
