import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Form, Col } from 'react-bootstrap';
import ActorCard from '../../components/ActorCard/ActorCard';
import Header from '../../components/Header/Header';
import ActorModel from '../../model/ActorModel';
import { getData } from '../../shared/ActorsData';
import './ActorPage.css';


function ActorPage() {
   const sortOptions = ["first name", "last name", "age"];

   const [actors, setActors] = useState();
   const [filterText, setFilterText] = useState();
   const [sortBy, setSortBy] = useState(sortOptions[0]);

   function filterTextChange(data) {
      setFilterText(data);
   }
   function sortByChange(data) {
      setSortBy(data);
   }

   const pathPre = process.env.PUBLIC_URL;
   useEffect(() => {
      axios.get(pathPre.concat("/actors.json")).then(response => {
         setActors(response.data.map(plainActor => new ActorModel(plainActor)));
      }).catch(error => {
         console.error(error);
      });
   }, []);

   const actorsCards =actors!==undefined ? actors.map((actor) => <ActorCard actor={actor}></ActorCard>) : [];

   function getCardsByFilter() {
      return filterText || filterText === "" ? actorsCards.filter((card) => card.props.actor.firstName.toLowerCase().includes(filterText.toLowerCase()) || card.props.actor.lastName.toLowerCase().includes(filterText.toLowerCase())) : actorsCards;
   }

   function sortToStr(filterArr, propName) {
      filterArr.sort(function (a, b) {
         var nameA = a.props.actor[propName].toUpperCase(); // ignore upper and lowercase
         var nameB = b.props.actor[propName].toUpperCase(); // ignore upper and lowercase
         if (nameA < nameB) {
            return -1;
         }
         if (nameA > nameB) {
            return 1;
         }

         // names must be equal
         return 0;
      });
   }

   function sortCardBy(filterArr) {
      switch (sortBy) {
         case sortOptions[0]:
            sortToStr(filterArr, "firstName");
            break;
         case sortOptions[1]:
            sortToStr(filterArr, "lastName");
            break;
         case sortOptions[2]:
            filterArr.sort(function (a, b) {
               return a.props.actor.age() - b.props.actor.age();
            });
            break;
      }
      return filterArr;
   }

   return (
      <div className="ActorPage">
         <Header filterTextChange={filterTextChange} sortByChange={sortByChange} sortOptions={sortOptions}></Header>
         <div id="main_cards">
            {sortCardBy(getCardsByFilter())}
         </div>
      </div>
   )
}

export default ActorPage;