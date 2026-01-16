"use client";

import { MapPin } from "lucide-react";
import { Input } from "./Input";

interface LocationInputProps {
    placeholder?: string;
    onSelect: (address: string) => void;
    defaultValue?: string;
    className?: string;
}

export default function LocationInput({
    placeholder,
    onSelect,
    defaultValue = "",
    className,
}: LocationInputProps) {
    return (
        <div className={`relative ${className}`}>
            <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />
                <Input
                    value={defaultValue}
                    onChange={(e) => onSelect(e.target.value)}
                    className="pl-10"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
