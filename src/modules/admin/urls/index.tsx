import React from "react";
import AdminLogin from "../pages/Auth/AdminLogin";
import AdminRegister from "../pages/Auth/AdminRegister";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Client from "../pages/Client";
import PointsStatement from "../pages/PointsStatement";
import Project from "../pages/Project";
import WorkRequest from "../pages/WorkRequest";

// types
export interface IRoutes {
	path: string;
	element: React.ReactNode;
	auth: boolean;
	role: Array<["Admin" | "User"]>;
}

export const adminUrls = {
	project: "/",
	client: "/client",
	workRequest: "/work-request",
	pointsStatement: "/points-statement",
	// auth
	login: "/login",
	register: "/register",
	forgotPassword: "/forgot-assword",
};

// routes
const adminRoutes = [
	{
		path: adminUrls.project,
		element: <Project />,
		auth: true,
		roles: [],
	},
	{
		path: adminUrls.client,
		element: <Client />,
		auth: true,
		roles: [],
	},
	{
		path: adminUrls.workRequest,
		element: <WorkRequest />,
		auth: true,
		roles: [],
	},
	{
		path: adminUrls.pointsStatement,
		element: <PointsStatement />,
		auth: true,
		roles: [],
	},
	{
		path: adminUrls.login,
		element: <AdminLogin />,
		auth: false,
		roles: [],
	},
	{
		path: adminUrls.register,
		element: <AdminRegister />,
		auth: false,
		roles: [],
	},
	{
		path: adminUrls.forgotPassword,
		element: <ForgotPassword />,
		auth: false,
		roles: [],
	},
];

export default adminRoutes;
