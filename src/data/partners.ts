import { Partner } from '../types';

export const partnersData: Partner[] = [
  { id: 'p-001', name: 'Chipsy', sector: { ar: 'أغذية', en: 'Food' }, type: 'client' },
  { id: 'p-002', name: "L'Oréal Paris", sector: { ar: 'تجميل', en: 'Cosmetics' }, type: 'client' },
  { id: 'p-003', name: 'Edita', sector: { ar: 'أغذية', en: 'Food' }, type: 'client' },
  { id: 'p-004', name: 'Eva Pharma', sector: { ar: 'دواء', en: 'Pharma' }, type: 'client' },
  { id: 'p-005', name: 'EIPICO', sector: { ar: 'دواء', en: 'Pharma' }, type: 'client' },
  { id: 'p-006', name: 'Unilever Egypt', sector: { ar: 'FMCG', en: 'FMCG' }, type: 'client' },
  { id: 'p-007', name: 'Nestlé Egypt', sector: { ar: 'أغذية', en: 'Food' }, type: 'client' },
  { id: 'p-008', name: 'Reckitt Benckiser', sector: { ar: 'FMCG', en: 'FMCG' }, type: 'client' },
  { id: 'p-009', name: 'Americana Group', sector: { ar: 'أغذية', en: 'Food' }, type: 'client' },
  { id: 'p-010', name: 'Juhayna', sector: { ar: 'أغذية ومشروبات', en: 'Food & Beverage' }, type: 'client' },
  { id: 'p-011', name: 'Delta Pharma', sector: { ar: 'دواء', en: 'Pharma' }, type: 'client' },
  { id: 'p-012', name: 'ELARABY Group', sector: { ar: 'إلكترونيات', en: 'Electronics' }, type: 'client' },
];

export const trustStats = [
  { value: '10+', label: { ar: 'سنوات خبرة', en: 'Years Experience' }, desc: { ar: 'في صناعة التغليف والطباعة', en: 'In packaging & printing industry' } },
  { value: '500+', label: { ar: 'مشروع منجز', en: 'Projects Completed' }, desc: { ar: 'بأعلى معايير الجودة', en: 'With highest quality standards' } },
  { value: '100+', label: { ar: 'عميل راضٍ', en: 'Satisfied Clients' }, desc: { ar: 'في مصر والشرق الأوسط', en: 'Across Egypt & the Middle East' } },
  { value: '95%', label: { ar: 'معدل رضا العملاء', en: 'Client Satisfaction Rate' }, desc: { ar: 'بناءً على تقييمات العملاء', en: 'Based on client feedback' } },
];
