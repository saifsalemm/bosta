import CONTACT_US from "../../../assets/contact_us.svg";
import styles from "../DetailesSection.module.css";
import useAddressAndContactUs from "../hooks/useAddressAndContactUs";

const AddressAndContactUs = () => {
  const { destination, somethingWorng, reportProblem } =
    useAddressAndContactUs();

  return (
    <section className={styles.addressAndContactUs}>
      <p className={styles.detailTitle}>{destination}</p>
      <p className={styles.address}>
        امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٣٣ ، Cairo
      </p>
      <div className={styles.contactUs}>
        <img
          className={styles.contactUsIcon}
          src={CONTACT_US}
          alt="Contact Us"
        />
        <div className={styles.contactUsDetails}>
          <p className={styles.contactUsText}>{somethingWorng}</p>
          <button className={styles.contactUsButton}>{reportProblem}</button>
        </div>
      </div>
    </section>
  );
};

export default AddressAndContactUs;
