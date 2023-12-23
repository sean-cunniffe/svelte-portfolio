import type { PageServerLoad } from './$types'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, child, get, DataSnapshot } from 'firebase/database'
export const prerender = true
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
}

async function getFirebaseData(): Promise<DataSnapshot> {
    const app = initializeApp(firebaseConfig)

    // Get a reference to the database service
    const database = getDatabase(app)
    const dbRef = ref(database)
    return await get(child(dbRef, `/public`))
}

export const load = (async ({ params }) => {
    let data = (await getFirebaseData()).val()
    return data
}) satisfies PageServerLoad
