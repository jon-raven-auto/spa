// components/Button/Button.tsx
import { Link } from 'react-router-dom';

interface SidebarProps {
  pageNames: string[];
}


function Sidebar({ pageNames }: SidebarProps) {
  return (
    <>
      <ul className="list-group">
        {pageNames.map((pageName) => (
          <Link className="list-group-item" to={`/${pageName.toLowerCase()}`}>{pageName}</Link>
        ))}
      </ul >
    </>
  );
}

export default Sidebar;