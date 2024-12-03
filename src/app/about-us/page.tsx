'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const timeline = [
    {
        year: '2020',
        title: '公司成立',
        description: '致力于为企业提供先进的AI解决方案'
    },
    {
        year: '2021',
        title: '产品发布',
        description: '推出首个AI开发平台，获得业界广泛认可'
    },
    {
        year: '2022',
        title: '快速发展',
        description: '服务客户超过1000家，完成A轮融资'
    },
    {
        year: '2023',
        title: '全球扩张',
        description: '开设海外分公司，业务覆盖多个国家和地区'
    }
]

const team = [
    {
        name: '张三',
        title: '创始人 & CEO',
        image: 'https://picsum.photos/400/400?random=1',
        description: '前Google AI研究员，拥有10年AI领域经验'
    },
    {
        name: '李四',
        title: '技术总监',
        image: 'https://picsum.photos/400/400?random=2',
        description: '专注于大规模AI系统架构设计'
    },
    {
        name: '王五',
        title: '产品总监',
        image: 'https://picsum.photos/400/400?random=3',
        description: '深耕AI产品设计，注重用户体验'
    },
    {
        name: '赵六',
        title: '研究主管',
        image: 'https://picsum.photos/400/400?random=4',
        description: '机器学习专家，发表多篇顶会论文'
    }
]

const values = [
    {
        title: '创新',
        description: '持续探索AI技术前沿，推动行业发展'
    },
    {
        title: '专业',
        description: '提供高质量的解决方案和服务'
    },
    {
        title: '协作',
        description: '与客户密切合作，实现共同成长'
    },
    {
        title: '责任',
        description: '遵循AI伦理，承担社会责任'
    }
]

export default function AboutUs() {
    const breadcrumbs = [
        { label: '关于我们', href: '/about-us' }
    ]

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Hero部分 */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">关于我们</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们是一家致力于推动AI技术创新和应用的科技公司，
                        通过先进的AI解决方案帮助企业实现数字化转型。
                    </p>
                </section>

                {/* 发展历程 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">发展历程</h2>
                    <div className="relative">
                        {/* 时间线 */}
                        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-purple-200" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={item.year} className="relative pl-12">
                                    <div className="absolute left-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-purple-600 font-semibold">
                                            {item.year}
                                        </span>
                                        <h3 className="text-lg font-semibold mt-1 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 团队介绍 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">核心团队</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="text-center space-y-4"
                            >
                                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{member.name}</h3>
                                    <p className="text-purple-600">{member.title}</p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 企业价值观 */}
                <section className="bg-gray-50 rounded-xl p-12">
                    <h2 className="text-2xl font-semibold mb-8 text-center">企业价值观</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="text-center space-y-3"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-purple-600 font-semibold text-xl">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-lg">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 联系方式 */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8">联系我们</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">邮箱</h3>
                                    <p className="text-gray-600">contact@aiplatform.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">电话</h3>
                                    <p className="text-gray-600">400-888-8888</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">地址</h3>
                                    <p className="text-gray-600">北京市朝阳区科技园区88号</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="font-semibold mb-4">关注我们</h3>
                                <div className="flex space-x-4">
                                    {[Github, Linkedin, Twitter].map((Icon, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-purple-50"
                                        >
                                            <Icon className="h-5 w-5 text-gray-600" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    )
} 