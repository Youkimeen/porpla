import React from 'react';
import { motion } from "framer-motion";

interface Props {
    type?: "submit" | "button" | "reset" | undefined;
    className?: string;
    processing: boolean;
    children: React.ReactNode;
}

export default function Button({ type = 'submit', className = '', processing, children }: Props) {
    return (
        <motion.button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 rounded-md font-semibold transition ease-in-out duration-350 text-xs bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white uppercase tracking-widest ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring", stiffness: 500, damping: 50
            }}
        >
            {children}
        </motion.button>
    );
}
