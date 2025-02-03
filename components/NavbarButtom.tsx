'use client'
import { Heart, HomeIcon, Menu, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export const menuItems = [
    { icon: <HomeIcon />, label: "Home" ,path:"/" },
    { icon: <Heart />, label: "Favorite" ,path:"/favorite"},
    { icon: <Users />, label: "Party" ,path:"/party" },
    { icon: <Menu />, label: "Menu" ,path:"/setting"},
  ];

function NavbarButtom() {
    const path = usePathname()
  return (
      <nav className="jun-dock jun-dock-float fixed bottom-4">
        <ul className="jun-dockMenu">
          {menuItems.map((item, index) => (
            <li key={index} className="jun-dockMenuItem">
              <Link className="jun-dockMenuButton" href={item.path}>
                {item.icon}
                <span className="jun-dockTooltip">{item.label}</span>
                {path === item.path && <span className="jun-dockIndicator" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  );
}
export default NavbarButtom;
