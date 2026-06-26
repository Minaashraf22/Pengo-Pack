import { Testimonial } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: 't-001',
    name: { ar: 'أحمد محمد', en: 'Ahmed Mohamed' },
    role: { ar: 'مدير التسويق', en: 'Marketing Manager' },
    company: { ar: 'شركة أغذية رائدة', en: 'Leading Food Company' },
    text: {
      ar: 'تعاملنا مع Pengo Pack في مشروع تغليف منتجاتنا الجديدة. النتيجة كانت ممتازة: جودة طباعة عالية، التزام بالمواعيد، ودعم فني متميز. التغليف الجديد ساهم في زيادة المبيعات بنسبة ملحوظة.',
      en: 'We worked with Pengo Pack on our new product packaging project. The result was excellent: high print quality, on-time delivery, and outstanding technical support. The new packaging contributed to a noticeable increase in sales.'
    },
    rating: 5,
    sector: 'food-beverage',
  },
  {
    id: 't-002',
    name: { ar: 'سارة أحمد', en: 'Sara Ahmed' },
    role: { ar: 'مديرة المشتريات', en: 'Procurement Director' },
    company: { ar: 'شركة دوائية كبرى', en: 'Major Pharmaceutical Company' },
    text: {
      ar: 'نحتاج في قطاع الدواء إلى دقة لا تقل عن 100% في الطباعة والتغليف. Pengo Pack تلبي هذا المطلب باستمرار. تعاملنا معهم منذ سنوات وهم دائماً يقدمون الجودة المطلوبة.',
      en: 'In the pharmaceutical sector, we need no less than 100% precision in printing and packaging. Pengo Pack consistently meets this requirement. We have worked with them for years and they always deliver the required quality.'
    },
    rating: 5,
    sector: 'pharmaceutical',
  },
  {
    id: 't-003',
    name: { ar: 'محمد خالد', en: 'Mohamed Khaled' },
    role: { ar: 'مدير المصنع', en: 'Plant Manager' },
    company: { ar: 'شركة سلع استهلاكية', en: 'FMCG Company' },
    text: {
      ar: 'السرعة في الإنتاج والتسليم هي أولويتنا. Pengo Pack تدير هذا بكفاءة عالية. نستلم طلباتنا الكبيرة في الوقت المحدد دون أي تنازل عن الجودة. شريك موثوق.',
      en: 'Speed in production and delivery is our priority. Pengo Pack manages this with high efficiency. We receive our large orders on time without any compromise on quality. A reliable partner.'
    },
    rating: 5,
    sector: 'fmcg',
  },
  {
    id: 't-004',
    name: { ar: 'نورا حسن', en: 'Nora Hassan' },
    role: { ar: 'مديرة العلامة التجارية', en: 'Brand Manager' },
    company: { ar: 'علامة تجميل فاخرة', en: 'Luxury Cosmetics Brand' },
    text: {
      ar: 'التغليف في التجميل هو جزء من القصة. Pengo Pack فهمت رؤيتنا تماماً ونفذت تغليفاً يبرز فخامة منتجاتنا. التشطيبات (Spot UV، تذهيب) كانت بجودة عالمية.',
      en: 'Packaging in cosmetics is part of the story. Pengo Pack understood our vision perfectly and executed packaging that highlights our product luxury. The finishes (Spot UV, foil) were world-class quality.'
    },
    rating: 5,
    sector: 'cosmetics',
  },
  {
    id: 't-005',
    name: { ar: 'عمرو سامي', en: 'Amro Samy' },
    role: { ar: 'مدير التوريد', en: 'Supply Chain Director' },
    company: { ar: 'سلسلة تجزئة كبرى', en: 'Major Retail Chain' },
    text: {
      ar: 'نطلب شهرياً كميات كبيرة من التغليف لعدة فروع. Pengo Pack تدير الجدولة والتسليم بكفاءة. التنسيق معهم سهل والجودة ثابتة عبر جميع الدفعات.',
      en: 'We request large quantities of packaging monthly for several branches. Pengo Pack manages scheduling and delivery efficiently. Coordination with them is easy and quality is consistent across all batches.'
    },
    rating: 5,
    sector: 'retail',
  },
];
