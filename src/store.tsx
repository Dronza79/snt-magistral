
import { create } from "zustand"

interface typeContacts {
	site_url: string;
	site_title: string;
	site_email: string;
	site_social: string;
	site_telegram: string;
	site_postal: string;
}


// export const useZustand = create((set) => ({
//   data: {},

//   isUpdate: (res) =>
//     set((state) => {
//       console.log(res);

//       return { data: { ...state.data, ...res } };
//     }),
// }));



// interface State {
// 	data: Record<string, any>;
// 	isUpdateContacts: (contacts: typeContacts) => void;
//  }

// export const useZustand = create((set) => ({
//   data: {},

//   isUpdateContacts: (contacts: typeContacts) =>
//     set((state) => {
//       console.log(contacts);

//       return { data: { ...state.data, ...contacts } };
//     }),
// }));

interface State {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  isUpdateContacts: (contacts: typeContacts) => void;
}

export const useZustand = create<State>((set) => ({
  data: {},
  isUpdateContacts: (contacts: typeContacts) =>
    set((state: State) => {
      console.log(contacts);

      return {
        data: { ...state.data, ...contacts },
        isUpdateContacts: state.isUpdateContacts,
      };
    }),
}));

