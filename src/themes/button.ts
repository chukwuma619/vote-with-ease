const buttonTheme: buttonProps = {
    base: "group inline-flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none",
    size: {
        xs: "py-2 px-3 text-xs",
        sm: "py-2 px-3 text-sm",
        base: "py-2.5 px-5 text-sm",
        lg: "py-3 px-5 text-base",
        xl: "py-3.5 px-6 text-base",
    },
    color:{
        primary: {
            normal: "bg-blue-700 hover:bg-blue-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-blue-600",
            outline: "border border-blue-700 hover:bg-blue-600 focus-visible:outline-none text-blue-600 hover:text-white"
        },
        dark: {
            normal: "bg-gray-800 hover:bg-gray-700 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-gray-800",
            outline: "border border-gray-800 hover:bg-gray-700 focus-visible:outline-none text-gray-700 hover:text-white"
        },
        green: {
            normal: "bg-green-700 hover:bg-green-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-green-700",
            outline: "border border-green-700 hover:bg-green-600 focus-visible:outline-none text-green-600 hover:text-white"
        },
        red: {
            normal: "bg-red-700 hover:bg-red-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-red-700",
            outline: "border border-red-700 hover:bg-red-600 focus-visible:outline-none text-red-600 hover:text-white"
        },
        alternative:{
            normal: "bg-white hover:bg-gray-100 focus-visible:outline-2 text-gray-900 hover:text-blue-700 focus-visible:outline-offset-2 focus-visible:outline-gray-100",
            outline: "border border-gray-100 hover:bg-gray-100 focus-visible:outline-none text-gray-900 hover:text-blue-700"
        }
    },
    radius: {
        rounded: "rounded-lg",
        pill: "rounded-full"
    }

}

export default buttonTheme