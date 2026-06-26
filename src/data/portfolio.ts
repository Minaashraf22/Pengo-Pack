import { PortfolioItem } from '../types';

export const portfolioData: PortfolioItem[] = [
  {
    id: 'pp-001',
    category: 'food',
    industry: 'food-beverage',
    title: { ar: 'علب تغليف منتجات غذائية', en: 'Food Product Packaging Boxes' },
    summary: { ar: 'تصميم وتصنيع علب كرتونية قابلة للطي لمنتجات غذائية مع طباعة أوفست كاملة الألوان وتغليف مطفي', en: 'Design and manufacture of folding carton boxes for food products with full-color offset printing and matte lamination' },
    packagingType: { ar: 'علب كرتونية قابلة للطي (Folding Cartons)', en: 'Folding Cartons' },
    finishingTags: [
      { ar: 'تغليف مطفي', en: 'Matte Lamination' },
      { ar: 'طباعة CMYK', en: 'CMYK Printing' },
      { ar: 'طي آلي', en: 'Auto-lock Bottom' },
    ],
    featuredImage: '/project1-1.png',
    galleryImages: [
      '/project1-2.png',
      '/project1-3.png',
    ],
    challenge: {
      ar: 'العميل احتاج تغليفاً يحافظ على جودة المنتج الغذائي ويعزز تواجده على الرف في منافسة قوية مع علامات تجارية كبرى.',
      en: 'The client needed packaging that preserves food product quality and enhances shelf presence in strong competition with major brands.'
    },
    solution: {
      ar: 'صممنا علباً كرتونية باستخدام خامات مقاومة للرطوبة مع طباعة أوفست بدقة ألوان عالية وطبقة حماية مطفية.',
      en: 'We designed carton boxes using moisture-resistant materials with high-precision offset printing and a matte protective layer.'
    },
    outcome: {
      ar: 'زيادة ملحوظة في المبيعات بنسبة 25% في الربع الأول بعد إطلاق التغليف الجديد، وتغذية إيجابية من الموزعين.',
      en: 'A noticeable 25% increase in sales in the first quarter after launching the new packaging, with positive feedback from distributors.'
    },
    specs: {
      ar: 'خامة: Ivory Board 350gsm | الطباعة: CMYK Offset | التشطيب: Matte Lamination + Spot UV Logo',
      en: 'Material: Ivory Board 350gsm | Printing: CMYK Offset | Finishing: Matte Lamination + Spot UV Logo'
    },
  },
  {
    id: 'pp-002',
    category: 'pharma',
    industry: 'pharmaceutical',
    title: { ar: 'تغليف دوائي ونشرات Leaflets', en: 'Pharmaceutical Packaging & Leaflets' },
    summary: { ar: 'تصنيع علب دوائية ونشرات Leaflets مطبوعة بدقة عالية للاستخدام الدوائي مع الالتزام بمعايير الجودة', en: 'Manufacturing medicine boxes and high-precision leaflets for pharmaceutical use with quality standards compliance' },
    packagingType: { ar: 'علب دوائية + نشرات Leaflets', en: 'Medicine Boxes + Leaflets' },
    finishingTags: [
      { ar: 'طباعة دقيقة', en: 'Precision Printing' },
      { ar: 'طي متعدد', en: 'Multi-fold' },
      { ar: 'تعبئة آمنة', en: 'Safe Packing' },
    ],
    featuredImage: '/medical3.png',
    galleryImages: [
      '/pharma.png',
      '/medical2.png',
    ],
    challenge: {
      ar: 'مشروع دوائي يتطلب دقة طباعة عالية جداً للنصوص الصغيرة وطي متسق للنشرات مع التعبئة الآمنة.',
      en: 'A pharmaceutical project requiring very high printing precision for small text and consistent leaflet folding with safe packing.'
    },
    solution: {
      ar: 'استخدمنا ألواحاً عالية الدقة وضبطنا الماكينات لأدنى حد للنصوص، مع طي آلي متسق وتعبئة Poly-bag آمنة.',
      en: 'We used high-precision plates and calibrated machines for minimum text size, with consistent auto-folding and safe Poly-bag packing.'
    },
    outcome: {
      ar: 'اجتياز فحص الجودة الدوائي بنسبة 100% وموافقة الجهات الرقابية على التغليف والنشرات.',
      en: 'Passed pharmaceutical quality inspection with 100% and received regulatory approval for packaging and leaflets.'
    },
    specs: {
      ar: 'خامة: Art Paper 80gsm للنشرات | طباعة: Offset CMYK + Pantone | طي: Z-fold 3 panels | تعبئة: Poly-bag',
      en: 'Material: Art Paper 80gsm for leaflets | Printing: Offset CMYK + Pantone | Folding: Z-fold 3 panels | Packing: Poly-bag'
    },
  },
  {
    id: 'pp-003',
    category: 'retail',
    industry: 'retail',
    title: { ar: 'علب تجزئة فاخرة للمنتجات الاستهلاكية', en: 'Luxury Retail Boxes for Consumer Products' },
    summary: { ar: 'تصميم وتصنيع علب تجزئة فاخرة باستخدام تشطيبات Spot UV وتذهيب ذهبي لرفع قيمة المنتج المدركة', en: 'Design and manufacture of luxury retail boxes using Spot UV and gold foil finishes to elevate perceived product value' },
    packagingType: { ar: 'علب تجزئة فاخرة (Rigid Boxes)', en: 'Luxury Retail Rigid Boxes' },
    finishingTags: [
      { ar: 'Spot UV', en: 'Spot UV' },
      { ar: 'تذهيب ذهبي', en: 'Gold Foil' },
      { ar: 'تغليف مطفي', en: 'Matte Lamination' },
    ],
    featuredImage: '/rigid3.png',
    galleryImages: [
      '/rigid2.png',
      '/rigid.png',
    ],
    challenge: {
      ar: 'العميل أطلق منتجاً جديداً في فئة سعرية مرتفعة ويحتاج تغليفاً يبرز الفخامة ويبرر السعر المرتفع.',
      en: 'The client launched a new product in a higher price category and needed packaging that highlights luxury and justifies the higher price.'
    },
    solution: {
      ar: 'صممنا علباً صلبة (Rigid) مغطاة بورق مطفي مع تذهيب ذهبي للشعار وطبقة Spot UV على العناصر الجرافيكية.',
      en: 'We designed rigid boxes covered with matte paper with gold foil for the logo and a Spot UV layer on graphic elements.'
    },
    outcome: {
      ar: 'ارتفاع مبيعات المنتج بنسبة 40% في أول شهرين، مع تعليقات إيجابية من العملاء على جودة التغليف.',
      en: 'Product sales increased by 40% in the first two months, with positive customer comments on packaging quality.'
    },
    specs: {
      ar: 'خامة: Greyboard 2mm + ورق مطفي | تشطيب: Matte Lamination + Gold Foil + Spot UV | قص: Die-cut دقيق',
      en: 'Material: Greyboard 2mm + Matte Paper | Finishing: Matte Lamination + Gold Foil + Spot UV | Cutting: Precision Die-cut'
    },
  },
  {
    id: 'pp-004',
    category: 'custom',
    industry: 'cosmetics',
    title: { ar: 'تغليف مخصص لمستحضرات التجميل', en: 'Custom Packaging for Cosmetics' },
    summary: { ar: 'تصميم علب تجميل مخصصة مع تشطيبات راقية وطباعة دقيقة تعكس هوية العلامة التجارية الفاخرة', en: 'Design of custom cosmetic boxes with premium finishes and precise printing that reflects the luxury brand identity' },
    packagingType: { ar: 'علب تجميل فاخرة + ملصقات', en: 'Luxury Cosmetic Boxes + Labels' },
    finishingTags: [
      { ar: 'تغليف لامع', en: 'Gloss Lamination' },
      { ar: 'تذهيب فضي', en: 'Silver Foil' },
      { ar: 'ملصقات شفافة', en: 'Transparent Labels' },
    ],
    featuredImage: '/skincare.png',
    galleryImages: [
      '/skincare2.png',
      '/skincare3.png',
    ],
    challenge: {
      ar: 'علامة تجميلية جديدة تبحث عن تغليف ينقل رسالة الفخامة والطبيعة في آن واحد مع جودة ملمس عالية.',
      en: 'A new cosmetics brand looking for packaging that conveys luxury and nature simultaneously with high tactile quality.'
    },
    solution: {
      ar: 'صممنا علباً بورق مطفي Soft-touch مع تذهيب فضي وشعار Spot UV بارز، وملصقات شفافة على العبوات الداخلية.',
      en: 'We designed boxes with Soft-touch matte paper with silver foil and raised Spot UV logo, and transparent labels on inner containers.'
    },
    outcome: {
      ar: 'تم إطلاق العلامة التجارية بنجاح مع تغليف حصل على إشادة في معارض التجميل، وطلبات تكرار من العملاء.',
      en: 'The brand was launched successfully with packaging that received praise at beauty exhibitions, with repeat orders from clients.'
    },
    specs: {
      ar: 'خامة: Art Paper 300gsm + Soft-touch | تشطيب: Matte Lamination + Silver Foil + Spot UV | ملصقات: شفافة PVC',
      en: 'Material: Art Paper 300gsm + Soft-touch | Finishing: Matte Lamination + Silver Foil + Spot UV | Labels: Transparent PVC'
    },
  },
  {
    id: 'pp-005',
    category: 'food',
    industry: 'food-beverage',
    title: { ar: 'تغليف المشروبات والعصائر', en: 'Beverage & Juice Packaging' },
    summary: { ar: 'تصميم علب كرتونية للمشروبات مع طباعة مقاومة للرطوبة ومتانة عالية للتخزين المبرد', en: 'Design of carton boxes for beverages with moisture-resistant printing and high durability for refrigerated storage' },
    packagingType: { ar: 'علب كرتونية للمشروبات (Carrier Boxes)', en: 'Beverage Carrier Cartons' },
    finishingTags: [
      { ar: 'مقاوم للرطوبة', en: 'Moisture Resistant' },
      { ar: 'طباعة CMYK', en: 'CMYK Printing' },
      { ar: 'متانة عالية', en: 'High Durability' },
    ],
    featuredImage: '/drinks2.png',
    galleryImages: [
      '/drinks.png',
    ],
    challenge: {
      ar: 'تغليف مشروبات يحتاج مقاومة للرطوبة والتكثف في الثلاجات مع الحفاظ على الجاذبية البصرية.',
      en: 'Beverage packaging needs moisture and condensation resistance in refrigerators while maintaining visual appeal.'
    },
    solution: {
      ar: 'استخدمنا خامات كرتونية مع طلاء مقاوم للرطوبة وطباعة أوفست مع طبقة حماية UV كامل.',
      en: 'We used carton materials with moisture-resistant coating and offset printing with full UV protective layer.'
    },
    outcome: {
      ar: 'تم تسليم 50,000 علبة في الموعد المحدد مع فحص جودة 100% ورضا العميل الكامل.',
      en: '50,000 boxes were delivered on time with 100% quality inspection and complete client satisfaction.'
    },
    specs: {
      ar: 'خامة: Duplex Board 400gsm | طباعة: Offset CMYK | تشطيب: Full UV Coating + Aqueous Varnish',
      en: 'Material: Duplex Board 400gsm | Printing: Offset CMYK | Finishing: Full UV Coating + Aqueous Varnish'
    },
  },
  {
    id: 'pp-006',
    category: 'retail',
    industry: 'fmcg',
    title: { ar: 'صناديق منتجات استهلاكية بالجملة', en: 'Bulk Consumer Product Boxes' },
    summary: { ar: 'تصنيع صناديق كرتونية اقتصادية للمنتجات الاستهلاكية بكميات كبيرة مع الحفاظ على جودة الطباعة', en: 'Manufacturing economical carton boxes for consumer products in large quantities while maintaining print quality' },
    packagingType: { ar: 'علب كرتونية اقتصادية (FMCG Boxes)', en: 'Economical FMCG Carton Boxes' },
    finishingTags: [
      { ar: 'تكلفة منخفضة', en: 'Low Cost' },
      { ar: 'إنتاج سريع', en: 'Fast Production' },
      { ar: 'طباعة CMYK', en: 'CMYK Printing' },
    ],
    featuredImage: '/carton2.png',
    galleryImages: [
      '/Consumer.png',
    ],
    challenge: {
      ar: 'عميل FMCG يحتاج 100,000 علبة شهرياً بتكلفة منخفضة دون التنازل عن الجودة المرئية.',
      en: 'An FMCG client needs 100,000 boxes monthly at low cost without compromising visual quality.'
    },
    solution: {
      ar: 'صممنا علباً باستخدام Duplex Board اقتصادي مع طباعة أوفست CMYK وقوالب قص قياسية لتوفير التكلفة.',
      en: 'We designed boxes using economical Duplex Board with offset CMYK printing and standard die-cut templates to save cost.'
    },
    outcome: {
      ar: 'توفير 15% في تكلفة التغليف مع الحفاظ على جودة الطباعة، وتسليم منتظم شهرياً.',
      en: '15% savings in packaging cost while maintaining print quality, with regular monthly delivery.'
    },
    specs: {
      ar: 'خامة: Duplex Board 300gsm | طباعة: Offset CMYK | قص: قوالب قياسية | كمية: 100,000/شهر',
      en: 'Material: Duplex Board 300gsm | Printing: Offset CMYK | Cutting: Standard dies | Quantity: 100,000/month'
    },
  },
];

export const portfolioCategories = [
  { key: 'all', label: { ar: 'الكل', en: 'All' } },
  { key: 'food', label: { ar: 'تغليف غذائي', en: 'Food Packaging' } },
  { key: 'pharma', label: { ar: 'تغليف دوائي', en: 'Pharma Packaging' } },
  { key: 'retail', label: { ar: 'تغليف تجزئة', en: 'Retail Packaging' } },
  { key: 'custom', label: { ar: 'تغليف مخصص', en: 'Custom Packaging' } },
];

export const getPortfolioById = (id: string) => portfolioData.find((p) => p.id === id);
