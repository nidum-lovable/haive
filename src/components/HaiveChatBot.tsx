import { useEffect, useRef } from 'react'

const HaiVEChatbot = () => {
  // Keep track of timeouts for proper cleanup
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  
  useEffect(() => {
    // Function to add the HaiVE script
    const addHaiveScript = () => {
      // Skip if script already exists
      if (document.getElementById('haive-script')) return;
      
      const script = document.createElement('script');
      script.id = 'haive-script';
      script.src = 'https://widget.haive.tech/widget.iife.js';
      script.async = true;
      script.setAttribute('data-id', 'e0cba082-be1e-4d12-88d9-b1f3c3eeafba_95e6c2e7-2909-46cb-bd02-48109a7ae785');
      script.setAttribute('data-phone_number', '17252390568');
      script.setAttribute('data-assistant_name', 'Sara');
      script.setAttribute('data-container', 'haive-widget-container');
      
      const container = document.getElementById('haive-widget-container');
      if (container) {
        container.appendChild(script);
      }
    };

    // Function to fix pointer events
    const fixPointerEvents = () => {
      // Fix widget container
      const widgetContainer = document.getElementById('haive-widget-container');
      if (!widgetContainer) return;
      
      // Set widget container styles
      Object.assign(widgetContainer.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '9999',
        pointerEvents: 'none' // Allow clicks to pass through container
      });
      
      // Ensure all widget elements are clickable
      Array.from(widgetContainer.children).forEach(child => {
        if (child instanceof HTMLElement) {
          child.style.pointerEvents = 'auto';
          
          // Make all descendants of child clickable
          const descendants = child.querySelectorAll('*');
          descendants.forEach(descendant => {
            if (descendant instanceof HTMLElement) {
              descendant.style.pointerEvents = 'auto';
            }
          });
        }
      });
      
      // Ensure body and root elements are clickable
      document.body.style.pointerEvents = 'auto';
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.style.pointerEvents = 'auto';
        
        // Make all content in root element clickable
        const rootDescendants = rootElement.querySelectorAll('*');
        rootDescendants.forEach(element => {
          if (element instanceof HTMLElement) {
            element.style.pointerEvents = 'auto';
          }
        });
      }
    };
    
    // Initial setup
    addHaiveScript();
    
    // Apply fixes immediately and with delays to catch async loading
    fixPointerEvents();
    
    // Set up multiple delayed attempts to ensure widget loads properly
    const delays = [100, 500, 1000, 2000, 3000, 5000];
    delays.forEach(delay => {
      const timeoutId = setTimeout(fixPointerEvents, delay);
      timeoutsRef.current.push(timeoutId);
    });
    
    // Set up mutation observer to apply fixes when DOM changes
    const observer = new MutationObserver((mutations) => {
      // Apply fixes after any DOM change
      fixPointerEvents();
      
      // Add another delayed fix to ensure changes are caught
      const timeoutId = setTimeout(fixPointerEvents, 100);
      timeoutsRef.current.push(timeoutId);
    });
    
    // Observe the widget container with comprehensive config
    const widgetContainer = document.getElementById('haive-widget-container');
    if (widgetContainer) {
      observer.observe(widgetContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
        characterData: true
      });
    }
    
    // Also observe the body to catch any other relevant changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Cleanup function
    return () => {
      // Disconnect observer
      observer.disconnect();
      
      // Clear all timeouts
      timeoutsRef.current.forEach(id => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, []);

  return null;
};

export default HaiVEChatbot;
