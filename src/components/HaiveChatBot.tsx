
import { useEffect } from 'react'

const HaiVEChatbot = () => {
  useEffect(() => {
    // Function to add the script if it doesn't exist
    const addHaiveScript = () => {
      if (!document.getElementById('haive-script')) {
        const script = document.createElement('script')
        script.id = 'haive-script'
        script.src = 'https://widget.haive.tech/widget.iife.js'
        script.async = true
        script.setAttribute('data-id', 'e0cba082-be1e-4d12-88d9-b1f3c3eeafba_95e6c2e7-2909-46cb-bd02-48109a7ae785')
        script.setAttribute('data-phone_number', '17252390568')
        script.setAttribute('data-assistant_name', 'Sara')
        script.setAttribute('data-container', 'haive-widget-container')
        
        // Append to the container
        const container = document.getElementById('haive-widget-container')
        if (container) {
          container.appendChild(script)
        }
      }
    }
    
    // Function to set pointer events
    const setPointerEvents = () => {
      const container = document.getElementById('haive-widget-container')
      if (container) {
        // Make container allow clicks to pass through
        (container as HTMLElement).style.pointerEvents = 'none'
        
        // Make widget elements clickable
        Array.from(container.children).forEach(child => {
          if (child.id !== 'haive-script') {
            (child as HTMLElement).style.pointerEvents = 'auto'
          }
        })
      }
    }
    
    // Add the script
    addHaiveScript()
    
    // Apply pointer events immediately
    setPointerEvents()
    
    // Set up observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      setPointerEvents()
    })
    
    // Start observing with a more comprehensive configuration
    const container = document.getElementById('haive-widget-container')
    if (container) {
      observer.observe(container, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['style', 'class']
      })
    }
    
    // Ensure styles are applied after a delay as well
    // (in case the widget loads after our initial setup)
    const timeoutId = setTimeout(setPointerEvents, 2000)
    
    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [])

  return null
}

export default HaiVEChatbot
