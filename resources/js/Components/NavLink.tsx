

import React from 'react';
import { Link } from '@inertiajs/inertia-react';

interface Props {
    href: string;
    active: boolean;
    children: React.ReactNode;
}

export default function NavLink({ href, active, children }: Props) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center border-b-2 border-indigo-400 text-2xl font-medium leading-7 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center border-b-2 border-transparent text-2xl font-medium leading-7 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
