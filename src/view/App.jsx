import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'

import Theme from '../styles/theme'
import GlobalStyle from '../styles/globalStyle'

import PostList from '../components/PostList/PostList'
import UserAuth from '../components/UserAuth/UserAuth'
import PostCreate from '../components/PostCreate/PostCreate'
import ProtectedRoute from '../util/ProtectedRoute';

const App = () => (
        <ThemeProvider theme={Theme}>
            <GlobalStyle/>
            <Router>
                <Routes>
                    <Route path="/" element={<UserAuth />} />
                    <Route
                        path="/postlist"
                        element={
                        <ProtectedRoute>
                            <PostList />
                        </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/postcreate"
                        element={
                        <ProtectedRoute>
                            <PostCreate />
                        </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    )


export default App