import React from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectCurrentToken } from "../../../features/auth/authSlice";
import Header from "./Header";

const AdminLayout = () => {
	const token = useAppSelector(selectCurrentToken);
	return token ? (
		// if user has auth token
		<main>
			<Header />
			<div>
				<Outlet />
			</div>
			<footer>Footer</footer>
		</main>
	) : (
		// if user is guest
		<Outlet />
	);
};

export default AdminLayout;
