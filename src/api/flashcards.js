import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import db from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';

const COLLECTION = 'flashcards';

export const getFlashcards = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, COLLECTION));
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            
        }));
        randomData(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const AddFlashcard = async ({ title, description }) => {
    try {
        const id = uuidv4();
        await setDoc(doc(db, COLLECTION, id) , {
            title: title,
            description: description,
        });
    } catch(error) {
        console.log(error);
    }
    
}

const randomData = (data) => {
    for (let i = 0; i < data.length; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const temp = data[i];
        data[i] = data[randomIndex];
        data[randomIndex] = temp;
      }
      console.log(data);
}