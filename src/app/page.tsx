'use client'


import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Star, ArrowRight, Sparkles } from 'lucide-react'

const tools = [
  {
    id: 1,
    title: 'AI图像生成器',
    description: '使用先进的AI技术生成高质量图像',
    image: 'https://picsum.photos/400/300?random=1',
    category: '图像工具',
    rating: 4.8,
    features: ['高清生成', '多风格支持', '批量处理', 'API集成']
  },
  {
    id: 2,
    title: 'AI文本助手',
    description: '智能文本生成和编辑工具',
    image: 'https://picsum.photos/400/300?random=2',
    category: '办公工具',
    rating: 4.6,
    features: ['智能写作', '文本优化', '多语言翻译', '语法检查']
  },
  {
    id: 3,
    title: 'AI视频编辑器',
    description: '一键生成专业级视频内容',
    image: 'https://picsum.photos/400/300?random=3',
    category: '视频工具',
    rating: 4.7,
    features: ['智能剪辑', '特效生成', '字幕制作', '风格迁移']
  }
]

const categories = [
  '图像生成',
  '文本处理',
  '代码助手',
  '视频编辑',
  '语音合成',
  '数据分析'
]

interface Breadcrumb {
  label: string;
  href: string;
}

export default function Home() {
  const breadcrumbs: Breadcrumb[] = []

  return (
    <MainLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://picsum.photos/1200/400?random=0"
            alt="特色横幅"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-transparent">
            <div className="h-full max-w-4xl mx-auto flex items-center px-6">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-6">
                  发现最佳AI工具
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  探索、比较和使用顶级AI工具，提升您的工作效率
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                  立即探索
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">热门分类</h2>
            <button className="text-purple-600 flex items-center hover:underline">
              查看全部 <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="p-4 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors text-center font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Tools */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">推荐工具</h2>
            <button className="text-purple-600 flex items-center hover:underline">
              更多工具 <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm">
                      {tool.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{tool.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    立即使用
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
