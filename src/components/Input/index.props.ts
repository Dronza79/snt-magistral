// example

import { ChangeEventHandler, DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  username: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
