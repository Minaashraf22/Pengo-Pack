import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'faq-001',
    question: { ar: 'ما الفرق بين الطباعة الأوفست والطباعة الرقمية؟', en: 'What is the difference between offset and digital printing?' },
    answer: {
      ar: 'الطباعة الأوفست مثالية للكميات الكبيرة (5000+) مع تناسق ألوان عالٍ وتكلفة منخفضة للوحدة. الطباعة الرقمية مناسبة للكميات الصغيرة والنماذج الأولية مع سرعة إنتاج عالية ولا تحتاج لألواح طباعية.',
      en: 'Offset printing is ideal for large quantities (5000+) with high color consistency and low per-unit cost. Digital printing is suitable for small quantities and prototypes with fast production and no need for printing plates.'
    },
    category: 'services',
  },
  {
    id: 'faq-002',
    question: { ar: 'ما هي الحد الأدنى للكمية؟', en: 'What is the minimum order quantity?' },
    answer: {
      ar: 'الحد الأدنى يعتمد على نوع المنتج. للطباعة الرقمية: 100 قطعة. للطباعة الأوفست: 5000 قطعة. للتغليف الكرتوني: يعتمد على المقاس والخامة. تواصل معنا للحصول على تفاصيل دقيقة.',
      en: 'The minimum depends on product type. For digital printing: 100 pieces. For offset printing: 5000 pieces. For carton packaging: depends on size and material. Contact us for exact details.'
    },
    category: 'orders',
  },
  {
    id: 'faq-003',
    question: { ar: 'كم تستغرق عملية الإنتاج والتسليم؟', en: 'How long does production and delivery take?' },
    answer: {
      ar: 'المدة تتراوح بين 5 إلى 15 يوم عمل حسب تعقيد المشروع والكمية. المشاريع العاجلة (Urgent) يمكن تسليمها في 3-5 أيام. نلتزم بجدول زمني واضح منذ بداية المشروع.',
      en: 'Duration ranges from 5 to 15 business days depending on project complexity and quantity. Urgent projects can be delivered in 3-5 days. We commit to a clear timeline from the start of the project.'
    },
    category: 'orders',
  },
  {
    id: 'faq-004',
    question: { ar: 'هل تقدمون عينات قبل الإنتاج الكامل؟', en: 'Do you provide samples before full production?' },
    answer: {
      ar: 'نعم، نقدم عينات (Proof) مطبوعة للموافقة عليها قبل بدء الإنتاج الكامل. العينة تساعد في التأكد من الألوان والقياسات والتشطيبات قبل الإنتاج.',
      en: 'Yes, we provide printed proof samples for approval before starting full production. The sample helps confirm colors, dimensions, and finishes before production.'
    },
    category: 'services',
  },
  {
    id: 'faq-005',
    question: { ar: 'ما هي صيغ الملفات المقبولة؟', en: 'What file formats are accepted?' },
    answer: {
      ar: 'نقبل الملفات بصيغ: PDF (مفضل)، AI (Adobe Illustrator)، EPS، وPSD. يُفضل أن تكون الملفات بجودة 300 DPI وفي وضع CMYK للطباعة.',
      en: 'We accept files in formats: PDF (preferred), AI (Adobe Illustrator), EPS, and PSD. Files should preferably be at 300 DPI quality and in CMYK mode for printing.'
    },
    category: 'services',
  },
  {
    id: 'faq-006',
    question: { ar: 'هل يمكنكم التعامل مع مشاريع كبيرة بكميات ضخمة؟', en: 'Can you handle large-scale projects with massive quantities?' },
    answer: {
      ar: 'نعم، نتعامل مع مشاريع بكميات تصل إلى مئات الآلاف. لدينا خطوط إنتاج متعددة وقدرة تشغيلية تسمح بإنتاج كميات كبيرة مع الحفاظ على جودة موحدة.',
      en: 'Yes, we handle projects with quantities reaching hundreds of thousands. We have multiple production lines and operational capacity that allows large quantity production while maintaining uniform quality.'
    },
    category: 'services',
  },
  {
    id: 'faq-007',
    question: { ar: 'هل تقدمون خدمة التصميم؟', en: 'Do you offer design services?' },
    answer: {
      ar: 'نعم، لدينا فريق تصميم متخصص يمكنه مساعدتك في تصميم التغليف والمطبوعات. التصميم يتضمن مراجعة الهيكل (Dieline) والألوان والتشطيبات.',
      en: 'Yes, we have a specialized design team that can help you design packaging and prints. Design includes structural review (Dieline), colors, and finishes.'
    },
    category: 'services',
  },
  {
    id: 'faq-008',
    question: { ar: 'ما هي خيارات الدفع؟', en: 'What are the payment options?' },
    answer: {
      ar: 'نقبل الدفع بنسبة 50% عند تأكيد الطلب و50% عند التسليم. للعملاء الدائمين، نقدم شروط دفع مرنة. نقبل التحويل البنكي والشيكات.',
      en: 'We accept 50% payment upon order confirmation and 50% upon delivery. For regular clients, we offer flexible payment terms. We accept bank transfers and checks.'
    },
    category: 'orders',
  },
];
