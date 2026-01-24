import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminClientLayout from "@/components/admin/AdminClientLayout";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <AdminClientLayout user={session.user}>
            {children}
        </AdminClientLayout>
    );
}
