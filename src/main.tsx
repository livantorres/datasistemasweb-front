import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import LoadingSkeleton from './components/ui/LoadingSkeleton';

// Carga diferida solo de App (las rutas estarán dentro)
const LazyApp = lazy(() => Promise.all([
  import('./App'),
  new Promise(resolve => setTimeout(resolve, 200))
]).then(([module]) => module));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Suspense fallback={<LoadingSkeleton />}>
        <LazyApp />
      </Suspense>
    </Router>
  </StrictMode>
);