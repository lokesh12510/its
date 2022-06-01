import { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { adminUrls } from "../../modules/admin/urls";
import { selectCurrentToken } from "./authSlice";

interface Props {
	children: JSX.Element;
}

const RequireAdminAuth: FC<Props> = ({ children }) => {
	const token = useAppSelector(selectCurrentToken);
	const location = useLocation();

	return token ? (
		children
	) : (
		<Navigate to={adminUrls.login} state={{ from: location }} replace />
	);
};

export default RequireAdminAuth;
