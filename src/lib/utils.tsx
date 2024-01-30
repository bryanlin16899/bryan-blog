import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[] ) => {
    return twMerge(clsx(inputs));
};

export const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 11) + 1;
};
