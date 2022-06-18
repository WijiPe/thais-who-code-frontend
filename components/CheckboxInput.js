import styles from '@/styles/Checkbox.module.css'
import {useAppContext} from '../context/ContextObject';

export default function CheckboxInput({name}) {
    const [t, setT] = useAppContext();

    const check =(e)=>{
        const  titlesArray = [...t]
        let {value} = e.target
        if(!titlesArray.includes(value)){
            console.log(value)
            titlesArray.push(value)
            console.log(titlesArray)
        }else{
            const i =  titlesArray.indexOf(value)
                titlesArray.splice(i,1)
                console.log(titlesArray)
            }
        // }
        setT(titlesArray)
    }

    return (
        <div className={styles.container}>
            <input type="checkbox" id={name}  onChange = {check} name={name} value={name}></input>
            <label for={name}>{name}</label><br></br><br></br>
        </div>
    )
}
