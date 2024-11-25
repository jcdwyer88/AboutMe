import {Briefcase, CircleUserRoundIcon, Contact, FolderGit2} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {SidebarPictureCarousel} from "@/components/sidebar-picture-carousel.jsx";

// Menu items.
const items = [
    {
        title: "About Me",
        url: "#",
        icon: CircleUserRoundIcon,
    },
    {
        title: "Job History",
        url: "#",
        icon: Briefcase,
    },
    {
        title: "Projects",
        url: "#",
        icon: FolderGit2,
    },
    {
        title: "Contact Info",
        url: "#",
        icon: Contact,
    },
]

export function AppSidebar() {
    return (
        <Sidebar style={{borderRadius: 10}}>
            <SidebarContent >
                <SidebarGroup >
                    <SidebarGroupLabel>CW2 Jonathan Dwyer</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarPictureCarousel/>
                    </SidebarGroupContent>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
