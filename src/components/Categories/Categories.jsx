import styles from './Categories.module.scss';



const Categories = (props) => {
  const { categories, activeIndex, setActiveIndex } = props;

  return (
    <ul className={styles.Parent}>
      {categories.map((category, index) => {

        return <li key={index} className={`${styles.Category} ${activeIndex === index ? styles.ActiveCategory : ''}`} onClick={() => setActiveIndex(index)}>{category}</li>

      })}
    </ul>
  )
}
export default Categories