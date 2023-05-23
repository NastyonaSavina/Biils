import React, { lazy , Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



import { Layout } from './Layout/Layout';
const BillsPage = lazy(() => import('../pages/BillsPage/BillsPage'));





export const App = () => {

  return (
    <>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<BillsPage />} />
            <Route path="*" element={<Navigate to="" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
  
  
};


