
import { useEffect } from 'react';

const HaiVEChatbot = () => {
  useEffect(() => {
    // Function to add the HaiVE script
    const addHaiveScript = () => {
      // Don't add script if it already exists
      if (document.getElementById('haive-script')) {
        return;
      }

      // Create the script element
      const script = document.createElement('script');
      script.id = 'haive-script';
      script.src = 'https://widget.haive.tech/widget.iife.js';
      script.async = true;
      
      // Set the required attributes for HaiVE widget
      script.setAttribute('data-id', 'e0cba082-be1e-4d12-88d9-b1f3c3eeafba_95e6c2e7-2909-46cb-bd02-48109a7ae785');
      script.setAttribute('data-phone_number', '17252390568');
      script.setAttribute('data-assistant_name', 'Sara');
      script.setAttribute('data-container', 'haive-widget-container');
      
      // Append script to the container
      const container = document.getElementById('haive-widget-container');
      if (container) {
        container.appendChild(script);
      }
    };

    // Function to ensure everything is clickable
    const fixClickability = () => {
      // Make sure the root and its children are clickable
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.style.pointerEvents = 'auto';
      }
      
      // Make sure the widget container allows clicks through it except for its children
      const widgetContainer = document.getElementById('haive-widget-container');
      if (widgetContainer) {
        widgetContainer.style.pointerEvents = 'none';
        
        // Make all direct children of the widget container clickable
        const children = widgetContainer.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          child.style.pointerEvents = 'auto';
          
          // Make all descendants of the child clickable as well
          const descendants = child.querySelectorAll('*');
          descendants.forEach(descendant => {
            if (descendant instanceof HTMLElement) {
              descendant.style.pointerEvents = 'auto';
            }
          });
        }
      }
      
      // Ensure body is clickable
      document.body.style.pointerEvents = 'auto';
      
      // Make sure all inputs, buttons, links, etc. in the document are clickable
      const clickableElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
      clickableElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.pointerEvents = 'auto';
        }
      });
    };

    // Initial setup
    addHaiveScript();
    
    // Fix clickability immediately
    fixClickability();
    
    // Set up a MutationObserver to detect changes to the DOM
    const observer = new MutationObserver(() => {
      // When DOM changes, make sure everything is still clickable
      fixClickability();
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
    
    // Set up multiple delayed attempts to fix clickability (to handle async loading)
    const timeouts = [
      setTimeout(fixClickability, 100),
      setTimeout(fixClickability, 500),
      setTimeout(fixClickability, 1000),
      setTimeout(fixClickability, 2000),
      setTimeout(fixClickability, 5000)
    ];
    
    // Clean up function
    return () => {
      // Disconnect observer
      observer.disconnect();
      
      // Clear all timeouts
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return null; // This component doesn't render anything
};

export default HaiVEChatbot;
