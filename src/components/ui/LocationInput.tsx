"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, CheckCircle2, Search } from "lucide-react";
import { Input } from "./Input";
import Fuse from "fuse.js";
import { ALL_ADDIS_LOCATIONS } from "@/constants/locations";

interface LocationInputProps {
    placeholder?: string;
    onSelect: (address: string, isValid: boolean) => void;
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
    const [isNonsense, setIsNonsense] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const fuse = new Fuse(ALL_ADDIS_LOCATIONS, {
        threshold: 0.4,
        distance: 100,
        includeScore: true
    });

    useEffect(() => {
        setInputValue(defaultValue);
        checkValidation(defaultValue);
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

    const checkValidation = (value: string) => {
        if (!value || value.length < 3) {
            setIsVerified(false);
            setIsNonsense(false);
            return;
        }

        const exactMatch = ALL_ADDIS_LOCATIONS.find(
            (loc) => loc.toLowerCase() === value.toLowerCase()
        );

        if (exactMatch) {
            setIsVerified(true);
            setIsNonsense(false);
            return;
        }

        // Check for fuzzy matching score
        const results = fuse.search(value);
        const bestMatch = results[0];

        if (bestMatch && bestMatch.score !== undefined && bestMatch.score < 0.45) {
            setIsVerified(false);
            setIsNonsense(false);
        } else {
            setIsVerified(false);
            setIsNonsense(true);
        }
    };

    const handleInputChange = (value: string) => {
        setInputValue(value);

        // Internal validation for UI
        const isExact = ALL_ADDIS_LOCATIONS.some(l => l.toLowerCase() === value.toLowerCase());
        const results = fuse.search(value);
        const hasDecentMatch = results.some(r => r.score !== undefined && r.score < 0.45);

        const currentNonsense = value.length >= 3 && !isExact && !hasDecentMatch;

        setIsVerified(isExact);
        setIsNonsense(currentNonsense);

        const isValid = isExact || (value.length >= 3 && !currentNonsense);
        onSelect(value, isValid);

        if (value.length > 1) {
            setSuggestions(results.map((result) => result.item).slice(0, 5));
            setShowSuggestions(results.length > 0);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSelectSuggestion = (suggestion: string) => {
        setInputValue(suggestion);
        onSelect(suggestion, true);
        setIsVerified(true);
        setIsNonsense(false);
        setShowSuggestions(false);
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <div className="relative">
                <MapPin className={`absolute left-3 top-3 h-5 w-5 z-10 transition-colors 
                    ${isVerified ? 'text-green-500' : isNonsense ? 'text-red-400' : 'text-gray-400'}`}
                />
                <Input
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onFocus={() => inputValue.length > 1 && setShowSuggestions(suggestions.length > 0)}
                    className={`pl-10 pr-10 transition-all 
                        ${isVerified ? 'border-green-500 ring-green-500/20' :
                            isNonsense ? 'border-red-400 ring-red-400/10' : ''}`}
                    placeholder={placeholder}
                />
                {isVerified && (
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 animate-in fade-in zoom-in duration-300">
                        <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded uppercase tracking-wider hidden sm:block">Verified</span>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                )}
                {isNonsense && (
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 animate-in fade-in zoom-in slide-in-from-right-2 duration-300">
                        <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded uppercase tracking-wider">Unknown Location</span>
                    </div>
                )}
            </div>

            {showSuggestions && (
                <div className="absolute z-50 w-full mt-1 bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2 border-b border-gray-100 dark:border-[#2A2A2A] bg-gray-50/50 dark:bg-gray-900/50 flex items-center gap-2">
                        <Search className="h-3 w-3 text-gray-400 dark:text-[#777]" />
                        <span className="text-[10px] font-semibold text-gray-400 dark:text-[#777] uppercase tracking-widest">Suggested Locations</span>
                    </div>
                    <ul className="max-h-60 overflow-auto">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectSuggestion(suggestion)}
                                className="px-4 py-3 hover:bg-primary/5  cursor-pointer flex items-center gap-3 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-foreground dark:text-[#F2F2F2] group-hover:text-primary transition-colors">{suggestion}</span>
                                    <p className="text-[10px] text-gray-400 dark:text-[#777]">Addis Ababa, Ethiopia</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
