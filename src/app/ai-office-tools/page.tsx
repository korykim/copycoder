'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import {
    FileText,
    Table,
    BarChart,
    Mail,
    Calendar,
    Users,
    Star,
    Sparkles,

    CheckCircle,
    Clock
} from 'lucide-react'

interface OfficeTool {
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
    efficiency: string
}

const officeTools: OfficeTool[] = [
    {
        id: 1,
        name: 'AI文档助手',
        description: '智能文档处理和生成工具，提升办公效率',
        features: [
            '智能写作',
            '文档分析',
            '格式转换',
            '多语言支持'
        ],
        pricing: {
            free: false,
            price: '￥199/月',
            trial: '14天免费试用'
        },
        image: 'https://picsum.photos/800/450?random=1',
        category: '文档处理',
        rating: 4.8,
        efficiency: '提升80%效率'
    },
    {
        id: 2,
        name: 'AI数据分析师',
        description: '自动化数据分析和可视化工具',
        features: [
            '数据清洗',
            '智能分析',
            '报表生成',
            '预测模型'
        ],
        pricing: {
            free: true,
            trial: '基础功能免费'
        },
        image: 'https://picsum.photos/800/450?random=2',
        category: '数据分析',
        rating: 4.7,
        efficiency: '节省60%时间'
    }
]

const categories = ['全部', '文档处理', '数据分析', '邮件助手', '日程管理']

const integrations = [
    {
        name: 'Microsoft Office',
        icon: FileText,
        description: '无缝集成Word、Excel、PowerPoint'
    },
    {
        name: 'Google Workspace',
        icon: Mail,
        description: '支持Gmail、Docs、Sheets等服务'
    },
    {
        name: '企业协作平台',
        icon: Users,
        description: '对接钉钉、企业微信等平台'
    }
]

const useCases = [
    {
        id: 1,
        title: '自动报告生成',
        description: '将数据自动转化为专业报告，包含分析和建议',
        image: 'https://picsum.photos/400/300?random=3',
        time: '原需2小时 → 现需10分钟'
    },
    {
        id: 2,
        title: '智能邮件处理',
        description: '自动分类、回复和追踪重要邮件',
        image: 'https://picsum.photos/400/300?random=4',
        time: '提升90%处理效率'
    },
    {
        id: 3,
        title: '会议记录整理',
        description: '自动转录会议内容并生成结构化笔记',
        image: 'https://picsum.photos/400/300?random=5',
        time: '节省80%整理时间'
    }
]

const features = [
    {
        title: '文档智能化',
        description: '自动生成、编辑和优化各类文档',
        icon: FileText
    },
    {
        title: '数据洞察',
        description: '深度分析数据，发现业务机会',
        icon: BarChart
    },
    {
        title: '流程自动化',
        description: '自动化重复性工作流程',
        icon: Table
    },
    {
        title: '日程管理',
        description: '智能规划和优化工作日程',
        icon: Calendar
    }
]

export default function AIOfficeTools() {
    const [selectedCategory, setSelectedCategory] = useState('全部')

    const breadcrumbs = [
        { label: 'AI工具', href: '/ai-tools' },
        { label: 'AI办公工具', href: '/ai-office-tools' }
    ]

    const filteredTools = selectedCategory === '全部'
        ? officeTools
        : officeTools.filter(tool => tool.category === selectedCategory)

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Hero部分 */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">AI办公工具</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        使用AI技术提升办公效率，让工作更智能、更轻松。
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                            免费试用
                        </button>
                        <button className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50">
                            查看演示
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
                                            <Clock className="h-4 w-4" />
                                            <span>{tool.efficiency}</span>
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

                {/* 应用场景 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">应用场景</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {useCases.map(useCase => (
                            <div
                                key={useCase.id}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={useCase.image}
                                        alt={useCase.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                                    <div className="flex items-center text-sm text-purple-600">
                                        <Clock className="h-4 w-4 mr-2" />
                                        {useCase.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 集成支持 */}
                <section className="bg-gray-50 rounded-xl p-8">
                    <h2 className="text-2xl font-semibold mb-8">集成支持</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {integrations.map((integration) => {
                            const Icon = integration.icon
                            return (
                                <div
                                    key={integration.name}
                                    className="bg-white p-6 rounded-xl border border-gray-200"
                                >
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{integration.name}</h3>
                                    <p className="text-sm text-gray-600">{integration.description}</p>
                                    <div className="mt-4 flex items-center text-purple-600 text-sm">
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        已支持
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </MainLayout>
    )
} 