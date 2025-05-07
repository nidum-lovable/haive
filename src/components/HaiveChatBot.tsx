
import { useEffect } from 'react'

const HaiVEChatbot = () => {
  useEffect(() => {
    if (!document.getElementById('haive-script')) {
      const script = document.createElement('script')
      script.id = 'haive-script'
      script.src = 'https://widget.haive.tech/widget.iife.js'
      script.async = true
      script.setAttribute('data-id', 'e0cba082-be1e-4d12-88d9-b1f3c3eeafba_95e6c2e7-2909-46cb-bd02-48109a7ae785')
      script.setAttribute('data-phone_number', '17252390568')
      script.setAttribute('data-assistant_name', 'Sara')
      script.setAttribute('data-container', 'haive-widget-container') // Target our container
      
      // Append to the dedicated container instead of body
      document.getElementById('haive-widget-container')?.appendChild(script)
      
      // Set up a mutation observer to ensure widget elements get proper pointer events
      const observer = new MutationObserver((mutations) => {
        const container = document.getElementById('haive-widget-container')
        if (container) {
          // Make sure the container allows clicks to pass through
          container.style.pointerEvents = 'none'
          
          // But actual widget elements should receive clicks
          Array.from(container.children).forEach(child => {
            if (child.id !== 'haive-script') {
              child.style.pointerEvents = 'auto'
            }
          })
        }
      })
      
      const container = document.getElementById('haive-widget-container')
      if (container) {
        observer.observe(container, { childList: true, subtree: true })
      }
      
      return () => observer.disconnect()
    }
  }, [])

  return null
}

export default HaiVEChatbot
