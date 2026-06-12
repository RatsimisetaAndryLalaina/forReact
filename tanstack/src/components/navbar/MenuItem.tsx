import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItem({to, end, style, children, ...props}: {to: string, end?: boolean, style?: React.CSSProperties,children: ReactNode, [key: string]: unknown}) {
    const finalStyle = style || (({isActive} : {isActive: boolean}) => ({ textDecoration: 'none', color: isActive ? 'blue': 'black' }));
    return <NavLink
    to={to}
    end={end}
    style={finalStyle}
    {...props}
  >
    {children}
  </NavLink>
};