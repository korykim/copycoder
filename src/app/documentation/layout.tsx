'use client'

import { useState } from 'react'
import { Menu, Search, ChevronDown } from 'lucide-react'
import Header from '@/components/layout/Header'

interface DocLayoutProps {
    children: React.ReactNode
}

const versions = ['v2.0.0', 'v1.9.0', 'v1.8.0']

const navigation = [
    {
        title: '入门指南',
        items: [
            { title: '快速开始', href: '/documentation/quickstart' },
            { title: '基础概念', href: '/documentation/concepts' },
            { title: '安装配置', href: '/documentation/installation' },
        ]
    },
    {
        title: 'API参考',
        items: [
            { title: '认证授权', href: '/documentation/auth' },
            { title: '接口规范', href: '/documentation/api-spec' },
            { title: '错误处理', href: '/documentation/errors' },
        ]
    },
    {
        title: '最佳实践',
        items: [
            { title: '架构设计', href: '/documentation/architecture' },
            { title: '性能优化', href: '/documentation/performance' },
            { title: '安全指南', href: '/documentation/security' },
        ]
    }
]

export default function DocLayout({ children }: DocLayoutProps) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [selectedVersion, setSelectedVersion] = useState(versions[0])
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* 文档头部 */}
            <div className="border-b border-gray-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            <Menu className="h-6 w-6 text-gray-500" />
                        </button>
                        <div className="relative">
                            <button
                                className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm"
                                onClick={() => setSelectedVersion(versions[0])}
                            >
                                <span>{selectedVersion}</span>
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-md mx-4">
                        <input
                            type="text"
                            placeholder="搜索文档..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                        />
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex">
                    {/* 侧边导航 */}
                    <aside className={`
            fixed md:relative md:flex flex-shrink-0 w-64 h-[calc(100vh-120px)]
            border-r border-gray-200 overflow-y-auto
            transition-transform duration-300
            ${isNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
                        <nav className="p-6 space-y-8">
                            {navigation.map((section) => (
                                <div key={section.title}>
                                    <h3 className="font-semibold text-gray-900 mb-3">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item) => (
                                            <li key={item.href}>
                                                <a
                                                    href={item.href}
                                                    className="block text-gray-600 hover:text-purple-600 py-1"
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                    </aside>

                    {/* 主内容区域 */}
                    <main className="flex-1 py-8 px-6 md:px-12">
                        {children}
                    </main>

                    {/* 右侧目录 */}
                    <aside className="hidden lg:block w-64 pl-8">
                        <div className="sticky top-8">
                            <h3 className="font-semibold text-gray-900 mb-3">
                                目录
                            </h3>
                            <nav className="space-y-2">
                                {/* 这里将由具体页面内容生成目录 */}
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
} 