
export interface NumerologyProfile {
  lifePathNumber: number;
  mantra: string;
  zodiac: string;
}

export enum ModuleSize {
  SMALL = 'span-1',
  MEDIUM = 'span-2',
  LARGE = 'span-3',
}

// --- Dream & Intuition Types ---

export interface ActionSeed {
  id: string;
  text: string;
  type: 'TASK' | 'IDEA' | 'CONNECTION';
}

export interface DreamEntry {
  id: string;
  text: string;
  date: string;
  tags: string[];
  archetypes: string[]; // e.g. "The Shadow", "House 12"
  seeds: ActionSeed[];
  isAnalyzed: boolean;
}

// --- Finance Guardian Types ---

export type AssetType = 'CRYPTO' | 'ETF' | 'SAVINGS';

export interface FinanceTransaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  isRecurring: boolean;
  alignment?: AlignmentResult;
}

export interface Opportunity {
  id: string;
  title: string;
  currentCost: number;
  marketCost: number;
  savingsPercentage: number;
  provider: string;
  actionParams: string; // Context for the switch letter
}

export interface AlignmentResult {
  isAligned: boolean;
  leakingTo?: string; // e.g. "Entertainment" instead of "Freedom"
  suggestedAsset?: AssetType;
  reason: string;
}

export interface ShadowWealthSimulation {
  projectedValue2030: number;
  assetClass: string;
  monthlyLeakTotal: number;
  narrative: string; // "The Price of Distraction"
}

export interface CosmicFinanceTip {
  actionType: 'INVEST' | 'CANCEL' | 'HOLD';
  bestDate: string;
  celestialReason: string; // "Jupiter enters Gemini"
}

export interface LiquidityBuffer {
  currentMonths: number;
  recommendedMonths: number;
  stressFactor: number; // 0-100 based on Bio-Energy
  status: 'OPTIMAL' | 'VULNERABLE' | 'OVERFLOWN';
}

export enum GeminiModel {
  FLASH = 'gemini-3-flash-preview',
}

export type Tab = 'dashboard' | 'finance' | 'calendar' | 'agents' | 'knowledge' | 'mail' | 'profile';

// --- New Cosmic Types ---

export type BiorhythmMode = 'high-performance' | 'regeneration';

export interface UserProfile {
  birthDate: string; // YYYY-MM-DD
  birthTime: string; // HH:MM
  name: string;
}

// --- Knowledge Distiller Types ---

export interface Synergy {
  id: string;
  targetId: string; // ID of the dream or roadmap item
  targetType: 'DREAM' | 'ROADMAP' | 'SELF';
  description: string;
}

export interface SpacedRepetitionData {
  interval: number; // Days
  repetitions: number;
  easeFactor: number;
  nextReviewDate: string; // ISO Date
}

export interface KnowledgeAttachment {
  id: string;
  name: string;
  type: 'PDF' | 'IMAGE' | 'VIDEO_LINK' | 'FILE';
  data: string; // Base64 or URL
  size?: string;
}

export interface KnowledgeTopic {
  id: string;
  title: string;
  description?: string;
}

export interface KnowledgeNode {
  id: string;
  topicId: string; // Link to Topic
  title: string;
  summary: string; // The "Nucleus"
  content: string; // HTML Rich Text
  keyPoints: string[]; // "Isotopes"
  masteryQuestion: string;
  source: string;
  timestamp: string;
  synergies: Synergy[];
  repetition: SpacedRepetitionData;
  attachments: KnowledgeAttachment[];
}

export interface CosmicState {
  lifePathNumber: number;
  zodiacSign: string; // Sidereal
  biorhythmMode: BiorhythmMode;
  resonanceFrequency: number; // Hz
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  
  // Global Data for Synergy
  dreams: DreamEntry[];
  addDream: (dream: DreamEntry) => void;
  roadmap: RoadmapYear[];
  updateRoadmap: (roadmap: RoadmapYear[]) => void;
  
  // Knowledge Base
  topics: KnowledgeTopic[];
  addTopic: (topic: KnowledgeTopic) => void;
  knowledgeBase: KnowledgeNode[];
  addKnowledge: (node: KnowledgeNode) => void;
  updateKnowledge: (node: KnowledgeNode) => void;
  reviewKnowledge: (id: string, quality: number) => void; // quality 0-5
  xp: number;
  level: number;
}

// --- NervKiller / Email Types ---

export type EmailCategory = 'URGENT' | 'INFO' | 'DELEGATE';

export interface Email {
  id: string;
  from: string;
  subject: string;
  snippet: string;
  fullText: string;
  timestamp: string;
  category: EmailCategory;
  isRead: boolean;
}

// --- Roadmap / Legacy Types ---

export interface ImpactMetrics {
  freedom: number;   // 0-100
  knowledge: number; // 0-100
  wealth: number;    // 0-100
}

export interface RoadmapYear {
  year: number;
  personalYear: number; // 1-9
  theme: string;
  action?: string;
  status: 'past' | 'current' | 'future';
}

// --- Energy Battery / Adaptive Scheduler ---

export type TaskEnergyType = 'DEEP_WORK' | 'ADMIN' | 'MEETING' | 'CREATIVE';

export interface CalendarEvent {
  id: string;
  title: string;
  start: string; // ISO
  durationMinutes: number;
  type: TaskEnergyType;
  energyCost: number; // 1-100
}

export interface Biometrics {
  hrv: number; // ms
  sleepScore: number; // 0-100
  readiness: number; // 0-100
  lastSync: string;
}

export interface ScheduleSuggestion {
  id: string;
  originalEventId: string;
  action: 'MOVE' | 'KEEP' | 'DELEGATE';
  reason: string;
  suggestedTime?: string;
}
