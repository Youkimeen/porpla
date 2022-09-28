import React, { ReactNode, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import {AStyled, LiStyled, NavigationContainer} from "../Design/ComponentDesign";
import IonIcon from '@reacticons/ionicons';


interface LiCollection {
    id: number,
    name: string
}

const Menu = () => {
    const [toggle, setToggle] = useState(false);
    const [menu, setMenu] = useState(false);

    const lists:LiCollection[] = [
        {id:0, name: "home-outline"},
        {id:1, name: "code-working-outline"},
        {id:2, name: "person-outline"},
        {id:3, name: "settings-outline"},
        {id:4, name: "chatbubble-outline"},
        {id:5, name: "notifications-outline"},
        {id:6, name: "analytics-outline"},
        {id:7, name: "business-outline"}
    ]

    const handleToggle = () => {
        setMenu(!menu);
        console.log(menu);
    }

      return(
          <NavigationContainer>
              <div className={menu ? "menu active" : "menu"}>
                  <div className="toggle" onClick={handleToggle}>
                      <IonIcon name="add-outline" />
                  </div>
                      {lists.map((list:LiCollection) => (
                          <LiStyled
                            i={list.id}
                            menu={menu}
                          >
                              <AStyled
                                  i={list.id}
                                  href="#"
                              >
                                  <IonIcon name={list.name} key={list.id}/>
                              </AStyled>
                          </LiStyled>
                      ))}
              </div>
          </NavigationContainer>
      )
}


export default Menu

