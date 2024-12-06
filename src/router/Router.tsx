import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartPage from '@/pages/CartPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import MyPage from '@/pages/MyPage';
import NonMemberPage from '@/pages/NonMemberPage';
import PaymentPage from '@/pages/PaymentPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import ProductSearchPage from '@/pages/ProductSearchPage';
import RecommendPage from '@/pages/RecommendPage';
import RegisterPage from '@/pages/RegisterPage';
import TotalSearchPage from '@/pages/TotalSearchPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/non-member" element={<NonMemberPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/product-search" element={<ProductSearchPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/total-search" element={<TotalSearchPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
