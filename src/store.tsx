
import { create } from "zustand"

interface typeContacts {
	site_url: string;
	site_title: string;
	site_email: string;
	site_social: string;
	site_telegram: string;
	site_postal: string;
}


interface State {
  data: Record<string, string>;
  isUpdateContacts?: (contacts: typeContacts) => void;
}

export const useZustandContact = create<State>((set) => ({
  data: {},
  isUpdateContacts: (contacts: typeContacts) =>
    set((state: State) => {
      return {
        data: { ...state.data, ...contacts },
        isUpdateContacts: state.isUpdateContacts,
      };
    }),
}));

export interface fileNewsType {
	file_name: string; 
	file_descr: string; 
	file: string
}

export interface NewsType {
	id:number;
	autor: string;
	content_news: string;
	file_news?: fileNewsType[];
	pub_date: string;
	tag_news: string;
	title_news: string;
	[Symbol.iterator](): IterableIterator<keyof NewsType>;
 }

 export interface NewsStateType {
	data: NewsType[];
	isUpdateNews: (news: NewsType) => void;
 }
export const useZustandNews = create((set) => ({
  data: [],
  isUpdateNews: (news:NewsType) =>
    set(() => ({
      data: [ ...news],
    })),
}));

