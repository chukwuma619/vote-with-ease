import React, { ButtonHTMLAttributes } from 'react';
import buttonTheme from '@/themes/button';
export default function Button({
    children,
    size = "base",
    color = 'primary',
    colorType = "normal",
    radius = "rounded",
    ...rest
}: {
    children: React.ReactNode
    size?: keyof buttonProps['size']
    color: keyof buttonProps["color"]
    colorType?: keyof coloType,
    radius?: keyof buttonProps['radius']
}& ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={`${buttonTheme.base} ${buttonTheme.size[size]} ${buttonTheme.color[color][colorType]} ${buttonTheme.radius[radius]}`}>
            {children}
        </button>
    )
}