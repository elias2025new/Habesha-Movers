"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, eachDayOfInterval, isBefore, startOfToday } from "date-fns";

interface DatePickerProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    minDate?: Date;
}

export default function DatePicker({
    value,
    onChange,
    placeholder = "Select date",
    label,
    className,
    minDate = startOfToday(),
}: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(value ? new Date(value) : new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleDateSelect = (date: Date) => {
        onChange(format(date, "yyyy-MM-dd"));
        setIsOpen(false);
    };

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const renderHeader = () => {
        return (
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-white/5">
                <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {format(currentMonth, "MMMM yyyy")}
                </span>
                <div className="flex gap-1">
                    <button
                        type="button"
                        onClick={prevMonth}
                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                    </button>
                    <button
                        type="button"
                        onClick={nextMonth}
                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
                    >
                        <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                    </button>
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return (
            <div className="grid grid-cols-7 mb-2 border-b border-gray-50 dark:border-white/5">
                {days.map((day) => (
                    <div key={day} className="py-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 text-center uppercase tracking-tighter">
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day;
                const isDisabled = minDate && isBefore(cloneDay, minDate);
                const isSelected = value && isSameDay(cloneDay, new Date(value));
                const isCurrentMonth = isSameMonth(cloneDay, monthStart);

                days.push(
                    <button
                        key={day.toString()}
                        type="button"
                        disabled={isDisabled}
                        onClick={() => !isDisabled && handleDateSelect(cloneDay)}
                        className={cn(
                            "relative h-10 w-full flex items-center justify-center text-sm transition-all duration-200 rounded-lg",
                            // Light mode colors
                            isCurrentMonth ? "text-gray-900" : "text-gray-300",
                            // Dark mode colors - explicit to override
                            isCurrentMonth ? "dark:!text-white" : "dark:!text-gray-400",
                            isDisabled && "opacity-20 cursor-not-allowed",
                            isSelected
                                ? "!bg-primary !text-white font-bold shadow-lg shadow-primary/20 dark:!bg-[#8B3A2C] dark:shadow-[#8B3A2C]/20"
                                : !isDisabled && "hover:bg-primary/10 dark:hover:bg-[#8B3A2C]/10 hover:text-primary dark:hover:text-[#FF6B4A]"
                        )}
                    >
                        <span>{format(day, "d")}</span>
                        {isSameDay(day, new Date()) && !isSelected && (
                            <div className="absolute bottom-1 w-1 h-1 bg-primary dark:bg-[#FF6B4A] rounded-full" />
                        )}
                    </button>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="grid grid-cols-7 gap-1" key={day.toString()}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="p-2">{rows}</div>;
    };

    return (
        <div className={cn("relative w-full", className)} ref={containerRef}>
            {label && (
                <label className="block text-sm font-medium text-foreground dark:text-[#F2F2F2] mb-1">
                    {label}
                </label>
            )}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-[#2A2A2A] rounded-lg shadow-sm transition-all duration-200 text-left outline-none",
                    isOpen
                        ? "border-primary ring-2 ring-primary/20 dark:border-[#8B3A2C] dark:ring-[#8B3A2C]/20"
                        : "hover:border-gray-400 dark:hover:border-white/20"
                )}
            >
                <div className="flex items-center gap-3">
                    <CalendarIcon className={cn(
                        "h-5 w-5",
                        value ? "text-primary dark:text-[#FF6B4A]" : "text-gray-400 dark:text-[#555]"
                    )} />
                    <span className={cn(
                        "block truncate text-sm sm:text-base",
                        !value ? "text-gray-400 dark:text-[#555]" : "text-foreground dark:text-[#F2F2F2] font-medium"
                    )}>
                        {value ? format(new Date(value), "PPP") : placeholder}
                    </span>
                </div>
                {value && isOpen && (
                    <X
                        className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange("");
                        }}
                    />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute z-[100] w-full min-w-[300px] bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        {renderHeader()}
                        {renderDays()}
                        {renderCells()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
