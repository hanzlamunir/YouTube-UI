import Styles from "./CreateBtn.module.css";

function CreateBtn() {
  return (
    <div className={Styles.create}>
      <a className={`${Styles.createBtn} btnActive`}>
        <img
          src="/public/create-plus.png"
          alt="pluse"
          className={Styles.icon}
        />
        <h3 className={Styles.name}> Create</h3>
      </a>
    </div>
  );
}

export default CreateBtn;
