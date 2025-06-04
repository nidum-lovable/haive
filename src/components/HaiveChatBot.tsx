
import { useEffect } from 'react';

const HaiVEChatbot = () => {
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
      
      // Set required attributes with new data
      script.setAttribute('data-id', '4f8cbfe7-9e96-4f3b-912c-17e96f490fd8_0bb2b0f3-dbdb-46bd-bee1-904ebcad0faf');
      script.setAttribute('data-phone_number', 'OpnY8jad0mdLrnHm');
      script.setAttribute('data-assistant_name', 'Samantha');
      
      // Add to document head or body
      document.head.appendChild(script);
    };

    // Function to ensure all elements are clickable
    const ensureClickability = () => {
      // Make all elements clickable
      document.querySelectorAll('*').forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.pointerEvents = 'auto';
        }
      });
      
      // Ensure all buttons, links, and inputs are clickable
      const clickableElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
      clickableElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.pointerEvents = 'auto';
        }
      });
    };

    // Initialize HaiVE
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
      console.log("Document clicked, ensuring clickability");
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
      
      // Remove script if component unmounts
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default HaiVEChatbot;
