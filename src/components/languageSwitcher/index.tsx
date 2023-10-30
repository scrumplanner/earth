"use client"

import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
    const router = useRouter();
    const { locale, pathname } = router;
    const otherLocale = locale === 'tr' ? 'en' : 'tr';

    return (
        <Link href={pathname} locale={otherLocale}>
            <button>{otherLocale.toUpperCase()}</button>
        </Link>
    );
};

export default LanguageSwitcher;
