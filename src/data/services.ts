import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'offset-printing',
    icon: 'FaPrint',
    title: { ar: 'الطباعة الأوفست', en: 'Offset Printing' },
    shortDesc: { ar: 'طباعة أوفست احترافية للكميات المتوسطة والكبيرة بجودة مستمرة وألوان متناسقة', en: 'Professional offset printing for medium to large quantities with consistent quality and uniform colors' },
    fullDesc: {
      ar: 'تُعد الطباعة الأوفست الخيار المثالي للمشروعات التي تتطلب كميات متوسطة إلى كبيرة من المطبوعات التجارية والتغليف. نستخدم ألواحاً عالية الدقة لضمان تناسق الألوان عبر الدفعات المختلفة، مما يجعلها الخيار المفضل للشركات التي تطلب إنتاجاً موحداً على المدى الطويل.',
      en: 'Offset printing is the ideal choice for projects requiring medium to large quantities of commercial prints and packaging. We use high-precision plates to ensure color consistency across different batches, making it the preferred choice for companies that need uniform production over the long term.'
    },
    suitableFor: {
      ar: 'العلب التجارية، البروشورات، الكتالوجات، المطبوعات الدوائية، المطبوعات الإعلانية، عبوات التجزئة',
      en: 'Commercial boxes, brochures, catalogs, pharmaceutical prints, advertising materials, retail packaging'
    },
    typicalOutputs: [
      { ar: 'علب كرتونية مطبوعة بالأوفست', en: 'Offset-printed carton boxes' },
      { ar: 'بروشورات وكتيبات تجارية', en: 'Commercial brochures and booklets' },
      { ar: 'نشرات دوائية وملصقات', en: 'Pharmaceutical inserts and labels' },
      { ar: 'مطبوعات الإعلانات والتسويق', en: 'Advertising and marketing prints' },
    ],
    whyChoose: [
      { ar: 'تناسق الألوان عبر الدفعات المختلفة', en: 'Color consistency across batches' },
      { ar: 'جودة طباعة عالية مع تفاصيل دقيقة', en: 'High print quality with fine details' },
      { ar: 'تكلفة منخفضة للوحدة في الكميات الكبيرة', en: 'Lower per-unit cost for large quantities' },
      { ar: 'دعم طباعة CMYK وأحبار خاصة', en: 'CMYK and special ink support' },
    ],
    benefits: [
      { ar: 'ألوان متجانسة ومتناسقة', en: 'Uniform and consistent colors' },
      { ar: 'مناسبة للكميات الكبيرة (5,000+)', en: 'Suitable for large quantities (5,000+)' },
      { ar: 'إنتاج سريع بعد الإعداد', en: 'Fast production after setup' },
      { ar: 'سطح طباعة ناعم ومتسق', en: 'Smooth and consistent print surface' },
    ],
    process: [
      { ar: 'مراجعة الملفات وتجهيز الألواح', en: 'File review and plate preparation' },
      { ar: 'ضبط الألوان وإنتاج العينة', en: 'Color calibration and proof production' },
      { ar: 'الطباعة الأوفست على الماكينة', en: 'Offset printing on press' },
      { ar: 'التشطيب والتعبئة والتسليم', en: 'Finishing, packing, and delivery' },
    ],
    finishingOptions: [
      { ar: 'تلميع UV', en: 'UV Coating' },
      { ar: 'تغليف لامع / مطفي', en: 'Gloss / Matte Lamination' },
      { ar: 'تذهيب وتفضيض', en: 'Gold & Silver Foil' },
      { ar: 'الورنيش المائي', en: 'Aqueous Varnish' },
    ],
    tags: [
      { ar: 'CMYK', en: 'CMYK' },
      { ar: 'كميات كبيرة', en: 'Large Volume' },
      { ar: 'تناسق الألوان', en: 'Color Consistency' },
    ],
    imageUrl: '/2.png',
    ctaLink: '/contact',
  },
  {
    id: 'digital-printing',
    icon: 'FaTabletAlt',
    title: { ar: 'الطباعة الرقمية', en: 'Digital Printing' },
    shortDesc: { ar: 'طباعة رقمية عالية الدقة للكميات الصغيرة، النماذج الأولية، والمشاريع العاجلة', en: 'High-resolution digital printing for small quantities, prototypes, and urgent projects' },
    fullDesc: {
      ar: 'تتيح الطباعة الرقمية إنتاج مطبوعات عالية الجودة دون الحاجة لإعداد ألواح طباعية، مما يجعلها الخيار المثالي للكميات الصغيرة، النماذج التجريبية، والمشاريع ذات المواعيد النهائية الضيقة. يمكن تخصيص البيانات لكل قطعة، وهو ما يفيد في الطباعة المتغيرة.',
      en: 'Digital printing enables high-quality print production without the need for printing plates, making it ideal for small quantities, prototypes, and projects with tight deadlines. Variable data can be customized for each piece, which is useful in variable printing.'
    },
    suitableFor: {
      ar: 'النماذج الأولية، الكميات الصغيرة (100–3000)، المشاريع العاجلة، البيانات المتغيرة، المطبوعات المخصصة',
      en: 'Prototypes, small quantities (100–3000), urgent projects, variable data, custom prints'
    },
    typicalOutputs: [
      { ar: 'نماذج أولية للتغليف', en: 'Packaging prototypes' },
      { ar: 'ملصقات وإستيكرات مخصصة', en: 'Custom labels and stickers' },
      { ar: 'بطاقات شخصية وبيانات متغيرة', en: 'Business cards and variable data' },
      { ar: 'مطبوعات قصيرة الأجل', en: 'Short-run prints' },
    ],
    whyChoose: [
      { ar: 'لا حاجة لألواح طباعية — وفر في التكلفة للكميات الصغيرة', en: 'No printing plates needed — cost savings for small quantities' },
      { ar: 'إنتاج سريع جداً — من الملف إلى الطباعة في ساعات', en: 'Very fast production — from file to print in hours' },
      { ar: 'دعم البيانات المتغيرة (أسماء، أرقام، باركود)', en: 'Variable data support (names, numbers, barcodes)' },
      { ar: 'إمكانية تعديل الملف بين الدفعات', en: 'Ability to modify files between batches' },
    ],
    benefits: [
      { ar: 'مناسبة للكميات الصغيرة والمتوسطة', en: 'Suitable for small and medium quantities' },
      { ar: 'دقة ألوان عالية مع دقة 1200 DPI', en: 'High color accuracy at 1200 DPI' },
      { ar: 'تكلفة أولية أقل بكثير من الأوفست', en: 'Much lower initial cost than offset' },
      { ar: 'مناسبة للنماذج واختبارات السوق', en: 'Suitable for prototypes and market tests' },
    ],
    process: [
      { ar: 'مراجعة الملفات الرقمية', en: 'Digital file review' },
      { ar: 'ضبط الألوان وإنتاج العينة', en: 'Color calibration and proof' },
      { ar: 'الطباعة الرقمية المباشرة', en: 'Direct digital printing' },
      { ar: 'القص والتشطيب والتسليم السريع', en: 'Cutting, finishing, and fast delivery' },
    ],
    finishingOptions: [
      { ar: 'تلميع UV رقمي', en: 'Digital UV Coating' },
      { ar: 'قص دقيق (Die-cutting)', en: 'Precision Die-cutting' },
      { ar: 'تغليف حراري', en: 'Thermal Lamination' },
      { ar: 'طي وتركيب', en: 'Folding and Assembly' },
    ],
    tags: [
      { ar: 'كميات صغيرة', en: 'Short Run' },
      { ar: 'عاجل', en: 'Urgent' },
      { ar: 'نماذج', en: 'Prototype' },
    ],
    imageUrl: '/digital.png',
    ctaLink: '/contact',
  },
  {
    id: 'folding-cartons',
    icon: 'FaBoxOpen',
    title: { ar: 'علب الكرتون القابلة للطي', en: 'Folding Cartons & Product Boxes' },
    shortDesc: { ar: 'تصنيع علب كرتونية مخصصة القابلة للطي لحماية المنتج وتقديمه بشكل احترافي على الرف', en: 'Manufacturing custom foldable carton boxes to protect products and present them professionally on shelf' },
    fullDesc: {
      ar: 'نصنع علب الكرتون القابلة للطي بمواصفات مخصصة تناسب أبعاد المنتج ومتطلبات التخزين والنقل. يبدأ العمل من مراجعة الهيكل الهندسي (Dieline) وصولاً إلى طي وتجميع العلب النهائية. تتضمن الخدمة اختيار خامات الكرتون (Duplex، Ivory، Art Paper) وتحديد نوع الطي والتجميع المناسب.',
      en: 'We manufacture folding cartons with custom specifications that fit the product dimensions and storage/transport requirements. The process begins with reviewing the structural design (Dieline) and ends with folding and assembling the final boxes. The service includes selecting carton materials (Duplex, Ivory, Art Paper) and determining the appropriate folding and assembly type.'
    },
    suitableFor: {
      ar: 'عبوات التجزئة، علب المنتجات الاستهلاكية، التغليف الدوائي، التغليف الغذائي، علب الهدايا، التغليف التجميلي',
      en: 'Retail packaging, consumer product boxes, pharmaceutical packaging, food packaging, gift boxes, cosmetic packaging'
    },
    typicalOutputs: [
      { ar: 'علب كرتونية قابلة للطي (Folding Cartons)', en: 'Folding Cartons' },
      { ar: 'علب المنتجات الاستهلاكية (FMCG)', en: 'FMCG Product Boxes' },
      { ar: 'علب دوائية مع طي آلي', en: 'Pharmaceutical boxes with auto-lock' },
      { ar: 'علب هدايا فاخرة مع مغناطيس', en: 'Luxury gift boxes with magnetic closure' },
    ],
    whyChoose: [
      { ar: 'تصميم هيكلي (Dieline) مخصص لكل منتج', en: 'Custom structural design (Dieline) for each product' },
      { ar: 'خامات كرتون متنوعة بأوزان مختلفة', en: 'Various carton materials in different weights' },
      { ar: 'طي وتجميع دقيق للحفاظ على الشكل', en: 'Precise folding and assembly to maintain shape' },
      { ar: 'طباعة متكاملة داخل وخارج العلبة', en: 'Integrated printing inside and outside the box' },
    ],
    benefits: [
      { ar: 'حماية فعّالة للمنتج أثناء النقل والتخزين', en: 'Effective product protection during transport and storage' },
      { ar: 'تقديم جذاب على الرف يعزز المبيعات', en: 'Attractive shelf presentation that boosts sales' },
      { ar: 'توفير في مساحة التخزين (Flat-packed)', en: 'Storage space savings (Flat-packed)' },
      { ar: 'تصميم مخصص لأبعاد المنتج', en: 'Custom design for product dimensions' },
    ],
    process: [
      { ar: 'مراجعة المنتج وتحديد الأبعاد والهيكل', en: 'Product review and dimension/structure determination' },
      { ar: 'تصميم Dieline وإنتاج القوالب', en: 'Dieline design and die production' },
      { ar: 'الطباعة والتلميع والتغليف', en: 'Printing, coating, and lamination' },
      { ar: 'القص (Die-cutting) والطي والتجميع', en: 'Die-cutting, folding, and assembly' },
    ],
    finishingOptions: [
      { ar: 'تغليف لامع / مطفي', en: 'Gloss / Matte Lamination' },
      { ar: 'تلميع UV جزئي (Spot UV)', en: 'Spot UV' },
      { ar: 'تذهيب وتفضيض', en: 'Gold & Silver Foil' },
      { ar: 'تجعيد وطي دقيق', en: 'Precision Creasing and Folding' },
    ],
    tags: [
      { ar: 'تغليف', en: 'Packaging' },
      { ar: 'كرتون', en: 'Carton' },
      { ar: 'قابل للطي', en: 'Folding' },
    ],
    imageUrl: '/Carton.png',
    ctaLink: '/contact',
  },
  {
    id: 'commercial-printing',
    icon: 'FaIndustry',
    title: { ar: 'المطبوعات التجارية', en: 'Commercial Printing' },
    shortDesc: { ar: 'مطبوعات تجارية احترافية تشمل البروشورات، الكتالوجات، الكتب، والمطبوعات المؤسسية', en: 'Professional commercial printing including brochures, catalogs, books, and corporate prints' },
    fullDesc: {
      ar: 'نقدم خدمة المطبوعات التجارية بأشكالها المتعددة، من البروشورات والكتالوجات إلى الكتب والدلائل المؤسسية. نركز على دقة الألوان وجودة الورق والتشطيب النهائي لضمان أن كل مطبوعة تعكس احترافية العلامة التجارية.',
      en: 'We offer commercial printing services in various forms, from brochures and catalogs to books and corporate directories. We focus on color accuracy, paper quality, and final finishing to ensure that every print reflects the brand professionalism.'
    },
    suitableFor: {
      ar: 'البروشورات، الكتالوجات، الكتب، الدلائل، المطبوعات المؤسسية، المجلات، التقارير السنوية',
      en: 'Brochures, catalogs, books, directories, corporate prints, magazines, annual reports'
    },
    typicalOutputs: [
      { ar: 'بروشورات مطوية (Bi-fold, Tri-fold, Z-fold)', en: 'Folded brochures (Bi-fold, Tri-fold, Z-fold)' },
      { ar: 'كتالوجات منتجات بالألوان الكاملة', en: 'Full-color product catalogs' },
      { ar: 'كتب وتقارير سنوية', en: 'Books and annual reports' },
      { ar: 'مطبوعات مؤسسية ودعائية', en: 'Corporate and promotional prints' },
    ],
    whyChoose: [
      { ar: 'دقة ألوان عالية تتناسب مع هوية العلامة', en: 'High color accuracy matching brand identity' },
      { ar: 'خامات ورق متنوعة بأوزان وجودات مختلفة', en: 'Various paper materials with different weights and qualities' },
      { ar: 'تشطيبات متعددة (تغليف، طي، تجليد)', en: 'Multiple finishes (lamination, folding, binding)' },
      { ar: 'إمكانية الإنتاج بالكميات الكبيرة', en: 'Ability to produce in large quantities' },
    ],
    benefits: [
      { ar: 'تناسق الألوان عبر جميع المطبوعات', en: 'Color consistency across all prints' },
      { ar: 'خيارات ورق واسعة', en: 'Wide paper options' },
      { ar: 'تشطيبات احترافية', en: 'Professional finishing' },
      { ar: 'تكلفة تنافسية للكميات الكبيرة', en: 'Competitive pricing for large quantities' },
    ],
    process: [
      { ar: 'مراجعة الملفات وتصحيح الألوان', en: 'File review and color correction' },
      { ar: 'إنتاج العينة واعتمادها', en: 'Proof production and approval' },
      { ar: 'الطباعة والتشطيب', en: 'Printing and finishing' },
      { ar: 'التجليد والتعبئة والتسليم', en: 'Binding, packing, and delivery' },
    ],
    finishingOptions: [
      { ar: 'تغليف لامع / مطفي', en: 'Gloss / Matte Lamination' },
      { ar: 'تلميع UV', en: 'UV Coating' },
      { ar: 'تجليد حراري (Perfect Binding)', en: 'Perfect Binding' },
      { ar: 'طي متنوع (Bi-fold, Tri-fold, Gate-fold)', en: 'Various Folding (Bi-fold, Tri-fold, Gate-fold)' },
    ],
    tags: [
      { ar: 'تجاري', en: 'Commercial' },
      { ar: 'كميات كبيرة', en: 'Large Volume' },
      { ar: 'بروشورات', en: 'Brochures' },
    ],
    imageUrl: '/sell.png',
    ctaLink: '/contact',
  },
  {
    id: 'labels-stickers',
    icon: 'FaTags',
    title: { ar: 'الملصقات والإستيكرات', en: 'Labels & Stickers' },
    shortDesc: { ar: 'ملصقات وإستيكرات ذاتية اللصق بأشكال وأحجام مخصصة لجميع الاستخدامات التجارية', en: 'Self-adhesive labels and stickers in custom shapes and sizes for all commercial uses' },
    fullDesc: {
      ar: 'نصنع ملصقات وإستيكرات ذاتية اللصق بمواصفات مخصصة تتناسب مع احتياجات التعبئة والتغليف والتسويق. تشمل الخدمة طباعة على خامات متعددة (ورق، بي في سي، بولي بروبلين، شفاف) مع إمكانية القص الدقيق (Die-cutting) لأي شكل.',
      en: 'We manufacture self-adhesive labels and stickers with custom specifications that fit packaging, labeling, and marketing needs. The service includes printing on multiple materials (paper, PVC, polypropylene, transparent) with precision die-cutting in any shape.'
    },
    suitableFor: {
      ar: 'ملصقات المنتجات، ملصقات العلامات التجارية، الإستيكرات الدعائية، ملصقات الأمان، الباركود والتتبع',
      en: 'Product labels, brand labels, promotional stickers, security labels, barcode and tracking'
    },
    typicalOutputs: [
      { ar: 'ملصقات منتجات ذاتية اللصق', en: 'Self-adhesive product labels' },
      { ar: 'إستيكرات دعائية وعلامات تجارية', en: 'Promotional stickers and brand labels' },
      { ar: 'ملصقات أمان وكسر الختم', en: 'Security and tamper-evident labels' },
      { ar: 'ملصقات شفافة وورقية ومقاومة للماء', en: 'Transparent, paper, and waterproof labels' },
    ],
    whyChoose: [
      { ar: 'خامات متعددة (ورق، PVC، بولي بروبلين، شفاف)', en: 'Multiple materials (paper, PVC, polypropylene, transparent)' },
      { ar: 'قص دقيق (Die-cutting) لأي شكل مخصص', en: 'Precision die-cutting in any custom shape' },
      { ar: 'طباعة دقيقة للنصوص الصغيرة والباركود', en: 'Precise printing for small text and barcodes' },
      { ar: 'مقاومة للماء والزيوت والعوامل البيئية', en: 'Water, oil, and environmental resistance' },
    ],
    benefits: [
      { ar: 'لصق قوي ودائم على الأسطح المختلفة', en: 'Strong and lasting adhesion on different surfaces' },
      { ar: 'ألوان حية ودقيقة', en: 'Vivid and accurate colors' },
      { ar: 'مناسبة للطعام والدواء والتجميل', en: 'Suitable for food, pharma, and cosmetics' },
      { ar: 'إنتاج سريع للكميات الصغيرة والكبيرة', en: 'Fast production for small and large quantities' },
    ],
    process: [
      { ar: 'تحديد المادة والأبعاد والشكل', en: 'Material, dimensions, and shape determination' },
      { ar: 'تصميم الملف وإنتاج القالب', en: 'File design and die production' },
      { ar: 'الطباعة والتلميع', en: 'Printing and coating' },
      { ar: 'القص والتعبئة والتسليم', en: 'Cutting, packing, and delivery' },
    ],
    finishingOptions: [
      { ar: 'تلميع UV', en: 'UV Coating' },
      { ar: 'تغليف لامع / مطفي', en: 'Gloss / Matte Lamination' },
      { ar: 'قص دقيق (Die-cutting)', en: 'Precision Die-cutting' },
      { ar: 'ختم ساخن (Hot Foil)', en: 'Hot Foil Stamping' },
    ],
    tags: [
      { ar: 'ملصقات', en: 'Labels' },
      { ar: 'إستيكرات', en: 'Stickers' },
      { ar: 'ذاتي اللصق', en: 'Self-adhesive' },
    ],
    imageUrl: 'sticker.png',
    ctaLink: '/contact',
  },
  {
    id: 'pharmaceutical-inserts',
    icon: 'FaPills',
    title: { ar: 'المطبوعات الدوائية', en: 'Pharmaceutical Inserts & Leaflets' },
    shortDesc: { ar: 'نشرات ونشرات دوائية مطبوعة بدقة عالية لضمان وضوح المعلومات الطبية', en: 'High-precision printed pharmaceutical inserts and leaflets to ensure clarity of medical information' },
    fullDesc: {
      ar: 'نقدم خدمة طباعة المطبوعات الدوائية (Inserts وLeaflets) بدقة عالية تضمن وضوح النصوص الطبية الصغيرة. نستخدم ورقاً معتمداً ونلتزم بمعايير الجودة في الطباعة والطي والتعبئة لضمان أن المطبوعات الدوائية تصل إلى العميل في أفضل حالة.',
      en: 'We offer pharmaceutical insert and leaflet printing services with high precision to ensure clarity of small medical text. We use approved paper and adhere to quality standards in printing, folding, and packing to ensure pharmaceutical prints reach the client in the best condition.'
    },
    suitableFor: {
      ar: 'نشرات الأدوية، نشرات التحذيرات الطبية، المطبوعات الدوائية المطوية، بطاقات الأمان الدوائية',
      en: 'Medication leaflets, medical warning inserts, folded pharmaceutical prints, drug safety cards'
    },
    typicalOutputs: [
      { ar: 'نشرات دوائية مطوية (Leaflets)', en: 'Folded pharmaceutical leaflets' },
      { ar: 'نشرات إرشادية للمرضى', en: 'Patient instruction inserts' },
      { ar: 'بطاقات الأمان والتحذير', en: 'Safety and warning cards' },
      { ar: 'مطبوعات إدارية دوائية', en: 'Administrative pharmaceutical prints' },
    ],
    whyChoose: [
      { ar: 'طباعة دقيقة للنصوص الصغيرة جداً', en: 'Precise printing for very small text' },
      { ar: 'ورق معتمد ومناسب للاستخدام الدوائي', en: 'Approved and suitable paper for pharmaceutical use' },
      { ar: 'طي دقيق ومتسق مع التعبئة الآمنة', en: 'Precise and consistent folding with safe packing' },
      { ar: 'الالتزام بمعايير الجودة الصناعية', en: 'Compliance with industrial quality standards' },
    ],
    benefits: [
      { ar: 'وضوح النصوص الطبية بنسبة 100%', en: '100% clarity of medical text' },
      { ar: 'طي متسق وسهل الفتح', en: 'Consistent folding and easy to open' },
      { ar: 'تعبئة آمنة للحفاظ على النظافة', en: 'Safe packing to maintain cleanliness' },
      { ar: 'سرعة في الإنتاج للكميات الكبيرة', en: 'Fast production for large quantities' },
    ],
    process: [
      { ar: 'مراجعة الملفات الطبية والتأكد من المحتوى', en: 'Medical file review and content verification' },
      { ar: 'ضبط الطباعة لدقة النصوص الصغيرة', en: 'Print calibration for small text precision' },
      { ar: 'الطباعة والمراقبة الجودة المستمرة', en: 'Printing and continuous quality monitoring' },
      { ar: 'الطي الدقيق والتعبئة والتسليم', en: 'Precise folding, packing, and delivery' },
    ],
    finishingOptions: [
      { ar: 'طي متعدد (Z-fold, C-fold, Gate-fold)', en: 'Multiple folding (Z-fold, C-fold, Gate-fold)' },
      { ar: 'تعبئة آمنة (Poly-bagging)', en: 'Safe packing (Poly-bagging)' },
      { ar: 'ختم حراري (Heat-seal)', en: 'Heat-seal' },
    ],
    tags: [
      { ar: 'دوائي', en: 'Pharma' },
      { ar: 'دقة عالية', en: 'High Precision' },
      { ar: 'نشرات', en: 'Leaflets' },
    ],
    imageUrl: '/medical.png',
    ctaLink: '/contact',
  },
  {
    id: 'post-printing-finishing',
    icon: 'FaCog',
    title: { ar: 'خدمات ما بعد الطباعة', en: 'Post-Printing Finishing' },
    shortDesc: { ar: 'تشطيبات متكاملة تضيف قيمة جمالية وحماية للمطبوعات والتغليف', en: 'Comprehensive finishing that adds aesthetic value and protection to prints and packaging' },
    fullDesc: {
      ar: 'تشمل خدمات ما بعد الطباعة جميع التشطيبات التي تضيف قيمة جمالية وحماية للمطبوعات والتغليف. من التلميع UV إلى التغليف الحراري، من التذهيب إلى القص الدقيق، نقدم تشطيبات متكاملة تضمن أن المنتج النهائي يعكس احترافية العلامة التجارية.',
      en: 'Post-printing finishing services include all finishes that add aesthetic value and protection to prints and packaging. From UV coating to thermal lamination, from foil stamping to precision die-cutting, we offer comprehensive finishing that ensures the final product reflects brand professionalism.'
    },
    suitableFor: {
      ar: 'التغليف الفاخر، المطبوعات التجارية، البطاقات، التغليف الدوائي، التغليف التجميلي، علب الهدايا',
      en: 'Luxury packaging, commercial prints, cards, pharmaceutical packaging, cosmetic packaging, gift boxes'
    },
    typicalOutputs: [
      { ar: 'تلميع UV كامل وجزئي (Spot UV)', en: 'Full and Spot UV Coating' },
      { ar: 'تغليف لامع ومطفي (Lamination)', en: 'Gloss and Matte Lamination' },
      { ar: 'تذهيب وتفضيض (Hot Foil)', en: 'Gold & Silver Hot Foil' },
      { ar: 'قص دقيق (Die-cutting) وأشكال مخصصة', en: 'Precision Die-cutting and custom shapes' },
    ],
    whyChoose: [
      { ar: 'تشطيبات متنوعة على نفس الماكينة', en: 'Various finishes on the same machine' },
      { ar: 'جودة عالية في التلميع والتغليف', en: 'High quality in coating and lamination' },
      { ar: 'دقة في القص والتجعيد', en: 'Precision in cutting and creasing' },
      { ar: 'إنتاج سريع للكميات الكبيرة', en: 'Fast production for large quantities' },
    ],
    benefits: [
      { ar: 'حماية المطبوعات من الخدش والرطوبة', en: 'Protection of prints from scratches and moisture' },
      { ar: 'تعزيز المظهر الجمالي والقيمة الملموسة', en: 'Enhancing aesthetic appearance and tangible value' },
      { ar: 'توفير تشطيبات متكاملة في مكان واحد', en: 'Comprehensive finishes in one place' },
      { ar: 'تقليل وقت التسليم والتكلفة', en: 'Reduced delivery time and cost' },
    ],
    process: [
      { ar: 'فحص المطبوعات قبل التشطيب', en: 'Print inspection before finishing' },
      { ar: 'تطبيق التشطيب المطلوب (UV، تغليف، تذهيب)', en: 'Applying required finish (UV, lamination, foil)' },
      { ar: 'القص والتجعيد والطي', en: 'Cutting, creasing, and folding' },
      { ar: 'الفحص النهائي والتعبئة', en: 'Final inspection and packing' },
    ],
    finishingOptions: [
      { ar: 'تلميع UV كامل', en: 'Full UV Coating' },
      { ar: 'تلميع UV جزئي (Spot UV)', en: 'Spot UV' },
      { ar: 'تغليف حراري لامع / مطفي', en: 'Thermal Gloss / Matte Lamination' },
      { ar: 'تذهيب وتفضيض', en: 'Gold & Silver Foil Stamping' },
      { ar: 'الورنيش المائي والزيتي', en: 'Aqueous & Oil Varnish' },
      { ar: 'قص دقيق (Die-cutting)', en: 'Precision Die-cutting' },
      { ar: 'تجعيد وطي دقيق', en: 'Precision Creasing and Folding' },
      { ar: 'تجليد حراري (Perfect Binding)', en: 'Perfect Binding' },
    ],
    tags: [
      { ar: 'تشطيب', en: 'Finishing' },
      { ar: 'UV', en: 'UV' },
      { ar: 'تغليف', en: 'Lamination' },
    ],
    imageUrl: '/adv.png',
    ctaLink: '/contact',
  },
];

// Quick lookup helpers
export const getServiceById = (id: string): Service | undefined =>
  servicesData.find((s) => s.id === id);

import { BilingualText } from '../types';

export const getServiceOptions = (): BilingualText[] =>
  servicesData.map((s) => s.title);
