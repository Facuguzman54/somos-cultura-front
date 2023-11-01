import { Sidenav } from "@/components/Sidenav";

export default function DashboardLayout({ children }) {
    return (
        <main className='min-h-screen flex relative gap-4'>
            <Sidenav />
            {children}
        </main>
    )
}