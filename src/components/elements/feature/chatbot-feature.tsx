"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// context
import { useContact } from "@/context/contact.context";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { markdownify } from "@/lib/helper/convert";
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import Title1 from "@/components/shared/title/title1";

// Sample data for the chart - Store Performance Analysis
const chartData = [
  { metric: 'Unique Drugs', highPerformers: 367, lowPerformers: 112, unit: 'x10' },
  { metric: 'Revenue/Patient', highPerformers: 209, lowPerformers: 206, unit: '$' },
  { metric: 'Inventory Qty', highPerformers: 362, lowPerformers: 125, unit: 'x100' },
  { metric: 'Bills', highPerformers: 161, lowPerformers: 28, unit: 'x100' },
  { metric: 'Store Manager %', highPerformers: 100, lowPerformers: 50, unit: '%' },
];

type Props = {
  feature: {
    data: {
      // title: string;
      // title2: string;
      image: string;
      title3: string;
      details: string;
      image1: string;
      image2: string;
      items: string[];
      subtitle: string;
      subtitle1: string;
      subtitle2: string;
      subtitle3: string;
      subtitle4: string;
      subtitle5: string;
      feature_items: {
        icon: string;
        text: string;
      }[];
      action_btn: ActionBtnType;
    };
  };
};

const ChatbotFeature = ({ feature }: Props) => {
  const { image, title3, details, image1, image2, items, subtitle, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5, feature_items, action_btn } =
    feature.data;

  const containerRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLButtonElement>(null!);
  const [searchQuery, setSearchQuery] = useState("Analyse the high-performing and low-performing stores in terms of revenue. Identify the key success factors present in the high-revenue stores that are missing in the low-revenue ones and could potentially be adopted to enhance their performance.");
  const { openContactModal } = useContact();

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  // Trigger bubble animation periodically
  useEffect(() => {
    const triggerBubbles = () => {
      if (buttonRef.current) {
        buttonRef.current.classList.add('animate');
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.classList.remove('animate');
          }
        }, 750);
      }
    };

    // Initial delay, then repeat every 6 seconds
    const timer = setTimeout(() => {
      triggerBubbles();
      const interval = setInterval(triggerBubbles, 6000);
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem]"
      ref={containerRef}
    >
      <div className="bg-sec_bg-2 w-full rounded-theme pt-[1rem] sm:pt-[1.5rem] md:pt-[2rem] lg:pt-[2.5rem] xl:pt-[3rem] px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] pb-[2rem] sm:pb-[2.5rem] md:pb-[3rem] lg:pb-[3.5rem] xl:pb-[4rem] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] sec_space_bottom2">
        {/* Top Title Image (full width) */}
        <div className="w-full flex justify-center mb-6 sm:mb-8 md:mb-10 mt-4 sm:mt-6 md:mt-8">
          {/* Slogan Component */}
          <div className="text-center max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[950px]">
            {/* Top Line */}
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-medium text-black mb-2 sm:mb-3 md:mb-4 drop-shadow-sm leading-tight">
              From Questions to Insights
            </h2>

            {/* Bottom Line */}
            <div className="relative">
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-medium mb-2 sm:mb-3 drop-shadow-sm leading-tight">
                <span className="text-[#1A283C]">Don't guess it- </span>
                <span className="text-[#F08060] animate-slide-in-left font-bold">Just Cortex it !</span>
              </h3>

              {/* Underline */}
              <div className="w-full h-0.5 bg-[#F08060] mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="text-center">
          {/* Title3 directly below top image */}
          <Title1 text={title3} className="text-[14px] sm:text-[16px] md:text-[18px] font-bold !font-bold mb-4 sm:mb-5 md:mb-6 text-center" />
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-gray-700 mb-4 sm:mb-5 md:mb-6 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto px-2 sm:px-4">{details}</p>

          {items && items.length > 0 && (
            <div className="space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-4">
              {items.map((item, i) => {
                // Split the text to apply orange color to "In Minutes"
                const parts = item.split('In Minutes.');
                if (parts.length > 1) {
                  return (
                    <p key={i} className="text-center text-[12px] sm:text-[14px] md:text-[16px]">
                      {parts[0]}
                      <span className="text-orange-500 font-bold">In Minutes.</span>
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className="[&>span]:font-bold [&>span]:text-primary text-[12px] sm:text-[14px] md:text-[16px]"
                    dangerouslySetInnerHTML={markdownify(item)}
                  />
                );
              })}
            </div>
          )}
        </div>
        {/* Query Analysis Container - Groups all three sections together */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10 mt-3 sm:mt-4 p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-blue-200 shadow-lg">
          {/* Container Header */}
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-xl font-bold text-blue-800 mb-1 sm:mb-2">AI Query Analysis</h3>
            <p className="text-[10px] sm:text-[12px] md:text-sm text-blue-600">Complete analysis from question to insights</p>
          </div>

          {/* 1. Query Box */}
          <div className="w-full mb-4 sm:mb-5 md:mb-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-md border border-blue-100">
              <div className="space-y-2 sm:space-y-3">
                  <div className="flex-1">
                  <textarea
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none leading-relaxed text-[12px] sm:text-[14px] md:text-[16px]"
                      placeholder="Ask a question..."
                    rows={2}
                    />
                  </div>
                <div className="flex justify-end">
                  <button
                    ref={buttonRef}
                    className="bg-orange-500 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-orange-600 transition-colors animate-button-click text-[12px] sm:text-[14px] md:text-[16px]"
                  >
                    Cortex it!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Insights and Graph Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full">
            {/* Left: Insights */}
            <div className="bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-md text-left">
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Analysis of High-Performing vs. Low-Performing Stores</h3>

              <h4 className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-gray-700 mb-2 sm:mb-3">Key Performance Metrics</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-[8px] sm:text-[10px] md:text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-semibold text-gray-700">Metric</th>
                      <th className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-semibold text-gray-700">High Performers</th>
                      <th className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-semibold text-gray-700">Low Performers</th>
                      <th className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-semibold text-gray-700">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-medium">Unique Drugs</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-green-600 font-semibold">3,670</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-red-600 font-semibold">1,120</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-blue-600 font-semibold">+228%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-medium">Revenue/Patient</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-green-600 font-semibold">$209</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-red-600 font-semibold">$206</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-blue-600 font-semibold">+1.5%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-medium">Inventory Qty</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-green-600 font-semibold">36,200</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-red-600 font-semibold">12,500</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-blue-600 font-semibold">+189%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-medium">Bills</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-green-600 font-semibold">16,100</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-red-600 font-semibold">2,800</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-blue-600 font-semibold">+475%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 font-medium">Store Manager %</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-green-600 font-semibold">100%</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-red-600 font-semibold">50%</td>
                      <td className="text-center py-1 sm:py-1.5 md:py-2 px-2 sm:px-2.5 md:px-3 text-blue-600 font-semibold">+100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-gray-700 mb-2 mt-3 sm:mt-4">Key Success Factors</h4>
              <ul className="text-[8px] sm:text-[10px] md:text-xs space-y-1 text-gray-600">
                <li>• <strong>Product Variety:</strong> High performers offer 228% more unique drugs (3,670 vs 1,120)</li>
                <li>• <strong>Inventory Management:</strong> 189% more inventory items with better variety</li>
                <li>• <strong>Transaction Volume:</strong> High performers process 475% more bills (16,100 vs 2,800)</li>
                <li>• <strong>Store Management:</strong> 100% of high performers have dedicated managers vs 50%</li>
                <li>• <strong>Revenue Efficiency:</strong> Similar revenue per patient ($209 vs $206) but much higher volume</li>
                <li>• <strong>Operational Scale:</strong> High performers operate at 3.2x the scale of low performers</li>
                <li>• <strong>Technology Integration:</strong> 85% of high performers use advanced inventory systems</li>
              </ul>
            </div>

            {/* Right: Chart */}
            <div className="bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-md">
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">Store Performance Comparison</h3>

              {/* Chart Legend */}
              <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded"></div>
                  <span className="font-medium text-gray-700">High Performers</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-red-500 rounded"></div>
                  <span className="font-medium text-gray-700">Low Performers</span>
                </div>
              </div>

              <div className="h-48 sm:h-56 md:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                      dataKey="metric"
                        fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: '#6b7280' }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: '#6b7280', fontSize: 9 }}
                      tickFormatter={(value) => {
                        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
                        return value.toString();
                      }}
                    />
                      <Tooltip
                      formatter={(value, name) => {
                        if (name === 'highPerformers') return [value, 'High Performers'];
                        if (name === 'lowPerformers') return [value, 'Low Performers'];
                        return [value, name];
                      }}
                      labelFormatter={(label) => `Metric: ${label}`}
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar
                      dataKey="highPerformers"
                      fill="#10B981"
                      name="High Performers"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="lowPerformers"
                      fill="#EF4444"
                      name="Low Performers"
                      radius={[4, 4, 0, 0]}
                    />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

              {/* Chart Footer Info */}
              <div className="mt-3 sm:mt-4 text-center text-[8px] sm:text-[10px] md:text-xs text-gray-500">
                <p>Data shows significant performance gaps between high and low performing stores</p>
                </div>
              </div>
            </div>
          </div>

        {/* 4. Subtitle and Complex Queries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
          {/* Left: Subtitle */}
          <div className="flex flex-col justify-center text-left">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#FF845E] !text-[#FF845E] text-left leading-tight">
                {subtitle}
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#FF845E] !text-[#FF845E] text-left leading-tight">
                {subtitle1}
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#FF845E] !text-[#FF845E] text-left leading-tight">
                {subtitle2}
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#FF845E] !text-[#FF845E] text-left leading-tight">
                {subtitle3}
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#FF845E] !text-[#FF845E] text-left leading-tight">
                {subtitle4}
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#FF845E] !text-[#FF845E] text-left leading-tight">
                {subtitle5}
              </h1>
            </div>
          </div>

          {/* Right: Complex Queries Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 has_fade_anim" data-delay="0.6">
            <div className="text-center mb-6 sm:mb-7 md:mb-8">
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">
                Our AI Can Answer Complex Queries Like...
              </h2>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] text-gray-600">
                Custom-fit AI built for healthcare & pharma decision-making
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Sales & Market Mix Insights */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 border border-gray-200 text-left">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-gray-800 mb-2 sm:mb-3">Sales & Market Mix Insights</h3>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-700 leading-relaxed">
                  "Identify Tier-2 city stores where ethical drugs contribute over 65% of total revenue despite being less than 40% of SKUs, and compare 6-month growth rates with generics."
                </p>
              </div>

              {/* Price & Profit Optimization */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 border border-gray-200 text-left">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-gray-800 mb-2 sm:mb-3">Price & Profit Optimization</h3>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-700 leading-relaxed">
                  "Show regions where ethical drugs maintain a &gt;20% price premium over generics yet outsell them in units - reveal demand drivers."
                </p>
              </div>

              {/* Inventory & Supply Chain Analysis */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 border border-gray-200 text-left">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-gray-800 mb-2 sm:mb-3">Inventory & Supply Chain Analysis</h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-700 leading-relaxed">
                    "Identify stores where ethical drugs have higher sell-through rates but suffer 20% more stockouts than generics - recommend inventory reallocation."
                  </p>
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-700 leading-relaxed">
                    "Detect locations where generic overstocking caused expiry losses while ethical drug demand was unmet."
                  </p>
                </div>
              </div>

              {/* Multi-Factor Performance Correlation */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 border border-gray-200 text-left">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-gray-800 mb-2 sm:mb-3">Multi-Factor Performance Correlation</h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-700 leading-relaxed">
                    "Compare ethical vs generic drug sales in stores with in-house pharmacists vs those without, and quantify the operational advantage."
                  </p>
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-700 leading-relaxed">
                    "Correlate ethical drug sales growth with marketing spend in regions with recent awareness campaigns - calculate ROI vs generics."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {action_btn && action_btn.enable && (
          <div className="mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem] has_fade_anim text-center">
            <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold text-black text-center leading-tight">
              Ask. See. Act with <span className="text-[#FF845E] font-bold">AI</span>
            </h2>
            <div className="flex justify-center mt-3 sm:mt-4">
              <button
                onClick={openContactModal}
              className={cn(buttonVariants({ variant: "primary3" }),
                  "border border-border rounded-lg px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-xl font-semibold w-auto"
              )}
            >
              <span className="btn-span uppercase" data-text={action_btn.label}>
                {action_btn.label}
              </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for slide-in animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200px;
          }
          100% {
            background-position: 200px;
          }
        }
        
        .animate-slide-in-left {
          background: linear-gradient(90deg, #F08060 0%, #f7b000 50%, #F08060 100%);
          background-size: 300px 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shine 8s linear infinite;
          filter: drop-shadow(0 0 8px rgba(240, 128, 96, 0.6));
        }
        
        .animate-button-click {
          position: relative;
          transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
          box-shadow: 0 2px 25px rgba(240, 128, 96, 0.5);
          animation: buttonPulse 6s ease-in-out infinite;
        }
        
        .animate-button-click:before, .animate-button-click:after {
          position: absolute;
          content: '';
          display: block;
          width: 140%;
          height: 100%;
          left: -20%;
          z-index: -1000;
          transition: all ease-in-out 0.5s;
          background-repeat: no-repeat;
        }
        
        .animate-button-click:before {
          display: none;
          top: -75%;
          background-image:  
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, transparent 20%, #f08060 20%, transparent 30%),
            radial-gradient(circle, #f08060 20%, transparent 20%), 
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, #f08060 15%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%);
          background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
        }
        
        .animate-button-click:after {
          display: none;
          bottom: -75%;
          background-image:  
            radial-gradient(circle, #f08060 20%, transparent 20%), 
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, #f08060 15%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%),
            radial-gradient(circle, #f08060 20%, transparent 20%);
          background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
        }
        
        @keyframes buttonPulse {
          0%, 70% {
            transform: scale(1);
          }
          75% {
            transform: scale(0.95);
          }
          80% {
            transform: scale(1.05);
          }
          85% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes topBubbles {
          0% {
            background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
          }
          50% {
            background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
          }
          100% {
            background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }
        
        @keyframes bottomBubbles {
          0% {
            background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
          }
          50% {
            background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
          }
          100% {
            background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }
        
        .animate-button-click.animate:before {
          display: block;
          animation: topBubbles ease-in-out 0.75s forwards;
        }
        
        .animate-button-click.animate:after {
          display: block;
          animation: bottomBubbles ease-in-out 0.75s forwards;
        }
      `}</style>
    </section>
  );
};

export default ChatbotFeature;
