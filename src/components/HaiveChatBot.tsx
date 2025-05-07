
import { useEffect } from 'react';

const HaiVEChatbot = () => {
  useEffect(() => {
    // Function to initialize HaiVE widget
    const initializeWidget = () => {
      console.log("Initializing HaiVE widget...");
      
      // Remove any existing script first to prevent duplicates
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and add script
      const script = document.createElement('script');
      script.id = 'haive-script';
      script.src = 'https://widget.haive.tech/widget.iife.js';
      script.async = true;
      
      // Configure script attributes
      script.setAttribute('data-id', 'e0cba082-be1e-4d12-88d9-b1f3c3eeafba_95e6c2e7-2909-46cb-bd02-48109a7ae785');
      script.setAttribute('data-phone_number', '17252390568');
      script.setAttribute('data-assistant_name', 'Sara');
      script.setAttribute('data-container', 'haive-widget-container');
      
      // Add script to document
      const container = document.getElementById('haive-widget-container');
      if (container) {
        console.log("Widget container found, appending script");
        container.appendChild(script);
      } else {
        console.log("Widget container not found, adding to body");
        document.body.appendChild(script);
      }
    };

    // Make sure container exists and is properly styled before initializing
    const setupContainer = () => {
      let container = document.getElementById('haive-widget-container');
      
      // Create container if it doesn't exist
      if (!container) {
        container = document.createElement('div');
        container.id = 'haive-widget-container';
        document.body.appendChild(container);
      }
      
      // Apply critical styles directly to the container
      container.style.position = 'fixed';
      container.style.bottom = '20px';
      container.style.right = '20px';
      container.style.zIndex = '9999';
      container.style.pointerEvents = 'none';
      container.style.width = 'auto';
      container.style.height = 'auto';
      container.style.maxWidth = '500px';
      container.style.minWidth = '60px';
      container.style.display = 'block';
      container.style.visibility = 'visible';
      container.style.opacity = '1';
      
      return container;
    };

    // Initialize with a sequence of timed attempts to ensure proper loading
    const setup = () => {
      const container = setupContainer();
      
      // First attempt - immediate
      initializeWidget();
      
      // Second attempt - after short delay
      setTimeout(() => {
        setupContainer();
        initializeWidget();
      }, 1000);
      
      // Third attempt - after longer delay
      setTimeout(() => {
        setupContainer();
        initializeWidget();
      }, 3000);
      
      // Set up an observer to monitor widget container changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length) {
            // Make sure all direct children of the container have pointer-events auto
            const container = document.getElementById('haive-widget-container');
            if (container) {
              Array.from(container.children).forEach(child => {
                if (child instanceof HTMLElement) {
                  child.style.pointerEvents = 'auto';
                  child.style.visibility = 'visible';
                  child.style.opacity = '1';
                }
              });
            }
          }
        });
      });
      
      // Start observing the container
      observer.observe(container, { childList: true, subtree: true });
      
      return observer;
    };
    
    // Run the setup
    const observer = setup();
    
    // Clean up function
    return () => {
      observer.disconnect();
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HaiVEChatbot;
