import React from 'react'
import { ButtonStyled } from '../Design/Components/CustomButton'

interface IStyled {
    children: React.ReactNode
    width?: number
    height?: number
    color?: string
    bgColor?: string
    onClick: () => void
}


export default function CustomButton ({children, width = 100, height = 100, color = "gray", bgColor = "#fff", onClick}: IStyled) {
    return (
        <>
        <ButtonStyled
          width={width}
          height={height}
          color={color}
          bgColor={bgColor}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 1.0}}
          onClick={onClick}
        >{children}</ButtonStyled>
        </>
    )
}
