
import { useEffect } from 'react';

const HaiVEChatbot = () => {
  useEffect(() => {
    // Function to initialize HaiVE widget
    const initializeWidget = () => {
      // Remove any existing script first
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
      document.getElementById('haive-widget-container')?.appendChild(script);
    };

    // Initialize HaiVE
    initializeWidget();
    
    // Fix any potential z-index issues with the chat widget
    const fixChatWidgetLayout = () => {
      // Find the widget container
      const widgetContainer = document.getElementById('haive-widget-container');
      if (!widgetContainer) return;
      
      // Check for any full-screen/fixed position elements within the widget
      const fixedElements = widgetContainer.querySelectorAll('.fixed, [class*="fixed"], [style*="position: fixed"]');
      fixedElements.forEach(el => {
        if (el instanceof HTMLElement) {
          // Ensure these elements don't have full inset that blocks the entire UI
          if (el.style.inset === '0px' || el.classList.contains('inset-0')) {
            el.style.inset = 'auto';
            el.style.position = 'relative';
          }
          
          // Ensure z-index is appropriate
          if (parseInt(el.style.zIndex || '0') > 1000) {
            el.style.zIndex = '999';
          }
        }
      });
      
      // Ensure chat button stays in bottom right
      const chatButton = widgetContainer.querySelector('button');
      if (chatButton instanceof HTMLElement && !chatButton.style.position) {
        chatButton.style.position = 'fixed';
        chatButton.style.bottom = '20px';
        chatButton.style.right = '20px';
      }
    };
    
    // Run the fix immediately and after a delay to catch dynamically loaded content
    fixChatWidgetLayout();
    const timeoutIds = [
      setTimeout(fixChatWidgetLayout, 1000),
      setTimeout(fixChatWidgetLayout, 2000)
    ];
    
    // Set up an observer to monitor for DOM changes in the widget container
    const observer = new MutationObserver(() => {
      fixChatWidgetLayout();
    });
    
    // Start observing once the container exists
    const widgetContainer = document.getElementById('haive-widget-container');
    if (widgetContainer) {
      observer.observe(widgetContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
    
    // Clean up function
    return () => {
      // Remove observer
      observer.disconnect();
      
      // Clear all timeouts
      timeoutIds.forEach(id => clearTimeout(id));
      
      // Remove script if component unmounts
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HaiVEChatbot;
