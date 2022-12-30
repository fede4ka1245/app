import React, { useEffect, useRef } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  Navigate, useLocation
} from 'react-router-dom';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
// helpers
import { routes } from './models/enums/routes';

// pages
import { ChatSupport, ChatUser, PayChat, ChatList, CreateChatGroup, GroupChat, ChatQuestions, EditingGroup, GroupInfo } from './pages/chats';
import { CourseSteps, AdditionalCourse, MiniCourse, MasterClass, Courses } from './pages/courses';
import AstrologicalProcessor from './pages/astrlogicalProcessor/AstrologicalProcessor';
import Authorization from './pages/authorization/Authorization';
import Personal from './pages/personal/Personal';
import Menu from './pages/menu/Menu';
import Index from './pages/settings/index/Index';
import SettingsMain from './pages/settings/main/Main';
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

// routes
import { routes as horoscopesRoutes } from './pages/horoscopes/routes';
import { routes as settingsRoutes } from './pages/settings/routes';
import { routes as CoursesRoutes } from './pages/courses/routes';
import { routes as ChatRoutes } from './pages/chats/routes';

// styles
import './main.css';
import CreateTopic from './pages/createTopic/CreateTopic';
import Rates from './pages/rates/Rates';
import ForumItem from './pages/forumItem/ForumItem';
import { useAppDispatch } from './store/store';
import { useGetIsAppLoading, useGetIsNavbarActive } from './store/selectors';
import Notifications from './pages/notifications/Notifications';
import Calendar from './pages/calendar/Calendar';
import Main from './pages/main/Main';
import AppLoader from './components/appLoader/AppLoader';
import { setContentRef } from './store/reducers/preferencesReducer';
import { Grid } from '@mui/material';
import { usePauseResumeEffect } from './hooks/usePauseResumeEffect';
import { useLoadSettings } from './hooks/useLoadSettings';
import User from './pages/user/User';
import UserEdit from './pages/userEdit/UserEdit';
import Levels from './pages/levels/Levels';

function App () {
  const isNavbarActive = useGetIsNavbarActive();
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
  }, []);

  const dispatch = useAppDispatch();
  const isAppLoading = useGetIsAppLoading();

  const contentRef = useRef<any>();

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    dispatch(setContentRef(contentRef.current));
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  usePauseResumeEffect();

  useLoadSettings();

  // useEffect(() => {
  //   if (localStorage.getItem(LocalStorageKey.access) === null) {
  //     navigate(routes.authorization);
  //     dispatch(setIsAuthenticated(false));
  //     return;
  //   }
  //
  //   dispatch(setIsAppLoading(true));
  //
  //   authRequest.post(`${process.env.REACT_APP_API_URL}/users/files/`, {
  //     token: localStorage.getItem(LocalStorageKey.access)
  //   })
  //     .then(() => {
  //       dispatch(setIsAuthenticated(true));
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 401 || error.response.status === 403) {
  //         navigate(routes.authorization);
  //         dispatch(setIsAuthenticated(false));
  //       } else {
  //         dispatch(setIsAuthenticated(true));
  //       }
  //     })
  //     .finally(() => {
  //       dispatch(setIsAppLoading(false));
  //     });
  // }, []);

  return (
    <>
      <AppLoader isLoading={isAppLoading} />
      <Grid pb={isNavbarActive ? '90px' : '0'} className={'mainWrapper'}>
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
            <Route path={settingsRoutes.main} element={<SettingsMain />} />
          </Route>
          <Route path={routes.rates} element={<Rates />} />
          <Route path={routes.Courses} element={<Courses />}/>
          <Route path={CoursesRoutes.CourseSteps} element={<CourseSteps />} />
          <Route path={CoursesRoutes.AdditionalCourse} element={<AdditionalCourse/>}/>
          <Route path={CoursesRoutes.MiniCourse} element={<MiniCourse/>}/>
          <Route path={CoursesRoutes.MasterClass} element={<MasterClass/>}/>
          <Route path={routes.Chat} element={<ChatList />}/>
          <Route path={ChatRoutes.ChatSupport} element={<ChatSupport />}/>
          <Route path={ChatRoutes.ChatUser} element={<ChatUser />}/>
          <Route path={ChatRoutes.PayChat} element={<PayChat />} />
          <Route path={ChatRoutes.CreateChatGroup} element={<CreateChatGroup />} />
          <Route path={ChatRoutes.GroupChat} element={<GroupChat />} />
          <Route path={ChatRoutes.GroupInfo} element={<GroupInfo />} />
          <Route path={ChatRoutes.EditingGroup} element={<EditingGroup />} />
          <Route path={ChatRoutes.ChatQuestions} element={<ChatQuestions />} />
          <Route path={routes.authorization} element={<Authorization />} />
          <Route path={routes.myHoroscopes} element={<MyHoroscopes />} />
          <Route path={routes.forum} element={<Forum />} />
          <Route path={routes.createTopic} element={<CreateTopic />} />
          <Route path={routes.forumItem} element={<ForumItem />} />
          <Route path={routes.notifications} element={<Notifications />} />
          <Route path={routes.calendar} element={<Calendar />} />
          <Route path={routes.main} element={<Main />} />
          <Route path={routes.user} element={<User />} />
          <Route path={routes.userEdit} element={<UserEdit />} />
          <Route path={routes.levels} element={<Levels />} />
          <Route path={'*'} element={<Navigate to={routes.main} replace />} />
        </Routes>
      </Grid>
      {isNavbarActive && <TabBar />}
    </>
  );
}

export default App;
