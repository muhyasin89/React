import { Store } from 'react-notifications-component';


const Notification = ({title, msg, type}) => {
  return(
    Store.addNotification({
      title: title,
      message: msg,
      type: type, //success - error
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    })
  );
}
export default Notification