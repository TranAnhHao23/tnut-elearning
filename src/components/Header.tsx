'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const navItems = [
        { name: 'Lịch khai giảng', href: '/lich-khai-giang' },
        {
            name: 'Ngành học',
            href: '#',
            dropdown: [
                { name: 'Ngôn ngữ Anh', href: '/nganh/ngon-ngu-anh' },
                { name: 'Kỹ thuật máy tính', href: '/nganh/ky-thuat-may-tinh' },
                { name: 'Xây dựng dân dụng', href: '/nganh/xay-dung-dan-dung' },
                { name: 'Quản lý công nghiệp', href: '/nganh/quan-ly-cong-nghiep' },
                { name: 'Kinh tế công nghiệp', href: '/nganh/kinh-te-cong-nghiep' },
            ],
        },
        {
            name: 'Bài viết',
            href: '#',
            dropdown: [
                { name: 'Tư vấn giáo dục', href: '/chuyen-muc/tin-tuc' },
                { name: 'Tin tức giáo dục', href: '/chuyen-muc/giao-duc' },
            ],
        },
        { name: 'Giới thiệu', href: '/gioi-thieu' },
        { name: 'Liên hệ', href: '/lien-he' },
    ];

    return (
        <header className="sticky top-0 z-40 w-full bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="TNUT Logo"
                        width={300}
                        height={60}
                        className="h-auto w-[200px] sm:w-[300px]"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className="flex items-center text-sm font-semibold text-gray-700 hover:text-[#0056b3] uppercase"
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                            </Link>

                            {/* Dropdown */}
                            {item.dropdown && (
                                <div className="absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-[#0056b3]">
                                    <div className="py-2">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0056b3]"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-700"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="container mx-auto px-4 py-4 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className="flex w-full items-center justify-between py-2 text-sm font-semibold text-gray-700 uppercase"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                size={16}
                                                className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {activeDropdown === item.name && (
                                            <div className="pl-4 space-y-2 bg-gray-50 py-2 rounded">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block py-1 text-sm text-gray-600 hover:text-[#0056b3]"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#0056b3] uppercase"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
