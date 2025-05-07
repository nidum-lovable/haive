
import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const HaiVEChatbot = () => {
  const [isWidgetVisible, setWidgetVisible] = useState(false);

  useEffect(() => {
    // Function to initialize HaiVE widget
    const initializeHaiVE = () => {
      // Remove any existing script to prevent duplicates
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and configure new script
      const script = document.createElement('script');
      script.id = 'haive-script';
      script.src = 'https://widget.haive.tech/widget.iife.js';
      script.async = true;
      
      // Set required attributes
      script.setAttribute('data-id', 'e0cba082-be1e-4d12-88d9-b1f3c3eeafba_95e6c2e7-2909-46cb-bd02-48109a7ae785');
      script.setAttribute('data-phone_number', '17252390568');
      script.setAttribute('data-assistant_name', 'Sara');
      script.setAttribute('data-container', 'haive-widget-container');
      
      // Add to container
      const container = document.getElementById('haive-widget-container');
      if (container) {
        container.appendChild(script);
      }
    };

    // Function to ensure all elements are clickable
    const ensureClickability = () => {
      // Make all elements clickable
      document.querySelectorAll('*').forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.pointerEvents = 'auto';
        }
      });
      
      // Special handling for widget container
      const widgetContainer = document.getElementById('haive-widget-container');
      if (widgetContainer) {
        widgetContainer.style.pointerEvents = 'auto';
        widgetContainer.style.display = isWidgetVisible ? 'block' : 'none';
        widgetContainer.style.width = '350px';
        widgetContainer.style.height = '600px';
      }

      // Ensure all buttons, links, and inputs are clickable
      const clickableElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
      clickableElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.pointerEvents = 'auto';
        }
      });
    };

    // Initialize HaiVE if visible
    if (isWidgetVisible) {
      initializeHaiVE();

      // Apply initial clickability
      ensureClickability();
      
      // Create a MutationObserver to watch for DOM changes
      const observer = new MutationObserver(() => {
        ensureClickability();
      });
      
      // Configure observer to watch for changes to the entire document
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
      
      // Set up multiple delayed attempts to ensure clickability
      // This handles async loaded content and widgets
      const timeouts = [
        setTimeout(ensureClickability, 100),
        setTimeout(ensureClickability, 500),
        setTimeout(ensureClickability, 1000),
        setTimeout(ensureClickability, 2000),
        setTimeout(ensureClickability, 5000),
        setTimeout(ensureClickability, 10000)
      ];

      // Add global click handler to diagnose issues
      const clickHandler = () => {
        ensureClickability();
      };
      document.addEventListener('click', clickHandler);
      
      // Clean up function
      return () => {
        // Disconnect observer
        observer.disconnect();
        
        // Clear all timeouts
        timeouts.forEach(timeout => clearTimeout(timeout));
        
        // Remove click handler
        document.removeEventListener('click', clickHandler);
      };
    }
  }, [isWidgetVisible]); // Run effect when visibility changes

  const toggleWidgetVisibility = () => {
    setWidgetVisible(prev => !prev);
  };

  return (
    <>
      {/* Widget Container (visibility controlled by CSS) */}
      <div 
        id="haive-widget-container" 
        className="fixed bottom-20 right-20 z-[9999]"
        style={{ 
          display: isWidgetVisible ? 'block' : 'none',
          width: '350px',
          height: '600px'
        }}
      />
      
      {/* Chat Toggle Button */}
      <button
        className="fixed bottom-5 right-5 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-all z-50"
        onClick={toggleWidgetVisibility}
      >
        {isWidgetVisible ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>
    </>
  );
};

export default HaiVEChatbot;
