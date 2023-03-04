import { useTranslation } from '../../../i18n/client';

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'calendar');

  return <div>calendar</div>;
}
