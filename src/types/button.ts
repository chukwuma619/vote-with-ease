type coloType = {
    normal: string,
    outline: string,
}
type buttonProps = {
    base: string,
    size: {
        xs: string,
        sm: string,
        base: string,
        lg: string,
        xl: string,
    },
    color: {
        primary: coloType,
        dark: coloType,
        green: coloType,
        red: coloType,
        alternative: coloType,
    },
    radius: {
        rounded: string,
        pill : string,
    }

}