'use client'

import { Book, Code, Zap, Shield, ArrowRight } from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: '快速集成',
        description: '只需几行代码即可将AI能力集成到您的应用中'
    },
    {
        icon: Shield,
        title: '安全可靠',
        description: '企业级安全保障，数据加密传输与存储'
    },
    {
        icon: Code,
        title: 'API优先',
        description: 'RESTful API设计，支持多种编程语言'
    }
]

const quickStartSteps = [
    {
        title: '安装SDK',
        code: 'npm install @ai-platform/sdk',
        description: '使用包管理器安装我们的SDK'
    },
    {
        title: '配置密钥',
        code: `const client = new AIClient({
  apiKey: 'your-api-key',
  region: 'cn-north-1'
})`,
        description: '初始化客户端并配置密钥'
    },
    {
        title: '调用API',
        code: `const response = await client.imageGeneration.create({
  prompt: '一只可爱的猫咪',
  size: '1024x1024'
})`,
        description: '开始使用AI能力生成内容'
    }
]

export default function Documentation() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            {/* 文档头部 */}
            <div className="space-y-6">
                <h1 className="text-4xl font-bold">AI平台文档</h1>
                <p className="text-xl text-gray-600">
                    欢迎使用我们的AI平台。本文档将帮助您快速了解和使用平台的各项功能。
                </p>
                <div className="flex space-x-4">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                        快速开始
                    </button>
                    <button className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50">
                        API文档
                    </button>
                </div>
            </div>

            {/* 特性介绍 */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">平台特性</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={feature.title}
                                className="p-6 border border-gray-200 rounded-xl"
                            >
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* 快速开始 */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">快速开始</h2>
                    <button className="text-purple-600 text-sm flex items-center hover:underline">
                        查看详细教程 <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                </div>
                <div className="space-y-6">
                    {quickStartSteps.map((step, index) => (
                        <div
                            key={step.title}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <div className="flex items-center space-x-3 p-4 bg-gray-50 border-b border-gray-200">
                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                                    <span className="text-sm text-purple-600 font-medium">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="font-medium">{step.title}</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                    <code>{step.code}</code>
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 相关资源 */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">相关资源</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: '示例项目',
                            description: '浏览完整的示例项目，快速理解平台功能',
                            icon: Book
                        },
                        {
                            title: 'API参考',
                            description: '详细的API文档，包含所有接口说明',
                            icon: Code
                        }
                    ].map((resource) => {
                        const Icon = resource.icon
                        return (
                            <a
                                key={resource.title}
                                href="#"
                                className="flex items-start p-6 border border-gray-200 rounded-xl hover:border-purple-600 transition-colors"
                            >
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mr-4">
                                    <Icon className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{resource.title}</h3>
                                    <p className="text-gray-600 text-sm">{resource.description}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </section>
        </div>
    )
} 