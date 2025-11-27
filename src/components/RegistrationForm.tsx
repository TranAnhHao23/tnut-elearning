'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { getUTMParamsFromStorage } from "@/lib/utm";

interface RegistrationFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        program: '',
    });
    const [phoneError, setPhoneError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            // Remove non-digit characters
            const cleaned = value.replace(/\D/g, '');

            // Check if the cleaned phone number starts with '0'
            if (cleaned.length > 0 && cleaned[0] !== '0') {
                setPhoneError('Số điện thoại bắt đầu bằng 0');
            } else {
                setPhoneError('');
            }

            setFormData(prev => ({
                ...prev,
                [name]: cleaned
            }));
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (phoneError) return;

        console.log('Form submitted:', formData);
        const utmParams = getUTMParamsFromStorage();
        console.log('UTM Parameters:', utmParams);

        const requestData = {
            agentCode: "ECS",
            studentName: formData.fullName,
            phoneNumber: formData.phone,
            email: formData.email,
            educationLevel: "",
            desiredSchool: "DHKTCNTN", // Adapted for DHKTCNTN
            desiredMajor: formData.program,
            registerSource: "elearning-tnut.edu.vn", // Adapted source
            utm_source: utmParams.utm_source,
            utm_medium: utmParams.utm_medium,
            utm_campaign: utmParams.utm_campaign,
        }

        fetch("https://server.e-class.edu.vn/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        // Reset form and close modal
        setFormData({
            fullName: '',
            phone: '',
            email: '',
            program: '',
        });
        onClose();

        // Show success message
        router.push('/thanh-cong');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={20} />
                </button>

                <h2 className="mb-2 bg-[#0056b3] p-3 text-center text-xl font-bold text-white">
                    Đăng ký nhận tư vấn
                </h2>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block font-medium text-gray-700">
                            Họ và Tên <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#0056b3] focus:outline-none focus:ring-1 focus:ring-[#0056b3]"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block font-medium text-gray-700">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#0056b3] focus:outline-none focus:ring-1 focus:ring-[#0056b3]"
                            maxLength={11}
                        />
                        {phoneError && (
                            <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#0056b3] focus:outline-none focus:ring-1 focus:ring-[#0056b3]"
                        />
                    </div>

                    <div>
                        <label htmlFor="program" className="block font-medium text-gray-700">
                            Ngành học <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="program"
                            name="program"
                            required
                            value={formData.program}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#0056b3] focus:outline-none focus:ring-1 focus:ring-[#0056b3]"
                        >
                            <option value="">Chọn ngành học</option>
                            <option value="Kỹ Thuật Máy Tính">Kỹ thuật máy tính</option>
                            <option value="Ngôn Ngữ Anh">Ngôn ngữ Anh</option>
                            <option value="Kỹ thuật xây dựng">Kỹ thuật xây dựng</option>
                            <option value="Quản Lý Công Nghiệp">Quản lý công nghiệp</option>
                            <option value="Kinh Tế Công Nghiệp">Kinh tế công nghiệp</option>
                        </select>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#0056b3] py-2 font-semibold text-white transition-colors hover:bg-opacity-90"
                        >
                            Đăng ký
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center text-xs text-gray-500">
                    <p>Đăng ký để nhận thông tin về lịch học và chi tiết chương trình</p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
