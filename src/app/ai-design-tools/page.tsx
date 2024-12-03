'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import {
    Palette,
    Layout,

    Image as ImageIcon,
    Layers,
    Wand2,
    Star,
    Sparkles,

    Download,
    Eye
} from 'lucide-react'

interface DesignTool {
    id: number
    name: string
    description: string
    features: string[]
    pricing: {
        free: boolean
        price?: string
        trial?: string
    }
    image: string
    category: string
    rating: number
    designs: string
}

const designTools: DesignTool[] = [
    {
        id: 1,
        name: 'AI UI设计助手',
        description: '智能生成UI界面，快速实现设计创意',
        features: [
            '组件生成',
            '响应式设计',
            '原型制作',
            '设计系统'
        ],
        pricing: {
            free: false,
            price: '￥299/月',
            trial: '7天免费试用'
        },
        image: 'https://picsum.photos/800/450?random=1',
        category: 'UI设计',
        rating: 4.8,
        designs: '10万+'
    },
    {
        id: 2,
        name: 'AI品牌设计师',
        description: '一键生成品牌视觉元素，包含Logo、配色等',
        features: [
            'Logo生成',
            '配色方案',
            '字体推荐',
            '品牌规范'
        ],
        pricing: {
            free: true,
            trial: '基础功能免费'
        },
        image: 'https://picsum.photos/800/450?random=2',
        category: '品牌设计',
        rating: 4.7,
        designs: '5万+'
    }
]

const categories = ['全部', 'UI设计', '品牌设计', '平面设计', '插画设计']

const features = [
    {
        title: 'UI设计',
        description: '智能生成界面设计，快速制作原型',
        icon: Layout
    },
    {
        title: '品牌设计',
        description: '一键生成品牌视觉元素',
        icon: Palette
    },
    {
        title: '平面设计',
        description: '海报、宣传物料智能设计',
        icon: ImageIcon
    },
    {
        title: '插画设计',
        description: 'AI辅助创作独特插画',
        icon: Wand2
    }
]

const showcases = [
    {
        id: 1,
        title: '电商App界面',
        description: 'AI生成的现代电商App界面设计',
        image: 'https://picsum.photos/800/600?random=3',
        category: 'UI设计'
    },
    {
        id: 2,
        title: '品牌视觉系统',
        description: '自动生成的完整品牌视觉识别系统',
        image: 'https://picsum.photos/800/600?random=4',
        category: '品牌设计'
    },
    {
        id: 3,
        title: '营销海报',
        description: 'AI生成的社交媒体营销海报',
        image: 'https://picsum.photos/800/600?random=5',
        category: '平面设计'
    }
]

const resources = [
    {
        id: 1,
        title: 'UI组件库',
        description: '海量预设UI组件，支持自定义和导出',
        count: '1000+ 组件',
        image: 'https://picsum.photos/400/300?random=6'
    },
    {
        id: 2,
        title: '设计模板',
        description: '精选设计模板，一键生成专业设计',
        count: '500+ 模板',
        image: 'https://picsum.photos/400/300?random=7'
    },
    {
        id: 3,
        title: '设计资源',
        description: '图标、插画、字体等设计素材库',
        count: '10000+ 资源',
        image: 'https://picsum.photos/400/300?random=8'
    }
]

export default function AIDesignTools() {
    const [selectedCategory, setSelectedCategory] = useState('全部')

    const breadcrumbs = [
        { label: 'AI工具', href: '/ai-tools' },
        { label: 'AI设计工具', href: '/ai-design-tools' }
    ]

    const filteredTools = selectedCategory === '全部'
        ? designTools
        : designTools.filter(tool => tool.category === selectedCategory)

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Hero部分 */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">AI设计工具</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        使用AI技术提升设计效率，让创意更快实现。
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                            开始设计
                        </button>
                        <button className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50">
                            浏览案例
                        </button>
                    </div>
                </section>

                {/* 核心功能 */}
                <section className="grid md:grid-cols-4 gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={feature.title}
                                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        )
                    })}
                </section>

                {/* 工具分类 */}
                <section>
                    <div className="flex items-center space-x-4 overflow-x-auto pb-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap
                  ${selectedCategory === category
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* 工具列表 */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredTools.map(tool => (
                            <div
                                key={tool.id}
                                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span>{tool.rating}</span>
                                            <span className="mx-2">•</span>
                                            <Layers className="h-4 w-4" />
                                            <span>{tool.designs} 设计</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold">{tool.name}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm
                      ${tool.pricing.free ? 'bg-green-50 text-green-600' : 'bg-purple-50 text-purple-600'}
                    `}>
                                            {tool.pricing.free ? '免费' : tool.pricing.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{tool.description}</p>
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {tool.features.map(feature => (
                                            <div key={feature} className="flex items-center text-sm text-gray-600">
                                                <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">
                                            {tool.pricing.trial}
                                        </span>
                                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                                            立即使用
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 设计案例 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">设计案例</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {showcases.map(showcase => (
                            <div
                                key={showcase.id}
                                className="group relative rounded-xl overflow-hidden"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={showcase.image}
                                        alt={showcase.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-0 p-6 text-white">
                                            <span className="text-sm bg-purple-600 px-2 py-1 rounded">
                                                {showcase.category}
                                            </span>
                                            <h3 className="font-semibold mt-2 mb-1">{showcase.title}</h3>
                                            <p className="text-sm opacity-90">{showcase.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 设计资源 */}
                <section className="bg-gray-50 rounded-xl p-8">
                    <h2 className="text-2xl font-semibold mb-8">设计资源</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map(resource => (
                            <div
                                key={resource.id}
                                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48 group">
                                    <Image
                                        src={resource.image}
                                        alt={resource.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-white/90 px-4 py-2 rounded-lg text-purple-600 flex items-center">
                                            <Download className="h-4 w-4 mr-2" />
                                            获取资源
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                                    <div className="flex items-center text-sm text-purple-600">
                                        <Eye className="h-4 w-4 mr-2" />
                                        {resource.count}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    )
} 