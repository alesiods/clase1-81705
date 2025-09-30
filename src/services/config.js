
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-81705.firebaseapp.com",
  projectId: "final-81705",
  storageBucket: "final-81705.firebasestorage.app",
  messagingSenderId: "443653759708",
  appId: "1:443653759708:web:695387abc5661917358a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

//////////////////////////////////////

const misProductos = [
    {id: "1", nombre: "Yerba", precio: 500, img:"../public/img/yerba.jpg", idCat: "almacen", stock:10},
    {id: "2", nombre: "Fideos", precio: 200, img:"../public/img/fideos.jpg", idCat: "almacen", stock:20},
    {id: "3", nombre: "Arroz", precio: 300, img:"../public/img/arroz.jpg", idCat: "lacteos", stock:15},
    {id: "4", nombre: "Aceite", precio: 900, img:"../public/img/aceite.jpg", idCat: "lacteos", stock:12},
]



import { collection, doc, writeBatch } from "firebase/firestore"; 

const subirProductos = async () => {
  const batch = writeBatch(db); // Crear un batch
  const productosRef = collection(db, "productos"); // Referencia a la colección

  // Recorre el array de productos
  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef); // Crea un nuevo documento con un ID automático
    batch.set(nuevoDoc, producto); // Agrega la operación de escritura al batch
  });

  // Ejecuta el batch
  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
};

/* subirProductos() */