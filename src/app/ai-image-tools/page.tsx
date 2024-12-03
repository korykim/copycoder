'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import {

    Layers,

    Sparkles,
    ArrowRight,
    Play,

    Clock
} from 'lucide-react'

interface Tool {
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
}

const tools: Tool[] = [
    {
        id: 1,
        name: 'AI图像生成器Pro',
        description: '使用最新的AI技术生成高质量图像，支持多种风格和精确控制',
        features: [
            '多种艺术风格',
            '高分辨率输出',
            '批量生成',
            '自定义控制'
        ],
        pricing: {
            free: false,
            price: '￥199/月',
            trial: '14天免费试用'
        },
        image: 'https://picsum.photos/800/600?random=1',
        category: '图像生成'
    },
    {
        id: 2,
        name: 'AI图像编辑大师',
        description: '智能图像编辑工具，一键实现专业级修图效果',
        features: [
            '智能修复',
            '风格迁移',
            '背景替换',
            '人像美化'
        ],
        pricing: {
            free: true,
            trial: '基础功能免费'
        },
        image: 'https://picsum.photos/800/600?random=2',
        category: '图像编辑'
    }
]

const categories = ['全部', '图像生成', '图像编辑', '风格迁移', '超分辨率']

const examples = [
    {
        id: 1,
        title: '风景生成',
        prompt: '一个宁静的湖泊，周围是雪山和森林，黄昏时分',
        image: 'https://picsum.photos/800/600?random=3'
    },
    {
        id: 2,
        title: '人物肖像',
        prompt: '一个年轻艺术家在工作室创作，温暖的自然光',
        image: 'https://picsum.photos/800/600?random=4'
    },
    {
        id: 3,
        title: '概念艺术',
        prompt: '未来城市的天空交通，充满科技感',
        image: 'https://picsum.photos/800/600?random=5'
    }
]

const tutorials = [
    {
        id: 1,
        title: '如何使用AI生成完美构图的图像',
        duration: '15分钟',
        level: '入门',
        image: 'https://picsum.photos/400/300?random=6'
    },
    {
        id: 2,
        title: '掌握AI图像编辑的高级技巧',
        duration: '20分钟',
        level: '进阶',
        image: 'https://picsum.photos/400/300?random=7'
    },
    {
        id: 3,
        title: '使用AI创作艺术风格图像',
        duration: '18分钟',
        level: '中级',
        image: 'https://picsum.photos/400/300?random=8'
    }
]

export default function AIImageTools() {
    const [selectedCategory, setSelectedCategory] = useState('全部')

    const breadcrumbs = [
        { label: 'AI工具', href: '/ai-tools' },
        { label: 'AI图像工具', href: '/ai-image-tools' }
    ]

    const filteredTools = selectedCategory === '全部'
        ? tools
        : tools.filter(tool => tool.category === selectedCategory)

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Hero部分 */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">AI图像工具</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        探索最先进的AI图像生成和编辑工具，释放无限创意可能。
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                            开始创作
                        </button>
                        <button className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50">
                            查看教程
                        </button>
                    </div>
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
                                <div className="relative h-64">
                                    <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        fill
                                        className="object-cover"
                                    />
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

                {/* 示例展示 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">创作示例</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {examples.map(example => (
                            <div
                                key={example.id}
                                className="group relative rounded-xl overflow-hidden"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={example.image}
                                        alt={example.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-0 p-6 text-white">
                                            <h3 className="font-semibold mb-2">{example.title}</h3>
                                            <p className="text-sm opacity-90">{example.prompt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 教程部分 */}
                <section className="bg-gray-50 rounded-xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-semibold">入门教程</h2>
                        <button className="text-purple-600 flex items-center hover:underline">
                            查看全部 <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {tutorials.map(tutorial => (
                            <div
                                key={tutorial.id}
                                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48 group">
                                    <Image
                                        src={tutorial.image}
                                        alt={tutorial.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-white/90 p-3 rounded-full">
                                            <Play className="h-6 w-6 text-purple-600" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">{tutorial.title}</h3>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {tutorial.duration}
                                        <span className="mx-2">•</span>
                                        <Layers className="h-4 w-4 mr-1" />
                                        {tutorial.level}
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