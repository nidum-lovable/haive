
import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HaiVEChatbot = () => {
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);

  const toggleWidget = () => {
    setIsWidgetVisible(prev => !prev);
  };

  useEffect(() => {
    // Function to initialize HaiVE widget
    const initializeHaiVE = () => {
      // Remove any existing script to prevent duplicates
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }

      if (!isWidgetVisible) {
        // If widget is not visible, simply return without initializing
        const container = document.getElementById('haive-widget-container');
        if (container) {
          container.innerHTML = '';
        }
        return;
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
        // Add specific styles to ensure widget works
        widgetContainer.style.pointerEvents = 'auto';
      }

      // Ensure all buttons, links, and inputs are clickable
      const clickableElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
      clickableElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.pointerEvents = 'auto';
        }
      });
    };

    // Initialize HaiVE based on visibility state
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
      setTimeout(ensureClickability, 2000)
    ];
    
    // Clean up function
    return () => {
      // Disconnect observer
      observer.disconnect();
      
      // Clear all timeouts
      timeouts.forEach(timeout => clearTimeout(timeout));
      
      // Remove script if component unmounts
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isWidgetVisible]); // Add isWidgetVisible to dependencies

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-5 right-5 z-[9999] rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90 transition-all"
        onClick={toggleWidget}
      >
        {isWidgetVisible ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      <div 
        id="haive-widget-container"
        className={isWidgetVisible ? "visible" : "invisible"}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9998,
          pointerEvents: isWidgetVisible ? "auto" : "none",
          opacity: isWidgetVisible ? 1 : 0,
          transition: "opacity 0.3s ease"
        }}
      ></div>
    </>
  );
};

export default HaiVEChatbot;
