import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import FooterComponent from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import AdminSubscription from "./pages/AdminSubscription";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/blog/:blogSlug" element={<BlogPage />} />
        <Route path="/become-admin" element={<AdminSubscription />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/update-blog/:blogId" element={<UpdateBlog />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
