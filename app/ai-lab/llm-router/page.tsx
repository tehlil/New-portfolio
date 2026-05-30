"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Cpu, 
  Coins, 
  Zap, 
  Activity, 
  Terminal, 
  Play, 
  RotateCcw, 
  Info,
  ChevronRight,
  TrendingDown,
  CheckCircle,
  HelpCircle,
  Database,
  Sliders,
  Sparkles
} from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

// Default pricing config (per 1M tokens)
interface ModelPricing {
  name: string;
  provider: string;
  inputCost: number; // USD per 1M tokens
  outputCost: number; // USD per 1M tokens
  latencyFactor: number; // simulated latency multiplier
  strength: string;
}

const DEFAULT_PRICING: Record<string, ModelPricing> = {
  sonnet: { name: "Claude 3.5 Sonnet", provider: "Anthropic", inputCost: 3.00, outputCost: 15.00, latencyFactor: 1.4, strength: "Coding & Complex Reasoning" },
  gpt4o: { name: "GPT-4o", provider: "OpenAI", inputCost: 2.50, outputCost: 10.00, latencyFactor: 1.1, strength: "Structured Logic & Math" },
  gpt4omini: { name: "GPT-4o Mini", provider: "OpenAI", inputCost: 0.15, outputCost: 0.60, latencyFactor: 0.7, strength: "General Task Efficiency" },
  flash: { name: "Gemini 1.5 Flash", provider: "Google", inputCost: 0.075, outputCost: 0.30, latencyFactor: 0.6, strength: "Speed, Large Context, Summarization" },
};

interface PresetPrompt {
  id: string;
  label: string;
  prompt: string;
  expectedClass: string;
  suggestedModel: string;
  explanation: string;
  mockResponse: string;
}

const PRESET_PROMPTS: PresetPrompt[] = [
  {
    id: "code",
    label: "Code Guard",
    prompt: "Write a TypeScript interface and a type guard for a User object with name, email, and role ('admin' | 'user').",
    expectedClass: "Code Generation",
    suggestedModel: "Claude 3.5 Sonnet",
    explanation: "High complexity programming task. Routed to Claude 3.5 Sonnet for precise type definitions and syntax correctness.",
    mockResponse: `export interface User {\n  name: string;\n  email: string;\n  role: 'admin' | 'user';\n}\n\n// Type guard to validate User at runtime\nexport function isUser(obj: any): obj is User {\n  return (\n    typeof obj === 'object' &&\n    obj !== null &&\n    typeof obj.name === 'string' &&\n    typeof obj.email === 'string' &&\n    (obj.role === 'admin' || obj.role === 'user')\n  );\n}`
  },
  {
    id: "reasoning",
    label: "Logical Math",
    prompt: "If a train leaves Station A at 60 mph and another leaves Station B at 80 mph heading towards each other, and they are 280 miles apart, how long until they meet?",
    expectedClass: "Logical Reasoning",
    suggestedModel: "GPT-4o",
    explanation: "Multi-step mathematical reasoning. Routed to GPT-4o for accurate calculations and formula application.",
    mockResponse: `To find out how long until the trains meet:\n\n1. **Determine Relative Speed**: Since they are traveling towards each other, their speeds add up.\n   Relative Speed = 60 mph + 80 mph = 140 mph.\n\n2. **Apply Distance Formula**: Time = Distance / Speed.\n   Time = 280 miles / 140 mph.\n\n3. **Result**: Time = 2 hours.\n\nThey will meet in exactly **2 hours**.`
  },
  {
    id: "translation",
    label: "Translation",
    prompt: "Translate the following text to Spanish: 'Thank you for contacting customer support. We will get back to you within 24 hours.'",
    expectedClass: "Translation",
    suggestedModel: "GPT-4o Mini",
    explanation: "Linguistic conversion task. Routed to GPT-4o Mini for highly accurate translation at low cost.",
    mockResponse: `"Gracias por ponerse en contacto con el servicio de atención al cliente. Le responderemos en un plazo de 24 horas."`
  },
  {
    id: "summary",
    label: "Summarization",
    prompt: "Summarize this: 'We are excited to announce version 2.4.0 of our framework. This release brings a brand new compiler that improves build speeds by up to 50%, alongside 12 minor bug fixes related to state management and layout rendering. We have also deprecated the old legacy router, which will be completely removed in version 3.0.0.'",
    expectedClass: "Summarization",
    suggestedModel: "Gemini 1.5 Flash",
    explanation: "Text extraction and summary. Routed to Gemini 1.5 Flash to leverage its large context token cost efficiency.",
    mockResponse: `**Release 2.4.0 Highlights:**\n- **Performance:** New compiler increases build speed by up to 50%.\n- **Fixes:** Resolves 12 issues across state management and rendering layouts.\n- **Deprecation:** The legacy router is deprecated and slated for removal in v3.0.0.`
  },
  {
    id: "chat",
    label: "Simple Chat",
    prompt: "Hey! What's the weather like in Tokyo during October?",
    expectedClass: "Conversational / General",
    suggestedModel: "Gemini 1.5 Flash",
    explanation: "General information request. Routed to Gemini 1.5 Flash to minimize cost and deliver a sub-second response.",
    mockResponse: "October is one of the most pleasant times to visit Tokyo. The weather is autumn-like and mild. Average daytime temperatures range from 15°C to 22°C (59°F to 72°F) with low humidity and relatively clear skies, perfect for walking and sightseeing."
  }
];

interface LogEntry {
  timestamp: string;
  prompt: string;
  category: string;
  model: string;
  tokens: { input: number; output: number; total: number };
  costRouted: number;
  costBaseline: number;
  savings: number;
  latency: number;
}

export default function LLMRouterPage() {
  const [prompt, setPrompt] = useState("");
  const [pricing, setPricing] = useState<Record<string, ModelPricing>>(DEFAULT_PRICING);
  const [showConfig, setShowConfig] = useState(false);
  const [routingStep, setRoutingStep] = useState<"idle" | "classifying" | "routing" | "responding" | "done">("idle");
  const [selectedKey, setSelectedKey] = useState<keyof typeof DEFAULT_PRICING>("flash");
  const [classificationScores, setClassificationScores] = useState<{ name: string; score: number }[]>([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [explanation, setExplanation] = useState("");
  const [stats, setStats] = useState({
    totalRequests: 84,
    averageLatency: 450, // ms
    totalBaselineCost: 2.52, // USD
    totalRoutedCost: 0.655, // USD
    savingsPercentage: 74
  });

  const [logs, setLogs] = useState<LogEntry[]>([
    {
      timestamp: "14:48:22",
      prompt: "Refactor this SQL query to optimize join index usage.",
      category: "Code Generation",
      model: "Claude 3.5 Sonnet",
      tokens: { input: 340, output: 480, total: 820 },
      costRouted: 0.0082,
      costBaseline: 0.0057, // baseline is GPT-4o
      savings: -0.0025, // sometimes code generation costs slightly more but maintains accuracy
      latency: 1220
    },
    {
      timestamp: "14:32:05",
      prompt: "What is the capital of Australia?",
      category: "Conversational / General",
      model: "Gemini 1.5 Flash",
      tokens: { input: 12, output: 8, total: 20 },
      costRouted: 0.000003,
      costBaseline: 0.00011,
      savings: 0.000107,
      latency: 380
    },
    {
      timestamp: "14:15:10",
      prompt: "Summarize this PDF contract of 8,000 words.",
      category: "Summarization",
      model: "Gemini 1.5 Flash",
      tokens: { input: 8200, output: 350, total: 8550 },
      costRouted: 0.00072,
      costBaseline: 0.024,
      savings: 0.02328,
      latency: 820
    },
    {
      timestamp: "13:58:44",
      prompt: "Translate 'Welcome to our platform' to French, German, and Italian.",
      category: "Translation",
      model: "GPT-4o Mini",
      tokens: { input: 20, output: 25, total: 45 },
      costRouted: 0.000018,
      costBaseline: 0.0003,
      savings: 0.000282,
      latency: 490
    },
    {
      timestamp: "13:42:01",
      prompt: "Explain the difference between P vs NP in layman terms.",
      category: "Logical Reasoning",
      model: "GPT-4o",
      tokens: { input: 45, output: 280, total: 325 },
      costRouted: 0.0029,
      costBaseline: 0.0029,
      savings: 0.0,
      latency: 980
    }
  ]);

  const [activeTab, setActiveTab] = useState<"playground" | "analytics">("playground");
  const responseEndRef = useRef<HTMLDivElement | null>(null);

  // Dynamic router simulation
  const handleRoutePrompt = (inputPrompt: string) => {
    if (!inputPrompt.trim()) return;

    setRoutingStep("classifying");
    setCurrentResponse("");
    setExplanation("");
    
    // Analyze input text to simulate a realistic classification score
    const text = inputPrompt.toLowerCase();
    let scores = [
      { name: "Code Generation", score: 5 },
      { name: "Logical Reasoning", score: 5 },
      { name: "Translation", score: 5 },
      { name: "Summarization", score: 5 },
      { name: "Conversational / General", score: 5 }
    ];

    let detectedClass = "Conversational / General";
    let selectedModelKey: keyof typeof DEFAULT_PRICING = "flash";

    // Matching criteria
    if (
      text.includes("function") || 
      text.includes("const ") || 
      text.includes("interface") || 
      text.includes("type guard") || 
      text.includes("javascript") || 
      text.includes("typescript") || 
      text.includes("python") || 
      text.includes("code") ||
      text.includes("refactor") ||
      text.includes("script") ||
      text.includes("html")
    ) {
      scores[0].score = 85 + Math.floor(Math.random() * 10);
      scores[4].score = 15;
      detectedClass = "Code Generation";
      selectedModelKey = "sonnet";
    } else if (
      text.includes("train leaves") || 
      text.includes("math") || 
      text.includes("solve") || 
      text.includes("equation") || 
      text.includes("calculate") || 
      text.includes("logic") ||
      text.includes("why did") ||
      text.includes("riddle")
    ) {
      scores[1].score = 80 + Math.floor(Math.random() * 15);
      scores[4].score = 10;
      detectedClass = "Logical Reasoning";
      selectedModelKey = "gpt4o";
    } else if (
      text.includes("translate") || 
      text.includes("to spanish") || 
      text.includes("to french") || 
      text.includes("to german") || 
      text.includes("in spanish") ||
      text.includes("in french")
    ) {
      scores[2].score = 90 + Math.floor(Math.random() * 8);
      scores[4].score = 8;
      detectedClass = "Translation";
      selectedModelKey = "gpt4omini";
    } else if (
      text.includes("summarize") || 
      text.includes("summary") || 
      text.includes("tldr") || 
      text.includes("shorten") ||
      text.includes("release note") ||
      text.length > 500
    ) {
      scores[3].score = 85 + Math.floor(Math.random() * 10);
      scores[4].score = 12;
      detectedClass = "Summarization";
      selectedModelKey = "flash";
    } else {
      scores[4].score = 75 + Math.floor(Math.random() * 20);
      detectedClass = "Conversational / General";
      // Pick flash or mini based on length
      selectedModelKey = text.length > 150 ? "gpt4omini" : "flash";
    }

    // Normalize scores
    const sum = scores.reduce((a, b) => a + b.score, 0);
    scores = scores.map(s => ({ name: s.name, score: Math.round((s.score / sum) * 100) }));
    scores.sort((a, b) => b.score - a.score);
    setClassificationScores(scores);

    // Look for preset prompt response, or generate standard response
    const preset = PRESET_PROMPTS.find(p => p.prompt.toLowerCase() === inputPrompt.toLowerCase());
    const finalResponse = preset ? preset.mockResponse : `[SIMULATED RESPONSE FROM ${DEFAULT_PRICING[selectedModelKey].name}]\n\nProcessed query: "${inputPrompt.substring(0, 40)}${inputPrompt.length > 40 ? '...' : ''}"\n\nThis is a custom prompt parsed dynamically. The system classified this query as "${detectedClass}" and selected ${DEFAULT_PRICING[selectedModelKey].name} based on cost-efficiency filters.`;
    const finalExplanation = preset ? preset.explanation : `Dynamic query analysis tagged this prompt as ${detectedClass}. Selected ${DEFAULT_PRICING[selectedModelKey].name} to achieve the optimal speed/cost balance for this workload class.`;

    // Timeline simulation
    setTimeout(() => {
      setRoutingStep("routing");
      setSelectedKey(selectedModelKey);
      
      setTimeout(() => {
        setRoutingStep("responding");
        setExplanation(finalExplanation);
        
        // Character streaming effect
        let index = 0;
        const interval = setInterval(() => {
          setCurrentResponse(prev => prev + finalResponse[index]);
          index++;
          if (index >= finalResponse.length) {
            clearInterval(interval);
            setRoutingStep("done");

            // Calculate mock pricing statistics for this run
            const inputTokens = Math.round(inputPrompt.length / 4) + 10;
            const outputTokens = Math.round(finalResponse.length / 4) + 15;
            const chosenModel = pricing[selectedModelKey];
            const costRouted = ((inputTokens * chosenModel.inputCost) + (outputTokens * chosenModel.outputCost)) / 1000000;
            
            // Baseline uses standard GPT-4o rates for comparison
            const baselineModel = pricing.gpt4o;
            const costBaseline = ((inputTokens * baselineModel.inputCost) + (outputTokens * baselineModel.outputCost)) / 1000000;
            const savings = costBaseline - costRouted;
            const latency = Math.round((chosenModel.latencyFactor * 400) + Math.random() * 200);

            // Log entry
            const newLog: LogEntry = {
              timestamp: new Date().toTimeString().split(' ')[0],
              prompt: inputPrompt,
              category: detectedClass,
              model: chosenModel.name,
              tokens: { input: inputTokens, output: outputTokens, total: inputTokens + outputTokens },
              costRouted,
              costBaseline,
              savings,
              latency
            };

            setLogs(prev => [newLog, ...prev]);

            // Update running stats
            setStats(prev => {
              const updatedBaseline = prev.totalBaselineCost + costBaseline;
              const updatedRouted = prev.totalRoutedCost + costRouted;
              return {
                totalRequests: prev.totalRequests + 1,
                averageLatency: Math.round(((prev.averageLatency * prev.totalRequests) + latency) / (prev.totalRequests + 1)),
                totalBaselineCost: updatedBaseline,
                totalRoutedCost: updatedRouted,
                savingsPercentage: Math.round(((updatedBaseline - updatedRouted) / updatedBaseline) * 100)
              };
            });
          }
        }, 12);
      }, 1000);
    }, 1000);
  };

  const handlePresetSelect = (p: PresetPrompt) => {
    setPrompt(p.prompt);
    handleRoutePrompt(p.prompt);
  };

  const handleResetStats = () => {
    setStats({
      totalRequests: 0,
      averageLatency: 0,
      totalBaselineCost: 0.0001, // avoid division by zero
      totalRoutedCost: 0,
      savingsPercentage: 0
    });
    setLogs([]);
  };

  const handlePricingChange = (key: string, field: "inputCost" | "outputCost", val: string) => {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setPricing(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          [field]: num
        }
      }));
    }
  };

  // Auto-scroll when streaming response
  useEffect(() => {
    if (responseEndRef.current) {
      responseEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentResponse]);

  // Generate charts data based on logs
  const getSavingsChartData = () => {
    // Return accumulated cost baseline vs routed over last 10 entries (reversed for chronological order)
    let accumRouted = 0;
    let accumBaseline = 0;
    
    return [...logs].slice(0, 10).reverse().map((log, index) => {
      accumRouted += log.costRouted;
      accumBaseline += log.costBaseline;
      return {
        name: `Req ${index + 1}`,
        "Routed Gateway": parseFloat(accumRouted.toFixed(4)),
        "Single Model (GPT-4o)": parseFloat(accumBaseline.toFixed(4))
      };
    });
  };

  const getModelDistributionData = () => {
    const counts: Record<string, number> = {};
    logs.forEach(log => {
      counts[log.model] = (counts[log.model] || 0) + 1;
    });

    return Object.entries(pricing).map(([_, m]) => ({
      name: m.name,
      requests: counts[m.name] || 0
    }));
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#84d8e3"];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col gap-8 min-h-[90vh]">
      {/* Top Navigation & Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[var(--color-border)] pb-6">
        <div>
          <Link href="/ai-lab" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-2">
            <ArrowLeft className="w-4 h-4" /> Back to Lab
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">LLM Routing Layer</h1>
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active
            </span>
          </div>
          <p className="text-neutral-400 text-sm mt-1">
            Dynamic cost-efficiency routing engine simulator based on query complexity.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-1">
            <button 
              onClick={() => setActiveTab("playground")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'playground' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
            >
              Playground
            </button>
            <button 
              onClick={() => setActiveTab("analytics")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'analytics' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
            >
              Analytics & Logs
            </button>
          </div>
          <a
            href="https://github.com/tehlil/llm-router"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-neutral-800/85 hover:text-white text-sm font-medium text-neutral-300 transition-all"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>

      {/* Key Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-neutral-400 text-xs font-medium">
            <span>TOTAL SIMULATED RUNS</span>
            <Activity className="w-4 h-4 text-[var(--color-text-glow-primary)]" />
          </div>
          <div className="mt-2 text-2xl font-bold">{stats.totalRequests}</div>
        </div>

        <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-neutral-400 text-xs font-medium">
            <span>ROUTER OVERHEAD</span>
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
          <div className="mt-2 text-2xl font-bold">~42ms <span className="text-xs text-neutral-500 font-normal">latency</span></div>
        </div>

        <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-neutral-400 text-xs font-medium">
            <span>GATEWAY SAVINGS</span>
            <TrendingDown className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-2xl font-bold text-emerald-400">
            {stats.savingsPercentage}% <span className="text-xs text-neutral-500 font-normal">reduction</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-neutral-400 text-xs font-medium">
            <span>CUMULATIVE SAVED</span>
            <Coins className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="mt-2 text-2xl font-bold text-yellow-500">
            ${Math.max(0, stats.totalBaselineCost - stats.totalRoutedCost).toFixed(4)}
          </div>
        </div>
      </div>

      {activeTab === "playground" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Playground Left: Input, Configuration, Presets */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Template Presets */}
            <div className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/20">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-text-glow-secondary)]" /> Test Scenarios (Presets)
                </h3>
                <span className="text-[10px] text-neutral-500">Click to run immediately</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PRESET_PROMPTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetSelect(p)}
                    disabled={routingStep !== "idle" && routingStep !== "done"}
                    className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/40 hover:border-neutral-500 hover:bg-[var(--color-surface)]/80 text-xs font-medium text-neutral-300 transition-all disabled:opacity-50"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt input field */}
            <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/20 flex flex-col gap-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-400" /> Custom Query Tester
              </h3>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your custom prompt here to observe the automated classification and routing decision in action..."
                disabled={routingStep !== "idle" && routingStep !== "done"}
                className="w-full h-32 p-4 rounded-xl border border-[var(--color-border)] bg-black text-neutral-200 placeholder-neutral-500 text-sm focus:outline-none focus:border-[var(--color-text-glow-primary)] transition-colors resize-none"
              />
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setShowConfig(!showConfig)}
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  <Sliders className="w-3.5 h-3.5" /> 
                  {showConfig ? "Hide Cost Configuration" : "Edit Cost Configuration"}
                </button>
                <div className="flex gap-2">
                  {prompt && (
                    <button
                      onClick={() => setPrompt("")}
                      className="p-2.5 rounded-xl border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors text-neutral-400 hover:text-white"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleRoutePrompt(prompt)}
                    disabled={(routingStep !== "idle" && routingStep !== "done") || !prompt.trim()}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Play className="w-4 h-4 fill-current" /> Route Request
                  </button>
                </div>
              </div>
            </div>

            {/* Collapsible Pricing Config */}
            {showConfig && (
              <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 flex flex-col gap-4 animate-[fadeIn_0.2s_ease-out]">
                <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-3">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-purple-400" /> Gateway Pricing Configuration
                  </h3>
                  <button 
                    onClick={() => setPricing(DEFAULT_PRICING)}
                    className="text-[10px] text-neutral-400 hover:text-white transition-colors"
                  >
                    Reset Defaults
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(pricing).map(([key, model]) => (
                    <div key={key} className="p-3 rounded-lg border border-[var(--color-border)] bg-black/60 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-neutral-200">{model.name}</span>
                        <span className="text-[10px] text-neutral-500 uppercase">{model.provider}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <div>
                          <label className="text-[9px] text-neutral-400 block mb-0.5">Input (per 1M tokens)</label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1.5 text-[10px] text-neutral-500">$</span>
                            <input
                              type="number"
                              step="0.01"
                              value={model.inputCost}
                              onChange={(e) => handlePricingChange(key, "inputCost", e.target.value)}
                              className="w-full bg-neutral-900 border border-[var(--color-border)] rounded px-5 py-1 text-xs text-neutral-300 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[9px] text-neutral-400 block mb-0.5">Output (per 1M tokens)</label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1.5 text-[10px] text-neutral-500">$</span>
                            <input
                              type="number"
                              step="0.01"
                              value={model.outputCost}
                              onChange={(e) => handlePricingChange(key, "outputCost", e.target.value)}
                              className="w-full bg-neutral-900 border border-[var(--color-border)] rounded px-5 py-1 text-xs text-neutral-300 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Playground Right: Live Output Visualizer */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live routing decision visualizer */}
            <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/20 flex flex-col min-h-[460px]">
              <h3 className="text-sm font-semibold border-b border-[var(--color-border)] pb-3 mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" /> Live Router Visualizer
              </h3>

              {routingStep === "idle" ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center p-6 text-neutral-500">
                  <Cpu className="w-12 h-12 stroke-[1.2] mb-4 text-neutral-600 animate-pulse" />
                  <p className="text-sm font-medium">Gateway Standby</p>
                  <p className="text-xs max-w-xs mt-1">Select a preset scenario above or write a custom prompt to trigger the routing engine.</p>
                </div>
              ) : (
                <div className="flex-grow flex flex-col gap-6">
                  {/* Stepper progress */}
                  <div className="flex flex-col gap-4">
                    {/* Step 1: Classification */}
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border transition-colors 
                          ${routingStep === 'classifying' ? 'bg-[var(--color-text-glow-primary)]/20 border-[var(--color-text-glow-primary)] text-[var(--color-text-glow-primary)] animate-pulse' : 'bg-neutral-900 border-neutral-700 text-neutral-400'}`}>
                          {routingStep !== 'classifying' ? '✓' : '1'}
                        </div>
                        <div className="w-0.5 h-8 bg-neutral-800"></div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-neutral-300">Evaluating Query Complexity</p>
                        {routingStep === "classifying" && (
                          <div className="mt-2 text-xs text-neutral-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                            Analyzing word semantics and syntax rules...
                          </div>
                        )}
                        {routingStep !== "classifying" && classificationScores.length > 0 && (
                          <div className="mt-2 p-3 bg-black/60 rounded-xl border border-[var(--color-border)]">
                            <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">Classification Probabilities</p>
                            <div className="flex flex-col gap-2">
                              {classificationScores.slice(0, 3).map((c, i) => (
                                <div key={i} className="flex items-center justify-between text-xs">
                                  <span className="text-neutral-400">{c.name}</span>
                                  <div className="flex items-center gap-2">
                                    <div className="w-20 bg-neutral-900 h-1.5 rounded-full overflow-hidden border border-neutral-800">
                                      <div 
                                        className="h-full bg-[var(--color-text-glow-primary)] rounded-full" 
                                        style={{ width: `${c.score}%` }}
                                      ></div>
                                    </div>
                                    <span className="text-neutral-300 font-mono w-8 text-right">{c.score}%</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step 2: Routing decision */}
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border transition-colors 
                          ${routingStep === 'routing' ? 'bg-[var(--color-text-glow-secondary)]/20 border-[var(--color-text-glow-secondary)] text-[var(--color-text-glow-secondary)] animate-pulse' : 
                            (routingStep === 'classifying') ? 'bg-neutral-900 border-neutral-800 text-neutral-600' : 'bg-neutral-900 border-neutral-700 text-neutral-400'}`}>
                          {routingStep !== 'classifying' && routingStep !== 'routing' ? '✓' : '2'}
                        </div>
                        <div className="w-0.5 h-8 bg-neutral-800"></div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-neutral-300">Determining Target Model</p>
                        {routingStep === "routing" && (
                          <div className="mt-2 text-xs text-neutral-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"></span>
                            Applying Cost/Performance thresholds...
                          </div>
                        )}
                        {routingStep !== "classifying" && routingStep !== "routing" && (
                          <div className="mt-2 p-3 bg-black/60 rounded-xl border border-[var(--color-border)] flex flex-col gap-2">
                            <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-2 mb-1">
                              <span className="text-xs font-semibold text-neutral-200">Selected Model</span>
                              <span className="text-[10px] font-mono text-[var(--color-text-glow-secondary)] font-semibold bg-[var(--color-text-glow-secondary)]/10 px-2 py-0.5 rounded border border-[var(--color-text-glow-secondary)]/20">
                                {pricing[selectedKey].name}
                              </span>
                            </div>
                            <p className="text-[10px] text-neutral-400 leading-normal">{explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step 3: Response streaming */}
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border transition-colors 
                          ${routingStep === 'responding' ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 animate-pulse' : 
                            (routingStep === 'done') ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-neutral-900 border-neutral-800 text-neutral-600'}`}>
                          {routingStep === 'done' ? '✓' : '3'}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-neutral-300">Streaming Response</p>
                        {routingStep === "responding" && (
                          <div className="mt-1 text-xs text-neutral-400 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span>
                            Generating tokens...
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Streaming Terminal Output */}
                  {(routingStep === "responding" || routingStep === "done") && (
                    <div className="mt-2 flex-grow flex flex-col p-4 rounded-xl border border-[var(--color-border)] bg-black/80 font-mono text-[11px] leading-relaxed relative overflow-hidden">
                      <div className="flex justify-between items-center text-neutral-500 border-b border-neutral-900 pb-2 mb-3">
                        <span className="flex items-center gap-1"><Terminal className="w-3.5 h-3.5 text-neutral-600" /> OUTPUT TERMINAL</span>
                        <span className="text-[9px] uppercase tracking-wider text-emerald-500">Live Stream</span>
                      </div>
                      <div className="flex-grow overflow-y-auto max-h-[180px] text-neutral-300 whitespace-pre-wrap select-all">
                        {currentResponse}
                        {routingStep === "responding" && <span className="w-1.5 h-3 bg-emerald-400 inline-block animate-pulse ml-0.5"></span>}
                        <div ref={responseEndRef} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Analytics Tab */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-[fadeIn_0.2s_ease-out]">
          {/* Charts Row */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Savings Chart */}
            <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/20">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <Coins className="w-4 h-4 text-emerald-400" /> Cost Cumulative Comparison (USD)
              </h3>
              <div className="h-64 w-full">
                {logs.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={getSavingsChartData()}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="routed" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="baseline" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                      <XAxis dataKey="name" stroke="#666" fontSize={10} />
                      <YAxis stroke="#666" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px" }}
                        labelStyle={{ color: "#aaa", fontSize: "11px" }}
                        itemStyle={{ fontSize: "12px" }}
                      />
                      <Area type="monotone" dataKey="Routed Gateway" stroke="#10b981" fillOpacity={1} fill="url(#routed)" strokeWidth={2} />
                      <Area type="monotone" dataKey="Single Model (GPT-4o)" stroke="#ef4444" fillOpacity={1} fill="url(#baseline)" strokeWidth={1.5} strokeDasharray="3 3" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-neutral-500 text-xs">
                    No run logs available. Run prompts to generate data.
                  </div>
                )}
              </div>
              <p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">
                *Comparing the dynamic **Routed Gateway** cost (optimized routing) against the **Single Model Baseline** (always invoking GPT-4o).
              </p>
            </div>

            {/* Model Distribution */}
            <div className="p-6 rounded-2xl border border border-[var(--color-border)] bg-[var(--color-surface)]/20">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" /> Gateway Request Routing Distribution
              </h3>
              <div className="h-48 w-full">
                {logs.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={getModelDistributionData()}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                      <XAxis dataKey="name" stroke="#666" fontSize={9} />
                      <YAxis stroke="#666" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px" }}
                        itemStyle={{ fontSize: "12px" }}
                      />
                      <Bar dataKey="requests" radius={[4, 4, 0, 0]}>
                        {getModelDistributionData().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-neutral-500 text-xs">
                    No run logs available.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Analytics Right: Control, Reset, Log overview */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/20 flex flex-col gap-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Sliders className="w-4 h-4 text-sky-400" /> Analytics Control
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Reset the local simulation database to clear running totals, mock logs, and reset charts back to empty state.
              </p>
              <button
                onClick={handleResetStats}
                className="w-full py-2.5 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10 hover:border-red-500/40 text-xs font-semibold transition-colors"
              >
                Clear Database Logs
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Historical Logs Table */}
      <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/20">
        <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-4 mb-4">
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <Database className="w-4 h-4 text-neutral-400" /> Gateway Logs
          </h3>
          <span className="text-[10px] text-neutral-500">{logs.length} operations stored locally</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="text-neutral-500 border-b border-neutral-900 pb-2">
                <th className="py-2.5 font-medium">TIMESTAMP</th>
                <th className="py-2.5 font-medium">QUERY CLASSIFICATION</th>
                <th className="py-2.5 font-medium">SELECTED ROUTE</th>
                <th className="py-2.5 font-medium text-right">TOKENS</th>
                <th className="py-2.5 font-medium text-right">LATENCY</th>
                <th className="py-2.5 font-medium text-right">ROUTED COST</th>
                <th className="py-2.5 font-medium text-right">SAVINGS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 text-neutral-300 font-mono">
              {logs.length > 0 ? (
                logs.map((log, i) => (
                  <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-3 text-neutral-500">{log.timestamp}</td>
                    <td className="py-3 font-sans">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 font-semibold">
                        {log.category}
                      </span>
                    </td>
                    <td className="py-3 font-sans text-neutral-200">{log.model}</td>
                    <td className="py-3 text-right">{log.tokens.total}</td>
                    <td className="py-3 text-right text-neutral-400">{log.latency}ms</td>
                    <td className="py-3 text-right font-semibold">${log.costRouted.toFixed(6)}</td>
                    <td className={`py-3 text-right font-semibold ${log.savings > 0 ? 'text-emerald-400' : log.savings < 0 ? 'text-rose-400' : 'text-neutral-500'}`}>
                      {log.savings > 0 ? `+$${log.savings.toFixed(6)}` : log.savings < 0 ? `-$${Math.abs(log.savings).toFixed(6)}` : "$0.00"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-neutral-500 font-sans">
                    No gateway executions tracked. Submit a query in the playground tab to test.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
