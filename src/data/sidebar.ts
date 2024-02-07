
type SidebarLinkType = {
    name: string,
    href: string,
}

const SidebarData: SidebarLinkType[] = [
    {
        name: "Home",
        href: "/dashboard/home"
    },
    {
        name: "Vote",
        href: "/dashboard/vote"
    },
    {
        name: "Election",
        href: "/dashboard/election"
    },
    {
        name: "Result",
        href: "/result"
    }
]


export default SidebarData