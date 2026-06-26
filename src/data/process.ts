import { ProcessStep } from '../types';

export const productionProcess: ProcessStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: { ar: 'الاستفسار والموجز', en: 'Inquiry & Brief' },
    description: {
      ar: 'نستلم استفسارك ونناقش تفاصيل المشروع: نوع المنتج، الكمية، المواصفات، والجدول الزمني. نقدم استشارة فنية لمساعدتك في اختيار الحل الأمثل.',
      en: 'We receive your inquiry and discuss project details: product type, quantity, specifications, and timeline. We provide technical consultation to help you choose the optimal solution.'
    },
    deliverables: [
      { ar: 'تحليل الاحتياجات', en: 'Needs analysis' },
      { ar: 'اقتراح الحلول المناسبة', en: 'Proposed suitable solutions' },
      { ar: 'تقدير تكلفة أولي', en: 'Initial cost estimate' },
    ],
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: { ar: 'مراجعة الأعمال الفنية والمواصفات', en: 'Artwork & Specs Review' },
    description: {
      ar: 'نراجع الملفات الفنية والأبعاد والمواصفات. نتحقق من جاهزية الملفات للطباعة ونقترح أي تعديلات لضمان أفضل نتيجة.',
      en: 'We review artwork files, dimensions, and specifications. We verify file readiness for printing and suggest any modifications to ensure the best result.'
    },
    deliverables: [
      { ar: 'مراجعة الملفات الفنية', en: 'Artwork file review' },
      { ar: 'تصحيح الألوان والأبعاد', en: 'Color and dimension correction' },
      { ar: 'تصميم Dieline إن لزم', en: 'Dieline design if needed' },
    ],
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: { ar: 'إنتاج العينة والتخطيط', en: 'Proofing & Production Planning' },
    description: {
      ar: 'ننتج عينة مطبوعة (Proof) للموافقة عليها. بعد الموافقة، نخطط للإنتاج بتحديد المواد والمواعيد وتوزيع المهام.',
      en: 'We produce a printed proof sample for approval. After approval, we plan production by determining materials, schedules, and task distribution.'
    },
    deliverables: [
      { ar: 'عينة مطبوعة للموافقة', en: 'Printed proof for approval' },
      { ar: 'خطة إنتاج مفصلة', en: 'Detailed production plan' },
      { ar: 'جدول زمني محدد', en: 'Defined timeline' },
    ],
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: { ar: 'الطباعة والتحويل', en: 'Printing & Conversion' },
    description: {
      ar: 'نبدأ الطباعة (أوفست أو رقمية) مع مراقبة جودة مستمرة. بعد الطباعة، ننتقل إلى مرحلة التحويل: القص، التجعيد، والطي.',
      en: 'We begin printing (offset or digital) with continuous quality monitoring. After printing, we move to conversion: cutting, creasing, and folding.'
    },
    deliverables: [
      { ar: 'طباعة عالية الجودة', en: 'High-quality printing' },
      { ar: 'مراقبة جودة مستمرة', en: 'Continuous quality monitoring' },
      { ar: 'قص وتجعيد دقيق', en: 'Precise cutting and creasing' },
    ],
  },
  {
    id: 'step-5',
    stepNumber: 5,
    title: { ar: 'التشطيب وفحص الجودة', en: 'Finishing & Quality Check' },
    description: {
      ar: 'نطبق التشطيبات المطلوبة (UV، تغليف، تذهيب) ونجرى فحصاً شاملاً للجودة للتأكد من مطابقة المنتج للمواصفات.',
      en: 'We apply required finishes (UV, lamination, foil) and conduct a comprehensive quality check to ensure the product matches specifications.'
    },
    deliverables: [
      { ar: 'تشطيبات متكاملة', en: 'Comprehensive finishes' },
      { ar: 'فحص جودة 100%', en: '100% quality inspection' },
      { ar: 'تقرير جودة', en: 'Quality report' },
    ],
  },
  {
    id: 'step-6',
    stepNumber: 6,
    title: { ar: 'التعبئة والتسليم', en: 'Packing & Delivery' },
    description: {
      ar: 'نقوم بتعبئة المنتجات بشكل آمن لضمان وصولها في أفضل حالة. ننسق التسليم حسب الجدول المتفق عليه.',
      en: 'We pack products safely to ensure they arrive in the best condition. We coordinate delivery according to the agreed schedule.'
    },
    deliverables: [
      { ar: 'تعبئة آمنة ومنظمة', en: 'Safe and organized packing' },
      { ar: 'تسليم في الموعد المحدد', en: 'On-time delivery' },
      { ar: 'دعم ما بعد التسليم', en: 'Post-delivery support' },
    ],
  },
];
