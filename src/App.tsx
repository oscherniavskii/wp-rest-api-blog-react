import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Main, PostArchive } from './pages';
import { ThemeProvider } from './providers/ThemeContext';

const App: FC = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/posts' element={<PostArchive />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
