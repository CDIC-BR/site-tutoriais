import React from 'react';
import Layout from '@theme/Layout';
import styles from './contato.module.css';

export default function Contato() {
  return (
    <Layout title="Contate-nos">
      <div className={styles.contatoContainer}>
        <h1>📩 Contate-nos</h1>
        <p>Preencha o formulário abaixo e entraremos em contato o mais rápido possível.</p>

        <form
          className={styles.form}
          action="https://formspree.io/f/xblknkgq"
          method="POST"
        >
          <label>
            Nome:
            <input type="text" name="nome" required />
          </label>

          <label>
            E-mail:
            <input type="email" name="email" required />
          </label>

          <label>
            Mensagem:
            <textarea name="mensagem" rows="5" required />
          </label>

          <button type="submit">Enviar</button>
        </form>

        <div className={styles.whatsapp}>
          <p>📞 Ou fale diretamente com nosso setor:</p>
          <a
            href="https://wa.me/556121933075"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: (61) 2193-3075
          </a>
        </div>
      </div>
    </Layout>
  );
}
