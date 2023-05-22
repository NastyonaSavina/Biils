import { Navigation } from "../Navigation/Navigation";

export const Sidebar = () => {
  return (
    <aside
      className="nav nav-pills p-4 bg-light "
      style={{ height: 'auto' }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: 'sticky', top: 30, left: 0, height: '88vh', width:150 }}
      >
        <Navigation />
      </div>
    </aside>
  );
};