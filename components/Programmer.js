import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Programmer.module.css'

export default function Programmer({pgrm}) {
    return (
        <div>
            <Image src={pgrm.image ? pgrm.image : 'programmer Image'} width = {240} height={260}/>
                <h1>{pgrm.name}</h1>
                <p>{pgrm.location}</p>
                <h4>{pgrm.description}</h4>
                <h5>{pgrm.titles}</h5>
            <div className={styles.groupLink}>
                <Link href={`https://github.com/${pgrm.githubId}`}>
                    <Image src="/images/GitHub-Mark-32px.png" alt="Github" width = {20} height={20} />
                </Link>
                <Link href={`https://linkedin.com/in/${pgrm.linkedInId}`}>
                    <Image src="/images/linkeIn.png.png" alt="LinkedIn" width = {20} height={20} />
                </Link>
            </div>
        </div>
    )
}