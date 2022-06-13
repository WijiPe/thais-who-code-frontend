import Image from 'next/image'

export default function Programmer({pgrm}) {
    return (
        <div>
            <div>
                <Image src={pgrm.image ? pgrm.image : 'programmer Image'} 
                width = {170}
                height={100}/>
            </div>
            <h3>{pgrm.name}</h3>

        </div>
    )
}