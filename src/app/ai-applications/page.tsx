'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'

interface CaseStudy {
    id: number
    title: string
    description: string
    industry: string
    image: string
    results: string[]
}

const industries = [
    '金融服务',
    '医疗健康',
    '制造业',
    '零售电商',
    '教育培训',
    '物流运输'
]

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: 'AI驱动的智能风控系统',
        description: '为某大型银行开发的智能风控系统，利用机器学习模型预测和防范金融风险。',
        industry: '金融服务',
        image: 'https://picsum.photos/800/400?random=10',
        results: [
            '风险识别准确率提升40%',
            '人工审核时间减少60%',
            '每年节省运营成本约500万'
        ]
    },
    {
        id: 2,
        title: 'AI医疗影像诊断助手',
        description: '基于深度学习的医疗影像分析系统，协助医生快速准确诊断。',
        industry: '医疗健康',
        image: 'https://picsum.photos/800/400?random=11',
        results: [
            '诊断效率提升50%',
            '诊断准确率达到98%',
            '平均诊断时间缩短65%'
        ]
    },
    // 更多案例...
]

export default function AIApplications() {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('全部')
    const [featuredCase, setFeaturedCase] = useState<CaseStudy>(caseStudies[0])

    const breadcrumbs = [
        { label: 'AI应用', href: '/ai-applications' }
    ]

    const filteredCases = selectedIndustry === '全部'
        ? caseStudies
        : caseStudies.filter(c => c.industry === selectedIndustry)

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="space-y-8">
                {/* 特色案例轮播 */}
                <section className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                        src={featuredCase.image}
                        alt={featuredCase.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-transparent">
                        <div className="relative h-full flex flex-col justify-center px-12 text-white max-w-2xl">
                            <h1 className="text-3xl font-bold mb-4">{featuredCase.title}</h1>
                            <p className="text-lg mb-6">{featuredCase.description}</p>
                            <button className="flex items-center text-white bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-lg w-fit">
                                查看详情 <ChevronRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* 行业过滤器 */}
                <section>
                    <div className="flex items-center space-x-4 overflow-x-auto pb-4">
                        <button
                            onClick={() => setSelectedIndustry('全部')}
                            className={`px-4 py-2 rounded-full whitespace-nowrap
                ${selectedIndustry === '全部'
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            全部行业
                        </button>
                        {industries.map(industry => (
                            <button
                                key={industry}
                                onClick={() => setSelectedIndustry(industry)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap
                  ${selectedIndustry === industry
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </section>

                {/* 案例研究网格 */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">案例研究</h2>
                        <button className="text-purple-600 flex items-center hover:underline">
                            查看全部 <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCases.map(caseStudy => (
                            <div
                                key={caseStudy.id}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => setFeaturedCase(caseStudy)}
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="text-sm text-purple-600 font-medium">
                                        {caseStudy.industry}
                                    </span>
                                    <h3 className="text-lg font-semibold mt-2 mb-3">
                                        {caseStudy.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {caseStudy.description}
                                    </p>
                                    <div className="space-y-2">
                                        {caseStudy.results.map((result, index) => (
                                            <div key={index} className="flex items-center text-sm text-gray-600">
                                                <div className="h-1.5 w-1.5 rounded-full bg-purple-600 mr-2" />
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 实施指南 */}
                <section className="bg-gray-50 rounded-xl p-8">
                    <h2 className="text-xl font-semibold mb-6">AI应用实施指南</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: '需求分析',
                                description: '深入了解业务需求，确定AI应用场景和目标'
                            },
                            {
                                title: '解决方案设计',
                                description: '制定完整的技术方案和实施计划'
                            },
                            {
                                title: '部署与优化',
                                description: '系统部署、测试和持续优化'
                            }
                        ].map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg">
                                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                                    <span className="text-purple-600 font-semibold">{index + 1}</span>
                                </div>
                                <h3 className="font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    )
} 