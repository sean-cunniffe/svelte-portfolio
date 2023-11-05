import type { PageServerLoad } from './$types';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, DataSnapshot } from "firebase/database";

  const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
  };

	async function getFirebaseData(): Promise<DataSnapshot>{
    const app = initializeApp(firebaseConfig);
  
    // Get a reference to the database service
    const database = getDatabase(app);
		const dbRef = ref(database);
		return await get(child(dbRef, `/public`))
	}


export const load = (async ({ params }) => {
    let data = (await getFirebaseData()).val()
    console.log("Printing data")
    console.log(data)
    return data

}) satisfies PageServerLoad;