import React, { useState, useRef } from "react";
import Dropdown from "../Components/Dropdown";
import NavLink from "../Components/NavLink";
import Button from "../Components/Button";
import {useDimensions} from "../Design/useDimention";
import ResponsiveNavLink from "../Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import {AuthenticatedNavigation, AuthenticatedScreen, NavigationContainer} from "../Design/AuthDesign";
import {MenuIconStyled} from "../Design/ComponentDesign";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import SideBar from "./SideBar";


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
                <SideBar>
                        <div className="menu">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                            <button
                                                type="button"
                                                className=""
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            ログアウト
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                </SideBar>
           </AuthenticatedNavigation>


            <main
                className="main"
            >
                {children}
            </main>
        </AuthenticatedScreen>
    );
}

