import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router never reloads the page, so the browser has no natural
// reason to scroll back to top when the route changes. This component
// watches the URL and forces a scroll-to-top on every navigation.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
