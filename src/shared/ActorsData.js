import ActorModel from "../model/ActorModel"

debugger
const getData = () => actorData.map((actor) => new ActorModel(actor.firstName, actor.lastName, actor.birthday, actor.imdbLink, actor.img));
const actorData = [
    {
     firstName: "Gal",
     lastName: "Gadot",
     birthday: "1985-04-30",
     imdbLink: "https://www.imdb.com/name/nm2933757/?ref_=nv_sr_srsg_0",
     img: "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg"
    },
    {
     firstName: "Keanu",
     lastName: "Reeves",
     birthday: "1964-09-02",
     imdbLink: "https://www.imdb.com/name/nm0000206/?ref_=nv_sr_srsg_0",
     img: "https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg"
    },
    {
     firstName: "Julia",
     lastName: "Roberts",
     birthday: "1967-10-28",
     imdbLink: "https://www.imdb.com/name/nm0000210/?ref_=nv_sr_srsg_0",
     img: "https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg"
    },
    {
     firstName: "Nicole",
     lastName: "Kidman",
     birthday: "1967-06-20",
     imdbLink: "https://www.imdb.com/name/nm0000173/",
     img: "https://m.media-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@._V1_UY317_CR10,0,214,317_AL_.jpg"
    },
    {
     firstName: "Tom",
     lastName: "Hanks",
     birthday: " 1956-07-09",
     imdbLink: "https://www.imdb.com/name/nm0000158/?ref_=nv_sr_srsg_0",
     img: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg"
    },
    {
     firstName: "Mel",
     lastName: "Gibson",
     birthday: "1956-01-03",
     imdbLink: "https://www.imdb.com/name/nm0000154/",
     img: "https://m.media-amazon.com/images/M/MV5BNTUzOTMwNTM0OV5BMl5BanBnXkFtZTcwNDQwMTUxMw@@._V1_UY317_CR8,0,214,317_AL_.jpg"
    },
    {
     firstName: "Richard",
     lastName: "Gere",
     birthday: "1949-08-31",
     imdbLink: "https://www.imdb.com/name/nm0000152/?ref_=nv_sr_srsg_5",
     img: "https://m.media-amazon.com/images/M/MV5BMTI2NDQ2OTY4M15BMl5BanBnXkFtZTYwNTYyNjc4._V1_UY317_CR4,0,214,317_AL_.jpg"
    },
    {
     firstName: "Jennifer",
     lastName: "Aniston",
     birthday: " 1969-02-11",
     imdbLink: "https://www.imdb.com/name/nm0000098/?ref_=nv_sr_srsg_0",
     img: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg"
    },
    {
     firstName: "Jennifer",
     lastName: "Lopez",
     birthday: "1969-07-24",
     imdbLink: "https://www.imdb.com/name/nm0000182/",
     img: "https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_UY317_CR32,0,214,317_AL_.jpg"
    },
    {
     firstName: "Cameron",
     lastName: "Diaz",
     birthday: "1972-08-30",
     imdbLink: "https://www.imdb.com/name/nm0000139/",
     img: "https://m.media-amazon.com/images/M/MV5BMTkxNTI5NzM4MV5BMl5BanBnXkFtZTcwMTI3ODY3Mg@@._V1_UY317_CR0,0,214,317_AL_.jpg"
    },
    {
    firstName: "Mili",
    lastName: "Avital",
    birthday: "1972-03-30",
    imdbLink: "https://www.imdb.com/name/nm0000815/",
    img: "https://m.media-amazon.com/images/M/MV5BZTU1Mzc4MzEtNDgxYi00ZmM4LWFjNDMtZWQxNDc0Y2M1NmE3XkEyXkFqcGdeQXVyMjQ2ODE2Mg@@._V1_UY317_CR20,0,214,317_AL_.jpg"
    },
 ]
 console.log({getData});
 export {getData};