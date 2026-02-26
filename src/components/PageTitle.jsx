import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
    '/': 'Broadhead Industrial | Mobile Welding & Heavy Equipment Repair | Fort McMurray',
    '/about': 'About Us | Broadhead Industrial | 100% Aboriginally Owned',
    '/services': 'Our Services | Rig Welding & Heavy Equipment Repair | Broadhead Industrial',
    '/projects': 'Projects | Field Execution & Repairs | Broadhead Industrial',
    '/careers': 'Careers | Join Our Crew | Broadhead Industrial',
    '/contact': 'Contact Us | Get a Quote | Broadhead Industrial',
};

export default function PageTitle() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = pageTitles[pathname] || 'Broadhead Industrial';
    }, [pathname]);

    return null;
}
