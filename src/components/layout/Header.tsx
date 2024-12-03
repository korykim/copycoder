'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useSession, signIn, signOut } from 'next-auth/react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              AI工具目录
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索AI工具..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <ThemeToggle />

            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">{session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  退出
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                登录
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 