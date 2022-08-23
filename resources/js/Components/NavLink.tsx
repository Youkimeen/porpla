import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {svgIconClasses, SvgIconTypeMap} from "@mui/material";
import {LinkStyled} from "../Design/ComponentDesign";

interface Props {
    href: string;
    active?: boolean;
    children?: React.ReactNode;
    Icon?: any;
}

export default function NavLink({ href, active, children, Icon }: Props) {
   return (
       <LinkStyled
           href={href}
           active={active}
       >
           <div>
               {Icon && <Icon />} {children}
           </div>
       </LinkStyled>
   )
}
