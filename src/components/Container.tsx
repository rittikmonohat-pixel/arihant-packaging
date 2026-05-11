import { cn } from '@/lib/utils';

export default function Container({
  children, className, as: Tag = 'div', size = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  size?: 'default' | 'narrow' | 'wide';
}) {
  const sizes = {
    narrow: 'max-w-3xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
  };
  return (
    // @ts-expect-error - dynamic tag
    <Tag className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </Tag>
  );
}
