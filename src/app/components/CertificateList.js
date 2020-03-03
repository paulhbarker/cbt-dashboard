import React, {useEffect, useState} from 'react';
import Certificate from "./Certificate";
import { getCertificateList } from "../api/requests";
import { useAuth } from "../context/AuthContext";

const CertificateList = () => {
	const [auth] = useAuth();

	const [certificates, setCertificates] = useState([]);

	useEffect(() => {
        async function fetchCerts() {
            if (auth) {
                const response = await getCertificateList(auth.authInfo.id);

                setCertificates(response.courses);
            }
        }

	    fetchCerts();
	}, [auth])

	const renderCerts = () => {
	    if (certificates.length === 0) {
	        return <div>No Data</div>
        }

		const components = certificates.map((cert, i) => (
			<Certificate key={i} title={cert.title} completionDate={cert.completedAt} />
		));

		return components;
	}

	return (
		<div className='certificate-list'>
			{renderCerts()}
		</div>
	)
}

export default CertificateList;
