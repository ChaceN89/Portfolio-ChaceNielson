/**
 * @file Layout.jsx
 * @module Layout
 * @desc React component that serves as the layout for the main pages of the application, including Home, Thanks, and Gallery.
 * This component includes a navigation bar at the top, a main content area for displaying the current route's content, and a footer at the bottom.
 * 
 * @note This component is part of the main structure of the application and is used in the routing configuration.
 *
 * @component Layout
 * 
 * @requires react
 * @requires Outlet from 'react-router-dom'
 * @requires NavBar from '../components/navbar/Navbar'
 * @requires Footer from '../components/footer/Footer'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @param none
 * 
 * @returns {JSX.Element} The Layout component that wraps the main pages of the application.
 * 
 * @example
 * // Example usage of Layout in a routing configuration
 * import Layout from './layout/Layout';
 * import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 * 
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/" element={<Layout />}>
 *           <Route index element={<Home />} />
 *           <Route path="thanks" element={<Thanks />} />
 *           <Route path="gallery" element={<Gallery />} />
 *         </Route>
 *       </Routes>
 *     </Router>
 *   );
 * }
 * 
 * @exports Layout
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
 */

import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="layout z-0">
      <NavBar/>
      <main className="pt-8 md:pt-12">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
