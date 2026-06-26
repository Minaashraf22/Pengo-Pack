import { Industry } from '../types';

export const industriesData: Industry[] = [
  {
    id: 'food-beverage',
    icon: 'FaUtensils',
    title: { ar: 'الأغذية والمشروبات', en: 'Food & Beverage' },
    subtitle: { ar: 'تغليف آمن وجذاب يحافظ على جودة المنتج ويعزز المبيعات', en: 'Safe and attractive packaging that preserves product quality and boosts sales' },
    description: {
      ar: 'قطاع الأغذية والمشروبات يتطلب تغليفاً يجمع بين السلامة الغذائية والجاذبية البصرية. نقدم حلول تغليف كرتوني وورقي معتمدة للاستخدام الغذائي، مع طباعة مقاومة للرطوبة والزيوت. تغليفنا يحافظ على نضارة المنتج ويعزز تواجده على الرف.',
      en: 'The food and beverage sector requires packaging that combines food safety and visual appeal. We offer certified carton and paper packaging solutions for food use, with moisture and oil-resistant printing. Our packaging preserves product freshness and enhances shelf presence.'
    },
    needs: {
      ar: 'تغليف آمن غذائياً، مقاومة للرطوبة والزيوت، معلومات واضحة للمستهلك، تواجد جذاب على الرف',
      en: 'Food-safe packaging, moisture and oil resistance, clear consumer information, attractive shelf presence'
    },
    support: {
      ar: 'نقدم علب كرتونية، عبوات قابلة للطي، ملصقات منتجات، مطبوعات تسويقية، ونشرات غذائية بجودة صناعية',
      en: 'We offer carton boxes, folding cartons, product labels, marketing prints, and food leaflets with industrial quality'
    },
    whyPrecision: {
      ar: 'في قطاع الأغذية، دقة الطباعة والتغليف تؤثر مباشرة على ثقة المستهلك وقرار الشراء. تغليف غير دقيق يعني خسارة في المبيعات.',
      en: 'In the food sector, printing and packaging precision directly affects consumer trust and purchase decisions. Imprecise packaging means lost sales.'
    },
    features: [
      { ar: 'مواد آمنة غذائياً ومعتمدة', en: 'Food-safe and certified materials' },
      { ar: 'طباعة مقاومة للرطوبة والزيوت', en: 'Moisture and oil-resistant printing' },
      { ar: 'تصاميم جذابة تعزز المبيعات', en: 'Attractive designs that boost sales' },
      { ar: 'تغليف محكم الإغلاق للحفاظ على النضارة', en: 'Tight-seal packaging to preserve freshness' },
    ],
    imageUrl: '/foods.jpg',
    color: 'from-orange-500/20 to-yellow-500/10',
    iconColor: 'text-orange-500',
  },
  {
    id: 'pharmaceutical',
    icon: 'FaFlask',
    title: { ar: 'الدوائي', en: 'Pharmaceutical' },
    subtitle: { ar: 'تغليف دقيق ونشرات دوائية بأعلى معايير الجودة والأمان', en: 'Precise packaging and pharmaceutical inserts with highest quality and safety standards' },
    description: {
      ar: 'قطاع الدواء يتطلب أعلى مستويات الدقة في التغليف والطباعة. نقدم تغليفاً دوائياً معتمداً ونشرات (Leaflets) مطبوعة بدقة عالية لضمان وضوح المعلومات الطبية. نلتزم بمعايير الجودة الصناعية ونستخدم مواد معتمدة للاستخدام الدوائي.',
      en: 'The pharmaceutical sector requires the highest levels of precision in packaging and printing. We offer certified pharmaceutical packaging and leaflets printed with high precision to ensure clarity of medical information. We adhere to industrial quality standards and use approved materials for pharmaceutical use.'
    },
    needs: {
      ar: 'تغليف دقيق وآمن، نشرات واضحة، معلومات صحيحة، مقاومة للتلاعب، امتثال للمعايير الدولية',
      en: 'Precise and safe packaging, clear leaflets, accurate information, tamper resistance, international standards compliance'
    },
    support: {
      ar: 'نقدم علب دوائية، نشرات Leaflets، ملصقات أمان، بطاقات تحذير، وطباعة دوائية بأعلى درجات الدقة',
      en: 'We offer medicine boxes, leaflets, security labels, warning cards, and pharmaceutical printing with highest precision'
    },
    whyPrecision: {
      ar: 'في الدواء، الخطأ في الطباعة أو التغليف قد يكون له عواقب خطيرة. نلتزم بأعلى معايير الدقة والمراقبة الجودة.',
      en: 'In pharmaceuticals, errors in printing or packaging can have serious consequences. We adhere to the highest precision and quality control standards.'
    },
    features: [
      { ar: 'متوافق مع معايير الجودة الصناعية', en: 'Compliant with industrial quality standards' },
      { ar: 'طباعة نصوص دقيقة جداً للنشرات', en: 'Ultra-precise text printing for leaflets' },
      { ar: 'أمان ضد التلاعب (Tamper-evident)', en: 'Tamper-evident security' },
      { ar: 'مواد دوائية معتمدة وآمنة', en: 'Approved and safe pharmaceutical materials' },
    ],
    imageUrl: '/medical2.png',
    color: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-500',
  },
  {
    id: 'cosmetics',
    icon: 'FaSpa',
    title: { ar: 'مستحضرات التجميل', en: 'Cosmetics & Personal Care' },
    subtitle: { ar: 'تغليف فاخر يعكس هوية علامتك التجارية ويرفع قيمة المنتج الملموسة', en: 'Luxury packaging that reflects your brand identity and elevates tangible product value' },
    description: {
      ar: 'قطاع التجميل يعتمد بشكل كبير على التغليف كأداة تسويقية. نقدم تغليفاً فاخراً باستخدام تشطيبات راقية مثل Spot UV والتذهيب والتغليف المطفي. كل علبة تُصمم لتكون امتداداً للعلامة التجارية وتترك انطباعاً دائماً عند المستهلك.',
      en: 'The cosmetics sector relies heavily on packaging as a marketing tool. We offer luxury packaging using premium finishes like Spot UV, foil stamping, and matte lamination. Every box is designed to be an extension of the brand and leave a lasting impression on the consumer.'
    },
    needs: {
      ar: 'تغليف فاخر وجذاب، تشطيبات راقية (UV، تذهيب)، تصميم يعكس الهوية، جودة ملمس عالية',
      en: 'Luxury and attractive packaging, premium finishes (UV, foil), design reflecting identity, high tactile quality'
    },
    support: {
      ar: 'نقدم علب تجميل فاخرة، علب هدايا، أكياس تسوق مخصصة، ملصقات منتجات، وبروشورات تجميلية',
      en: 'We offer luxury cosmetic boxes, gift boxes, custom shopping bags, product labels, and cosmetic brochures'
    },
    whyPrecision: {
      ar: 'في التجميل، التغليف هو المنتج قبل المنتج. تغليف راقي يعني تسعير أعلى وولاء عميل أقوى.',
      en: 'In cosmetics, packaging is the product before the product. Premium packaging means higher pricing and stronger customer loyalty.'
    },
    features: [
      { ar: 'تشطيب Spot UV فاخر ودقيق', en: 'Luxury and precise Spot UV finishing' },
      { ar: 'تذهيب وتفضيض (Hot Foil)', en: 'Gold & silver hot foil stamping' },
      { ar: 'تصاميم أنيقة وعصرية', en: 'Elegant and modern designs' },
      { ar: 'تغليف مخصص لكل منتج وفئة', en: 'Custom packaging for each product and category' },
    ],
    imageUrl: '/skin.png',
    color: 'from-pink-500/20 to-rose-500/10',
    iconColor: 'text-pink-500',
  },
  {
    id: 'retail',
    icon: 'FaShoppingBag',
    title: { ar: 'التجزئة', en: 'Retail' },
    subtitle: { ar: 'تغليف يجذب الأنظار في نقاط البيع ويعزز قيمة المنتج على الرف', en: 'Eye-catching packaging at points of sale that enhances product value on the shelf' },
    description: {
      ar: 'قطاع التجزئة يتطلب تغليفاً يقفز إلى عين المستهلك بين المنتجات المنافسة. نقدم تصاميم تغليف مبتكرة مع معلومات واضحة ومتانة كافية للنقل والعرض. الباركود والمعلومات الرقمية متكاملة في التصميم.',
      en: 'The retail sector requires packaging that catches the consumer eye among competing products. We offer innovative packaging designs with clear information and sufficient durability for transport and display. Barcode and digital information are integrated into the design.'
    },
    needs: {
      ar: 'تصاميم جذابة لنقاط البيع، معلومات واضحة، متانة للنقل، باركود، تواجد قوي على الرف',
      en: 'Attractive POS designs, clear information, transport durability, barcode, strong shelf presence'
    },
    support: {
      ar: 'نقدم علب تجزئة، عبوات المنتجات، ملصقات الباركود، مطبوعات تسويقية، ونشرات المنتج',
      en: 'We offer retail boxes, product packaging, barcode labels, marketing prints, and product leaflets'
    },
    whyPrecision: {
      ar: 'في التجزئة، لديك ثوانٍ معدودة لجذب انتباه المستهلك. التغليف الدقيق والجذاب هو فرق الربح والخسارة.',
      en: 'In retail, you have seconds to catch consumer attention. Precise and attractive packaging is the difference between profit and loss.'
    },
    features: [
      { ar: 'تصاميم جذابة لنقاط البيع (POS)', en: 'Attractive point-of-sale (POS) designs' },
      { ar: 'معلومات واضحة ومباشرة للمستهلك', en: 'Clear and direct consumer information' },
      { ar: 'متانة للنقل والعرض المتكرر', en: 'Durability for transport and repeated display' },
      { ar: 'باركود ومعلومات رقمية متكاملة', en: 'Integrated barcode and digital information' },
    ],
    imageUrl: '/Retail.png',
    color: 'from-green-500/20 to-emerald-500/10',
    iconColor: 'text-green-500',
  },
  {
    id: 'fashion',
    icon: 'FaTshirt',
    title: { ar: 'الموضة والملابس', en: 'Fashion & Apparel' },
    subtitle: { ar: 'تغليف أنيق يعكس فخامة علامتك التجارية ويرفع من تجربة العميل', en: 'Elegant packaging that reflects your brand luxury and elevates the customer experience' },
    description: {
      ar: 'قطاع الموضة يحتاج تغليفاً يعكس الأناقة والتميز. نصنع علب هدايا فاخرة، أكياس تسوق مخصصة، وملصقات علامة تجارية باستخدام تشطيبات راقية. التغليف يصبح جزءاً من تجربة العميل ويزيد من قيمة المنتج المدركة.',
      en: 'The fashion sector needs packaging that reflects elegance and distinction. We manufacture luxury gift boxes, custom shopping bags, and brand labels using premium finishes. Packaging becomes part of the customer experience and increases perceived product value.'
    },
    needs: {
      ar: 'تغليف فاخر وأنيق، هوية علامة تجارية قوية، تجربة عميل مميزة، تشطيبات راقية',
      en: 'Luxury and elegant packaging, strong brand identity, distinctive customer experience, premium finishes'
    },
    support: {
      ar: 'نقدم علب هدايا، أكياس تسوق، ملصقات ملابس، بطاقات تعليق، وبطاقات شكر للعملاء',
      en: 'We offer gift boxes, shopping bags, clothing labels, hang tags, and customer thank-you cards'
    },
    whyPrecision: {
      ar: 'في الموضة، التغليف هو جزء من القصة. تغليف راقي يعني إعادة شراء وتوصية شفهية.',
      en: 'In fashion, packaging is part of the story. Premium packaging means repeat purchases and word-of-mouth recommendations.'
    },
    features: [
      { ar: 'علب هدايا فاخرة بمغناطيس ورباط', en: 'Luxury gift boxes with magnetic closure and ribbon' },
      { ar: 'أكياس تسوق مخصصة بجودة عالية', en: 'High-quality custom shopping bags' },
      { ar: 'تشطيبات راقية (تذهيب، Spot UV)', en: 'Premium finishes (foil, Spot UV)' },
      { ar: 'تصاميم حصرية تناسب العلامة', en: 'Exclusive designs matching the brand' },
    ],
    imageUrl: '/Fashion.png',
    color: 'from-purple-500/20 to-violet-500/10',
    iconColor: 'text-purple-500',
  },
  {
    id: 'fmcg',
    icon: 'FaChartLine',
    title: { ar: 'السلع الاستهلاكية (FMCG)', en: 'Consumer Goods (FMCG)' },
    subtitle: { ar: 'تغليف اقتصادي وفعّال يدعم سلسلة التوريد ويحافظ على جودة المنتج', en: 'Economical and effective packaging that supports the supply chain and maintains product quality' },
    description: {
      ar: 'قطاع السلع الاستهلاكية يتطلب تغليفاً اقتصادياً وفعّالاً يدعم إنتاجاً كبيراً وسلسلة توريد معقدة. نقدم حلول تغليف بكميات كبيرة مع الحفاظ على جودة الطباعة والتشطيب. التغليف يقاوم العوامل البيئية ويضمن وصول المنتج سليماً.',
      en: 'The FMCG sector requires economical and effective packaging that supports large production and a complex supply chain. We offer packaging solutions in large quantities while maintaining print and finishing quality. Packaging resists environmental factors and ensures the product arrives intact.'
    },
    needs: {
      ar: 'تغليف اقتصادي، إنتاج كميات كبيرة، مقاومة للعوامل البيئية، سرعة في التسليم، دعم سلسلة التوريد',
      en: 'Economical packaging, large quantity production, environmental resistance, fast delivery, supply chain support'
    },
    support: {
      ar: 'نقدم علب استهلاكية، عبوات قابلة للطي، ملصقات منتجات، مطبوعات تسويقية، ونشرات بالكميات الكبيرة',
      en: 'We offer consumer boxes, folding cartons, product labels, marketing prints, and leaflets in large quantities'
    },
    whyPrecision: {
      ar: 'في FMCG، التغليف يؤثر على تكلفة المنتج النهائي. نقدم توازناً بين الجودة والتكلفة لضمان الربحية.',
      en: 'In FMCG, packaging affects the final product cost. We offer a balance between quality and cost to ensure profitability.'
    },
    features: [
      { ar: 'تغليف اقتصادي الكلفة مع جودة صناعية', en: 'Cost-effective packaging with industrial quality' },
      { ar: 'إنتاج كميات كبيرة بسرعة', en: 'Fast large quantity production' },
      { ar: 'مقاوم للعوامل البيئية والتخزين', en: 'Resistant to environmental factors and storage' },
      { ar: 'سرعة في الإنتاج والتسليم', en: 'Fast production and delivery' },
    ],
    imageUrl: '/Consumer.png',
    color: 'from-yellow-500/20 to-amber-500/10',
    iconColor: 'text-yellow-500',
  },
];

export const getIndustryById = (id: string) => industriesData.find((i) => i.id === id);
