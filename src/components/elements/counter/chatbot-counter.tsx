"use client";

import { useRef, useCallback, useMemo, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { ReactFlow, Node, Edge, Controls, Background, useNodesState, useEdgesState, addEdge, Connection, Handle, Position, ConnectionMode } from 'reactflow';

// context
import { useContact } from "@/context/contact.context";
import 'reactflow/dist/style.css';

// React Icons
import { PiMicrophoneLight } from "react-icons/pi";
import { SlGraph } from "react-icons/sl";
import { GiMagnifyingGlass, GiMedicines } from "react-icons/gi";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { DiGoogleAnalytics } from "react-icons/di";
import { BsGraphUp } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaBrainSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { PiGraph } from "react-icons/pi";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { delayTime2 } from "@/lib/helper/delayTime";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type AppType = {
  enable: boolean;
  title: string;
  details: string;
  image: string;
  app_shape: string;
  buttons: {
    image: string;
    link: string;
  }[];
};

type Props = {
  counter: {
    data: {
      title: string;
      details: string;
      apps: AppType;
      counters: {
        number: number;
        unit: string;
        text: string;
      }[];
      shape1_img: string;
    };
  };
};

// Left Side Node Component (output handle on right)
const LeftNode = ({ data }: { data: any }) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'clinical-trial':
        return <GiMedicines size={48} className="text-blue-600" />;
      case 'tender-analyzer':
        return <HiDocumentMagnifyingGlass size={48} className="text-blue-600" />;
      case 'dashboard-generation':
        return <DiGoogleAnalytics size={48} className="text-blue-600" />;
      default:
        return <div className="text-3xl">📊</div>;
    }
  };

  return (
    <div
      className="custom-node bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 min-w-[220px] overflow-hidden relative cursor-pointer"
      onClick={() => data.onButtonClick && data.onButtonClick(data.title)}
    >
      <Handle type="source" position={Position.Right} className="invisible" />

      {/* Header with title */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b border-blue-200">
        <h3 className="text-sm font-bold text-blue-800 text-center leading-tight">{data.title}</h3>
      </div>

      {/* Body with icon */}
      <div className="p-4 flex justify-center items-center min-h-[80px]">
        {getIcon(data.iconType)}
      </div>

      {/* Learn More Button Section */}
      <div className="px-4 pb-4 flex justify-center">
        <div className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-md transition-colors duration-200 shadow-sm font-medium">
          Learn More
        </div>
      </div>
    </div>
  );
};

// Right Side Node Component (output handle on left)
const RightNode = ({ data }: { data: any }) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'demand-forecasting':
        return <BsGraphUp size={48} className="text-blue-600" />;
      case 'conversational-intelligence':
        return <LuBrainCircuit size={48} className="text-blue-600" />;
      case 'sales-tracking':
        return <CiDeliveryTruck size={48} className="text-blue-600" />;
      default:
        return <div className="text-3xl">📊</div>;
    }
  };

  return (
    <div
      className="custom-node bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 min-w-[220px] overflow-hidden relative cursor-pointer"
      onClick={() => data.onButtonClick && data.onButtonClick(data.title)}
    >
      <Handle type="source" position={Position.Left} className="invisible" />

      {/* Header with title */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b border-blue-200">
        <h3 className="text-sm font-bold text-blue-800 text-center leading-tight">{data.title}</h3>
      </div>

      {/* Body with icon */}
      <div className="p-4 flex justify-center items-center min-h-[80px]">
        {getIcon(data.iconType)}
      </div>

      {/* Learn More Button Section */}
      <div className="px-4 pb-4 flex justify-center">
        <div className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-md transition-colors duration-200 shadow-sm font-medium">
          Learn More
        </div>
      </div>
    </div>
  );
};

// Central Cortex360 Node Component
const CortexNode = ({ data }: { data: any }) => {
  return (
    <div className="cortex-node bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg border-4 border-white p-6 min-w-[120px] min-h-[120px] flex items-center justify-center">
      <Handle id="left" type="target" position={Position.Left} className="invisible" />
      <Handle id="right" type="target" position={Position.Right} className="invisible" />

      <div className="text-center">
        <div className="text-xl font-bold">Cortex360</div>
      </div>
    </div>
  );
};

// Modal Portal Component
const ModalPortal = ({ isOpen, onClose, title, nodeData, openContactModal, setIsModalOpen }: { isOpen: boolean; onClose: () => void; title: string; nodeData?: any; openContactModal: () => void; setIsModalOpen: (open: boolean) => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  // Create portal to render modal outside component tree
  const modalElement = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        cursor: 'pointer'
      }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-2xl lg:max-w-3xl max-h-[95vh] sm:max-h-[85vh] overflow-y-auto p-4 sm:p-6"
        style={{
          cursor: 'default'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 pr-4 leading-tight">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold hover:bg-gray-100 p-1.5 sm:p-2 rounded-full transition-colors duration-200 flex-shrink-0"
          >
            ×
          </button>
        </div>

        {nodeData ? (
          <div className="space-y-4 sm:space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              {(() => {
                const iconSize = 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20';
                switch (nodeData.title) {
                  case 'Clinical Trial Setup: The Hidden Burden':
                    return <GiMedicines className={`${iconSize} text-blue-600`} />;
                  case 'AI-Assisted Tender Analyzer':
                    return <HiDocumentMagnifyingGlass className={`${iconSize} text-blue-600`} />;
                  case 'Natural Language Dashboard Generated':
                    return <DiGoogleAnalytics className={`${iconSize} text-blue-600`} />;
                  case 'Advanced Demand & Inventory Forecasting':
                    return <BsGraphUp className={`${iconSize} text-blue-600`} />;
                  case 'Conversational Data Intelligence':
                    return <LuBrainCircuit className={`${iconSize} text-blue-600`} />;
                  case 'Intelligent Secondary Sales Tracking':
                    return <CiDeliveryTruck className={`${iconSize} text-blue-600`} />;
                  default:
                    return <div className="text-4xl sm:text-5xl md:text-6xl">📊</div>;
                }
              })()}
            </div>

            {/* Description */}
            <div className="text-gray-600">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">{nodeData.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Key Features</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {nodeData.keyFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0 mt-0.5">•</span>
                    <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Benefits</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {nodeData.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 justify-end">
              {nodeData.buttons.map((button: any, index: number) => (
                <button
                  key={index}
                  onClick={() => {
                    if (button.text === 'Book a Demo!') {
                      openContactModal();
                      setIsModalOpen(false);
                    }
                  }}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors duration-200 ${index === 0
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-gray-600 mb-4 sm:mb-6">
            <p className="text-sm sm:text-base leading-relaxed">This is a detailed view for {title}. Here you can add more information about this feature, including:</p>
            <ul className="list-disc list-inside mt-2 sm:mt-3 space-y-1 text-sm sm:text-base">
              <li>Detailed feature description</li>
              <li>Technical specifications</li>
              <li>Use cases and benefits</li>
              <li>Integration options</li>
              <li>Pricing information</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  // Use createPortal to render modal to document.body
  if (typeof document !== 'undefined') {
    return ReactDOM.createPortal(modalElement, document.body);
  }

  return null;
};

// Define nodeTypes outside component to prevent recreation
const nodeTypes = {
  left: LeftNode,
  right: RightNode,
  cortex: CortexNode,
};

const ChatbotCounter = ({ counter }: Props) => {
  const { title, details, apps, counters, shape1_img } = counter.data;

  const containerRef = useRef<HTMLDivElement>(null!);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>('');
  const { openContactModal } = useContact();

  const handleNodeButtonClick = (nodeTitle: string) => {
    setSelectedNode(nodeTitle);
    setIsModalOpen(true);
  };

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  // Define nodes data
  const initialNodes: Node[] = useMemo(() => [
    // Central Cortex360 node
    {
      id: 'cortex360',
      type: 'cortex',
      position: { x: 600, y: 300 },
      data: { title: 'Cortex360', icon: '🧠', description: 'Central AI Hub' },
    },
    // Left side nodes (output handle on right)
    {
      id: 'clinical-trial',
      type: 'left',
      position: { x: 50, y: 80 },
      data: {
        title: 'Clinical Trial Setup: The Hidden Burden',
        iconType: 'clinical-trial',
        description: 'Automate the creation of clinical trial CRF forms, ALS, edit checks and visit schedules directly from protocols.',
        onButtonClick: handleNodeButtonClick,
        fullData: {
          title: 'Clinical Trial Setup: The Hidden Burden',
          description: 'Automate the creation of clinical trial CRF forms, ALS, edit checks and visit schedules directly from protocols.',
          keyFeatures: [
            'NLP-based extraction of fields and dependencies from protocols',
            'Supports Medidata Rave, Openclinica, Veeva & other EDC formats'
          ],
          benefits: [
            'Reduces manual efforts by 80%',
            'Eliminates compliance errors in form creation'
          ],
          buttons: [
            // { text: 'Generate Sample CRF', action: 'generate-crf' },
            { text: 'Book a Demo!', action: 'automate' }
          ],
          image: '/assets/imgs/pharma/clinical_trial_logo.png'
        }
      },
    },
    {
      id: 'tender-analyzer',
      type: 'left',
      position: { x: 20, y: 280 },
      data: {
        title: 'AI-Assisted Tender Analyzer',
        iconType: 'tender-analyzer',
        description: 'Automate tender reviews and risk detection by matching with current portfolio to boost speed, accuracy, and revenue, empowering procurement teams to win more business with less effort.',
        onButtonClick: handleNodeButtonClick,
        fullData: {
          title: 'AI-Assisted Tender Analyzer',
          description: 'Automate tender reviews and risk detection by matching with current portfolio to boost speed, accuracy, and revenue, empowering procurement teams to win more business with less effort.',
          keyFeatures: [
            'Instantly scan and summarize hundreds of pages per tender',
            'Auto-match tender needs & requirements with your product portfolio',
            'Real-time dashboards highlight opportunities and risks with product fit score'
          ],
          benefits: [
            'Saves days of manual review and reduces errors',
            'Captures more revenue by responding faster and smarter',
            'Levels the playing field against data-driven competitors'
          ],
          buttons: [
            // { text: 'View sample summary card for a tender', action: 'view-sample' },
            { text: 'Book a Demo!', action: 'automate' }
          ],
          image: '/assets/imgs/pharma/tender_analyzer_logo.png'
        }
      },
    },
    {
      id: 'dashboard-generation',
      type: 'left',
      position: { x: 50, y: 480 },
      data: {
        title: 'Natural Language Dashboard Generated',
        iconType: 'dashboard-generation',
        description: 'Automate analytics with dashboards you can build and explain in plain English - no technical barriers, just instant answers and insights.',
        onButtonClick: handleNodeButtonClick,
        fullData: {
          title: 'Natural Language Dashboard Generated',
          description: 'Automate analytics with dashboards you can build and explain in plain English - no technical barriers, just instant answers and insights.',
          keyFeatures: [
            'Create dashboards instantly using natural language queries',
            'Every chart includes AI-generated insights explaining what and why',
            'Drag, resize, and fully customize dashboards with a flexible canvas'
          ],
          benefits: [
            'Accelerates decision-making with instant, story-rich analytics',
            'No coding or technical expertise required',
            'Uncover root causes behind every metric for deeper understanding'
          ],
          buttons: [
            // { text: 'View sample', action: 'view-sample' },
            { text: 'Book a Demo!', action: 'automate' }
          ],
          image: '/assets/imgs/pharma/dashboard_generation_logo.png'
        }
      },
    },
    // Right side nodes (output handle on left)
    {
      id: 'demand-forecasting',
      type: 'right',
      position: { x: 1000, y: 80 },
      data: {
        title: 'Advanced Demand & Inventory Forecasting',
        iconType: 'demand-forecasting',
        description: 'Manual, outdated planning methods lead to expired stock, dead stock, lost sales, and missed market signals-costing pharmacies millions every year.',
        onButtonClick: handleNodeButtonClick,
        fullData: {
          title: 'Advanced Demand & Inventory Forecasting',
          description: 'Manual, outdated planning methods lead to expired stock, dead stock, lost sales, and missed market signals-costing pharmacies millions every year.',
          keyFeatures: [
            'Quickly identifies excess, expiring, or missing inventory using real-time data',
            'Flags market shifts and demand trends missed by traditional models',
            'Highlights lost revenue and operational inefficiencies'
          ],
          benefits: [
            'Cuts dead stock and revenue loss dramatically',
            'Helps teams move from reactive to proactive planning',
            'Reduces manual effort and error'
          ],
          buttons: [
            // { text: 'View Sample', action: 'view-sample' },
            { text: 'Book a Demo!', action: 'automate' }
          ],
          image: '/assets/imgs/pharma/inventory_forecasting_logo.png'
        }
      },
    },
    {
      id: 'conversational-intelligence',
      type: 'right',
      position: { x: 1100, y: 280 },
      data: {
        title: 'Conversational Data Intelligence',
        iconType: 'conversational-intelligence',
        description: 'Explore and analyze all your data, structured or unstructured, instantly through a chat interface, with insights delivered in plain English for everyone on your team.',
        onButtonClick: handleNodeButtonClick,
        fullData: {
          title: 'Conversational Data Intelligence',
          description: 'Explore and analyze all your data, structured or unstructured, instantly through a chat interface, with insights delivered in plain English for everyone on your team.',
          keyFeatures: [
            'Natural language chat for querying any data, no technical skills needed',
            'Seamless access to all data types and sources',
            'Real-time, interactive answers and deep-dive analysis'
          ],
          benefits: [
            'Instant insights, without waiting for analysts',
            'Empowers every user to explore and understand data',
            'Unlocks hidden knowledge and drives smarter decisions'
          ],
          buttons: [
            // { text: 'Experience Bot!', action: 'experience-bot' },
            { text: 'Book a Demo!', action: 'automate' }
          ],
          image: '/assets/imgs/pharma/data_intelligence_logo.png'
        }
      },
    },
    {
      id: 'sales-tracking',
      type: 'right',
      position: { x: 1000, y: 480 },
      data: {
        title: 'Intelligent Secondary Sales Tracking',
        iconType: 'sales-tracking',
        description: 'Automate downstream sales data collection, unification, and compliance reporting for clear, real-time visibility into your distribution network.',
        onButtonClick: handleNodeButtonClick,
        fullData: {
          title: 'Intelligent Secondary Sales Tracking',
          description: 'Automate downstream sales data collection, unification, and compliance reporting for clear, real-time visibility into your distribution network.',
          keyFeatures: [
            'Automatic ingestion and normalization of sales data from all distributor systems',
            'Real-time dashboards showing distributor-to-retailer sales patterns and product movement',
            'AI-powered data reconciliation for instant, accurate matching of primary and secondary sales'
          ],
          benefits: [
            'Eliminates manual reconciliation, save days of effort per cycle',
            'Ensures up-to-date, actionable sales intelligence',
            'Reduces compliance risk with traceable, audit-ready reporting'
          ],
          buttons: [
            // { text: 'View Secondary Sales Report', action: 'view-report' },
            { text: 'Book a Demo!', action: 'automate' }
          ],
          image: '/assets/imgs/pharma/secondary_sales_logo.png'
        }
      },
    },
  ], []);

  // Define edges connecting all nodes to Cortex360
  const initialEdges: Edge[] = useMemo(() => [
    // Left side nodes connect to left side of Cortex360
    {
      id: 'e1',
      source: 'clinical-trial',
      sourceHandle: null,
      target: 'cortex360',
      targetHandle: 'left',
      type: 'default',
      animated: true,
      style: {
        stroke: '#6366f1',
        strokeWidth: 3,
        strokeDasharray: '10,5',
        strokeDashoffset: 0,
        animation: 'neonFlow 2s linear infinite'
      },
      className: 'neon-edge-blue'
    },
    {
      id: 'e3',
      source: 'dashboard-generation',
      sourceHandle: null,
      target: 'cortex360',
      targetHandle: 'left',
      type: 'default',
      animated: true,
      style: {
        stroke: '#ec4899',
        strokeWidth: 3,
        strokeDasharray: '10,5',
        strokeDashoffset: 0,
        animation: 'neonFlow 2s linear infinite 0.3s'
      },
      className: 'neon-edge-pink'
    },
    {
      id: 'e5',
      source: 'tender-analyzer',
      sourceHandle: null,
      target: 'cortex360',
      targetHandle: 'left',
      type: 'default',
      animated: true,
      style: {
        stroke: '#10b981',
        strokeWidth: 3,
        strokeDasharray: '10,5',
        strokeDashoffset: 0,
        animation: 'neonFlow 2s linear infinite 0.6s'
      },
      className: 'neon-edge-green'
    },
    // Right side nodes connect to right side of Cortex360
    {
      id: 'e2',
      source: 'demand-forecasting',
      sourceHandle: null,
      target: 'cortex360',
      targetHandle: 'right',
      type: 'default',
      animated: true,
      style: {
        stroke: '#8b5cf6',
        strokeWidth: 3,
        strokeDasharray: '10,5',
        strokeDashoffset: 0,
        animation: 'neonFlow 2s linear infinite 0.9s'
      },
      className: 'neon-edge-purple'
    },
    {
      id: 'e4',
      source: 'sales-tracking',
      sourceHandle: null,
      target: 'cortex360',
      targetHandle: 'right',
      type: 'default',
      animated: true,
      style: {
        stroke: '#06b6d4',
        strokeWidth: 3,
        strokeDasharray: '10,5',
        strokeDashoffset: 0,
        animation: 'neonFlow 2s linear infinite 1.2s'
      },
      className: 'neon-edge-cyan'
    },
    {
      id: 'e6',
      source: 'conversational-intelligence',
      sourceHandle: null,
      target: 'cortex360',
      targetHandle: 'right',
      type: 'default',
      animated: true,
      style: {
        stroke: '#f59e0b',
        strokeWidth: 3,
        strokeDasharray: '10,5',
        strokeDashoffset: 0,
        animation: 'neonFlow 2s linear infinite 1.5s'
      },
      className: 'neon-edge-orange'
    },
  ], []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <section className="w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3rem] mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem]">
      <div className="w-full text-[12px] sm:text-[14px] md:text-[16px] has_fade_anim" ref={containerRef}>
        <div className="grid grid-cols-1 2xl:grid-cols-1">
          <div className="bg-sec_bg-2 rounded-theme flex flex-col justify-start py-[2rem] sm:py-[3rem] md:py-[4rem] lg:py-[5rem] xl:py-[6rem] w-full max-w-none mx-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] 2xl:min-h-[700px]">
            <TitleSection2
              title={title}
              details={details}
              html
              titleClassName="w-full flex justify-center text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[55px] leading-[1.16] has_fade_anim px-2 sm:px-3 md:px-4"
              detailsClassName="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center mt-[0.5rem] sm:mt-[1rem] md:mt-[1.5rem] lg:mt-[2rem] xl:mt-[2.5rem] 2xl:mt-[3rem] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto has_fade_anim w-full px-2 sm:px-3 md:px-4"
            />

            {/* Mobile Cards Layout */}
            <div className="block md:hidden mt-[2rem] sm:mt-[2.5rem] space-y-4">
              {/* Cortex360 Central Card */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-2 !text-white">Cortex360</h3>
                <p className="text-sm opacity-90 !text-white">Central AI Hub connecting all solutions</p>
              </div>

              {/* Solution Cards Grid */}
              <div className="grid grid-cols-1 gap-4">
                {initialNodes.filter(node => node.id !== 'cortex360').map((node) => {
                  const nodeData = node.data;
                  const getIcon = (iconType: string) => {
                    switch (iconType) {
                      case 'clinical-trial':
                        return <GiMedicines size={32} className="text-blue-600" />;
                      case 'tender-analyzer':
                        return <HiDocumentMagnifyingGlass size={32} className="text-blue-600" />;
                      case 'dashboard-generation':
                        return <DiGoogleAnalytics size={32} className="text-blue-600" />;
                      case 'demand-forecasting':
                        return <BsGraphUp size={32} className="text-blue-600" />;
                      case 'conversational-intelligence':
                        return <LuBrainCircuit size={32} className="text-blue-600" />;
                      case 'sales-tracking':
                        return <CiDeliveryTruck size={32} className="text-blue-600" />;
                      default:
                        return <div className="text-2xl">📊</div>;
                    }
                  };

                  return (
                    <div
                      key={node.id}
                      onClick={() => handleNodeButtonClick(nodeData.title)}
                      className="bg-white rounded-lg shadow-lg border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b border-blue-200">
                        <h3 className="text-sm font-bold text-blue-800 text-center leading-tight">{nodeData.title}</h3>
                      </div>

                      {/* Body */}
                      <div className="p-4">
                        <div className="flex items-center justify-center mb-3">
                          {getIcon(nodeData.iconType)}
                        </div>
                        <p className="text-xs text-gray-600 text-center leading-relaxed mb-4">
                          {nodeData.description && nodeData.description.length > 120
                            ? `${nodeData.description.substring(0, 120)}...`
                            : nodeData.description || 'AI-powered solution for healthcare and pharmaceutical industries.'}
                        </p>
                        <div className="flex justify-center">
                          <div className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-md transition-colors duration-200 shadow-sm font-medium">
                            Learn More
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop/Tablet Canvas Layout */}
            <div className="hidden md:block network-container mt-[2rem] sm:mt-[2.5rem] md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[4rem] relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl md:rounded-xl overflow-hidden">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.1 }}
                attributionPosition="bottom-right"
                className="react-flow-container"
                defaultEdgeOptions={{
                  type: 'default',
                  animated: true,
                  style: { strokeWidth: 3 }
                }}
                connectOnClick={false}
                connectionMode={ConnectionMode.Strict}
                panOnDrag={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                preventScrolling={false}
                nodesDraggable={true}
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
                proOptions={{ hideAttribution: true }}
                minZoom={0.5}
                maxZoom={1.5}
                defaultViewport={{ x: 0, y: 0, zoom: 1 }}
              >
                <Background color="#e5e7eb" gap={20} />
              </ReactFlow>
            </div>

            {/* <div className="mb-[10px] md:mb-[60px]">
              <div className="mt-[3px] has_fade_anim">
                {apps.buttons && apps.buttons.length && (
                  <div className="mt-[32px]">
                    {apps.buttons.map((item, i) => (
                      <div
                        key={`apps_button-${i}`}
                        className="mt-[20px] first:mt-0"
                      >
                        Button content can be added here if needed
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div> */}
          </div>

          {/* <div className="flex flex-wrap gap-[20px] rounded-theme w-full md:w-[700px] lg:w-[785px] mx-auto relative justify-center lg:justify-between z-[1]">
            Counter section can be added here if needed
          </div> */}
        </div>
      </div>

      {/* Modal Portal */}
      {isModalOpen && typeof document !== 'undefined' && (
        <ModalPortal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedNode}
          nodeData={nodes.find(node => node.data.title === selectedNode)?.data.fullData}
          openContactModal={openContactModal}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <style jsx global>{`
        .react-flow-container {
          background: transparent !important;
        }
        
        .react-flow__viewport {
          pointer-events: none !important;
        }
        
        .react-flow__pane {
          pointer-events: none !important;
        }
        
        .react-flow__node {
          cursor: pointer;
          pointer-events: auto !important;
          will-change: transform;
          transform: translateZ(0);
        }
        
        .react-flow__node:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
        
        /* Optimize dragging performance for all nodes */
        .react-flow__node.react-flow__node-dragging {
          transition: none !important;
          will-change: transform;
          transform: translateZ(0);
          cursor: grabbing;
        }
        
        .react-flow__edge-path {
          stroke-dasharray: 10,5;
          animation: neonFlow 2s linear infinite;
        }
        
        /* Edge specific styles */
        .neon-edge-blue .react-flow__edge-path {
          stroke: #6366f1 !important;
          animation: neonFlow 2s linear infinite;
        }
        
        .neon-edge-pink .react-flow__edge-path {
          stroke: #ec4899 !important;
          animation: neonFlow 2s linear infinite 0.3s;
        }
        
        .neon-edge-green .react-flow__edge-path {
          stroke: #10b981 !important;
          animation: neonFlow 2s linear infinite 0.6s;
        }
        
        .neon-edge-purple .react-flow__edge-path {
          stroke: #8b5cf6 !important;
          animation: neonFlow 2s linear infinite 0.9s;
        }
        
        .neon-edge-cyan .react-flow__edge-path {
          stroke: #06b6d4 !important;
          animation: neonFlow 2s linear infinite 1.2s;
        }
        
        .neon-edge-orange .react-flow__edge-path {
          stroke: #f59e0b !important;
          animation: neonFlow 2s linear infinite 1.5s;
        }
        
        .react-flow__controls {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .react-flow__controls button {
          border-radius: 4px;
          color: #374151;
        }
        
        .react-flow__controls button:hover {
          background-color: #f3f4f6;
        }
        
        @keyframes neonFlow {
          0% {
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -15;
            opacity: 0.8;
          }
        }
        

        
        .custom-node {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 2px solid #e5e7eb;
        }
        
        .custom-node::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }
        
        .custom-node:hover {
          border-color: #6366f1;
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1), 
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            0 0 20px rgba(99, 102, 241, 0.3),
            0 0 40px rgba(99, 102, 241, 0.1);
          animation: floatUpDown 2s ease-in-out infinite;
        }
        
        .custom-node:hover::before {
          left: 100%;
        }
        
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(-2px);
            box-shadow: 
              0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04),
              0 0 20px rgba(99, 102, 241, 0.3),
              0 0 40px rgba(99, 102, 241, 0.1);
          }
          50% {
            transform: translateY(-8px);
            box-shadow: 
              0 25px 30px -5px rgba(0, 0, 0, 0.15), 
              0 15px 15px -5px rgba(0, 0, 0, 0.06),
              0 0 30px rgba(99, 102, 241, 0.5),
              0 0 60px rgba(99, 102, 241, 0.2);
          }
        }
        
        .cortex-node {
          transition: all 0.3s ease;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Optimize dragging performance */
        .cortex-node.react-flow__node-dragging {
          transition: none;
          will-change: transform;
          transform: translateZ(0);
        }
        
        /* Modal specific styles */
        .modal-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 9999 !important;
          background: rgba(0, 0, 0, 0.5) !important;
          cursor: pointer !important;
          overflow: hidden !important;
        }
        
        .modal-content {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          z-index: 10000 !important;
          background: white !important;
          border-radius: 8px !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          max-width: 500px !important;
          width: calc(100% - 40px) !important;
          max-height: 80vh !important;
          overflow-y: auto !important;
          cursor: default !important;
          pointer-events: auto !important;
        }
      `}</style>
    </section>
  );
};

export default ChatbotCounter;
