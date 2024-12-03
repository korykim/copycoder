'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Calendar, Users, Briefcase, Check, ArrowRight } from 'lucide-react'

const services = [
    {
        title: 'AI战略咨询',
        description: '帮助企业制定AI转型战略，评估应用场景，规划实施路径',
        icon: Briefcase,
        features: [
            'AI能力评估',
            '场景分析',
            '战略规划',
            '路线图制定'
        ]
    },
    {
        title: '技术实施顾问',
        description: '提供AI项目实施指导，解决技术难题，确保项目成功',
        icon: Users,
        features: [
            '架构设计',
            '技术选型',
            '最佳实践',
            '性能优化'
        ]
    },
    {
        title: '定制化解决方案',
        description: '根据企业需求定制AI解决方案，从设计到落地全程服务',
        icon: Calendar,
        features: [
            '需求分析',
            '方案设计',
            '开发支持',
            '部署运维'
        ]
    }
]

const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
]

interface ConsultingForm {
    name: string
    company: string
    email: string
    phone: string
    service: string
    date: string
    time: string
    message: string
}

export default function AIConsulting() {
    const [form, setForm] = useState<ConsultingForm>({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
    })

    const breadcrumbs = [
        { label: 'AI咨询', href: '/ai-consulting' }
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // 处理表单提交
        console.log('Form submitted:', form)
    }

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Hero部分 */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">AI咨询服务</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们提供专业的AI咨询服务，帮助企业在数字化转型中充分利用AI技术，
                        提升竞争力，创造更大价值。
                    </p>
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700">
                        立即咨询
                    </button>
                </section>

                {/* 服务卡片 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">我们的服务</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <div
                                    key={service.title}
                                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm text-gray-600">
                                                <Check className="h-4 w-4 text-purple-600 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* 预约表单 */}
                <section className="bg-gray-50 rounded-xl p-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-8">预约咨询</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        姓名
                                    </label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        公司
                                    </label>
                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        邮箱
                                    </label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        电话
                                    </label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    咨询服务
                                </label>
                                <select
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                    required
                                >
                                    <option value="">请选择服务类型</option>
                                    {services.map((service) => (
                                        <option key={service.title} value={service.title}>
                                            {service.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        日期
                                    </label>
                                    <input
                                        type="date"
                                        value={form.date}
                                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        时间
                                    </label>
                                    <select
                                        value={form.time}
                                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                        required
                                    >
                                        <option value="">请选择时间</option>
                                        {timeSlots.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    咨询内容
                                </label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-600"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
                            >
                                提交预约
                            </button>
                        </form>
                    </div>
                </section>

                {/* 客户评价 */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-semibold">客户评价</h2>
                        <button className="text-purple-600 flex items-center hover:underline">
                            查看更多 <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl border border-gray-200"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={`https://picsum.photos/200/200?random=${i}`}
                                            alt="客户头像"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">客户{i}</h3>
                                        <p className="text-sm text-gray-600">某科技公司CEO</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    &quot;通过AI咨询服务，我们成功实现了业务流程的智能化升级，
                                    效率提升显著，投资回报率超出预期。&quot;
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    )
} 