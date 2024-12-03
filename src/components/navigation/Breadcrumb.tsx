'use client'

import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbProps {
    items: Array<{ label: string; href: string }>
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center text-sm">
            <Link
                href="/"
                className="text-gray-500 hover:text-purple-600 flex items-center"
            >
                <Home className="h-4 w-4" />
            </Link>

            {items.map((item, index) => (
                <div key={item.href} className="flex items-center">
                    <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                    {index === items.length - 1 ? (
                        <span className="text-gray-600">{item.label}</span>
                    ) : (
                        <Link
                            href={item.href}
                            className="text-gray-500 hover:text-purple-600"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    )
} 