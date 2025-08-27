import {clsx} from "clsx" ;
import { twMerge } from "tailwind-merge";

// tailwind merge 
export const cn=(...inputs)=>{
    return twMerge(clsx(inputs));
}