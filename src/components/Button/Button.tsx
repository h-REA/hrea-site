import React from 'react'

export type ButtonProps = {
    text: string
    semiTransparent?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, semiTransparent}) => {
    return (
        <div>
            button
        </div>
    )
}

export default Button