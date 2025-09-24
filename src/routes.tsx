import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const  HomePage = lazy(() => import('@/pages/homePages'));
const DetailProductsPages = lazy(() => import('@/pages/detailProductsPages'));


export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id" element={<DetailProductsPages />} />
      </Routes>
    </Suspense>
  );
}
