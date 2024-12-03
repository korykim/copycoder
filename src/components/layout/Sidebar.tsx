'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Layout,
    Image,
    Video,
    FileText,
    Palette,
    Newspaper,
    BookOpen,
    Users,
    MessageSquare
} from 'lucide-react'

const navigation = [
    { name: 'AI工具', href: '/ai-tools', icon: Layout },
    { name: 'AI图像工具', href: '/ai-image-tools', icon: Image },
    { name: 'AI视频工具', href: '/ai-video-tools', icon: Video },
    { name: 'AI办公工具', href: '/ai-office-tools', icon: FileText },
    { name: 'AI设计工具', href: '/ai-design-tools', icon: Palette },
    { name: 'AI应用案例', href: '/ai-applications', icon: Layout },
    { name: '每日AI新闻', href: '/daily-ai-news', icon: Newspaper },
    { name: '使用文档', href: '/documentation', icon: BookOpen },
    { name: 'AI咨询服务', href: '/ai-consulting', icon: MessageSquare },
    { name: '关于我们', href: '/about-us', icon: Users },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 min-h-screen border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <nav className="p-4 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                flex items-center px-4 py-2 text-sm font-medium rounded-lg
                ${isActive
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
                                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                                }
                `}
                        >
                            <Icon className={`
                mr-3 h-5 w-5
                ${isActive
                                    ? 'text-blue-700 dark:text-blue-200'
                                    : 'text-gray-400 dark:text-gray-500'
                                }
                `} />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
} 