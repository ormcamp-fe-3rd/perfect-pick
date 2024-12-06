import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
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

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Header가 안나오는 페이지 설정
  const excludedPaths: string[] = ['/non-member', '/register', '/login'];

  return (
    <>
      {!excludedPaths.includes(location.pathname) && <Header />}
      {children}
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
