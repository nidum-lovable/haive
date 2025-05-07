
import { useEffect } from 'react'

const HaiVEChatbot = () => {
  useEffect(() => {
    // Add the HaiVE script to the page
    const addHaiveScript = () => {
      // Check if script already exists
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

    // Apply pointer events styling to ensure widget works while not blocking page interaction
    const applyWidgetStyles = () => {
      // 1. Set container to not capture pointer events
      const container = document.getElementById('haive-widget-container')
      if (container) {
        container.style.pointerEvents = 'none'
      }
      
      // 2. Set body and main content to capture pointer events
      document.body.style.pointerEvents = 'auto'
      const rootElement = document.getElementById('root')
      if (rootElement) {
        rootElement.style.pointerEvents = 'auto'
      }
      
      // 3. Make all direct children of widget container clickable
      if (container) {
        Array.from(container.children).forEach(child => {
          if (child instanceof HTMLElement) {
            child.style.pointerEvents = 'auto'
          }
        })
      }
    }
    
    // Setup initial state
    addHaiveScript()
    
    // Apply styles initially and after a delay (to catch dynamically added elements)
    applyWidgetStyles()
    const initialStyleTimeout = setTimeout(applyWidgetStyles, 1000)
    const secondStyleTimeout = setTimeout(applyWidgetStyles, 2500)
    
    // Setup mutation observer to watch for changes in the widget container
    const observer = new MutationObserver(() => {
      applyWidgetStyles()
    })
    
    // Start observing the widget container for changes
    const container = document.getElementById('haive-widget-container')
    if (container) {
      observer.observe(container, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['style', 'class']
      })
    }
    
    // Cleanup function
    return () => {
      observer.disconnect()
      clearTimeout(initialStyleTimeout)
      clearTimeout(secondStyleTimeout)
    }
  }, [])

  return null
}

export default HaiVEChatbot
