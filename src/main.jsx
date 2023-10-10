import React from 'react'
import ReactDOM from 'react-dom/client'

// Pages
import Home from './pages/Home.jsx'
import Bank from './pages/Bank.jsx'
import Safe from './pages/Safe.jsx'
import Fight from './pages/Fight.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/bank",
		element: <Bank />,
	},
	{
		path: "/safe",
		element: <Safe />,
	},
	{
		path: "/fight",
		element: <Fight />,
	},
]);

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
