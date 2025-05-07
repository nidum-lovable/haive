
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

    // Function to make everything clickable
    const makeEverythingClickable = () => {
      // Strategy 1: Apply directly to all elements
      document.querySelectorAll('*').forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.setProperty('pointer-events', 'auto', 'important');
        }
      });
      
      // Strategy 2: Apply to specific elements that are most likely to be unclickable
      const interactiveElements = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .clickable, nav *, header *, footer *'
      );
      
      interactiveElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.setProperty('pointer-events', 'auto', 'important');
        }
      });
      
      // Strategy 3: Make sure HaiVE container is clickable
      const widgetContainer = document.getElementById('haive-widget-container');
      if (widgetContainer) {
        widgetContainer.style.setProperty('pointer-events', 'auto', 'important');
        widgetContainer.style.zIndex = '9999';
      }
      
      // Strategy 4: Add a global style to ensure everything is clickable
      let clickabilityStyle = document.getElementById('global-clickability');
      if (!clickabilityStyle) {
        clickabilityStyle = document.createElement('style');
        clickabilityStyle.id = 'global-clickability';
        clickabilityStyle.textContent = `
          * {
            pointer-events: auto !important;
          }
          #haive-widget-container, #haive-widget-container * {
            pointer-events: auto !important;
            z-index: 9999;
          }
        `;
        document.head.appendChild(clickabilityStyle);
      }
    };
    
    // Initialize HaiVE
    initializeWidget();
    
    // Make everything clickable initially
    makeEverythingClickable();
    
    // Create observer to watch for DOM changes and reapply clickability
    const observer = new MutationObserver(() => {
      makeEverythingClickable();
    });
    
    // Start observing the entire document for all types of changes
    observer.observe(document.documentElement, {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: ['style', 'class']
    });
    
    // Set multiple timeouts to ensure clickability even after delayed rendering
    const timeouts = [
      setTimeout(makeEverythingClickable, 100),
      setTimeout(makeEverythingClickable, 500),
      setTimeout(makeEverythingClickable, 1000),
      setTimeout(makeEverythingClickable, 2000),
      setTimeout(makeEverythingClickable, 5000)
    ];
    
    // Add global click event to ensure clickability
    document.addEventListener('click', () => {
      makeEverythingClickable();
    });
    
    // Add loadcomplete event for cases where content loads after page load
    window.addEventListener('load', () => {
      makeEverythingClickable();
    });
    
    // Clean up function
    return () => {
      // Remove observer
      observer.disconnect();
      
      // Clear all timeouts
      timeouts.forEach(timeout => clearTimeout(timeout));
      
      // Remove click handler
      document.removeEventListener('click', makeEverythingClickable);
      
      // Remove load handler
      window.removeEventListener('load', makeEverythingClickable);
      
      // Remove script if component unmounts
      const existingScript = document.getElementById('haive-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Remove style
      const clickabilityStyle = document.getElementById('global-clickability');
      if (clickabilityStyle) {
        clickabilityStyle.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HaiVEChatbot;
