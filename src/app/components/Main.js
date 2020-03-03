import React from 'react';
import CertificateList from './CertificateList';
import SectionTitle from "./SectionTitle";
import Watchlist from "./Watchlist";

const Main = () => {
	return (
		<main>
			<SectionTitle name='Certificates' />
			<CertificateList />
			<SectionTitle name='Currently Watching' />
			<Watchlist />
		</main>
	)
}

export default Main;
