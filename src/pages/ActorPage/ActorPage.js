import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Form, Col } from 'react-bootstrap';
import ActorCard from '../../components/ActorCard/ActorCard';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import ActorModel from '../../model/ActorModel';
import { getData } from '../../shared/ActorsData';
import './ActorPage.css';


function ActorPage() {
   const sortOptions = ["first name", "last name", "age"];

   const [actors, setActors] = useState();
   const [filterText, setFilterText] = useState();
   const [sortBy, setSortBy] = useState(sortOptions[0]);
   const [searchText, setSearchText] = useState("");
   const [results, setResults] = useState([]);

   function filterTextChange(data) {
      setFilterText(data);
   }
   function sortByChange(data) {
      setSortBy(data);
   }

   function handleSearchChange(newSearchText) {
      setSearchText(newSearchText);

      if (newSearchText) {
         // Here we should call TMDB

         const searchURL = "https://api.themoviedb.org/3/search/person?api_key=c87aac96194f8ffb8edc34a066fa92de&query=" + newSearchText;
         axios.get(searchURL).then(response => {
            setResults(response.data.results);
         });
      } else {
         setResults([]);
      }
   }

   function addActor(resultIndex) {
      //Get more info of actor
      const actorId = results[resultIndex].id;
      const getURL = "https://api.themoviedb.org/3/person/" + actorId + "?api_key=c87aac96194f8ffb8edc34a066fa92de&language=en-US";
      let actorToAdd;
      axios.get(getURL).then(response => {
         actorToAdd = response.data;
         // Adding the actor to the view
         const splitedName = actorToAdd.name.split(" ");
         setActors(actors.concat(new ActorModel(splitedName[0], splitedName[1], actorToAdd.birthday, actorToAdd.profile_path, "https://image.tmdb.org/t/p/w500" + actorToAdd.profile_path)));

         // Cleaning up the SearchBox
         setResults([]);
         setSearchText("");
      });
   }

   const pathPre = process.env.PUBLIC_URL;
   useEffect(() => {
      axios.get(pathPre.concat("/actors.json")).then(response => {
         setActors(response.data.map(plainActor => new ActorModel(plainActor)));
      }).catch(error => {
         console.error(error);
      });
   }, []);

   const actorsCards = actors !== undefined ? actors.map((actor) => <ActorCard actor={actor}></ActorCard>) : [];

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
      <div className="p-actors">
         <Container>
            <Header filterTextChange={filterTextChange} sortByChange={sortByChange} sortOptions={sortOptions}></Header>
            <SearchBox
               placeholder="Search actors..."
               searchText={searchText}
               onSearchChange={handleSearchChange}
               results={results.map(result => result.name)}
               onResultSelected={addActor} />
            <div id="main_cards">
               {sortCardBy(getCardsByFilter())}
            </div>
         </Container>
      </div>
   )
}

export default ActorPage;