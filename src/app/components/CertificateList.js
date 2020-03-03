import React, {useEffect, useState} from 'react';
import Certificate from "./Certificate";
import { getCertificateList } from "../api/requests";
import { useAuth } from "../context/AuthContext";

const CertificateList = () => {
	const [auth] = useAuth();

	const [certificates, setCertificates] = useState([]);

	useEffect(() => {
	    fetchCerts();
	}, [auth])

	const renderCerts = () => {
		const components = certificates.map(cert => (
			<Certificate title={cert.title} completionDate={cert.completedAt} />
		));

		return components;
	}

	async function fetchCerts() {
	    if (auth) {
            const response = await getCertificateList(auth.authInfo.id);

            setCertificates(response.courses);
        }
	}

	return (
		<div className='certificate-list'>
			{renderCerts()}
		</div>
	)
}

export default CertificateList;
