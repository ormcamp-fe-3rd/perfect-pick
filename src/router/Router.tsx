import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import CartPage from '@/pages/CartPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import MyPage from '@/pages/MyPage';
import NonMemberPage from '@/pages/NonMemberPage';
import PaymentPage from '@/pages/PaymentPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import RecommendPage from '@/pages/RecommendPage';
import RegisterPage from '@/pages/RegisterPage';
import MobileSearchPage from '@/pages/Search/MobileSearchPage';
import NotebookSearchPage from '@/pages/Search/NotebookSearchPage';
import TabletSearchPage from '@/pages/Search/TabletSearchPage';
import TotalSearchPage from '@/pages/Search/TotalSearchPage';
import WearableSearchPage from '@/pages/Search/WearableSearchPage';

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
      {!excludedPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/mypage"
          element={
            <Layout>
              <MyPage />
            </Layout>
          }
        />
        <Route
          path="/non-member"
          element={
            <Layout>
              <NonMemberPage />
            </Layout>
          }
        />
        <Route
          path="/payment"
          element={
            <Layout>
              <PaymentPage />
            </Layout>
          }
        />
        <Route path="/product">
          <Route
            path="mobile"
            element={
              <Layout>
                <MobileSearchPage />
              </Layout>
            }
          />
          <Route
            path="tablet"
            element={
              <Layout>
                <TabletSearchPage />
              </Layout>
            }
          />
          <Route
            path="notebook"
            element={
              <Layout>
                <NotebookSearchPage />
              </Layout>
            }
          />
          <Route
            path="wearable"
            element={
              <Layout>
                <WearableSearchPage />
              </Layout>
            }
          />
          <Route
            path=":id"
            element={
              <Layout>
                <ProductDetailPage />
              </Layout>
            }
          />
          <Route
            path="total"
            element={
              <Layout>
                <TotalSearchPage />
              </Layout>
            }
          />
        </Route>
        <Route
          path="/recommend"
          element={
            <Layout>
              <RecommendPage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <RegisterPage />
            </Layout>
          }
        />
        <Route
          path="/total-search"
          element={
            <Layout>
              <TotalSearchPage />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
