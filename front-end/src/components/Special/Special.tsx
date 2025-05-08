import styles from "./special.module.scss";
const Special = () => {
  return (
    <>
      <main className={styles.catalogcenter}>
        <div className={styles.boxnavcatalog}>
          <nav className={styles.breadcrumbs}>
            <a className={styles.breadcrumbslink} href="/">
              Главная
            </a>
            <span className={styles.breadcrumbsspan}> / </span>
            <a className={styles.breadcrumbslink} href="/special">
              Специальные предложения
            </a>
          </nav>
        </div>
        <div className={styles.product_content}>
          <div className={styles.product}>
            <img
              src="lustravoda.jpg"
              alt="product"
              className={styles.productImg}
            />
            <a className={styles.productName}>Люстра VODA</a>
            <p className={styles.productText}>
              Основание из полированной нержавеющей стали, придает оригинальный
              парящий эффект.
            </p>
            <div className={styles.boxPrice}>
              <span className={styles.productPrice}> 120 000 руб.</span>
              <span className={styles.productPriceSale}>140 000 руб.</span>
            </div>
          </div>
          <div className={styles.product}>
            <img
              src="divanroland.jpg"
              alt="product"
              className={styles.productImg}
            />
            <a className={styles.productName}> Диван RONALD</a>
            <p className={styles.productText}>
              Модель отличается простотой линий и форм, отсутствием броского
              декора.
            </p>
            <div className={styles.boxPrice}>
              <span className={styles.productPrice}>156 000 руб.</span>
              <span className={styles.productPriceSale}>198 000 руб.</span>
            </div>
          </div>
          <div className={styles.product}>
            <img src="komod.jpg" alt="product" className={styles.productImg} />
            <a className={styles.productName}>Комод VENT</a>
            <p className={styles.productText}>
              Европейский дуб - отличается особой прочностью и стабильностью.
            </p>
            <div className={styles.boxPrice}>
              <span className={styles.productPrice}>34 000 руб.</span>
              <span className={styles.productPriceSale}>45 000 руб.</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Special;
