import { MaterialFinish } from '../types';

export const materialsData: MaterialFinish[] = [
  {
    id: 'mat-001',
    title: { ar: 'Duplex Board', en: 'Duplex Board' },
    description: { ar: 'خامة كرتونية اقتصادية مع ظهر رمادي، مثالية للتغليف الاستهلاكي والمنتجات التي لا تتطلب ظهراً أبيض.', en: 'Economical carton material with grey back, ideal for consumer packaging and products that do not require a white back.' },
    category: 'material',
    tags: [{ ar: 'اقتصادي', en: 'Economical' }, { ar: 'FMCG', en: 'FMCG' }],
  },
  {
    id: 'mat-002',
    title: { ar: 'Ivory Board', en: 'Ivory Board' },
    description: { ar: 'خامة كرتونية بيضاء من الجهتين مع سطح ناعم، مثالية للتغليف الفاخر والمطبوعات التجارية.', en: 'White carton material on both sides with a smooth surface, ideal for luxury packaging and commercial prints.' },
    category: 'material',
    tags: [{ ar: 'فاخر', en: 'Premium' }, { ar: 'تجزئة', en: 'Retail' }],
  },
  {
    id: 'mat-003',
    title: { ar: 'Art Paper', en: 'Art Paper' },
    description: { ar: 'ورق فني عالي الجودة بسطح أملس، مثالي للمطبوعات الدقيقة والتغليف الذي يتطلب ألواناً حية.', en: 'High-quality art paper with a smooth surface, ideal for precise prints and packaging requiring vivid colors.' },
    category: 'material',
    tags: [{ ar: 'ألوان حية', en: 'Vivid Colors' }, { ar: 'مطبوعات', en: 'Prints' }],
  },
  {
    id: 'mat-004',
    title: { ar: 'Carton Board (Greyboard)', en: 'Carton Board (Greyboard)' },
    description: { ar: 'لوح كرتوني سميك يستخدم كقاعدة للعلب الصلبة (Rigid Boxes)، يوفر متانة عالية وحماية فائقة.', en: 'Thick carton board used as a base for rigid boxes, providing high durability and superior protection.' },
    category: 'material',
    tags: [{ ar: 'متين', en: 'Durable' }, { ar: 'Rigid Boxes', en: 'Rigid Boxes' }],
  },
  {
    id: 'fin-001',
    title: { ar: 'Matte Lamination', en: 'Matte Lamination' },
    description: { ar: 'طبقة بلاستيكية مطفية تضيف ملمساً ناعماً ومظهراً راقياً مع حماية من الخدش والرطوبة.', en: 'A matte plastic layer that adds a soft texture and elegant appearance with protection from scratches and moisture.' },
    category: 'finish',
    tags: [{ ar: 'مطفي', en: 'Matte' }, { ar: 'حماية', en: 'Protection' }],
  },
  {
    id: 'fin-002',
    title: { ar: 'Gloss Lamination', en: 'Gloss Lamination' },
    description: { ar: 'طبقة بلاستيكية لامعة تعزز الألوان وتضيف بريقاً جذاباً مع حماية قوية للسطح.', en: 'A glossy plastic layer that enhances colors and adds attractive shine with strong surface protection.' },
    category: 'finish',
    tags: [{ ar: 'لامع', en: 'Glossy' }, { ar: 'ألوان محسنة', en: 'Enhanced Colors' }],
  },
  {
    id: 'fin-003',
    title: { ar: 'UV Coating', en: 'UV Coating' },
    description: { ar: 'طبقة حماية شفافة تُطبق بالأشعة فوق البنفسجية لحماية المطبوعات وإضافة لمعان عالي.', en: 'A transparent protective layer applied with UV radiation to protect prints and add high gloss.' },
    category: 'finish',
    tags: [{ ar: 'حماية', en: 'Protection' }, { ar: 'لمعان', en: 'Gloss' }],
  },
  {
    id: 'fin-004',
    title: { ar: 'Spot UV', en: 'Spot UV' },
    description: { ar: 'تلميع جزئي يركز على عناصر معينة (شعار، نص) لإضافة تأثير بصري ثلاثي الأبعاد ومظهر فاخر.', en: 'Partial gloss focusing on specific elements (logo, text) to add a 3D visual effect and luxurious appearance.' },
    category: 'finish',
    tags: [{ ar: 'جزئي', en: 'Partial' }, { ar: 'فاخر', en: 'Luxury' }],
  },
  {
    id: 'fin-005',
    title: { ar: 'Varnish (Aqueous / Oil)', en: 'Varnish (Aqueous / Oil)' },
    description: { ar: 'ورنيش مائي أو زيتي يضيف طبقة حماية رقيقة مع تأثير لمعان خفيف أو مطفي.', en: 'Aqueous or oil varnish that adds a thin protective layer with a light or matte gloss effect.' },
    category: 'finish',
    tags: [{ ar: 'اقتصادي', en: 'Economical' }, { ar: 'حماية خفيفة', en: 'Light Protection' }],
  },
  {
    id: 'fin-006',
    title: { ar: 'Hot Foil Stamping', en: 'Hot Foil Stamping' },
    description: { ar: 'تذهيب أو تفضيص بالختم الساخن لإضافة لمسة فاخرة ومظهر معدني على الشعارات والعناصر المهمة.', en: 'Gold or silver hot foil stamping to add a luxurious touch and metallic appearance to logos and important elements.' },
    category: 'finish',
    tags: [{ ar: 'فاخر', en: 'Luxury' }, { ar: 'معدني', en: 'Metallic' }],
  },
  {
    id: 'fin-007',
    title: { ar: 'Die-cutting', en: 'Die-cutting' },
    description: { ar: 'قص دقيق باستخدام قوالب مخصصة لإنتاج أشكال غير منتظمة وفتحات بأبعاد محددة بدقة.', en: 'Precision cutting using custom dies to produce irregular shapes and openings with precise dimensions.' },
    category: 'process',
    tags: [{ ar: 'دقة', en: 'Precision' }, { ar: 'أشكال مخصصة', en: 'Custom Shapes' }],
  },
  {
    id: 'fin-008',
    title: { ar: 'Folding & Gluing', en: 'Folding & Gluing' },
    description: { ar: 'طي وتجميع العلب الكرتونية بشكل آلي أو يدوي لإنتاج صناديق جاهزة للاستخدام.', en: 'Folding and assembling carton boxes automatically or manually to produce ready-to-use boxes.' },
    category: 'process',
    tags: [{ ar: 'تجميع', en: 'Assembly' }, { ar: 'قابل للطي', en: 'Folding' }],
  },
];

export const getMaterialsByCategory = (cat: 'material' | 'finish' | 'process') =>
  materialsData.filter((m) => m.category === cat);
