import { Logo } from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';



export const Navigation = () => {


    return (
        <>
            <div className="d-flex flex-column justify-content-between h-100">
                <div className="d-flex flex-column justify-content-between">
                    <Logo />
                        <NavLink to="/" className="btn btn-outline-primary mb-3" >
                            Bills table
                        </NavLink>
                </div>
            </div>
        </>
    );
}