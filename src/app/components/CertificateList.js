import React, {useEffect, useState} from 'react';
import Certificate from "./Certificate";
import { getCertificateList } from "../api/requests";
import { useAuth } from "../context/AuthContext";
import get from '../utility/get';

const CertificateList = () => {
	const [auth] = useAuth();

	const [certificates, setCertificates] = useState([]);

	useEffect(() => {
        async function fetchCerts() {
            if (auth) {
                const response = await getCertificateList(auth.authInfo.id);

                const courses = get(response, 'courses', []);

                setCertificates(courses);
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
