import './styles/App.scss';
import { publicRoutes, privateRoutes, isAuthenticated } from './routes/routes';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import MainLayout from './layouts/mainLayout/mainLayout';
import React from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = MainLayout;

                        // Kiểm tra nếu route có layout chỉ định
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = React.Fragment; // Sử dụng React.Fragment
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {isAuthenticated() &&
                        privateRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = MainLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = React.Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}

                    {!isAuthenticated() && (
                        <Route
                            path="/admin"
                            element={<Navigate to="/login" />}
                        />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
