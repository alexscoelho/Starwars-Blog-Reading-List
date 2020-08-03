const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [
				// {
				// 	name: "test",
				// 	description:
				// 		"Some quick example text to build on the card title and make up the bulk of the cardscontent."
				// },
				// {
				// 	name: "test",
				// 	description:
				// 		"Some quick example text to build on the card title and make up the bulk of the cardscontent."
				// },
				// {
				// 	name: "test",
				// 	description:
				// 		"Some quick example text to build on the card title and make up the bulk of the cardscontent."
				// }
			],
			characters: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addToFavorites: item => {
				setStore({ favorites: getStore().favorites.concat(item) });
			},
			handleDelete: index => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(current => current !== store.favorites[index]) });
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
