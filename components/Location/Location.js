import React from 'react'
import LocationCard from '../Card/LocationCard'
import classes from '../Card/LocationCard.module.css'
import LocationDesktop from '../Card/LocationDesktop'

const Location = () => {

  const images = [
    {
      // src: "/assets/locations/tablet/image-map-canada.png",
      // alt: "Canada map",
      center:[43.64398522377883, -79.39459304675783],
      country_Name: "Canada",
      office_name:"Designo Central Office",
      address: " 3886 Wellington Street",
      country:"Toronto, Ontario M9C 3J5",
      phone : "P : +1 253-863-8967",
      mail: "M : contact@designo.co"
    },
    {
      // src: "assets/locations/tablet/image-map-australia.png",
      // alt: "Australia map",
      center:[-30.324096059873686, 149.78556101071447],
      country_Name: "Australia",
      office_name:"Designo AU Office",
      address: "19 Balonne Street",
      country:" New South Wales 2443",
      phone:"P : (02) 6720 9092",
      mail:" M : contact@designo.au"
    },
    {
      // src: "/assets/locations/tablet/image-map-uk.png",
      // alt: "UK map",
      center:[53.710060490978506, -1.3420096944421636],
      country_Name: "United Kingdom",
      office_name:"Designo UK Office",
      address: "13 Colorado Way", 
      country:"Rhyd-y-fro SA8 9GA",
      phone:"P : 078 3115 1400",
      mail:"M : contact@designo.uk"
    }
  ]
  return (
    <div className={classes.location_wrapper}>
      <LocationCard data={images}/>
      <LocationDesktop/>
    </div>
  )
}

export default Location