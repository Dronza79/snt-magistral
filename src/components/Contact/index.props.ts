// example

import { DetailedHTMLProps, HtmlHTMLAttributes,  } from 'react';
interface SiteInfo {
	site_url: string;
	site_title: string;
	site_email: string;
	site_social: string;
	site_telegram: string;
	site_postal: string;
 }
export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
	// modalActive: boolean
	dop?: boolean
	dataContact?: SiteInfo | null
}