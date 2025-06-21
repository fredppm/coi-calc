import { useState, useEffect } from 'react';
import { getFullPath, getBasePath } from '../../utils/urlHelper';

/**
 * ShareButtonProps defines the properties for the ShareButton component.
 */
export interface ShareButtonProps {
  // No props needed for now
}

/**
 * ShareButton renders a floating share button that copies the current URL to clipboard
 */
export const ShareButton: React.FC<ShareButtonProps> = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShare = async () => {
    try {
      // Simply copy the current URL since we only have /canvas now
      const urlToCopy = window.location.href;
      
      // Copy URL to clipboard
      await navigator.clipboard.writeText(urlToCopy);
      
      // Show notification
      setShowNotification(true);
    } catch (error) {
      console.error('Failed to copy URL:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setShowNotification(true);
    }
  };

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <>
      {/* Share Button */}
      <div className="absolute top-4 right-[4rem] z-50">
        <button
          onClick={handleShare}
          className="bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 transition-colors border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center h-10 w-10"
          title="Share design"
        >
          <svg 
            className="w-5 h-5 text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" 
            />
          </svg>
        </button>
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none">
          <div 
            className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-4 rounded-lg shadow-2xl"
            style={{
              animation: 'fadeInOut 3s ease-out forwards',
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2)'
            }}
          >
            <span className="font-medium text-base">Link to share copied</span>
          </div>
        </div>
      )}
    </>
  );
}; 