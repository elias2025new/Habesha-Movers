"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ClipboardList,
    Users,
    Settings,
    LogOut,
    X,
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Requests', href: '/admin', icon: ClipboardList },
    ];

    const sidebarContent = (
        <aside className="w-64 bg-white dark:bg-[#1C1C1C] border-r border-gray-200 dark:border-white/5 h-full flex flex-col transition-colors">
            <div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/images/habesha-logo-svg.svg"
                        alt="Habesha Movers"
                        width={100}
                        height={30}
                        className="h-8 w-auto object-contain"
                    />
                    <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Admin Portal</span>
                </div>
                <button onClick={onClose} className="md:hidden p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <X className="h-5 w-5" />
                </button>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => onClose()}
                            className={cn(
                                "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                                    : "text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white")} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-100 dark:border-white/5">
                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="flex items-center space-x-3 px-4 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex h-full">
                {sidebarContent}
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] md:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative h-full w-64"
                        >
                            {sidebarContent}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AdminSidebar;
