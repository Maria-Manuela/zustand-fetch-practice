import { useEffect } from "react";

import { useUserStore } from "../stores/useUserStore";

export const User = () => {
	const { userData, loading, error, fetchUserData } = useUserStore(); //in this case, we know that we will use all of these in this user component
	/* 	const userData = useUserStore(state => state.userData) // specific selector is used when you know that is the only thing we use in this component.*/

	useEffect(() => {
		fetchUserData()
	}, [fetchUserData])

	if (loading) {
		return <div>Loading...</div>
	}
	if (error) {
		return <div>Error: {error}</div>
	}

	return userData ? (
		<div>
			<h2>User</h2>
			<p>Name: {userData.name.first} {userData.name.last}
			</p>
			<img src={userData.picture.medium} alt="User" />
		</div>
	) : null
}
/* we pass fifferent initial states and our fetch user data function. By fetching the data. And then rendering different things. And based on the states in our local store. */