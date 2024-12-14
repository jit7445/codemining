"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
   <div className='text-gray-700 dark:text-gray-200 dark:bg-zinc-800 min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </NextThemesProvider>
}
