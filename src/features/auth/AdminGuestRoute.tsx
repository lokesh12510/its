import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

// urls
import { adminUrls } from "../../modules/admin/urls";
import { selectCurrentToken } from "./authSlice";

interface Props {
	children: JSX.Element;
}

const AdminGuestRoute: FC<Props> = ({ children }) => {
	const token = useAppSelector(selectCurrentToken);

	// if logged in
	if (token !== null) {
		return <Navigate to={adminUrls.project} replace />;
	}

	return children;
};

export default AdminGuestRoute;
