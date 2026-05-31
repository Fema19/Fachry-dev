export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: string): string {
  const [year, month] = date.split('-');
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

export function getDuration(startDate: string, endDate?: string): string {
  if (!endDate) return 'Present';

  const [startYear, startMonth] = startDate.split('-').map(Number);
  const [endYear, endMonth] = endDate.split('-').map(Number);

  const monthsDiff =
    (endYear - startYear) * 12 + (endMonth - startMonth);
  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12;

  if (years === 0) return `${months} month${months > 1 ? 's' : ''}`;
  if (months === 0) return `${years} year${years > 1 ? 's' : ''}`;
  return `${years}y ${months}m`;
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
