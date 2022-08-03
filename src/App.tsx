import React, { useEffect } from 'react';
import './main.css';
import AstrologicalProcessor from './pages/astrlogicalProcessor/AstrologicalProcessor';
import TabBar from './components/tabBar/TabBar';
import {
  Routes,
  Route, useLocation, useNavigate
} from 'react-router-dom';
import { routes } from './helpers/routes';
import Authorization from './pages/authorization/Authorization';
import Personal from './pages/personal/Personal';
import Menu from './pages/menu/Menu';

function App () {
  const location = useLocation();
  const isTabBarVisible = location.pathname.includes(routes.astrologicalProcessor);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isFirstLaunch') !== null) {
      navigate(routes.menu);
      return;
    }

    navigate(routes.authorization);
  }, []);

  return (
    <div>
      <Routes>
        <Route path={routes.astrologicalProcessor} element={<AstrologicalProcessor />}/>
        <Route path={routes.personal} element={<Personal />} />
        <Route path={routes.chats} element={<AstrologicalProcessor />} />
        <Route path={routes.menu} element={<Menu />} />
        <Route path={routes.settings} element={<AstrologicalProcessor />} />
        <Route path={routes.authorization} element={<Authorization />} />
      </Routes>
      {isTabBarVisible && <TabBar />}
    </div>
  );
}

export default App;
