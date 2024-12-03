'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Header from './Header'
import Sidebar from './Sidebar'
import Breadcrumb from '@/components/navigation/Breadcrumb'

interface MainLayoutProps {
    children: React.ReactNode
    showSidebar?: boolean
    breadcrumbs?: Array<{ label: string; href: string }>
}

export default function MainLayout({
    children,
    showSidebar = true,
    breadcrumbs = []
}: MainLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />

            <button
                className="md:hidden fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex">
                {showSidebar && (
                    <div className={`
            fixed md:relative md:translate-x-0 z-40
            transition-transform duration-300 bg-white dark:bg-gray-900
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                        <Sidebar />
                    </div>
                )}

                <main className="flex-1 min-h-[calc(100vh-60px)]">
                    {breadcrumbs.length > 0 && (
                        <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">
                            <Breadcrumb items={breadcrumbs} />
                        </div>
                    )}
                    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
} 