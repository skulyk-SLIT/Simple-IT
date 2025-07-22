import { t } from 'ttag';

import { Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { getStrapi } from '@/utils/getStrapi';
import { getEquipmentFooterLinks } from '@/utils/getLinksTree';
import { API } from '@/constants/api';

import styles from './Footer.module.css';
import { OrderCallback } from '../OrderCallback';

export async function Footer() {
  const commonConfig = await getStrapi(API.COMMON_CONFIG);
  const equipmentCategories = await getStrapi(API.EQUIPMENT_CATEGORIES);
  const equipmentFooterLinks = getEquipmentFooterLinks(equipmentCategories);

  return (
    <footer className={styles.container}>
      <div className={styles.section}>
        <div className={styles.column}>
          <Logo />

          <p className={styles.copyright}>
            {commonConfig.attributes.copyright} {new Date().getUTCFullYear()}
          </p>
        </div>

        <div className={styles.column}>
          {equipmentFooterLinks.map((link) => (
            <Link key={link.url} href={link.url}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <Link href="/about-us">{t`About company`}</Link>
          <Link href="/contacts">{t`Contacts`}</Link>
          <Link href="/service">{t`Service`}</Link>
          <Link href="/news">{t`News`}</Link>
          <Link href="/business-conditions">{t`Business conditions`}</Link>
        </div>

        <div className={styles.column}>
          <Link
            className={styles.phoneLink}
            href={`tel:${commonConfig.attributes.phone}`}
          >
            {commonConfig.attributes.phone}
          </Link>

          <OrderCallback />
        </div>
      </div>
    </footer>
  );
}
