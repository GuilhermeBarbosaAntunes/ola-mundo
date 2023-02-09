import styles from './SobreMim.module.css';
import PostModelo from "compomentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Antonio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antonio Evaldo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

            <p className={styles.paragrafo}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>

            <p className={styles.paragrafo}> but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <p className={styles.paragrafo}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>

        </PostModelo>
    )
}