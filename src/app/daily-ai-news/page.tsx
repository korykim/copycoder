'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Calendar, Share2, Bookmark, Clock, Tag, ChevronRight } from 'lucide-react'

interface NewsItem {
    id: number
    title: string
    summary: string
    category: string
    date: string
    readTime: string
    image: string
    tags: string[]
}

const categories = [
    '全部',
    '技术进展',
    '行业动态',
    '政策法规',
    '研究成果',
    '企业新闻'
]

const newsData: NewsItem[] = [
    {
        id: 1,
        title: 'OpenAI发布GPT-5，性能提升显著',
        summary: 'OpenAI今日宣布发布GPT-5模型，在多个基准测试中展现出显著的性能提升...',
        category: '技术进展',
        date: '2024-02-20',
        readTime: '5分钟',
        image: 'https://picsum.photos/800/400?random=20',
        tags: ['GPT-5', 'OpenAI', '人工智能']
    },
    {
        id: 2,
        title: '中国发布新一代AI发展规划',
        summary: '国务院发布《新一代人工智能发展规划》，提出到2025年的发展目标...',
        category: '政策法规',
        date: '2024-02-19',
        readTime: '4分钟',
        image: 'https://picsum.photos/800/400?random=21',
        tags: ['政策', 'AI规划', '发展战略']
    },
    // 更多新闻...
]

export default function DailyAINews() {
    const [selectedCategory, setSelectedCategory] = useState('全部')
    const [email, setEmail] = useState('')

    const breadcrumbs = [
        { label: '每日AI新闻', href: '/daily-ai-news' }
    ]

    const filteredNews = selectedCategory === '全部'
        ? newsData
        : newsData.filter(news => news.category === selectedCategory)

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* 主要新闻区域 */}
                <div className="flex-1 space-y-8">
                    {/* 分类导航 */}
                    <div className="sticky top-0 bg-white z-10 pb-4 border-b">
                        <div className="flex items-center space-x-4 overflow-x-auto">
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
                    </div>

                    {/* 新闻列表 */}
                    <div className="space-y-6">
                        {filteredNews.map(news => (
                            <article
                                key={news.id}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="md:flex">
                                    <div className="relative h-48 md:h-auto md:w-72">
                                        <Image
                                            src={news.image}
                                            alt={news.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-3">
                                            <span className="text-sm text-purple-600">{news.category}</span>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {news.date}
                                            </div>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Clock className="h-4 w-4 mr-1" />
                                                {news.readTime}
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-semibold mb-3">{news.title}</h2>
                                        <p className="text-gray-600 mb-4">{news.summary}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                {news.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm"
                                                    >
                                                        <Tag className="h-3 w-3 mr-1" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                                    <Share2 className="h-5 w-5 text-gray-500" />
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                                    <Bookmark className="h-5 w-5 text-gray-500" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* 侧边栏 */}
                <aside className="lg:w-80 space-y-6">
                    {/* 新闻简报订阅 */}
                    <div className="bg-purple-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4">订阅AI新闻简报</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            每周精选AI领域最新动态，直接发送到您的邮箱
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="输入您的邮箱"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                            />
                            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                                订阅简报
                            </button>
                        </div>
                    </div>

                    {/* 热门话题 */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">热门话题</h3>
                            <button className="text-purple-600 text-sm hover:underline">
                                查看全部
                            </button>
                        </div>
                        <div className="space-y-4">
                            {['AI监管', '大模型进展', '智能制造', 'AI教育'].map((topic, index) => (
                                <div
                                    key={topic}
                                    className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
                                >
                                    <div className="flex items-center">
                                        <span className="text-purple-600 font-semibold mr-3">
                                            #{index + 1}
                                        </span>
                                        <span>{topic}</span>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </MainLayout>
    )
} 