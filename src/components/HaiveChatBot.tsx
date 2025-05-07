import { useEffect, useRef } from 'react'

const HaiVEChatbot = () => {
  // Keep track of timeouts to clear them properly
  // Use NodeJS.Timeout type for compatibility with setTimeout
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  
  useEffect(() => {
    // Clean function to ensure the widget container has proper styles
    const setupWidgetContainer = () => {
      const container = document.getElementById('haive-widget-container');
      if (!container) return;
      
      // Ensure container doesn't block interactions with the page
      container.style.pointerEvents = 'none';
      
      // Find all direct children and make them clickable
      Array.from(container.children).forEach(child => {
        if (child instanceof HTMLElement) {
          child.style.pointerEvents = 'auto';
        }
      });
      
      // Ensure the main page elements can receive interactions
      document.body.style.pointerEvents = 'auto';
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.style.pointerEvents = 'auto';
      }
    };
    
    // Add HaiVE widget script if it doesn't exist
    const addHaiveScript = () => {
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
    
    // Initial setup
    addHaiveScript();
    setupWidgetContainer();
    
    // Apply styles with multiple delays to catch async widget loading
    const delays = [100, 500, 1000, 2000, 3000];
    delays.forEach(delay => {
      const timeoutId = setTimeout(setupWidgetContainer, delay);
      timeoutsRef.current.push(timeoutId);
    });
    
    // Setup mutation observer with strong configuration
    const observer = new MutationObserver(() => {
      setupWidgetContainer();
      
      // Re-apply after slight delay to catch any nested changes
      const timeoutId = setTimeout(setupWidgetContainer, 100);
      timeoutsRef.current.push(timeoutId);
    });
    
    // Watch for container changes with comprehensive config
    const container = document.getElementById('haive-widget-container');
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
        characterData: true
      });
    }
    
    // Watch for body changes that might affect interaction
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
    
    // Cleanup function
    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(id => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, []);

  return null;
};

export default HaiVEChatbot;
