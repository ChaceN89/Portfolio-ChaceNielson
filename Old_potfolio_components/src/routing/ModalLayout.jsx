/**
 * @file ModalLayout.jsx
 * @module ModalLayout
 * @desc A React component for displaying content in a modal with transitions and background overlay.
 * The modal can be closed by clicking the close button, clicking outside the modal content, or pressing the Escape key.
 * 
 * @requires react
 * @requires react-router-dom
 * @requires FadeTransition from '../animations/FadeTransition'
 * @requires BackgroundWrapper from '../wrappers/BackgroundWrapper'
 * @requires SlideTransition from '../animations/SlideTransition'
 * @requires IoMdClose from 'react-icons/io'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/web/guides/quick-start | React Router Documentation}
 * 
 * @example
 * // Example usage of ModalLayout
 * import ModalLayout from './ModalLayout';
 * 
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/modal" element={<ModalLayout />}>
 *           <Route path="content" element={<ModalContent />} />
 *         </Route>
 *       </Routes>
 *     </Router>
 *   );
 * }
 * 
 * @exports ModalLayout
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-05
 * @since 2.1
 */

import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import FadeTransition from "../animations/FadeTransition";
import BackgroundWrapper from "../wrappers/BackgroundWrapper";
import SlideTransition from "../animations/SlideTransition";

const ModalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = useCallback(() => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else if (location.state?.backgroundLocation) {
      navigate(location.state.backgroundLocation.pathname);
    } else {
      navigate('/');
    }
  }, [navigate, location.state?.backgroundLocation]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const setReturnText = () => {
    const locationState = location.state?.background;
    const currentPath = location.pathname;

    if (locationState !== undefined) {
      if (currentPath.startsWith('/project')) {
        return 'Back to Projects';
      } else if (currentPath.startsWith('/skills')) {
        return 'Back to Skills';
      } 
    } 
    return 'To Home Page';
  };
  
  return (
    <FadeTransition>
      <BackgroundWrapper
        className="modal bg-secondary bg-opacity-5"
        onClick={closeModal}
        src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
        backgroundRepeat="repeat"
        bgOpacity={80}
      >
        <SlideTransition enter='right' exit='right' translationDist={400}>
          <div className="modal-content relative mt-2 md:mt-0" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-0.5 right-0.5 sm:top-2 sm:right-2 md:text-2xl text-primary hover:text-accent" onClick={closeModal}>
              <IoMdClose size={30} />
            </button>
            <div id="project-modal-container" className="overflow-y-auto max-h-section-height-small p-2">
              <Outlet />
            </div>
            <button 
              className="button-secondary p-2 rounded-lg mt-2 " 
              onClick={closeModal}
            >
              {setReturnText()}     
            </button>
          </div>
        </SlideTransition>
      </BackgroundWrapper>
    </FadeTransition>
  );
};

export default ModalLayout;
