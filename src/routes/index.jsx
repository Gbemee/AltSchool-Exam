import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

let About = lazy(() => import('../pages/About'));
let Error = lazy(() => import('../pages/Error'));
let Home = lazy(() => import('../pages/Home'));
let Course = lazy(() => import('../pages/Course'));
let Courses = lazy(() => import('../pages/Courses'));
let NewItem = lazy(() => import('../pages/NewItem'));

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />}>
      {/* items/new  */}
      <Route path="new" element={<NewItem />} />
      {/* items/delete  */}
      {/* <Route path='delete' element={<DeleteItem />} /> */}
      {/* items/123456  itemId = 123456 */}
      <Route path=":courseId" element={<Course />} />
      {/* <Route index element={<LeagueStandings />} /> */}
    </Route>
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default AppRouter;



