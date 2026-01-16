"use client";

import { Session } from "next-auth";
import { Bell, Search, User as UserIcon } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { ThemeToggle } from "../ThemeToggle";

interface AdminHeaderProps {
    user?: Session["user"];
}

const AdminHeader = ({ user }: AdminHeaderProps) => {
    return (
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 transition-colors">
            <div className="flex-1 max-w-md relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                    placeholder="Search requests..."
                    className="pl-10 bg-gray-50 dark:bg-gray-800 border-none focus-visible:ring-1"
                />
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
                <ThemeToggle />

                <button className="relative text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
                </button>

                <div className="flex items-center space-x-3 pl-4 sm:pl-6 border-l border-gray-200 dark:border-gray-800">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{user?.name || "Admin User"}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role || "Administrator"}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        <UserIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
