import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  Navigate, useLocation
} from 'react-router-dom';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

// helpers
import { routes } from './helpers/routes';

// pages
import {
  PayChat,
  ChatUser,
  ChatSupport,
  ChatList
} from './pages';
import AstrologicalProcessor from './pages/astrlogicalProcessor/AstrologicalProcessor';
import { routes as horoscopesRoutes } from './pages/horoscopes/routes';
import Authorization from './pages/authorization/Authorization';
import Personal from './pages/personal/Personal';
import Menu from './pages/menu/Menu';
import Index from './pages/settings/index/Index';
import { routes as settingsRoutes } from './pages/settings/routes';
import Main from './pages/settings/main/Main';
import Maps from './pages/settings/maps/Maps';
import MapDisplaying from './pages/settings/mapDisplaying/MapDisplaying';
import Lines from './pages/settings/lines/Lines';
import MyHoroscopes from './pages/myHororscopes/MyHoroscopes';
import { App as nativeApp } from '@capacitor/app';
import Ashtakavarga from './pages/horoscopes/ashtakavarga/Ashtakavarga';
import Dashi from './pages/horoscopes/dashi/Dashi';
import NatMap from './pages/horoscopes/natMap/NatMap';
import Zones from './pages/horoscopes/zones/Zones';
import Transitions from './pages/horoscopes/transitions/Transitions';
import Yogas from './pages/horoscopes/yogas/Yogas';
import Rectification from './pages/horoscopes/rectification/Rectification';
import Varshapkhala from './pages/horoscopes/varshapkhala/Varshapkhala';
import Horoscopes from './pages/horoscopes';
import Forum from './pages/forum/Forum';
import TabBar from './components/tabBar/TabBar';

// models
import { ChatRoutes } from './models/enums';

// styles
import './main.css';
import CreateTopic from './pages/createTopic/CreateTopic';

function App () {
  const location = useLocation();
  const isTabBarVisible = !location.pathname.includes(ChatRoutes.ChatUser);
  const navigate = useNavigate();

  useEffect(() => {
    nativeApp.addListener('backButton', () => {
      navigate(-1);
    });
    StatusBar.setOverlaysWebView({ overlay: true });
    StatusBar.setStyle({ style: Style.Light });
    SplashScreen.show().then(() => {
      SplashScreen.hide();
    });

    // if (localStorage.getItem('isFirstLaunch') !== null) {
    //   navigate(routes.menu);
    //   return;
    // }
    //
    // navigate(routes.authorization);
    // localStorage.setItem('isFirstLaunch', JSON.stringify(false));
  }, []);

  return (
    <>
      <Routes>
        <Route path={routes.astrologicalProcessor} element={<AstrologicalProcessor />} />
        <Route path={routes.horoscopes} element={<Horoscopes />}>
          <Route path={horoscopesRoutes.ashtakavarga} element={<Ashtakavarga />}/>
          <Route path={horoscopesRoutes.dashi} element={<Dashi />}/>
          <Route path={horoscopesRoutes.natMap} element={<NatMap />}/>
          <Route path={horoscopesRoutes.zones} element={<Zones />}/>
          <Route path={horoscopesRoutes.transitions} element={<Transitions />}/>
          <Route path={horoscopesRoutes.yogas} element={<Yogas />}/>
          <Route path={horoscopesRoutes.rectification} element={<Rectification />}/>
          <Route path={horoscopesRoutes.varshapkhala} element={<Varshapkhala />}/>
        </Route>
        <Route path={routes.personal} element={<Personal />} />
        <Route path={routes.chats} element={<AstrologicalProcessor />} />
        <Route path={routes.menu} element={<Menu />} />
        <Route path={routes.settings}>
          <Route index element={<Index />} />
          <Route path={settingsRoutes.maps} element={<Maps />}/>
          <Route path={settingsRoutes.lines} element={<Lines />}/>
          <Route path={settingsRoutes.mapDisplaying} element={<MapDisplaying />}/>
          <Route path={settingsRoutes.main} element={<Main />} />
        </Route>
        {/* chats */}
        <Route path={routes.Chat} element={<ChatList />}/>
        <Route path={ChatRoutes.ChatSupport} element={<ChatSupport />}/>
        <Route path={ChatRoutes.ChatUser} element={<ChatUser />}/>
        <Route path={ChatRoutes.PayChat} element={<PayChat />} />
        <Route path={routes.authorization} element={<Authorization />} />
        <Route path={routes.myHoroscopes} element={<MyHoroscopes />} />
        <Route path={routes.forum} element={<Forum />} />
        <Route path={routes.createTopic} element={<CreateTopic />} />
        <Route path={'*'} element={<Navigate to={routes.astrologicalProcessor} replace />} />
      </Routes>
      {isTabBarVisible && <TabBar />}
    </>
  );
}

export default App;
