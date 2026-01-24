"use client";

import { Session } from "next-auth";
import { Bell, Search, User as UserIcon, Menu } from "lucide-react";
import { Input } from "@/components/ui/Input";

interface AdminHeaderProps {
    user?: Session["user"];
    onMenuClick: () => void;
}

const AdminHeader = ({ user, onMenuClick }: AdminHeaderProps) => {
    return (
        <header className="h-16 bg-white dark:bg-[#1C1C1C] border-b border-gray-200 dark:border-white/5 flex items-center justify-between px-4 md:px-8 transition-colors">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
                >
                    <Menu className="h-6 w-6" />
                </button>

                <div className="flex-1 max-w-md relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search requests..."
                        className="pl-10 bg-gray-50 dark:bg-white/5 border-none focus-visible:ring-1"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-6">
                <button className="relative text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors p-2">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1C1C1C]" />
                </button>

                <div className="flex items-center space-x-3 pl-3 sm:pl-6 border-l border-gray-200 dark:border-white/5">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-none mb-1">{user?.name || "Admin User"}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{user?.role || "Administrator"}</p>
                    </div>
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                        <UserIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
