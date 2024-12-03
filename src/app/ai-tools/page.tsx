'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Filter, Grid, List } from 'lucide-react'
import Image from 'next/image'

interface FilterState {
    category: string
    pricing: string[]
    features: string[]
}

const filters = {
    categories: ['所有工具', '图像生成', '文本处理', '代码助手', '视频编辑', '语音合成'],
    pricing: ['免费', '付费', '订阅制'],
    features: ['API接入', '批量处理', '自定义模型', '团队协作']
} as const

const tools = [
    {
        id: 1,
        name: 'AI图像生成器Pro',
        description: '专业级AI图像生成工具，支持多种风格和高度自定义',
        category: '图像生成',
        pricing: '订阅制',
        rating: 4.8,
        image: 'https://picsum.photos/400/300?random=1'
    },
    {
        id: 2,
        name: 'AI文本助手',
        description: '智能文本处理和生成工具,支持多语言翻译和内容优化',
        category: '文本处理',
        pricing: '免费',
        rating: 4.5,
        image: 'https://picsum.photos/400/300?random=2'
    },
    {
        id: 3,
        name: 'CodeGPT',
        description: '智能代码补全和重构工具,提供多语言支持',
        category: '代码助手', 
        pricing: '订阅制',
        rating: 4.7,
        image: 'https://picsum.photos/400/300?random=3'
    },
    {
        id: 4,
        name: 'AI视频编辑大师',
        description: '一键智能剪辑,自动生成字幕和转场效果',
        category: '视频编辑',
        pricing: '付费',
        rating: 4.6,
        image: 'https://picsum.photos/400/300?random=4'
    },
    {
        id: 5,
        name: 'AI语音合成器',
        description: '自然语音合成工具,支持多种语言和音色定制',
        category: '语音合成',
        pricing: '免费',
        rating: 4.4,
        image: 'https://picsum.photos/400/300?random=5'
    },
    {
        id: 6,
        name: '智能图像修复',
        description: '自动修复和增强受损图片,支持批量处理',
        category: '图像生成',
        pricing: '付费',
        rating: 4.3,
        image: 'https://picsum.photos/400/300?random=6'
    }
]

export default function AITools() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        category: '所有工具',
        pricing: [],
        features: []
    })

    const breadcrumbs = [
        { label: 'AI工具', href: '/ai-tools' }
    ]

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col md:flex-row gap-6">
                {/* 过滤器侧边栏 */}
                <aside className="w-full md:w-64 space-y-6">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">过滤器</h3>
                            <Filter className="h-5 w-5 text-gray-500" />
                        </div>

                        {/* 分类过滤器 */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium mb-2">分类</h4>
                            <div className="space-y-2">
                                {filters.categories.map(category => (
                                    <label key={category} className="flex items-center">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedFilters.category === category}
                                            onChange={() => setSelectedFilters({
                                                ...selectedFilters,
                                                category
                                            })}
                                            className="mr-2"
                                        />
                                        <span className="text-sm">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 价格过滤器 */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium mb-2">价格</h4>
                            <div className="space-y-2">
                                {filters.pricing.map(price => (
                                    <label key={price} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.pricing.includes(price)}
                                            onChange={() => {
                                                const newPricing = selectedFilters.pricing.includes(price)
                                                    ? selectedFilters.pricing.filter(p => p !== price)
                                                    : [...selectedFilters.pricing, price]
                                                setSelectedFilters({
                                                    ...selectedFilters,
                                                    pricing: newPricing
                                                })
                                            }}
                                            className="mr-2"
                                        />
                                        <span className="text-sm">{price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 功能过滤器 */}
                        <div>
                            <h4 className="text-sm font-medium mb-2">功能</h4>
                            <div className="space-y-2">
                                {filters.features.map(feature => (
                                    <label key={feature} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.features.includes(feature)}
                                            onChange={() => {
                                                const newFeatures = selectedFilters.features.includes(feature)
                                                    ? selectedFilters.features.filter(f => f !== feature)
                                                    : [...selectedFilters.features, feature]
                                                setSelectedFilters({
                                                    ...selectedFilters,
                                                    features: newFeatures
                                                })
                                            }}
                                            className="mr-2"
                                        />
                                        <span className="text-sm">{feature}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* 工具列表 */}
                <div className="flex-1">
                    {/* 工具栏 */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">AI工具目录</h2>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-50 text-purple-600' : 'text-gray-500'}`}
                            >
                                <Grid className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-50 text-purple-600' : 'text-gray-500'}`}
                            >
                                <List className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* 工具网格/列表 */}
                    <div className={viewMode === 'grid'
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                    }>
                        {tools.map(tool => (
                            <div
                                key={tool.id}
                                className={`bg-white rounded-lg border border-gray-200 overflow-hidden
                  ${viewMode === 'list' ? 'flex' : ''}
                `}
                            >
                                <div className={`relative ${viewMode === 'grid' ? 'h-48' : 'h-40 w-64'}`}>
                                    <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">{tool.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-purple-600">{tool.category}</span>
                                        <span className="text-sm text-gray-500">{tool.pricing}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
} 