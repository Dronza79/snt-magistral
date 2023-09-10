
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
  isUpdateContacts: (contacts: typeContacts) => void;
}

export const useZustand = create<State>((set) => ({
  data: {},
  isUpdateContacts: (contacts: typeContacts) =>
    set((state: State) => {
      return {
        data: { ...state.data, ...contacts },
        isUpdateContacts: state.isUpdateContacts,
      };
    }),
}));

