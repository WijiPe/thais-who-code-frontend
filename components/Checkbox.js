import styles from '@/styles/Checkbox.module.css'
import CheckboxInput from './CheckboxInput';

export default function Checkbox() {

    return (
        <div className={styles.container}>
            <CheckboxInput name={"AWS Solutions Architect"} />
            <CheckboxInput name={"Back-end Developer"} />
            <CheckboxInput name={"C# Developer"} />
            <CheckboxInput name={"Data Engineer"} />
            <CheckboxInput name={"Front-end Developer"} />
            <CheckboxInput name={"Full Stack Developer"} />
            <CheckboxInput name={"Java Developer"} />
            <CheckboxInput name={"JavaScript Developer"} />
            <CheckboxInput name={"Python Developer"} />
            <CheckboxInput name={"React Developer"} />
            <CheckboxInput name={"Web Developer"} />
        </div>
    )
}
