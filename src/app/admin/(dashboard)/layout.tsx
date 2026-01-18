import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/Header";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        // This is also handled by middleware, but extra check for type safety
        redirect("/admin/login");
    }

    return (
        <div className="min-h-screen bg-gray-100  flex transition-colors">
            {/* Sidebar - Fixed on desktop, hidden on mobile by default */}
            <AdminSidebar />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <AdminHeader user={session.user} />

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
