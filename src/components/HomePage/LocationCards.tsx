import { useEffect, useState } from 'react';
import { useFirestore } from '../../useFirestore';
import { collection, getDocs } from "firebase/firestore";
import type { DocumentData } from 'firebase/firestore'
import { LocationCard } from './LocationCard';
import type { Location } from '../../types/sparkeats';

export function LocationCards() {
  const [locations, setLocations] = useState([] as DocumentData);
  const db = useFirestore();

  useEffect(() => {
    async function getLocations() {
      const snapshot = await getDocs(collection(db, 'locations'));
      const locations = snapshot.docs.map((doc) => doc.data());

      setLocations(locations);
    }

    getLocations();
  }, []);

  return (
    <section className="homepage__cards">
      <ul className="location-card__list">
        {locations.map((location: Location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </ul>
    </section>
  );
}
