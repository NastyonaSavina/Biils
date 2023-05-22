import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/auth.operations";
import { selectUser } from "redux/auth/auth.selectors";


export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className="card text-center mb-3" style={{ width: 'auto' }}>
            <div className="card-body">
                <p className="card-title mb-4">Welcome, {user.name}</p>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => dispatch(logOut())}>Logout</button>
            </div>
        </div>
    )
}