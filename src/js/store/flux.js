const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			character: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addRemoveFavorite: (fav) => {
				console.log(fav)
				const store = getStore();
				const isFavorite = store.favorites.some(el => el.uid === fav.uid && el.type === fav.type);
				if (isFavorite){
					//logica para quitar
					setStore({
						favorites: store.favorites.filter(el=> !(el.uid === fav.uid && el.type === fav.type))
					})
				}
				else {
				setStore({ favorites: [...store.favorites, fav]})
			}
				/*  
					Prueba de codigo:
					
					if (!isFavorite)
					else {
					const filtered = store.favorites.filter(el=> el.uid != fav.uid || el.type != fav.type)
					setStore({favorites:filtered})
				}
				console.log(store.favorites); */


			},
			getData: async (type) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}`);
					if (!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
					//console.log('data----->', data)
					//console.log('data.results----->', data.results)
					setStore({ [type]: data.results });
				} catch (error) {
					console.error(error);
				}
			},
			getOne: async (type, uid) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}/${uid}`);
					if (!resp.ok) throw new Error('Error fetching character');
					const data = await resp.json();
					setStore({ detailed: data.result });
				} catch (error) {
					console.error(error);
				}
			},
		}
	};
};

export default getState;
