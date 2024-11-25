'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { locales } from '@/config';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LanguageSwitcher() {
  const t = useTranslations('switch');
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Select value={locale} onValueChange={handleChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={t('label')} />
        </SelectTrigger>
        <SelectContent>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {t(loc)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
