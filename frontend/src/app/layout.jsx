import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {

    return (
        <SidebarProvider
            style={{
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "20rem",
        }}
        >
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}
