import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={`container ${styles.container}`}>
      {children}
      <style jsx>{`
        .container {
          background: yellow;
        }
      `}</style>
    </div>
  );
}
