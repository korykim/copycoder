'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import {

    Play,
    Clock,
    Star,
    Sparkles,
    ArrowRight,

    Users
} from 'lucide-react'

interface VideoTool {
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
    users: string
}

const videoTools: VideoTool[] = [
    {
        id: 1,
        name: 'AI视频生成器',
        description: '只需输入文本描述，即可生成专业级视频内容',
        features: [
            '文本转视频',
            '场景生成',
            '人物动画',
            '音频同步'
        ],
        pricing: {
            free: false,
            price: '￥299/月',
            trial: '7天免费试用'
        },
        image: 'https://picsum.photos/800/450?random=1',
        category: '视频生成',
        rating: 4.8,
        users: '10,000+'
    },
    {
        id: 2,
        name: 'AI视频编辑助手',
        description: '智能视频剪辑和后期处理工具',
        features: [
            '智能剪辑',
            '特效添加',
            '字幕生成',
            '风格转换'
        ],
        pricing: {
            free: true,
            trial: '基础功能免费'
        },
        image: 'https://picsum.photos/800/450?random=2',
        category: '视频编辑',
        rating: 4.6,
        users: '50,000+'
    }
]

const categories = ['全部', '视频生成', '视频编辑', '特效处理', '字幕工具']

const tutorials = [
    {
        id: 1,
        title: '使用AI快速生成营销视频',
        duration: '20分钟',
        level: '入门',
        image: 'https://picsum.photos/400/225?random=3',
        views: '2,500'
    },
    {
        id: 2,
        title: '专业级AI视频编辑技巧',
        duration: '30分钟',
        level: '进阶',
        image: 'https://picsum.photos/400/225?random=4',
        views: '1,800'
    },
    {
        id: 3,
        title: 'AI特效制作完全指南',
        duration: '25分钟',
        level: '中级',
        image: 'https://picsum.photos/400/225?random=5',
        views: '3,200'
    }
]

const showcases = [
    {
        id: 1,
        title: '产品展示视频',
        description: '使用AI生成的专业产品展示视频',
        thumbnail: 'https://picsum.photos/800/450?random=6',
        duration: '0:30'
    },
    {
        id: 2,
        title: '教育课程',
        description: 'AI辅助生成的教育培训视频',
        thumbnail: 'https://picsum.photos/800/450?random=7',
        duration: '1:20'
    },
    {
        id: 3,
        title: '营销广告',
        description: '快速生成的社交媒体营销视频',
        thumbnail: 'https://picsum.photos/800/450?random=8',
        duration: '0:45'
    }
]

export default function AIVideoTools() {
    const [selectedCategory, setSelectedCategory] = useState('全部')

    const breadcrumbs = [
        { label: 'AI工具', href: '/ai-tools' },
        { label: 'AI视频工具', href: '/ai-video-tools' }
    ]

    const filteredTools = selectedCategory === '全部'
        ? videoTools
        : videoTools.filter(tool => tool.category === selectedCategory)

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Hero部分 */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">AI视频工具</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        使用AI技术快速创建、编辑和优化视频内容，提升创作效率。
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                            开始创作
                        </button>
                        <button className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50">
                            查看示例
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
                                            <Users className="h-4 w-4" />
                                            <span>{tool.users} 用户</span>
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

                {/* 视频展示 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">创作案例</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {showcases.map(showcase => (
                            <div
                                key={showcase.id}
                                className="group relative rounded-xl overflow-hidden"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={showcase.thumbnail}
                                        alt={showcase.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-white/90 p-4 rounded-full">
                                            <Play className="h-6 w-6 text-purple-600" />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                                        {showcase.duration}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-1">{showcase.title}</h3>
                                    <p className="text-sm text-gray-600">{showcase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 教程部分 */}
                <section className="bg-gray-50 rounded-xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-semibold">视频教程</h2>
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
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {tutorial.duration}
                                            <span className="mx-2">•</span>
                                            {tutorial.level}
                                        </div>
                                        <div className="flex items-center">
                                            <Play className="h-4 w-4 mr-1" />
                                            {tutorial.views} 次观看
                                        </div>
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