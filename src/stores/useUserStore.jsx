// Create a store with a state that matches User.jsx:
// userData, loading, error, fetchUserData

import { create } from "zustand";

export const useUserStore = create(set => ({
	userData: null, //we put it null because we don´t want to display the user data if we have don´t have any user data. whenever there is no data, we won´t display anything
	loading: false,
	error: null,

	fetchUserData: async () => {
		set({ loading: true, error: null })
		try {
			const response = await fetch("https://randomuser.me/api/")

			if (!response.ok) {
				throw new Error("Fetching of user didn´t work")
			}

			const data = await response.json()
			console.log(data.results[0])
			set({ userData: data.results[0] })

		} catch (error) {
			console.log("Error:", error)
			set({ error: error })
		} finally {
			set({ loading: false })
		}
	}
}))

/* We do the fetching of the user, We changed the different initial states here. Once we have fetched the data successfully we change the user data to hold the information about one person. And if there's an error, we see the error. And and finally we set the loading to false. And then in the user component, we are using all of these.  */