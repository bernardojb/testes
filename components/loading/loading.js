import React, { useEffect, useState, useRef } from 'react';
import loadingStyles from './loading.module.scss';
import Image from 'next/image';

export default function loading({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading === false ? (
                <div className="site-content">
                {children}
                </div>) : (
                <div className={loadingStyles.isLoadingBg}>
                    <Image
                        src="/images/hkplogo.svg"
                        height={60}
                        width={144}
                        alt="hokup logo"
                    />
                </div>
            )}
        </>
    )
}
