import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, ScrollToTop } from './components';
import {
	CategoriesPage,
	CategoryPostsPage,
	MainPage,
	PostArchive,
	UsersPage
} from './pages';
import { ThemeProvider } from './providers/ThemeContext';

const queryClient = new QueryClient();

const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<BrowserRouter>
					<ScrollToTop />
					<Header />
					<main>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/posts' element={<PostArchive />} />
							<Route
								path='/categories'
								element={<CategoriesPage />}
							/>
							<Route
								path='/categories/:slug'
								element={<CategoryPostsPage />}
							/>
							<Route path='/users' element={<UsersPage />} />
						</Routes>
					</main>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
