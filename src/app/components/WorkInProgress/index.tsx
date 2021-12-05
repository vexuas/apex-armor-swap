import styles from './WorkInProgress.module.scss';

export function WorkInProgress() {
  return (
    <div className={styles.Container}>
      <div>Nothing here yet :)</div>
      <div>Have a squirrel dancing while you wait</div>
      <div className={styles.Squirrel}>
        <img
          className={styles.Image}
          alt="Dancing Squirrel"
          src="https://cdn.discordapp.com/attachments/248430185463021569/917123652200321034/dancing_squirrel.gif"
        />
      </div>
    </div>
  );
}
