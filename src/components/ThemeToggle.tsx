'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="切换主题"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
        </button>
    )
} 