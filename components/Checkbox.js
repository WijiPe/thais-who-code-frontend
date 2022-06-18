import styles from '@/styles/Checkbox.module.css'
import CheckboxInput from './CheckboxInput';

export default function Checkbox() {

    return (
        <div className={styles.container}>
            <CheckboxInput name={"React Developer"} />
            <CheckboxInput name={"Python Developer"} />
        </div>
    )
}
