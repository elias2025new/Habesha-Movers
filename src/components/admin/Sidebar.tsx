"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ClipboardList,
    Users,
    Settings,
    LogOut,
    Truck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

const AdminSidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Requests', href: '/admin/requests', icon: ClipboardList },
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col transition-colors">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center space-x-2">
                <Truck className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Admin Portal</span>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold"
                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white")} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="flex items-center space-x-3 px-4 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
