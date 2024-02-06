// example

import { ChangeEventHandler, DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	name: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  prop: string;
}
