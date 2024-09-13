import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'


const DUMMY_PLACES=[
  {
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://thechatwalny.agencydominion.net/uploads/2024/06/Empire-State-Building.jpg',
    address:  '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484,
      lng: -73.9857
    },
    creator: 'u1'
  },
  {
    id:'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://thechatwalny.agencydominion.net/uploads/2024/06/Empire-State-Building.jpg',
    address:  '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484,
      lng: -73.9857
    },
    creator: 'u2'
  },
]

function UserPlaces(props) {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return (
    <>
    <PlaceList items={loadedPlaces} />
    </>
  )
}

export default UserPlaces