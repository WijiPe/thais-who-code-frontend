import Image from 'next/image'
import Link from 'next/link'

export default function Programmer({pgrm}) {
    return (
        <div>
            <div>
                <Image src={pgrm.image ? pgrm.image : 'programmer Image'} 
                width = {280}
                height={300}/>
            </div>
            <h1>{pgrm.name}</h1>
            <p>{pgrm.location}</p>
            <h4>{pgrm.description}</h4>
            <Link href={`https://github.com/${pgrm.githubId}`}>
                    <a>Github</a>
            </Link>
            <Link href={`www.linkedin.com/in/${pgrm.linkedInId}`}>
                    <a>LinkedIn</a>
            </Link>
            

        </div>
    )
}