import { Link, Outlet } from 'react-router-dom';

export default function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      {/* list of items */}
      <ul>
        {['Graphics design', 'Web3', 'Product Design', 'Frontend Engineering'].map((course) => (
          <li>
            <Link to={`/courses/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>
      {/* will be replaced with <NewItem /> or <Item /> depending on the route we go to */}
      <Outlet />
    </div>
  );
}
