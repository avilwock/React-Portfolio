import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <>
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <div>
        <h2 className={styles.contactTitle}>Contact Me</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className={styles.myForm}
        >
          <input
            className={styles.name}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <input
            className={styles.email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <textarea
            className={styles.message}
            id="message"
            name="message"
            placeholder="Please type your message"
            required
          ></textarea>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}