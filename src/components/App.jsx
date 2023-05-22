import React, { useEffect,lazy , Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import { useDispatch} from 'react-redux';



import { Layout } from './Layout/Layout';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const AddContactPage = lazy(() => import('../pages/AddContactPage/AddContactPage'));
const BillsPage = lazy(() => import('../pages/BillsPage/BillsPage'));





export const App = () => {

  return (
    <>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<BillsPage />} />
            {/* <Route path="/add-contact" element={<AddContactPage />} /> */}

            <Route path="*" element={<Navigate to="" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
  
  
};


