import firebase from "firebase/app";
import "firebase/database";
import { Observable } from "rxjs";

class BlocksService {
  BASE_REF = "blocks";

  async fetchBlocks(uid) {
    return (
      (
        await firebase.database().ref(this.BASE_REF).child(uid).once("value")
      ).val() || {}
    );
  }

  listenBlocksAdded(uid) {
    return new Observable((subscriber) => {
      const ref = firebase
        .database()
        .ref(this.BASE_REF)
        .child(uid)
        .orderByChild("timeStamp")
        .startAt(Date.now());

      const callbackFn = ref.on(
        "child_added",
        (snapshot) => subscriber.next({ [snapshot.key]: snapshot.val() }),
        (error) => subscriber.error(error)
      );
      return () => ref.off("child_added", callbackFn);
    });
  }

  blockUser(uid, blockedUser) {
    return firebase
      .database()
      .ref(this.BASE_REF)
      .child(uid)
      .child(blockedUser)
      .set({
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
      });
  }

  unblockUser(uid, blockedUser) {
    return firebase
      .database()
      .ref(this.BASE_REF)
      .child(uid)
      .child(blockedUser)
      .remove();
  }
}

export default new BlocksService();
