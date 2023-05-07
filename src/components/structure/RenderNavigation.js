import { Routes, Route, Link } from 'react-router-dom';
import { nav } from './navigation';

export const RenderRoutes = () => {
    return (
        <>
            <Routes>
                {nav.map((r, i) => <Route key={i} path={r.path} element={r.element} />)}
            </Routes>
        </>
    )
}

export const RenderMenu = () => {
    return (
        <div>
            {nav.map((r, i) => r.isMenu ?
                <div><Link to={r.path}>{r.name}</Link></div>
                : null)}
        </div>
    )
}