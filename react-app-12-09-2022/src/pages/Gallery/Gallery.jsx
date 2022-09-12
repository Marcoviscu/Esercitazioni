import styles from './index.module.scss';

const Gallery = () => {
    
    return (
        <div className={styles.Gallery}>
           <img clasName={styles.img} src='https://picsum.photos/200/300?1' alt='image'></img>
           <img clasName={styles.img} src='https://picsum.photos/200/300?2' alt='image'></img>
           <img clasName={styles.img} src='https://picsum.photos/200/300?3' alt='image'></img>
           <img clasName={styles.img} src='https://picsum.photos/200/300?4' alt='image'></img>
           <img clasName={styles.img} src='https://picsum.photos/200/300?5' alt='image'></img>
           <img clasName={styles.img} src='https://picsum.photos/200/300?6' alt='image'></img>
           <img clasName={styles.img} src='https://picsum.photos/200/300?7' alt='image'></img>
           <img clasName={styles.img} src='https://picsum.photos/200/300?8' alt='image'></img>
        </div>
    )
}

export default Gallery;