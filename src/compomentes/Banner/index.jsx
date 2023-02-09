import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </p>
                <div className={styles.imagens}>
                    <img
                        className={styles.circuloColorido}
                        src={circuloColorido} alt=""
                        aria-hidden={true}
                    />
                    <img
                        className={minhaFoto}
                        src={minhaFoto} 
                        alt="Foto do Antonio"
                    />
                </div>

            </div>
        </div>
    )
}