import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function header() {
    return (
        <div className="header">
            <div className={styles.headerContainer} >
                <div className={styles.headerLogo}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/hkplogo.svg"
                                height={60}
                                width={144}
                                alt="hokup logo" />
                        </a>
                    </Link>
                </div>
                <ul>
                    <Link href="/"><a><li>home</li></a></Link>
                    <Link href="/cases"><a><li>cases</li></a></Link>
                    <Link href="/contato"><a><li>contato</li></a></Link>
                </ul>
            </div>
        </div>
    )
}
