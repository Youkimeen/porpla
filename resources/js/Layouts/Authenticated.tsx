import React, { useState, useRef } from "react";
import Dropdown from "../Components/Dropdown";
import NavLink from "../Components/NavLink";
import Button from "../Components/Button";
import {useDimensions} from "../Design/useDimention";
import ResponsiveNavLink from "../Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import {AuthenticatedNavigation, AuthenticatedScreen} from "../Design/AuthDesign";
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import Menu from "./Menu";
import Sidebar from "./Sidebar";


interface Props {
    auth: any;
    children: React.ReactNode;
}

export default function Authenticated({ auth, children }: Props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);



    return (
        <AuthenticatedScreen
            initial={{opacity: 0}}
            animate={{
                y: [-20, 0],
                opacity: [0, 1]
            }}
            exit={{scale: 2}}
            transition={{duration: 0.2, ease: "easeOut", delay: 0.1}}
        >
           <AuthenticatedNavigation>
               <Sidebar />
           </AuthenticatedNavigation>


            <main
                className="main"
            >
                {children}
            </main>
        </AuthenticatedScreen>
    );
}

