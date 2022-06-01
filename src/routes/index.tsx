import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminGuestRoute from "../features/auth/AdminGuestRoute";
import RequireAdminAuth from "../features/auth/RequireAuth";
import AdminLayout from "../modules/admin/Layout";
import Error from "../modules/admin/pages/Error";
import adminRoutes from "../modules/admin/urls";

const AppRoutes = () => {
	return (
		<Routes>
			{/* Admin module route */}
			<Route element={<AdminLayout />}>
				{adminRoutes?.map((route, i) => {
					return (
						<Route
							key={i}
							path={route.path}
							element={
								<>
									{route.auth ? (
										<RequireAdminAuth>{route.element}</RequireAdminAuth>
									) : (
										<AdminGuestRoute>{route.element}</AdminGuestRoute>
									)}
								</>
							}
						/>
					);
				})}
			</Route>
			{/* Admin module route */}

			{/* 404 route */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AppRoutes;
