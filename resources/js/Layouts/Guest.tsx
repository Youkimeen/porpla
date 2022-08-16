import React, {RefObject, useRef} from 'react';
import { GuestScreen, GuestForm, MoveColorBall } from "../Design/AuthDesign";
import { useFollowPointer } from "../Design/useFollowPointer";

interface Props {
    children: React.ReactNode;
}

export default function Guest({ children }: Props) {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    console.log({x: x, y: y});


    return (
        <GuestScreen
            whileHover={{ scale: 1.2 }}
        >
            <div className="background_color">
                <MoveColorBall
                ref={ref}
                animate={{ x, y }}
                transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 20,
                    restDelta: 0.001
                }}
                />
                <div className="deepskyblue"></div>
                <div className="royalblue"></div>
                <div className="lime"></div>
            </div>
            <GuestForm
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  delay: 0.5,
                  duration: 1,
              }}
            >
                {children}
            </GuestForm>
        </GuestScreen>
    );
}
