import type { PageServerLoad } from './$types'
import { initializeApp, type FirebaseOptions } from 'firebase/app'
import { getDatabase, ref, child, get, DataSnapshot } from 'firebase/database'
export const prerender = true
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
}

const path = process.env.FIREBASE_DATA_PATH

async function getFirebaseData(): Promise<DataSnapshot> {
    if (path == undefined) {
        throw new Error('FIREBASE_DATA_PATH not defined')
    }
    console.log('using path ', path, ' to build')
    const app = initializeApp(firebaseConfig)
    const database = getDatabase(app)
    const dbRef = ref(database)
    return get(child(dbRef, path))
}

export const load = (async ({}) => {
    let data = (await getFirebaseData()).val()
    return data
}) satisfies PageServerLoad
