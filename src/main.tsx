import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingSkeleton from './components/ui/LoadingSkeleton';

// Carga diferida de la aplicación completa (opción recomendada)
const LazyApp = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyApp />
    </Suspense>
  </StrictMode>
);