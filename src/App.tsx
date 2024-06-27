import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Blog, Main } from './pages';
import { ThemeProvider } from './providers/ThemeContext';

const App: FC = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/posts' element={<Blog />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
