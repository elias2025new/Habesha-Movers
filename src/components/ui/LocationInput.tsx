"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, CheckCircle2, Search } from "lucide-react";
import { Input } from "./Input";
import Fuse from "fuse.js";
import { ALL_ADDIS_LOCATIONS } from "@/constants/locations";

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
    const [inputValue, setInputValue] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const fuse = new Fuse(ALL_ADDIS_LOCATIONS, {
        threshold: 0.4,
        distance: 100,
    });

    useEffect(() => {
        setInputValue(defaultValue);
        checkVerification(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const checkVerification = (value: string) => {
        const exactMatch = ALL_ADDIS_LOCATIONS.find(
            (loc) => loc.toLowerCase() === value.toLowerCase()
        );
        setIsVerified(!!exactMatch);
    };

    const handleInputChange = (value: string) => {
        setInputValue(value);
        onSelect(value);
        checkVerification(value);

        if (value.length > 1) {
            const results = fuse.search(value).map((result) => result.item);
            setSuggestions(results.slice(0, 5));
            setShowSuggestions(results.length > 0);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSelectSuggestion = (suggestion: string) => {
        setInputValue(suggestion);
        onSelect(suggestion);
        setIsVerified(true);
        setShowSuggestions(false);
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <div className="relative">
                <MapPin className={`absolute left-3 top-3 h-5 w-5 z-10 transition-colors ${isVerified ? 'text-green-500' : 'text-gray-400'}`} />
                <Input
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onFocus={() => inputValue.length > 1 && setShowSuggestions(suggestions.length > 0)}
                    className={`pl-10 pr-10 transition-all ${isVerified ? 'border-green-500 ring-green-500/20' : ''}`}
                    placeholder={placeholder}
                />
                {isVerified && (
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 animate-in fade-in zoom-in duration-300">
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded uppercase tracking-wider hidden sm:block">Verified</span>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                )}
            </div>

            {showSuggestions && (
                <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex items-center gap-2">
                        <Search className="h-3 w-3 text-gray-400" />
                        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Suggested Locations</span>
                    </div>
                    <ul className="max-h-60 overflow-auto">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectSuggestion(suggestion)}
                                className="px-4 py-3 hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer flex items-center gap-3 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{suggestion}</span>
                                    <p className="text-[10px] text-gray-400">Addis Ababa, Ethiopia</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
